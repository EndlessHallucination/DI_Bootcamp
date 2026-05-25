#1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

all_cats = [
    Bengal("Leo", 3),
    Chartreux("Milo", 5),
    Siamese("Luna", 2)
]

sara_pets = Pets(all_cats)

sara_pets.walk()

#2

class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking'

    def run_speed(self):
       return self.weight / self.age * 10.

    def fight(self, other_dog):
        winner = self.name
        if self.run_speed() < other_dog.run_speed():
            winner = other_dog.name
            
        return f'{winner} won the fight'
  


dog1 = Dog("David", 10, 12 )
dog2 = Dog("Sarah", 11, 11)
dog3 = Dog("Sara", 12, 10)

print(dog1.bark())
print(dog2.run_speed())
print(dog3.fight(dog2))
print("\n")


#4

class Person:
    def __init__(self, first_name, age, last_name=''):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name

    def is_18(self):
        return self.age >= 18


class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age, self.last_name)
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:

            if member.first_name == first_name:

                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")

                return

    def family_presentation(self):
        print(f"Family name: {self.last_name}")

        for member in self.members:
            print(f"{member.first_name}, Age: {member.age}")

smith_family = Family("Smith")

smith_family.born("David", 20)
smith_family.born("Emma", 48)
smith_family.born("John", 45)

smith_family.check_majority("David")
smith_family.check_majority("Emma")

smith_family.family_presentation()