#W3school

# codewars



# 1. დაშლა სივრცის სიმბოლოთი
string1 = "გამარჯობა როგორ ხარ"
result1 = string1.split(" ")
print(result1)  # ['გამარჯობა', 'როგორ', 'ხარ']

# 2. დაშლა მძიმით
string2 = "ვაშლი,მსხალი,ატამი,ბალი"
result2 = string2.split(",")
print(result2)  # ['ვაშლი', 'მსხალი', 'ატამი', 'ბალი']

# 3. დაშლა წერტილით
string3 = "ეს არის. ტექსტი. რომელიც გახლეჩილია. წერტილით"
result3 = string3.split(".")
print(result3)  # ['ეს არის', ' ტექსტი', ' რომელიც გახლეჩილია', ' წერტილით']

# 4. დაშლა ხაზით (-)
string4 = "2024-11-27"
result4 = string4.split("-")
print(result4)  # ['2024', '11', '27']

# 5. დაშლა "@" სიმბოლოთი
string5 = "user@example.com"
result5 = string5.split("@")
print(result5)  # ['user', 'example.com']

# 6. დაშლა "|" სიმბოლოთი
string6 = "apple|orange|banana|grape"
result6 = string6.split("|")
print(result6)  # ['apple', 'orange', 'banana', 'grape']

# 7. დაშლა ":" სიმბოლოთი
string7 = "key1:value1:key2:value2"
result7 = string7.split(":")
print(result7)  # ['key1', 'value1', 'key2', 'value2']

# 8. დაშლა "/"
string8 = "path/to/file"
result8 = string8.split("/")
print(result8)  # ['path', 'to', 'file']

# 9. დაშლა "\n" სიმბოლოთი (ახალი ხაზის სიმბოლო)
string9 = "პირველი ხაზი\nმეორე ხაზი\nმესამე ხაზი"
result9 = string9.split("\n")
print(result9)  # ['პირველი ხაზი', 'მეორე ხაზი', 'მესამე ხაზი']

# 10. დაშლა კონკრეტული სიტყვით ("და")
string10 = "ვაშლი და მსხალი და ატამი და ბალი"
result10 = string10.split("და")
print(result10)  # ['ვაშლი ', ' მსხალი ', ' ატამი ', ' ბალი']
