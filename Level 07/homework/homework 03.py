num1 = int(input("enter the number : "))
operation = input("enter the operation (- , + , * , / , // , %): ")
num2 = int(input("enter the number : "))

if operation == "+":
    print("result :" , num1 + num2)
elif operation == "-":
    print("result :" , num1 - num2)
elif operation == "*":
    print("result :" , num1 * num2)
elif operation == "/":
    print("result :" , num1 / num2)
elif operation == "//":
    print("result :" , num1 // num2)    
elif operation == "%":
    print("result :" , num1 % num2)