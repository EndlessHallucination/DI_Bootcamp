#1

import math

class Circle:
    def __init__(self, radius=1.0):
        self.radius = radius

    def perimeter(self):
        return 2 * math.pi * self.radius

    def area(self):
        return math.pi * self.radius ** 2

    def definition(self):
        print("A circle is a shape consisting of all points in a plane "
              "that are at a given distance from a given point.")

# Example
circle1 = Circle(5)

print("Perimeter:", circle1.perimeter())
print("Area:", circle1.area())
circle1.definition()

#2
import random

class MyList:
    def __init__(self, letters):
        self.letters = letters

    def reversed_list(self):
        return self.letters[::-1]

    def sorted_list(self):
        return sorted(self.letters)

    def random_numbers(self):
        return [random.randint(1, 100) for _ in range(len(self.letters))]

my_list = MyList(["d", "a", "c", "b"])

print("Original:", my_list.letters)
print("Reversed:", my_list.reversed_list())
print("Sorted:", my_list.sorted_list())
print("Random numbers:", my_list.random_numbers())

#3
class MenuManager:
    def __init__(self):
        self.menu = [
            {"name": "Soup", "price": 10, "spice": "B", "gluten": False},
            {"name": "Hamburger", "price": 15, "spice": "A", "gluten": True},
            {"name": "Salad", "price": 18, "spice": "A", "gluten": False},
            {"name": "French Fries", "price": 5, "spice": "C", "gluten": False},
            {"name": "Beef bourguignon", "price": 25, "spice": "B", "gluten": True}
        ]

    def add_item(self, name, price, spice, gluten):
        new_item = {
            "name": name,
            "price": price,
            "spice": spice,
            "gluten": gluten
        }

        self.menu.append(new_item)
        print(f"{name} added to the menu.")

    def update_item(self, name, price, spice, gluten):
        for item in self.menu:
            if item["name"] == name:
                item["price"] = price
                item["spice"] = spice
                item["gluten"] = gluten
                print(f"{name} updated.")
                return

        print(f"{name} is not in the menu.")

    def remove_item(self, name):
        for item in self.menu:
            if item["name"] == name:
                self.menu.remove(item)
                print(f"{name} removed from the menu.")
                print(self.menu)
                return

        print(f"{name} is not in the menu.")

manager = MenuManager()

manager.add_item("Pizza", 20, "B", True)

manager.update_item("Salad", 19, "B", False)

manager.remove_item("Soup")