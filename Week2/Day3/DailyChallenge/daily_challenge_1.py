import math

class Circle:
    def __init__(self, radius):
        self._radius = radius

    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        self._radius = value

    @property
    def diameter(self):
        return self._radius * 2

    @diameter.setter
    def diameter(self, value):
        self._radius = value / 2

    def area(self):
        return math.pi * (self.radius ** 2)

    
    def __str__(self):
        return f"{self.radius}, {self.diameter}"
    
    def __add__(self, other):
        return Circle(self.radius + other.radius)
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius

    def __lt__(self, other):
        return self.radius < other.radius
    
a = Circle(2)
b = Circle(4)


print(a.area())

print(str(a))

c = a + b

print(c)

circles = [a,b,c]

print(a>b)

print(a==c)

circles.sort()
for circle in circles:
    print(circle)

