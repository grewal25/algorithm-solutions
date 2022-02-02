# Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
# Example 1:

# Input: nums = [1,2,3,1]
# Output: true
# Example 2:

# Input: nums = [1,2,3,4]
# Output: false
# Example 3:

# Input: nums = [1,1,1,3,3,4,3,2,4,2]
# Output: true

class Solution1:
    def containsDuplicate(nums):
        s = set()
        for x in nums:
            if x in s:
                print(x)
                return True
            s.add(x)
        return False

print(Solution1.containsDuplicate([1,2,3,5,5]))

