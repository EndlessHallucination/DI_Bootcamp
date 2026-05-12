import random;
import string;
import math;
from datetime import date, datetime;

# print("Hello world\n"* 4)

# print((99^3)*8)


# computer_brand = "Apple"
# print(f"I have a {computer_brand} computer.")

# name = "Vasiliy"
# age =23
# shoe_size = 44
# info = f"My name is {name}, Im {age} years old, My shoe size is {shoe_size}"
# print(info)


# a= 5
# b =9
# if a >b:
#     print("Hello world")
# else:
#      print("Bye World")    


# myName = "Vasiliy"
# name = input("Whats your name?\n").capitalize()
# if name == myName:
#     print("funny message")
# else: 
#     print("Nice to meet you")

# height = int(input("Whats your height in cm\n"))
# if height >=145:
#     print("Youre good to go")
# else: 
#     print("You need to grow some more to ride")


# print(("Hello World\n" * 4) + ("I love python\n" *4) )



# month = int(input("GIve me month number from 1 to 12\n"))
# if month <1 or month > 12:
#      print("i told you to choose between 1 and 12")
# elif month >=3 and month<= 5:
#      print("Spring runs from March (3) to May (5)")
# elif month >=6 and month<= 8:
#      print("Summer runs from June (6) to August (8)")
# elif month >=9 and month<= 11:
#      print("Autumn runs from September (9) to November (11)")              
# else:
#      print("Winter runs from December (12) to February (2)")     


# my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

# print(len(my_text))


# longest_word = ""
# game_status = True
# while game_status:
#      word = input("give me your longest word without a\n").lower()
#      if word.find("a")>0:
#           print("nice try, but i need a word without a\n")
#      if len(longest_word)<len(word):
#           print(f"Congrats,{word} contains more letters than {longest_word}")
#           longest_word= word
#      playing = input("ifn u want to continue type y if you want to leave type q\n")
#      if playing == "q":
#           print("Thanx for the game")
#           game_status = False        
     
    

    
          


# text = input("Type some words: ")
# current = ""
# if len(text) == 10:
#     print("Perfect string")
#     print(text[0] + text[len(text) - 1])
#     for c in text:
#         current += c
#         print(current)

#     chars = list(text)
#     random.shuffle(chars)
#     text2 = ''.join(chars)

#     current = ""
#     for c in text2:
#         current += c
#         print(current)
    
# elif len(text)<10:
#     print("String not long enough.")
# else:
#     print("String is too long")


#DAY 2



#1
# my_fav_numbers = {8, 27, 66, 69}
# friend_fav_numbers = {0, 9, 13}
# my_fav_numbers.add(88)
# my_fav_numbers.add(120)
# my_fav_numbers.remove(120)
# our_fav_numbers=my_fav_numbers.union(friend_fav_numbers)
# print(my_fav_numbers)
# print(our_fav_numbers)


#2
# tuple = (1,2)
# y = ("orange",)
# tuple += y
# print(tuple)
#or u can convert tuple into list, change list and convert back

#3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]

# basket.remove("Banana")
# basket.remove("Blueberries")

# basket.append("Kiwi")
# basket.insert(0, "Apples")
# print(basket)
# print(basket.count("Apples"))
# basket.clear()
# print(basket)

#4

# numbers = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
# new = []

# for n in numbers:
#     new.append(n)

# print(new)

#5

# x = range(21)
# for n in x:
#     print(n)


# y = range(21)
# for n in y:
#     if n %2 == 0:
#         print(n)

#6
# name = input("Whats ur name\n")
# while name.isdigit() or len(name) < 3:
#     if name.isdigit():
#         print("NAME IS NOT A NUMBER")
#     if len(name) < 3 and name.isdigit() == False:
#         print("TOO SHORT")
#     name = input("Whats ur name\n")

# print("Thank you")

#7

# fav_fruits = input("Tell mew what are your favourite fruit\n")
# users_fruit = input("Gimmie the name of any fruit\n")
# if users_fruit in fav_fruits:
#     print("You chose one of your favorite fruits! Enjoy!")

# else:
#     print("GOOD LUCK")

#8

# all_the_toppings = []
# price = 10

# while True:
#     topping = input("Enter a topping, or type 'quit': ")
#     if topping == "quit":
#         break
#     print(f"Adding {topping} to your pizza.")
#     all_the_toppings.append(topping)
#     price += 2.5

# print(f"Toppings: {', '.join(all_the_toppings)}")
# print(f"Total price: ${price}")

#9

# choice = input("1) Family tickets  2) Restricted movie (16-21): ")

# if choice == "1":
#     total_price = 0
#     while True:
#         age_input = input("Enter age (or 'quit'): ")
#         if age_input == "quit":
#             break
#         age = int(age_input)
#         if age < 3:
#             print("Free for under 3")
#         elif 3 <= age <= 12:
#             total_price += 10
#             print("$10 for child")
#         else:
#             total_price += 15
#             print("$15 for adult")
#     print(f"Total family cost: ${total_price}")
    
# else:
#     attendees = []
#     while True:
#         age_input = input("Enter age (or 'quit'): ")
#         if age_input == "quit":
#             break
#         age = int(age_input)
#         if 16 <= age <= 21:
#             name = input("Enter name: ")
#             attendees.append(name)
#             print(f"{name} allowed!")
#         else:
#             print("Not allowed (16-21 only)")
#     print(f"Final attendees: {', '.join(attendees) or 'None'}")


#GOLDEN EXERCISES 

#1

# l3 = [1,2] + [3,4]
# print(l3)

#2

# numbers = range(1500, 2000)
# for n in numbers:
#     if n%5 ==0 and n%7 == 0:
#         print(n)

#3

# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# name = input("gimmie your name: ").capitalize()
# if name in names:
#     print(names.index(name))

#4
# greatest_number = 0
# for n in range(3):
#     number = int(input("Input the number: "))
#     if number>greatest_number:
#         greatest_number = number
#     print(greatest_number)

#5
# alphabet = list(string.ascii_lowercase)
# for l in alphabet:
#     if l in 'aeiou': 
#         print(f"{l} is vowel")
#     else: print(f"{l} is consonant")

#6
# words = []
# for _ in range(7):
#     word = input("Gimmie the word: ")
#     words.append(word)

# letter = input("Your letter: ")

# print(f"\n '{letter}' appears in:")
# for w in words:
#     if letter in w:
#         pos = w.index(letter)
#         print(f"  '{w}' at position {pos}")
        
# print("No matches found" if not any(letter in w for w in words) else "")

#7
# n= list(range(1,1000001))
# print(min(n), max(n), sum(n))

#8
# s = input("throw me some numbers: ")
# print(tuple(s.split(",")), s.split(","))

#9
# wins = 0
# losses = 0

# while True:
#     secret = random.randint(1, 9)
#     guess_input = input("Guess 1-9 (or 'q' to quit): ")
    
#     if guess_input == 'q':
#         break
        
#     guess = int(guess_input)
    
#     if guess == secret:
#         print("Winner!")
#         wins += 1
#     else:
#         print("Better luck next time!")
#         losses += 1

# print(f"\nGames: {wins} wins, {losses} losses")


#NINJA EXERCISES 
#1

# C = 50
# H = 30
# numbers = input("Enter comma-separated numbers: ").split(",")

# results = []
# for D in numbers:
#     Q = math.sqrt((2 * C * float(D)) / H)
#     results.append(str(int(round(Q))))

# print(",".join(results))

#2
# numbers = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7]

# print("1. Original list:", numbers)
# print("2b. Descending:", sorted(numbers, reverse=True))
# print("2c. Sum:", sum(numbers))

# print("3. First & last:", [numbers[0], numbers[-1]])
# print("4. >50:", [n for n in numbers if n > 50])
# print("5. <10:", [n for n in numbers if n < 10])

# squared = [n**2 for n in numbers]
# print("6. Squared:", squared)

# print("7. Unique:", *set(numbers))
# print("   Count:", len(set(numbers)))

# print("8. Average:", round(sum(numbers)/len(numbers), 2))
# print("9. Largest:", max(numbers))
# print("10.", min(numbers))

# count = random.randint(50, 100) 
# numbers = [random.randint(-100, 100) for _ in range(count)] 

# print(f"Generated {count} random numbers:", numbers[:10], "...")  

# total = 0
# largest = numbers[0]
# smallest = numbers[0]

# for n in numbers:
#     total += n
#     if n > largest:
#         largest = n
#     if n < smallest:
#         smallest = n

# avg = total / len(numbers)

# print("11. Manual stats:")
# print("   Sum:", total)
# print("   Average:",avg)
# print("   Largest:", largest)
# print("   Smallest:", smallest)

# print("   Built-in sum:", sum(numbers))
# print("   Built-in avg:", round(sum(numbers)/len(numbers), 2))
# print("   Built-in max/min:", max(numbers), min(numbers))
# print("✅ YES - works for ANY list length!")


#3

# text = """Nature is the connection between the physical world surrounding us and the life inside us. Nature is God's most precious gift to humans. It is the principal source of all essential nutrients for all living things on the planet. Everything we see around us constitutes nature, including the sun, the moon, trees, flowers, fruits, human beings, birds, animals. In nature, everyone depends on one another to keep the ecosystem healthy. Humans rely on nature for oxygen, food, water, shelter, medicines, and clothing. With increasing threats of global warming, it is essential to protect our nature."""


# print(f"Total characters: {len(text)}")
# print(f"Sentences: {len([s for s in text.split('.') if s.strip()])}")
# print(f"Words: {len(text.split())}")

# words = text.lower().split()
# unique_words = len(set(words))
# print(f"Unique words: {unique_words}")

# print(f"Non-whitespace chars: {len(text.replace(' ', '').replace('\n', ''))}")
# words_per_sentence = len(words) / len([s for s in text.split('.') if s.strip()])
# print(f"Avg words per sentence: {round(words_per_sentence, 1)}")
# print(f"Non-unique words: {len(words) - unique_words}")

# #4
# text = input("Enter text: ")

# freq = {}
# for word in text.split():
#     freq[word] = freq.get(word, 0) + 1

# for w in sorted(freq):
#     print(f"{w}:{freq[w]}")



#Daily Challenge

#1

# n = int(input("input number: "))
# l = int(input("input length: "))
# result = []
# i = 1
# while i<=l:
#     result.append(n * i)
#     i+=1
# print(result)  


#2
# 


#Gold 
birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
birth = datetime.strptime(birthdate, "%d/%m/%Y")
today = datetime.now()

age = today.year - birth.year
if (today.month, today.day) < (birth.month, birth.day):
    age -= 1
candles = age % 10

print(f"        ___{'i' * candles}___")
print("      |:H:a:p:p:y:|")
print("    __|___________|__")
print("   |^^^^^^^^^^^^^^^^^|")
print("   |:B:i:r:t:h:d:a:y:|")
print("   |                 |")
print("   ~~~~~~~~~~~~~~~~~~~")

print(f"Happy Birthday! x{candles} candles")

    