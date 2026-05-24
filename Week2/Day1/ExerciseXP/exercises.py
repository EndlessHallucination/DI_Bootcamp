#1
class Cat:
    def __init__(self, name, age):
      
        self.name = name
        self.age = age

cat1 = Cat("Tom", 10)
cat2 = Cat("Dom", 11)
cat3 = Cat("Tomato", 5)

def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1 
    if cat2.age > oldest.age:
        oldest = cat2

    if cat3.age > oldest.age:
        oldest = cat3

    return oldest


oldest_cat = find_oldest_cat(cat1, cat2, cat3)

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")

#2
class Dog:
    def __init__(self,name, height):
        self.name = name
        self.height = height


    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")

davids_dog = Dog("David", 100)
sarahs_dog = Dog("Sarah", 101)

davids_dog.bark()
davids_dog.jump()

sarahs_dog.bark()
sarahs_dog.jump()

def find_biggest_dog(d1, d2):
    biggest = d1

    if d2.height > biggest.height:
        biggest = d2
    return print(biggest.name)

find_biggest_dog(davids_dog, sarahs_dog)

#3
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        line = ", ".join(self.lyrics)
        print(line)

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

#4
class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []

    def add_animal(self, *new_animals):
        for animal in new_animals:
            if animal not in self.animals:
                self.animals.append(animal)

    def get_animals(self):
        print("Animals in the zoo:")
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} was sold.")

    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}

        for animal in sorted_animals:
            first_letter = animal[0]

            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []

            grouped_animals[first_letter].append(animal)

        self.grouped_animals = grouped_animals
        return grouped_animals

    def get_groups(self):
        groups = self.sort_animals()

        print("Grouped animals:")
        for letter, animals in groups.items():
            print(f"{letter}: {animals}")


brooklyn_safari = Zoo("Brooklyn Safari")


brooklyn_safari.add_animal(
    "Giraffe",
    "Bear",
    "Baboon",
    "Lion",
    "Zebra",
    "Cat",
    "Cougar"
)

brooklyn_safari.get_animals()

print()

brooklyn_safari.sell_animal("Bear")

print()

brooklyn_safari.get_animals()

print()

brooklyn_safari.get_groups()


