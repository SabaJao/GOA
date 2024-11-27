import math

def count_area(*args):
    if len(args) == 2:
        width, height = args
        return width * height
    elif len(args) == 1:
        radius = args[0]
        return math.pi * radius ** 2
    elif len(args) == 3:
        a, b, c = args
        s = (a + b + c) / 2
        return math.sqrt(s * (s - a) * (s - b) * (s - c))
    else:
        raise ValueError("Invalid number of arguments. Provide 1 for circle, 2 for rectangle, or 3 for triangle.")

print(count_area(5, 10))
print(count_area(7))
print(count_area(3, 4, 5))
