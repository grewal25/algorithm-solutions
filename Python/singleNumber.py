# Given a non-empty array of integers nums, every 
# element appears twice except for one. Find that single one.
#solution 1
class Solution:
    def singleNumber(nums):
            s = set(nums)
            p = list(s)
            for i in range(len(nums)):
                for j in range(len(p)):
                    if (nums.count(p[j]) == 1):
                        return p[j]

#solution 2
from collections import Counter
class Solution:
    def singleNumber(nums):
        z = Counter(nums)
        for i in z.items():
            if i[1]==1:
                return i[0]

#solution 3 : ( BITWISE XOR)
class Solution:
    def singleNumber(nums):
        res = 0
        for i in nums:
            res ^= i
            
        return res

#solution 4
class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        seen = {}
        
        for num in nums:
            if num not in seen:
                seen[num]=1
            else:
                seen[num]+=1
        
        key_list = seen.keys()
        
        for key in key_list:
            
            if seen[key]==1:
                return key