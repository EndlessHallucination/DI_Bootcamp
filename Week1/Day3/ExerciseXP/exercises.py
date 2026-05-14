#daily exercises

#1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

print(dict(zip(keys,values)))

#2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0
user_input = input("Enter name and age separated by a colon (key:value): ")
key, val = user_input.split(':')
family[key.strip()] = int(val.strip())
for key, value in family.items():
    if value >= 3 and value <=12:
        total += 10
        print(f"Ticket price for {key} is {10}$")
    elif value > 12:
        total +=15
        print(f"Ticket price for {key} is {15}$")
    else: 
        print(f"Ticket price for {key} is {0}$")

print(f"TOTAL BILL: {total}")

#3
zara = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

more_on_zara={
    "creation_date": 1975,
    "number_stores": 7000
}

zara["number_stores"] = 2
print(f"Zara has clothing for {', '.join(zara['type_of_clothes'])}")
zara["country_creation"] = "Spain"


for key, value in zara.items():
    if key == "international_competitors":
        zara["international_competitors"].append("Desigual")

del(zara["creation_date"])

print(zara["major_color"]["US"])

print(len(zara))

for k in zara.keys():
    print(k)

print(zara | more_on_zara)

#4
chars = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

#4.1
char_to_index = {name: i for i, name in enumerate(chars)}

#4.2
index_to_char = {i: name for i, name in enumerate(chars)}

#4.3
sorted_char_to_index = {name: i for i, name in enumerate(sorted(chars))}


