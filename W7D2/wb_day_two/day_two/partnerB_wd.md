1. **What is an object?**


An object is data passed into methods in order to obtain a result from the method

*Answer*
An instance of a class. It's also the root class in ruby (Object). Classes themselves descend from the Object root class.


2. **Explain this ruby idiom: `a ||= b`**

Sets a equal to b if a is not passed in a value in a method
when a is falsey set a to b
a is not set to b when a is truthy

**Answer:**
If the `a` is false then `a = b`. If the `a` side is true then `a` isn't reassigned.

3. **What is unit testing? What is the primary technique when writing a test?**

Unit testing testing one spec at a time. TDD
**Answer:**

Unit testing, simply put, is testing methods -- the smallest unit in object-oriented programming. The primary way to achieve this is to assert that the **actual** result of the method matches an **expected** result.


tests a particular class, particular thing, in isolation


```rb
RSpec.describe Calculator do
  it "add method adds numbers" do
    calc = Calculator.new
    expect(calc.add(3, 4)).to eq(7)
  end
end
```

4. 
### OOP – Parking Lot

### Prompt

Design a parking lot using object-oriented principles.

(Don't spend too much time fleshing out actual methods. Aim to give a
holistic view of which methods exist on each of the classes.)

*many floors*
*motorcycle, cars, buses* different sizes
```ruby
class ParkingLot
    self.populate
        #ParkingSpot.new()
    end
    def initialize(num_floors, spaces_per_floor)
        @floors = Array.new(num_floors) {Array.new(spaces_per_floor)}
    end
    def parkVehicle(vehicle)
        @floors.each do |floor|
            floor.each do |spot|
                if spot.size && spot.parked == false
                    spot.parked= true
                end
            end
        end
    end
end
class ParkingSpots
    attr_reader: parked
    def initialize(size)
        @size = size
        @parked = false
    end
end
class Vehicle
    attr_reader :type
    def initialize(type)
        @type = type
    end
end




#ANSWER

class Vehicle
  attr_reader :spots_needed, :size

  def initialize(license_plate)
    @parking_spots = []
    @license_plate = license_plate
  end

  def park_in_spot(spot)
    # ...
  end

  def clear_spots
    # ...
  end

  def can_fit_in_spot(spot)
    # ...
  end
end

class Bus < Vehicle
  def initialize
    super
    @spots_needed = 5
    @size = :large
  end

  def can_fit_in_spot(spot)
    # Checks if spot is :large
  end
end

class Car < Vehicle
  def initialize
    super
    @spots_needed = 1
    @size = :compact
  end

  def can_fit_in_spot(spot)
    # Check if spot is :compact or :large
  end
end

class Motorcycle < Vehicle
  def initialize
    super
    @spots_needed = 1
    @size = :compact
  end
end

class ParkingLot
  def initialize
    @levels = # generate_levels
  end

  def park_vehicle(vehicle)
    # Park the vehicle in a spot or multiple spots. Return false if failed.
  end
end

class Level
  def initialize(floor, num_spots)
    @spots = # generate spots
    @available_spots = num_spots
    @floor = floor
  end

  def park_vehicle(vehicle)
    # Find a place to park vehicle or return false.
  end

  def park_starting_at(spot_num, vehicle)
    # Park a vehicle starting at spot number and continue until vehicle.spots_needed.
  end

  def find_available_spots(vehicle)
    # Find a spot to park the vehicle. Return index of spot or -1.
  end

  def spot_freed
    @available_spots += 1
  end
end

class ParkingSpot
  attr_reader :row, :spot_num

  def initialize(size, level, row, spot_num)
    @vehicle = nil
    @spot_size = size
    @level = level
    @row = row
    @spot_num = spot_num
  end

  def is_free?
    !@vehicle
  end

  def can_fit_vehicle?(vehicle)
    # Check it will fit.
  end

  def park(vehicle)
    # Park in spot
  end

  def unpark
    # Remove vehicle from spot and notify level that a new spot is available.
  end
end
```
5. 

## Implement DFS

For this problem assume there is a Node class. The node class will take in a value as part of its initialization. You will be monkeypatching the following method:

Write a method `dfs` that does a depth-first search starting at a root node. It takes in a target, and a proc as an argument.

Example usage:

```ruby
n1 = Node.new(1) #making a node with a value of 1

n1.dfs { |node| node.value == 1 } #=> n1 (found a node with value == 1)

def dfs(&prc)
    current_node = self
    stack = [current_node]
    until current_node.nil?
        stack << current_node.children.reverse
        current_node = stack.pop
        return current_node if prc.call(current_node)
    end
end

#ANSWER

class Node

  # -- Assume nodes have a value, and a attr_reader on value
  # -- Also, assume there are working parent/child-related methods for Node
  def dfs(, &prc)
    raise "Must give a proc or target" if prc.nil?

    return self if prc.call(self)

    self.children.each do |node|
      result = node.dfs(target, &prc)
      return result if result
    end

    nil
  end
end


                         1

                2               3 

        4        5           6     7 
```