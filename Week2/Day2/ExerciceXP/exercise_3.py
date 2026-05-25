import random;
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


class PetDog(Dog):
    def __init__(self, name, age, weight, trained = False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        self.trained = True
        return self.bark()
        
    def play(self, *args):
        return f"{self.name}, {', '.join(args)} all play together"
    
    def do_a_trick(self):
        tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
        random_trick = random.choice(tricks)
        if self.trained == True:
            return print(random_trick)
        else: 
            print("Dog is not trained")

my_dog = PetDog("Fido", 2, 10)

my_dog.train()
print(my_dog.play("Buddy", "Max"))
my_dog.do_a_trick()
print("\n")