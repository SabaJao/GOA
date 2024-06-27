num1 = int(input("enter number: "))
num2 = int(input("enter number: "))

if num1 > num2:
    min_num = num2
    max_num = num1
else:
    min_num = num1
    max_num = num2
    
for i in range(min_num, max_num + 1):
    print(i)