def common_factors(n1, n2):
    lst = []
    if n1 > n2:
        greater = n1
    else:
        greater = n2
    for i in range(1,greater):
        if n1 % i == 0 and n2 % i == 0:
            lst.append(i)
    return lst

print(common_factors(50,30))
print(common_factors(8,4))
print(common_factors(4,8))
