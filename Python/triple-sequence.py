def triple_sequence(base,length):
    if length == 0:
        return []
    arr = [base]
    while len(arr) < length:
        last = arr[len(arr) - 1]
        next = last * 3
        arr.append(next)

    return arr

print(triple_sequence(2,4))
