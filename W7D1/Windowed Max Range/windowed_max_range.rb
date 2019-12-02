
def naive_windowed_max_range(array, window_size)
    current_max_range = nil
    (0..array.length - window_size).each do |i|
        current_window = array[i..i + window_size]
        min, max = current_window.min, current_window.max
        current_max_range = (max - min) if current_max_range.nil? || (max - min) > current_max_range
    end
    current_max_range
end
#n * (n+n+n)
#n * 3n
#3n^2
#n^2

class MyQueue
    # attr_accessor :store

    def initialize
        @store = []
    end

    def peek
        @store.first
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def enqueue(ele)
        @store << ele
        ele
    end

    def dequeue
        @store.shift
    end
end

class MyStack
    # attr_accessor :store
    def initialize
        @store = []
    end

    def peek
        @store.last
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def pop
        @store.pop
    end

    def push(ele)
        @store.push(ele)
        ele        
    end
end

class StackQueue
    def initialize
        # @store = []
        @stack1 = MyStack.new
        @stack2 = MyStack.new
    end

    def size
        @stack1.length + @stack2.length
    end

    def empty?
        @stack1.empty? && @stack2.empty?
    end

    def enqueue(ele)
        @stack1.push(ele)
        ele
    end

    def dequeue
        if @stack2.empty?
            until @stack1.empty?
                @stack2.push(@stack1.pop)
            end
        end
        @stack2.pop
    end
end

class MinMaxStack
    def initialize
        @store = []
        @max = []
        @min = []
    end

    def peek
        @store.last
    end

    def size
        @store.length
    end

    def empty?
        @store.empty?
    end

    def pop
        removed = @store.pop
        @max.pop if @max.last == removed
        @min.pop if @min.last == removed
        removed
    end

    def push(ele)
        @store.push(ele)
        @max << ele if @max.empty?
        @min << ele if @min.empty?
        @max << ele if (ele > @max.last)
        @min << ele if (ele < @min.last)
        ele
    end

    def max
        @max.last
    end

    def min
        @min.last
    end
end

class MinMaxStackQueue
    def initialize
        # @store = []
        @stack1 = MinMaxStack.new #min and max
        @stack2 = MinMaxStack.new #min and max
    end

    def size
        @stack1.size + @stack2.size
    end

    def empty?
        @stack1.empty? && @stack2.empty?
    end

    def enqueue(ele)
        @stack1.push(ele)
        ele
    end

    def dequeue
        if @stack2.empty?
            until @stack1.empty?
                @stack2.push(@stack1.pop)
            end
        end
        @stack2.pop
    end

    def max
        maxes = []
        maxes << @stack1.max unless @stack1.empty?
        maxes << @stack2.max unless @stack2.empty?
        maxes.max
    end

    def min
        mins = []
        mins << @stack1.min unless @stack1.empty?
        mins << @stack2.min unless @stack2.empty?
        mins.min
    end
end

def windowed_max_range(array, window_size)
    s_queue = MinMaxStackQueue.new
    current_max_range = nil

    array.each do |e|
        s_queue.enqueue(e)
        s_queue.dequeue if s_queue.size > window_size

        if s_queue.size == window_size
            range = s_queue.max - s_queue.min
            current_max_range = range if current_max_range.nil? || range > current_max_range
        end
    end
    current_max_range
end