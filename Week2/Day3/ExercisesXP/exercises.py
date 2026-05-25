import string
import random

#1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self._plural()}"

    def __repr__(self):
        return f"{self.amount} {self._plural()}"

    def __int__(self):
        return int(self.amount)
    
    def __add__(self, other):
        if isinstance(other, (int, float)):
            return self.amount + other

        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            return self.amount + other.amount

        return NotImplemented

    def __iadd__(self, other):
        if isinstance(other, (int, float)):
            self.amount += other
            return self

        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(
                    f"Cannot add between Currency type <{self.currency}> and <{other.currency}>"
                )
            self.amount += other.amount
            return self

        return NotImplemented

    def _plural(self):
        return self.currency + "s" if self.amount != 1 else self.currency


#3
letters = string.ascii_letters

random_string = ""

for _ in range(5):
    random_string += random.choice(letters)

print(random_string)

#4
import datetime

def show_current_date():
    print(datetime.date.today())

show_current_date()

#5
import datetime

def time_until_new_year():
    now = datetime.datetime.now()

    next_year = now.year + 1
    new_year = datetime.datetime(next_year, 1, 1)

    diff = new_year - now
    print(diff)

time_until_new_year()

#6
import datetime

def minutes_lived(birthdate_str):
    birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
    now = datetime.datetime.now()

    diff = now - birthdate
    minutes = diff.total_seconds() / 60

    print(f"You lived approximately {int(minutes)} minutes")

minutes_lived("2000-01-01")

#7
from faker import Faker

fake = Faker()
users = []

def generate_users(n):
    for _ in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

generate_users(5)

print(users)
