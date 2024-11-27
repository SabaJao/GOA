#1
def number():
    user_num = int(input("enter number: "))
    return user_num + 5

print(number())

#2
def multiply():
    num = int(input("enter number: ")) 
    num2 = int(input("enter number: ")) 
    return num * num2

print(multiply())

#3
def string():
    string = str(input("enter world: "))
    counted = len(string)
    return counted

print(string())

#4
lst = ["saba","nika"]
lst_len = []
for i in lst:
    count = len(i)
    lst_len.append(count)
print(lst_len)

#5
str1 = str(input("enter a str: "))
str_check = str1[::-1]
if str1 == str_check:
    print("this str is Palindrome ")
else:
    print("False")

#6
def find_longest_string(strings):
    if not strings:
        return None  
    longest_string = max(strings, key=len)
    return longest_string

strings = ["apple", "banana", "watermelon", "kiwi"]
longest = find_longest_string(strings)
print(longest)  

#7
def factorial(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers.")
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result
print(factorial(5))  
print(factorial(0))  

#8
def sum_of_max(list1, list2):
    if not list1 or not list2:
        raise ValueError("Both lists must contain at least one element.")
    max1 = max(list1)
    max2 = max(list2)
    return max1 + max2

list1 = [1, 5, 3]
list2 = [4, 2, 8]
result = sum_of_max(list1, list2)
print(result)  

#9
def difference_of_min(list1, list2):
    if not list1 or not list2:
        raise ValueError("Both lists must contain at least one element.")
    min1 = min(list1)
    min2 = min(list2)
    return min1 - min2

list1 = [3, 5, 1]
list2 = [7, 2, 8]
result = difference_of_min(list1, list2)
print(result)  

#10
def max_min_difference(numbers):
    if not numbers:
        raise ValueError("The list must contain at least one element.")
    max_num = max(numbers)
    min_num = min(numbers)
    return max_num - min_num

numbers = [10, 3, 5, 7, 2]
result = max_min_difference(numbers)
print(result)  

