def popper(array, num):
    removed = array[-num]
    del array[-num]
    return removed

arr1 = [1,2,3,4,5]
print(popper(arr1, 2))
