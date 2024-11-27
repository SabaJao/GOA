N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))
array = [int(input(f"შეიყვანეთ ელემენტი {i + 1}: ")) for i in range(N)]

array[0], array[-1] = array[-1], array[0]

print("შეცვლილი მასივი:", array)
