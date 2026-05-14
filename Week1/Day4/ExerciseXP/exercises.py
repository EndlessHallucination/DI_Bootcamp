#daily exercises

import random

#1
def display_message():
    print("I am learning about functions in Python.")

display_message()

#2
def favorite_book(title):
    print(f"One of my favorite books is {title}")

favorite_book("Catch 22")

#3
def describe_city(city, country = "Unknown"):
    print(f"{city} is in {country}")

describe_city("Tokyo", "Japan")
describe_city("Osaka")

#4
def compare_random(num):
    if num > 100 or num < 1:
        return print(f"The number {num} is out of range.")
     
    rand = random.randint(1, 100)
    if num == rand:
        print("Success!")
    else:
        print(f"Fail! Your number: {num}, Random number: {rand}")

compare_random(101)

#5
def make_shirt(size = "large", text= "I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")

make_shirt()
make_shirt("medim")
make_shirt("small", "I love books")
make_shirt(size="small", text="Hello!")

#6 
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(names):
    for n in names:
        print(n)

def make_great(names):
    for i in range(len(names)):
       names[i] = names[i] + " is Great"

make_great(magician_names)
show_magicians(magician_names)

#7
def get_random_temp(season):

    if season == "winter":
        return random.uniform(-10, 16)

    elif season == "spring":
        return random.uniform(10, 23)

    elif season == "summer":
        return random.uniform(24, 40)

    elif season == "autumn":
        return random.uniform(5, 20)


def main():

    month = int(input("Enter the month number (1-12): "))

    if month in [12, 1, 2]:
        season = "winter"

    elif month in [3, 4, 5]:
        season = "spring"

    elif month in [6, 7, 8]:
        season = "summer"

    elif month in [9, 10, 11]:
        season = "autumn"

    else:
        print("Invalid month.")
        return

    temp = get_random_temp(season)

    print(f"The temperature right now is {temp:.1f} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")

    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don’t forget your coat.")

    elif temp >= 16 and temp <= 23:
        print("Nice weather.")

    elif temp >= 24 and temp < 32:
        print("A bit warm, stay hydrated.")

    elif temp >= 32 and temp <= 40:
        print("It’s really hot! Stay cool.")


main()