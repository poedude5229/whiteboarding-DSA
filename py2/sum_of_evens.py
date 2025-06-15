def sum_of_evens(numbers):
    sum = 0;
    for num in numbers:
        if num % 2 == 0:
            sum += num
    return sum


print(sum_of_evens([1,2,3,4,5,6]))
print(sum_of_evens([7,11,13]))
