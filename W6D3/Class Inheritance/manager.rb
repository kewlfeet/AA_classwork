require_relative "employee"

class Manager < Employee
    attr_reader :employees
    def initialize(name, title, salary, boss, employees)
        super(name, title, salary, boss)
        @employees = employees
    end

    def bonus(multiplier)
        employee_salary_total = employees.inject { |acc, empl| acc + empl.salary}
        employee_salary_total * multiplier
    end
end


# employees assigned to manager - []
# sub salary method - calc all salaries
# recusive call

# ned = Manager.new("Ned", "Founder", 1000000, nil, [b, c, d])
# darren = Manager.new("Darren", "TA Manager", 78000, a, [c, d])
# shawna = Employee.new("Shawna", "TA", 12000, b)
# david = Employee.new("David", "TA", 10000, b)

# p ned.bonus(5) # => 500_000
# p darren.bonus(4) # => 88_000
# p david.bonus(3) # => 30_000