def my_min(arr)
    arr.each do |e1|
        arr.each do |e2|
            e1 > e2 ? smallest = e2 : smallest = e1
        end
    end
    smallest
end

#O(n^2)

def my_min2(arr)
    smallest = arr[0]
    arr.each do |e|
        smallest = e if e < smallest
    end
    smallest
end

#O(n)

def largest_contiguous_subsum(arr)
    sub_arrs = []
    arr.each_index do | i1|
        arr.each_index do | i2|
            if i1 <= i2
                sub_arrs << arr[i1..i2]
            end
        end
    end
    max = sub_arrs.map {|arr| arr.sum}.max
    # max = sub_arrs.max {|a, b| a.sum <=> b.sum}.sum

end
#O(n^3)
#n^2 +n^3 +n^2 ==> n^3
def largest_contiguous_subsum2(arr)
    max = arr.first
    sum = arr.first
    return arr.max if arr.all?{|e| e < 0}
    arr.drop(1).each do |e|
        sum = 0 if sum < 0
        sum+= e

        max = sum if sum > max
        # p "Element = #{e}"
        # p "Current Sum = #{sum}"
        # p "Current Max = #{max}"
    end
    max
end

