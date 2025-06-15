def filter_odds(numbers):
	odds = []
	for num in numbers:
		if num % 2 != 0:
			odds.append(num)
	return odds

print(filter_odds([1,2,3,4,5,6,7]))
