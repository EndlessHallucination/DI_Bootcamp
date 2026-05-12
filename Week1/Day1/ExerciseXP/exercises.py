# day 1 exercises

#1
print("Hello world\n"* 4)

#2
print((99**3)*8)

#3
#False
#True
#False
#Error
#False

#4
computer_brand = "Apple"
print(f"I have a {computer_brand} computer.")

#5
name = "Vasiliy"
age = 23
shoe_size = 44
info = f"My name is {name}, Im {age} years old, My shoe size is {shoe_size}"
print(info)

#6 
a = 5
b = 9
if a > b:
    print("Hello world")
else:
     print("Bye World")   

#7
number = int(input("Give me a number: "))
if number % 2 == 0:
     print(f"{number} is even")
else:
    print(f"{number} is odd")

#8
myName = "Vasiliy"
name = input("Whats your name?\n").capitalize()
if name == myName:
    print("Wow, we have the same name! We could be twins! 🤣")
else:
    print(f"Nice to meet you, {name}! I'm Vasiliy.")

#9
height = int(input("Whats your height in cm\n"))
if height >=145:
    print("Youre good to go")
else: 
    print("You need to grow some more to ride")
