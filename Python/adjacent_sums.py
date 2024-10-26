def adjacent_sums(nums):
    res = []
    for i in range(len(nums) - 1):
        res.append(nums[i] + nums[i + 1])
    return res


print(adjacent_sums([3,8,7,1]))
