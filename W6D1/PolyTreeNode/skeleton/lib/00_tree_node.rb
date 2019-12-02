class PolyTreeNode
  attr_accessor :parent, :children, :value
  def initialize(value)
    @parent = nil
    @children = []
    @value = value
  end

  def parent=(new_parent)
    @parent.children.delete(self) if @parent
    @parent = new_parent
    new_parent.children << self if new_parent
  end

  def add_child(child_node)
    child_node.parent = self #unless self.children.include?(child_node)
  end

  def remove_child(child_node)
    # self.children.delete(child_node)
    if @children.include?(child_node)
      child_node.parent = nil 
    else
      raise "node is not a child"
    end
  end

  def dfs(target)
    return self if self.value == target
    @children.each do |child|
      correct_node = child.dfs(target) 
      return correct_node unless correct_node.nil?
    end
    nil
  end

  def bfs(target)
    arr = []  #---> arr << node A << node A's children --- remove node A ---- << node B's children 
    arr.push(self)
    until arr.empty?
        if arr[0].value == target
            return arr[0]
        else 
            arr += arr[0].children
            arr.shift
        end
    end
    nil
  end



  #Node A (current/self)
  #Node C (child)
  #add Node C as a child of Node A
  #setting Node C's parent = Node A  --> child_node.parent = self

  #Node A (current/self)
  #Node C (child)
  #remove Node C as a child of Node A
  #setting Node C's parent to nil

  # self.children.delete(C)
end

#       A
#      / \
#     B   C
#    /\   /\
#    D E  F G

#     A
#    / \
#   B   C          nil
#  /\   /\          |
#  D E  F           G
#-------------------------Remove Child----------------------------------
# C.remove_child(G)
# if C.children.include?(G)
#     G.parent=(nil)
# end
#     #G.parent == C

#     G.parent.children.delete(G)  #---> C.children.delete(G)
#     G.parent = nil  #--> attr writer of parent

#     new_parent.children << self if new_parent

# # def parent=(new_parent)
#     @parent.children.delete(self) if @parent
#     @parent = new_parent
#     new_parent.children << self if new_parent
#   end
#--------------------------------------------------------------------------