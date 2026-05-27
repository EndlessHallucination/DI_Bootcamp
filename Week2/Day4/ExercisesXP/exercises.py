import random


def get_words_from_file(file):
    with open(file, "r") as f:
        content = f.read()

    words = content.split()
    return words


def get_random_sentence(length):
    words_list = get_words_from_file(
        "Week2/Day4/ExercisesXP/words.txt"
    )

    random_words = []

    for i in range(length):
        random_words.append(random.choice(words_list))

    sentence = " ".join(random_words)

    return sentence.lower()


def main():
    print("This program generates a random sentence.")

    user_input = input("Enter a sentence length (2-20): ")

    if not user_input.isdigit():
        print("Error: please enter a valid number.")
        return

    length = int(user_input)

    if length < 2 or length > 20:
        print("Error: number must be between 2 and 20.")
        return

    sentence = get_random_sentence(length)

    print("\nGenerated sentence:")
    print(sentence)


main()


#2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]

print("Salary:", salary)

data["company"]["employee"]["birth_date"] = "1995-05-15"

with open("modified_data.json", "w") as file:
    json.dump(data, file, indent=4)

print("Modified JSON saved successfully.")