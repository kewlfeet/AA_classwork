1. **What is a class?**
a class is a set of data, that has specific attributes and possibly has methods     
that it can call on instances of itself.

**Answer:** A text-book answer: classes are a blue-print for constructing computer models for real or virtual objects.

In reality: classes hold data, have methods that interact with that data, and are used to instantiate objects.

2. **What does self mean?**

self is the object that the method is being called on in a class
self can also be referred to as an instance of a class
self can also be the class itself

**Answer:**
`self` always refers to the current object. But this question is more difficult than it seems because Classes are also objects in ruby.

```rb

class WhatIsSelf
  def test
    puts "At the instance level, self is #{self}"
  end

  def self.test
    puts "At the class level, self is #{self}"
  end
end

WhatIsSelf.test
 #=> At the class level, self is WhatIsSelf

WhatIsSelf.new.test
 #=> At the instance level, self is #<WhatIsSelf:0x28190>
```

3. **What is the use of `super`?**
When super is called in a child class that inherits from a parent, or exists, in a hierarchy. Super can call the same method with the same arguments if no arguments
are passed in. Or super can call with different arguments if specified

*Answer*
It calls a method on the parent class with the same name as the method that calls `super`.


4. ### OOP – Jukebox

### Prompt

Design a musical jukebox using object-oriented principles.



class Queue 
    attr_accessor :queue
    def initialize(song)

    @queue = []
    @song = nil
    end

    def enqueue(song)
    @queue << "song"
    end

    def dequeue
    @queue.shift
    end

end

class Jukebox < Queue
    attr_reader: style

    def initialize(style, volume)
    @style = style
    @volume = volume
    end


    def play 
    puts "Jukebox is now playing "{self.dequeue}"
    end
end

class Person 
    attr_reader  :name
    def initialize(name)
    @name = name
    end

    def play(song)
    person is playing "#{song}"
    end
end

class Playlist 
end

*Answer*
```ruby
class Jukebox
  attr_accessor :user
  attr_reader :current_track

  def initialize(player, user)
    @player = player
    @user = user
    @current_track = nil
  end
end

class Player
  attr_accessor :album, :playlist

  def initialize(album, playlist)
    @album = album
    @playlist = playlist
  end

  def play_track(track)
    return playlist.shift
  end
end

class Playlist
  def initialize
    @queue = []
  end

  def add_track(track)
    @queue.push(track
  end

  def shift
    @queue.shift
  end
end

class Album
  # Information about the album
end

class Track
  # Information about the track, including album
end
```
5. 
## Implement BFS

For this problem assume there is a Node class. The node class will take in a value as part of its initialization. 
You will be monkeypatching the following method:

Write a method `bfs` that does a breadth-first search starting at a root node. It takes in a target, OR a proc as an argument.

Example usage:

```ruby
n1 = Node.new(1) making a node with a value of 1

n1.bfs(1) #=> n1

# -- Assume nodes have a value, and a attr_reader on value
# -- Also, assume there are working parent/child-related methods for Node

# def bfs(target, &prc)

# end
class Array
    def bfs(target)
     
     return self if self.target == target
     array = []

     self.each do |children|
     

    end
end

*Answer*

class Node

  # -- Assume nodes have a value, and a attr_reader on value
  # -- Also, assume there are working parent/child-related methods for Node

  def bfs(&prc)
    raise "Must give a proc or target" if prc.nil?

    queue = [self]

    until queue.empty?
      visited = queue.shift
      return visited if prc.call(visited)
      queue += visited.children
    end

    nil
  end
end
                        1

                2               3 

        4       5            6       7 




