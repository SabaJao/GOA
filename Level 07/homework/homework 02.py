# int()
print(int('10'))  # Works
print(int('abc'))  # Error: ValueError: invalid literal for int() with base 10: 'abc'
# float()
print(float('10.5'))  # Works
print(float('abc'))  # Error: ValueError: could not convert string to float: 'abc'
# str()
print(str(10))   # Works
print(str(10.5))  # Works
print(str(True))  # Works

# bool()
print(bool(1))  # True
print(bool(0))  # False
