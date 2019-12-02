##Problem 1

class Array

    def merge_sort(array = self, &prc)
        return array if array.length < 2
        prc ||= Proc.new {|left,right| left <=> right}
        middle = self.length()/2
        left = self[0...middle]
        right = self[middle..-1]
        merged = []
        merged += merge( merge_sort(left, &prc) , merge_sort(right, &prc) , &prc )
    end

    def merge(left, right, &prc)
        merged = []
        cmd = prc.call(left[0], right[0])
        case cmd
        when -1

        when 0

        when 1

        end

        while left.length != 0 && right.length !=0
            if left.empty?
                merged << left.shift
            elsif right.empty?
                merged << right.shift
            elsif prc.call(left[0],right[0]) == -1
                merged << left.shift
            else
                merged << right.shift
            end
        end
        merged
    end

end

Monkey Patching Array (flatten)

class Array 
    unless level == nil
        next_level = level-1
    else
        next_level = nil
    end


    def my_flatten( level = nil)
        return self if self.all? {|elm| !elm.is_a? Array}
        return self if if level == 0
        to_flatten = self.dup
        flattened = []
        to_flatten.each do |elm|
            if elm.is_a? Array
                if level == nil
                    flattened += my_flatten()
                else
                    flattened += my_flatten(level -1)
            else
                flattened += elm
            end
        end
        flattened
    end

    [["a"]],"b",["c","d",["e"]]].my_flatten = ["a","b","c","d","e"]
    [["a"]],"b",["c","d",["e"]]].my_flatten(1)= ["a","b","c","d",["e"]]




end