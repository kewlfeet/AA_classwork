def bad_two_sum?(arr, target)
    arr.permutation(2).to_a.any? { |e| e.sum == target }
end
#n!+  n!*n*1
#bigO(n*n!)

def okay_two_sum?(arr, target)
    sorted = arr.sort #nlogn
    i1, i2 = 0, arr.length - 1

    while i1 < i2
        case (sorted[i1] + sorted[i2]) <=> target
        when -1
            i1 += 1
        when 0
            return true
        when 1
            i2 -= 1
        end
    end
    false
end
#nlogn + (n-1)
#bigO (nlogn)

def two_sum?(arr, target)
    hash = {}
    
    arr.each do |e|
        # target - e = something
        # we want target - e = truthy set from another e
        hash[e] = 0
        
        return true if hash[target-e] == 0
    end
    false
end

# O(n)
