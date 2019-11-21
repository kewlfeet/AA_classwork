require_relative "manager.rb"
require "byebug"
class Employee
    attr_reader :name, :title, :salary
    attr_accessor :boss
    def initialize(name, title, salary, boss = nil)
        @name = name
        @title = title
        @salary = salary
        @boss = boss

    end

    def bonus(multiplier)
        bonus = @salary * multiplier
    end

end

# class Manager < Employee
#     attr_reader :employees
#     def initialize(name, title, salary, boss, employees)
#         super(name, title, salary, boss)
#         @employees = employees
#     end

#     def bonus(multiplier)
#         total = employees.inject(0) { |acc, empl| acc + empl.salary}
#         total * multiplier
#     end
# end


# employee's name, title, salary, and boss
# add method bonus(multiplier) 

# Name	Salary	Title	Boss
# Ned	\$1,000,000	Founder	nil
# Darren	\$78,000	TA Manager	Ned
# Shawna	\$12,000	TA	Darren
# David	\$10,000	TA	Darren

# david = Employee.new("David", "TA", 10000, darren)
# shawna = Employee.new("Shawna", "TA", 12000, darren)
# darren = Manager.new("Darren", "TA Manager", 78000, ned, [shawna, david])
# ned = Manager.new("Ned", "Founder", 1000000, nil, [darren, shawna, david])

# p ned.bonus(5) # => 500_000
# p darren.bonus(4) # => 88_000
# p david.bonus(3) # => 30_000



# employees assigned to manager - []
# sub salary method - calc all salaries
# recusive call
