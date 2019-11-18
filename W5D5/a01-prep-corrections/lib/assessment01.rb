require 'byebug'
class Array

  # Monkey patch the Array class and add a my_inject method. If my_inject receives
  # no argument, then use the first element of the array as the default accumulator.

  def my_inject(accumulator = nil, &prc)
    first_idx = 0
    if accumulator == nil
      first_idx = 1
      accumulator = self[0]
    end
    self[first_idx..-1].each do |elm|
      accumulator = prc.call(accumulator, elm)
    end
    accumulator
  end
end

# primes(num) returns an array of the first "num" primes.
# You may wish to use an is_prime? helper method.

def is_prime?(num)
  return true if num == 2
  (2...num).each do |n|
    return false if num% n == 0
  end
  true
end

def primes(num)
  i=2
  arr = []
  while arr.length != num
    arr << i if is_prime?(i)
    i+=1
  end
  arr
end


# Write a recursive method that returns the first "num" factorial numbers.
# Note that the 1st factorial number is 0!, which equals 1. The 2nd factorial
# is 1!, the 3rd factorial is 2!, etc.

def factorials_rec(num)
  return [1,1].take(num) if num < 3
  # new_arr = [num]
  # new_arr += new_arr.map {|elm| elm * factorials_rec(num-1)}
end

def arr_product(arr)
  product = 1
  arr.each {|elm| product *= elm}
  product
end



class Array

  # Write an Array#dups method that will return a hash containing the indices of all
  # duplicate elements. The keys are the duplicate elements; the values are
  # arrays of their indices in ascending order, e.g.
  # [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }

  def dups
    count = Hash.new(0)
    ret_hash = Hash.new() {|h, k| h[k] = []}
    self.each_with_index do |elm, idx| 
      count[elm] += 1
    end
    self.each_with_index do |elm, idx| 
      if count[elm] > 1
        ret_hash[elm] << idx
      end
    end
    ret_hash
  end
end

class String

  # Write a String#symmetric_substrings method that returns an array of substrings
  # that are palindromes, e.g. "cool".symmetric_substrings => ["oo"]
  # Only include substrings of length > 1.

  def symmetric_substrings
    symmetric = []
    subarrs = []
    p self
    self[0...-1].each_char.with_index do |ch1, idx1|
      self[idx1+1..-1].each_char.with_index do |ch2, idx2|
        current = self[idx1..idx2]
        subarrs << current
        #debugger
        #symmetric << current if (current == current.reverse) && current.length >2
      end
    end
    #symmetric
    subarrs
  end
end

class Array

  # Write an Array#merge_sort method; it should not modify the original array.

  def merge_sort(array = self, &prc)
    return [] if self.empty?
    return self if self.length == 1
    new_arr = self.map{|val|val}
    sorted = []
    middle = new_arr.length() /2
    left = new_arr[0...middle]
    right = new_arr[middle..0]
    #sorted += self.merge(merge_sort(left,&prc),merge_sort(right,&prc), &prc)
    sorted
  end

  private
  def self.merge(left, right, &prc)
    prc ||= Proc.new{|left, right| left <=> right}
    cmd = prc.call(left, right)
    merged = []
    case cmd
    when 1
      return merged << left << right
    when 0
      return merged << left << right
    when -1
      return merged << right << left
    end
  end
end
