require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    unless @columns
      data = DBConnection.execute2(<<-SQL)
      SELECT
        *
      FROM
        #{self.table_name}
      SQL
      @columns = data[0].map(&:to_sym)
    end
  @columns

  end

  def self.finalize!
    self.columns.each do |col|
      define_method(col) do 
        self.attributes[col]
      end

      define_method("#{col}=") do |value|
        self.attributes[col] = value
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= "#{self}".tableize
  end

  def self.all
    data = DBConnection.execute(<<-SQL)
      SELECT 
        *
      FROM
        #{self.table_name}
    SQL
    self.parse_all(data)
  end

  def self.parse_all(results)
    results.map {|result|  self.new(result)}
  end

  def self.find(id)
    data = DBConnection.execute(<<-SQL, id)
      SELECT 
        *
      FROM
        #{self.table_name}
      WHERE
        id = ?
    SQL
    self.parse_all(data)[0]
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      attr_name = attr_name.to_sym
      raise "unknown attribute '#{attr_name}'" unless self.class.columns.include?(attr_name)
      self.send("#{attr_name}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    self.class.columns.map { |col| self.send(col) }
  end
  
  def insert
    cols = self.class.columns
    col_names = cols.join(", ")
    question_marks = (["?"] * cols.length).join(", ")
    values = self.attribute_values
    DBConnection.execute(<<-SQL, values)
      INSERT INTO
        #{self.class.table_name} (#{col_names})
      VALUES
        (#{question_marks})
    SQL
    self.send("id=", DBConnection.last_insert_row_id)
  end

  def update
    cols = self.class.columns
    values = self.attribute_values
    col_names = cols.map { |col| "#{col} = ?" }.join(", ")
    DBConnection.execute(<<-SQL, values, self.id)
      UPDATE
        #{self.class.table_name}
      SET
        #{col_names}
      WHERE
        id = ?
    SQL
  end

  def save
    self.id ? self.update : self.insert
  end

  # self.finalize!
end
require 'byebug'