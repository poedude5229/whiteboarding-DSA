def doublesequence(base, length):
    if length == 0:
        return []

    arr = [base]
    while len(arr) < length:
        last = arr[len(arr) - 1]
        next = last * 2
        arr.append(next)
    return arr

print(doublesequence(3,5))
