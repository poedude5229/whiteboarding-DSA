def yeller(lst):
    arr = []
    for i in range(len(lst)):
        arr.append(f"{lst[i].upper()}!")
    return arr

print(yeller(["hello","world"]))
