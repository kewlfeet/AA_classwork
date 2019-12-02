def first_anagram?(string1, string2)
    string1.split("").permutation.to_a.map { |e| e.join("") }.include?(string2)
end
#O(n * n!)
# permutation = O(n!)
# n+ -- split
# n!+n!*n+
#n! -- include?
def second_anagram?(string1, string2)
    array1, array2 = string1.split(""), string2.split("")
    array1.each do |e|
        unless array2.index(e).nil?
            array2.delete_at(array2.index(e))
        end
    end
    array2.empty?
end

#O(2n)
# n+n+(n*(n+n))+1 ==> n^2

def third_anagram?(string1, string2)
    string1.split("").sort == string2.split("").sort
end
#n+nlogn+n+nlogn
#O(nlogn)

def fourth_anagram?(string1,string2)
    hash1 = Hash.new(0)
    hash2 = Hash.new(0)
    string1.each_char {|ch| hash1[ch] += 1}
    string2.each_char {|ch| hash2[ch] += 1}
    hash1 == hash2 
end
#O(n)
#(n*1)+(n*1) --> 2n
#
def bonus_anagram?(string1,string2)
    hash1 = Hash.new(0)
    string1.each_char {|ch| hash1[ch] += 1}
    string2.each_char {|ch| hash1[ch] -= 1}
    hash1.values.all? {|val| val == 0}
end

# O(n)
# #
