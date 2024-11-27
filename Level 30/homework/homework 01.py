def odd_index_sum(numbers):
    total = 0
    for index in range(1, len(numbers), 2): 
        total += numbers[index]
    return total

numbers = [10, 20, 30, 40, 50]
result = odd_index_sum(numbers)
print(result)