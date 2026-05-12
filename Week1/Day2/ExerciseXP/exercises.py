#daily exercises

#1
my_fav_numbers = {8, 27, 66, 69}
friend_fav_numbers = {0, 9, 13}
my_fav_numbers.add(88)
my_fav_numbers.add(120)
my_fav_numbers.remove(120)
our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
print(my_fav_numbers)
print(our_fav_numbers)

#2
my_tuple = (1, 2)
new_tuple = my_tuple + (3, 4)  # Creates new tuple (tuples are immutable)
print(new_tuple)

#3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]

basket.remove("Banana")
basket.remove("Blueberries")

basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket)
print(basket.count("Apples"))
basket.clear()
print(basket)

#4
numbers = []
for i in range(8):
    numbers.append(1.5 + i * 0.5)

print(numbers) 

#5
for n in range(1, 21):
    print(n)

for n in range(2, 21, 2):  # start=2, stop=21, step=2
    print(n)

#6
name = input("What's your name?\n")
while name.isdigit() or len(name) < 3:
    if name.isdigit():
        print("NAME IS NOT A NUMBER")
    elif len(name) < 3:
        print("TOO SHORT")
    name = input("What's your name?\n")
print("Thank you")

#7
fav_fruits = input("Tell me what are your favorite fruits (separated by spaces):\n").split()
users_fruit = input("Give me the name of any fruit\n")

if users_fruit in fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")
#8

all_the_toppings = []
price = 10

while True:
    topping = input("Enter a topping, or type 'quit': ")
    if topping == "quit":
        break
    print(f"Adding {topping} to your pizza.")
    all_the_toppings.append(topping)
    price += 2.5

print(f"Toppings: {', '.join(all_the_toppings)}")
print(f"Total price: ${price}")

#9

choice = input("1) Family tickets  2) Restricted movie (16-21): ")

if choice == "1":
    total_price = 0
    while True:
        age_input = input("Enter age (or 'quit'): ")
        if age_input == "quit":
            break
        age = int(age_input)
        if age < 3:
            print("Free for under 3")
        elif 3 <= age <= 12:
            total_price += 10
            print("$10 for child")
        else:
            total_price += 15
            print("$15 for adult")
    print(f"Total family cost: ${total_price}")
    
else:
    attendees = []
    while True:
        age_input = input("Enter age (or 'quit'): ")
        if age_input == "quit":
            break
        age = int(age_input)
        if 16 <= age <= 21:
            name = input("Enter name: ")
            attendees.append(name)
            print(f"{name} allowed!")
        else:
            print("Not allowed (16-21 only)")
    print(f"Final attendees: {', '.join(attendees) or 'None'}")
