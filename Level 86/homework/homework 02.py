N = int(input("შეიყვანეთ რიცხვების რაოდენობა: "))
array = [int(input(f"შეიყვანეთ ელემენტი {i + 1}: ")) for i in range(N)]

print("კენტ ინდექსზე მყოფი ელემენტები:")
for i in range(1, len(array), 2):
    print(array[i])
