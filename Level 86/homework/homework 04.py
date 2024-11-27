N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))
array = [int(input(f"შეიყვანეთ ელემენტი {i + 1}: ")) for i in range(N)]

print("შებრუნებული მასივი:", array[::-1])
