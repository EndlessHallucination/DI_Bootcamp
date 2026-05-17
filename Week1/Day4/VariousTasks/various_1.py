import random
#1
def get_age(year, month, day):
    current_year = 2026
    current_month = 5
    current_day = 14

    age = current_year - year

    if month > current_month:
        age -= 1
    elif month == current_month and day > current_day:
        age -= 1

    return age


def can_retire(gender, date_of_birth):
    year, month, day = date_of_birth.split("/")
    year = int(year)
    month = int(month)
    day = int(day)

    age = get_age(year, month, day)

    if gender == "m":
        return age >= 67
    elif gender == "f":
        return age >= 62
    else:
        return False



gender = input("Enter gender (m/f): ").lower()
dob = input("Enter date of birth (yyyy/mm/dd): ")

if can_retire(gender, dob):
    print("You can retire.")
else:
    print("You cannot retire yet.")

#2
def func(num):
    s = str(num)
    total = 0

    for i in range(1, 5):
        total += int(s * i)

    return total


print(func(3)) 

#3
def throw_dice():
    score = random.randint(1,6)
    return score

def throw_until_doubles():
    throws = 0

    while True:
        s1 = throw_dice()
        s2 = throw_dice()
        throws += 1

        if s1 == s2:
            return throws
        
throw_until_doubles()

def main():
    results = []

    for _ in range(100):
        throws_needed = throw_until_doubles()
        results.append(throws_needed)

    total_throws = sum(results)
    average = total_throws / len(results)

    print(f"Total throws: {total_throws}")
    print(f"Average throws to reach doubles: {average:.2f}")


main()