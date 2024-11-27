#11
def sum_of_even_indices(numbers):
    total = 0  
    for i in range(0, len(numbers), 2): 
        total += numbers[i]  
    return total

numbers_list = [10, 20, 30, 40, 50, 60]
result = sum_of_even_indices(numbers_list)
print(f"The sum of the numbers at even indices is: {result}")

#12
def check_even_or_odd(number):
    if number % 2 == 0:
        return "Even"  
    else:
        return "Odd"  

num = 8
result = check_even_or_odd(num)
print(f"The number {num} is {result}.")

num = 15
result = check_even_or_odd(num)
print(f"The number {num} is {result}.")

#13
def is_prime(number):
    if number <= 1:  
        return False
    
    for i in range(2, int(number ** 0.5) + 1):  
        if number % i == 0:  
            return False
    
    return True  

num = 29
result = is_prime(num)
print(f"The number {num} is prime: {result}")

num = 15
result = is_prime(num)
print(f"The number {num} is prime: {result}")

#14
def capitalize_names(names):
    return [name.capitalize() for name in names]  

names_list = ["john", "alice", "bob", "mary"]
updated_names = capitalize_names(names_list)
print(f"Updated names: {updated_names}")

#15
def process_numbers(numbers):
    result = []  
    for number in numbers:
        if number % 2 == 0:  
            result.append(number // 2)  
        else: 
            result.append(number * 2)  
    return result

numbers_list = [10, 15, 20, 25, 30]
updated_numbers = process_numbers(numbers_list)
print(f"Updated numbers: {updated_numbers}")

#16
def reversed_upper_string(input_string):
    return input_string[::-1].upper()  

input_str = "hello world"
result = reversed_upper_string(input_str)
print(f"Reversed and uppercased string: {result}")

#17
def separate_strings_by_length(strings):
    odd = []   
    even = []  

    for string in strings:
        if len(string) % 2 == 0:  
            even.append(string.upper())  
        else:  
            odd.append(string.upper())  

    print("Even length strings:", even)
    print("Odd length strings:", odd)

strings_list = ["dato", "nika", "polieqtori", "zaza", "python", "chatgpt"]
separate_strings_by_length(strings_list)

#18
def process_strings(strings):
    even_strings = []  
    odd_strings = []   

    for string in strings:
        if len(string) % 2 == 0:  
            even_strings.append(string.upper())  
        else: 
            odd_strings.append(string.capitalize())  

    result = even_strings + odd_strings
    print("Processed strings:", result)
    return result

strings_list = ["dato", "nika", "polieqtori", "zaza", "python", "chatgpt"]
processed_strings = process_strings(strings_list)

#19
def process_string_case(strings):
    result = []  
    
    for string in strings:
        if string.isupper():  
            result.append(string.lower())  
        elif string.islower():
            result.append(string.upper())  
        else:
            result.append(string)  

    print("Processed strings:", result)
    return result

strings_list = ["dato", "LUKA", "Python", "hello", "WORLD"]
processed_strings = process_string_case(strings_list)

#20
def process_string_based_on_find(input_string, character):
    index = input_string.find(character) 
    
    if index == -1:  
        return input_string
    
    if index % 2 == 0: 
        return input_string.upper()
    else:
        return input_string.capitalize()

input_str = "hello world"
character = "o"
processed_str = process_string_based_on_find(input_str, character)
print(processed_str)
