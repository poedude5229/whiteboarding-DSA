def unique(lst):
    arr = []
    for i in range(len(lst)):
        if not arr.__contains__(lst[i]):
            arr.append(lst[i])
    return arr

print(unique([1,1,2,3,3]))
print(unique(["a","b","b","c","b","d","c","c"]))
