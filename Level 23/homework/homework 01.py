# 1
def arithmetic_operations(a, b):
    try:
        addition = a + b
        subtraction = a - b
        multiplication = a * b
        division = a / b if b != 0 else "Division by zero is undefined"
        
        results = {
            "Addition": addition,
            "Subtraction": subtraction,
            "Multiplication": multiplication,
            "Division": division
        }
        
        return results
    except Exception as e:
        return f"An error occurred: {e}"

a = 10
b = 5
results = arithmetic_operations(a, b)
for operation, result in results.items():
    print(f"{operation}: {result}")

#2
def increment_until_hundred(start, increment):
    steps = 0  
    while start < 100:
        start += increment
        steps += 1
    return {
        "Final Value": start,
        "Steps Taken": steps
    }

start = 50
increment = 10
result = increment_until_hundred(start, increment)
print(f"Final Value: {result['Final Value']}")
print(f"Steps Taken: {result['Steps Taken']}")

#3
def check_odd_or_even(number):
    if number % 2 == 0:
        return "Even"  
    else:
        return "Odd"  

num = 7
result = check_odd_or_even(num)
print(f"The number {num} is {result}.")

#4
def find_largest_number(numbers):
    if not numbers:  
        return "The list is empty."
    
    largest = numbers[0]  
    for number in numbers:
        if number > largest:
            largest = number  
    return largest

numbers_list = [3, 7, 2, 15, 10]
largest = find_largest_number(numbers_list)
print(f"The largest number in the list is: {largest}")

#5
def calculate_sum(numbers):
    total = 0  
    for number in numbers:
        total += number  
    return total

numbers_list = [3, 7, 2, 15, 10]
sum_of_numbers = calculate_sum(numbers_list)
print(f"The sum of the numbers in the list is: {sum_of_numbers}")

#6
def reverse_sequence(sequence):
    return sequence[::-1]  

mixed_list = ["apple", 42, "banana", 13, "cherry", 7]
reversed_list = reverse_sequence(mixed_list)
print(f"Original list: {mixed_list}")
print(f"Reversed list: {reversed_list}")

#7
def find_longest_and_shortest(strings):
    if not strings:  
        return "The list is empty."
    
    longest = max(strings, key=len)  
    shortest = min(strings, key=len) 
    
    return {
        "Longest": longest,
        "Shortest": shortest
    }

string_list = ["apple", "banana", "kiwi", "cherry", "blueberry"]
result = find_longest_and_shortest(string_list)
print(f"The longest string is: {result['Longest']}")
print(f"The shortest string is: {result['Shortest']}")

#8
def swap_case(input_string):
    swapped = ""  
    for char in input_string:
        if char.islower():  
            swapped += char.upper()
        elif char.isupper():  
            swapped += char.lower()
        else:
            swapped += char  
    return swapped

example_string = "Hello World! Python3"
result = swap_case(example_string)
print(f"Original string: {example_string}")
print(f"Swapped case string: {result}")

#9
def count_consonants(input_string):
    consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ" 
    count = 0  
    for char in input_string:
        if char in consonants: 
            count += 1
    return count

example_string = "Hello World!"
consonant_count = count_consonants(example_string)
print(f"The number of consonants in the string is: {consonant_count}")

#10
def is_even(number):
    return number % 2 == 0  

num = 42
print(is_even(num)) 

num = 15
print(is_even(num))
