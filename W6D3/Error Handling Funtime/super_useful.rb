# PHASE 2
def convert_to_int(str)
  unless str.match?(/[0-9]/)
    raise ArgumentError.new "Invalid String"
  end
  Integer(str)
  rescue ArgumentError => e
    nil
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise ArgumentError.new "Invalid fruit"
  end
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit)
  rescue ArgumentError => e
    maybe_fruit == "coffee" ? (puts "try again"; retry) : (raise e)
end  

# friend - bests < 1yr
# you - bests >= 5 yr
# raise descriptive error - yrs_known < 5
# bf_new - update to create a "real friendship"
# name + fav_pastime empty when creating bestfriend <-- raise error cant be empty
  # given strings.length <= 0


# PHASE 4
class BestFriend
  attr_reader :name, :yrs_known, :fav_pastime
  def initialize(name, yrs_known, fav_pastime)
    begin
      raise "Years known is less than 5" unless yrs_known >= 5
      raise "Invalid name or pastime" if name.length <= 0 || fav_pastime.length <= 0
      @name = name
      @yrs_known = yrs_known
      @fav_pastime = fav_pastime
    rescue
      puts "We are not best friends"
      if yrs_known < 5
        puts "Enter valid years known"
        yrs_known = gets.chomp.to_i
      elsif name.length <= 0
        puts "Entre valid name"
        name = gets.chomp
      else
        puts "Entre valid pastime"
        fav_pastime = gets.chomp
      end
      retry
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


# begin
#   # amy = BestFriend.new("Amy", 6, "Pastime")
#   gets.chomp
# rescue
#   retry
# end
