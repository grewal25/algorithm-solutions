# Given an array nums of n integers where nums[i] 
# is in the range [1, n], return an array of all the integers in 
# the range [1, n] that do not appear in nums.

#solution 1
def findDisappearedNumbers(nums):
        k = max(nums)
        b=[]
        
        for i in range(1,(len(nums)+1)):
            b.append(i)
        d =(set(b) - set(nums))

        return d
 #solution 2
#  def findDisappearedNumbers(nums):
#     arr = []
        
#         for i in range(0,len(nums)):
#             index = abs(nums[i]) - 1
#             nums[index] = - abs(nums[index])
            
#         for j in range(0,len(nums)):
#             if nums[j] > 0:
#                 arr.append(j+1)
                
#         return arr

#solution 3
# def findDisappearedNumbers(nums):
#     arr = []
#         hashtable = {}
#         for i in nums:
#             hashtable[i] = -1
            
#         for j in range(1,len(nums)+1):
#             if hashtable.get(j) == None:
#                 arr.append(j)
				
#         return arr

# def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
# 		# list of all possible numbers
#         all_nums = [x for x in range(1,len(nums)+1)]
# 		# convert to set to eliminate duplicates from nums and use set's difference operation
#         return set(all_nums)-set(nums)