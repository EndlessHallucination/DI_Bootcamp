class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, **kwargs):
         for animal, count in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += count
            else:
                self.animals[animal] = count
           

    def get_info(self):
        output = f"{self.name}'s farm\n"
        for animal, count in self.animals.items():
            output += f"{animal} : {count}\n"

        return output
    
    def get_animal_types(self):
        sorted_animals = sorted(self.animals)
        return sorted_animals
    
    def get_short_info(self):
        animal_list = []
        for animal, count in self.animals.items():
            if count > 1:
                animal_list.append(animal + "s")
            else:
                animal_list.append(animal)

        return print(f"McDonald’s farm has {', '.join(animal_list)}")


macdonald = Farm("McDonald")

macdonald.add_animal(cow=5, sheep=2, goat=12)

print(macdonald.get_info())

macdonald.get_short_info()