from datetime import datetime
import holidays

def next_holiday():
    now = datetime.now()
    today = now.date()

    print("Today's date is:", today)

   
    il_holidays = holidays.IL(years=today.year)

    upcoming_holidays = []

    for date, name in il_holidays.items():
        if date >= today:
            upcoming_holidays.append((date, name))

    if not upcoming_holidays:
        il_holidays = holidays.IL(years=today.year + 1)

        for date, name in il_holidays.items():
            upcoming_holidays.append((date, name))

    next_date, next_name = min(upcoming_holidays, key=lambda x: x[0])

    remaining_days = (next_date - today).days

    print(f"The next holiday is {next_name} in {remaining_days} days.")

next_holiday()


def age_on_planets(seconds):
    earth_year_seconds = 31557600

    planets = {
        "Earth": 1,
        "Mercury": 0.2408467,
        "Venus": 0.61519726,
        "Mars": 1.8808158,
        "Jupiter": 11.862615,
        "Saturn": 29.447498,
        "Uranus": 84.016846,
        "Neptune": 164.79132
    }

    for planet, orbital_period in planets.items():
        age = seconds / (earth_year_seconds * orbital_period)
        print(f"{planet}: {age:} years")


import re

def return_numbers(string):
    numbers = re.findall(r'\d', string)
    return ''.join(numbers)

print(return_numbers('k5k3q2g5z6x9bn'))




full_name = input("Enter your full name: ")

pattern = r'^[A-Z][a-z]+ [A-Z][a-z]+$'

if re.match(pattern, full_name):
    print("Valid name")
else:
    print("Invalid name")



import random
import string

def generate_password(length):
    
    lower = random.choice(string.ascii_lowercase)
    upper = random.choice(string.ascii_uppercase)
    digit = random.choice(string.digits)
    special = random.choice("!@#$%^&*()_+")

    # Remaining characters
    remaining = length - 4

    all_chars = (
        string.ascii_lowercase +
        string.ascii_uppercase +
        string.digits +
        "!@#$%^&*()_+"
    )

    password = lower + upper + digit + special

    for _ in range(remaining):
        password += random.choice(all_chars)

    password_list = list(password)
    random.shuffle(password_list)

    return ''.join(password_list)


def test_password(password, length):

    if len(password) != length:
        return False

    if not re.search(r'[a-z]', password):
        return False

    if not re.search(r'[A-Z]', password):
        return False

    if not re.search(r'\d', password):
        return False

    if not re.search(r'[!@#$%^&*()_+]', password):
        return False

    return True


while True:
    length = input("Choose password length (6-30): ")

    if length.isdigit():
        length = int(length)

        if 6 <= length <= 30:
            break

    print("Invalid input. Try again.")


password = generate_password(length)

print(f"\nYour password is: {password}")
print("Keep it in a safe place!\n")


for i in range(100):
    test_pass = generate_password(length)

    if test_password(test_pass, length):
        print(f"Test {i+1}: PASS")
    else:
        print(f"Test {i+1}: FAIL")



import random

class QuantumParticle:

    def __init__(self, x, y, p):
        self.x = x                  
        self.y = y                 
        self.p = p                  
        self.entangled_particle = None

    def disturbance(self):
        self.x = random.randint(1, 10000)
        self.y = random.random()
        print("Quantum Interferences!!")

    def position(self):
        self.disturbance()

        self.x = random.randint(1, 10000)
        return self.x

    def momentum(self):
        self.disturbance()

        self.y = random.random()
        return self.y

    def spin(self):
        self.p = random.choice([0.5, -0.5])

        if self.entangled_particle:
            self.entangled_particle.p = -self.p

        self.disturbance()

        return self.p

    def entangle(self, other_particle):

        if not isinstance(other_particle, QuantumParticle):
            print("Can only entangle with another QuantumParticle")
            return

        self.entangled_particle = other_particle
        other_particle.entangled_particle = self

        print("Spooky Action at a Distance !!")

    # Representation
    def __repr__(self):
        return (
            f"QuantumParticle("
            f"position={self.x}, "
            f"momentum={self.y:.4f}, "
            f"spin={self.p})"
        )



