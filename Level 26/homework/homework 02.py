#26
my_list = ["apple", "banana", "cherry"]
i = 0
while i < len(my_list):
    print(my_list[i])
    i += 1

#27
for i in range(3):
    print(i)

#28
count = 0
while count < 3:
    print(count)
    count += 1

#29
numbers = [1, 2, 3, 4]
for number in numbers:
    print("loop")

#30
numbers = [1, 2, 3, 4]
index = 0
while index < len(numbers):
    print("loop")
    index += 1

#31
string = "abc"
for char in string:
    print(char)

#32
string = "abc"
index = 0
while index < len(string):
    print(string[index])
    index += 1

#33
my_list = ["x", "y", "z"]
for i in range(2):  
    print(my_list[i])

#34
my_list = ["x", "y", "z"]
index = 0
while index < 2:  
    print(my_list[index])
    index += 1

#35
for _ in range(2):
    print("Hello World")

#36
count = 0
while count < 2:
    print("Hello World")
    count += 1

#37
my_set = {1, 2, 3}
for element in my_set:
    print(element)

#38
my_set = {1, 2, 3}
my_list = list(my_set)  
index = 0

while index < len(my_list):
    print(my_list[index])
    index += 1

#39
my_dict = {"a": 1, "b": 2}
for key in my_dict:
    print(key)

my_dict = {"a": 1, "b": 2}
for value in my_dict.values():
    print(value)

my_dict = {"a": 1, "b": 2}
for key, value in my_dict.items():
    print(key, value)


#40
my_dict = {"a": 1, "b": 2}
keys = list(my_dict.keys())  
index = 0

while index < len(keys):
    print(keys[index])
    index += 1

my_dict = {"a": 1, "b": 2}
values = list(my_dict.values())  
index = 0

while index < len(values):
    print(values[index])
    index += 1

my_dict = {"a": 1, "b": 2}
items = list(my_dict.items())  
index = 0

while index < len(items):
    print(items[index])  
    index += 1

#41
for num in [10, 20, 30]:
    print(num)

#42
numbers = [10, 20, 30]
index = 0

while index < len(numbers):
    print(numbers[index])
    index += 1

#43
for num in [10, 20, 30]:
    print(num)
    
print("Done")

#44
numbers = [10, 20, 30]
index = 0

while index < len(numbers):
    print(numbers[index])
    index += 1

print("Done")

#45
nested_list = [[1, 2], [3, 4]]

for inner_list in nested_list:
    for element in inner_list:
        print(element)

nested_list = [[1, 2], [3, 4]]
for sublist in nested_list:
    for element in sublist:
        print(element)

#46
nested_list = [[1, 2], [3, 4]]
outer_index = 0

while outer_index < len(nested_list):
    inner_list = nested_list[outer_index]
    inner_index = 0
    
    while inner_index < len(inner_list):
        print(inner_list[inner_index])
        inner_index += 1
    
    outer_index += 1

#47
for num in range(1, 6):
    print(num)

#48
num = 1
while num <= 5:
    print(num)
    num += 1

#49
string = "loop"
for char in string:
    print(char)

#50
string = "loop"
index = 0

while index < len(string):
    print(string[index])
    index += 1
