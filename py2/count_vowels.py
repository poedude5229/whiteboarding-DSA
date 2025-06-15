def count_vowels(s):
    count = 0
    vowels = "AEIOU"
    for char in s:
        if char.upper() in vowels:
            count += 1
    return count

print(count_vowels("AAbbabbttt"))
