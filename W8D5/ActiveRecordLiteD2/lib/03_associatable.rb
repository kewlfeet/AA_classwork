require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    self.class_name.constantize
  end

  def table_name
    self.model_class.table_name
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    @class_name = options[:class_name] || name.to_s.camelcase
    @primary_key = options[:primary_key] || :id
    @foreign_key = options[:foreign_key] || (name.to_s + '_id').to_sym
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    @class_name = options[:class_name] || name.to_s.singularize.camelcase
    @primary_key = options[:primary_key] || :id
    @foreign_key = options[:foreign_key] || (self_class_name.to_s.underscore + '_id').to_sym
  end
end

module Associatable
  # this is a class method in SQLObject
  def belongs_to(name, options = {})
    
    # gives us access to correct default column names
    options = BelongsToOptions.new(name, options)
    
    # stores the information about this association on the class instance variable
    # @assoc_options so we can use it to make has_one_through associations later
    self.assoc_options[name] = options
    
    # this is an instance method for a particular class inheriting from SQLObject
    define_method(name) do 

      # get foreign key value for this instance of the class (row in the table)
      foreign_key = self.send(options.foreign_key)

      # find an instance of the associated class where the id 
      # is the same as the foreign key value above
      options.model_class.where({options.primary_key => foreign_key}).first
    end
  end

  # this is a class method
  def has_many(name, options = {})

    # gives us access to correct default column names
    options = HasManyOptions.new(name, self, options)

    # this is an instance method for a particular class inheriting from SQLObject
    define_method(name) do 

      # get primary key (id) value from this instance of this model
      primary_key = self.send(options.primary_key)

      # find all the instances (rows) from associated class where the
      # foreign key is the same as the primary key from this instance
      options.model_class.where({options.foreign_key => primary_key})
    end
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
    @assoc_options ||= {}
  end
end

class SQLObject
  # Mixin Associatable here...
  extend Associatable
end
