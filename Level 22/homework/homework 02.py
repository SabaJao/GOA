#11
def sum_of_elements(numbers):
    return sum(numbers)

numbers = [10, 3, 5, 7, 2]
result = sum_of_elements(numbers)
print(result)  

#12
def count_vowels(s):
    vowels = "aeiouAEIOU"  
    count = 0
    for char in s:
        if char in vowels:
            count += 1
    return count

text = "Hello World"
result = count_vowels(text)
print(result)  

#13
def square_elements(numbers):
    return [x ** 2 for x in numbers]

numbers = [1, 2, 3, 4, 5]
result = square_elements(numbers)
print(result)  

#14
def reverse_string(s):
    return s[::-1]

text = "Hello"
result = reverse_string(text)
print(result)  

#15
def is_even(n):
    return n % 2 == 0

print(is_even(4))   
print(is_even(7))   

#16
def find_longest_string(strings):
    if not strings:
        return None  
    return max(strings, key=len)

strings = ["apple", "banana", "watermelon", "kiwi"]
longest = find_longest_string(strings)
print(longest)  

#17
def find_minimum(numbers):
    if not numbers:
        return None  
    return min(numbers)

numbers = [10, 3, 5, 7, 2]
minimum = find_minimum(numbers)
print(minimum)  

#18
import math

def gcd(a, b):
    return math.gcd(a, b)

a = 56
b = 98
result = gcd(a, b)
print(result)  

#19
def to_uppercase(s):
    return s.upper()

text = "hello world"
result = to_uppercase(text)
print(result)  

#20
def average(numbers):
    if not numbers:
        return None  
    return sum(numbers) / len(numbers)

numbers = [1, 5, 12]
result = average(numbers)
print(result)  