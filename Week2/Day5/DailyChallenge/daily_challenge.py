#1
# What is a class?
# A Class is like an object constructor, or a blueprint for creating objects.

# What is an instance?
# A specific, concrete object created from a class blueprint.

# What is encapsulation?
# It means keeping data and methods together in a class, while controlling how the data can be accessed from outside the class.

# What is abstraction?
# Hiding the complex internal implementation details of a program and showing only the essential features to the user.

# What is inheritance?
# Allows one class to take on the attributes and methods of another class 

# What is multiple inheritance?
# A feature of object-oriented programming where a single child class can inherit attributes and methods from more than one parent clas

# What is polymorphism?
# It allows different types of objects to be accessed through the same interface.
# It refers to methods/functions/operators with the same name that can be executed on many objects or classes

# What is method resolution order or MRO?
# It defines the order in which Python searches for a method in a class and its parent classes
# It becomes important when the same method exists in more than one class in an inheritance chain, especially in multiple inheritance.

#2 
import random

suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

class Deck:
    def __init__(self):
        self.cards = []
        for s in suits:
            for v in values:
                self.cards.append(Card(s, v))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self):
        return self.cards.pop()
    
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


deck = Deck()

print(len(deck.cards))

deck.shuffle

card = deck.deal()
print(card.suit, card.value)

print(len(deck.cards))