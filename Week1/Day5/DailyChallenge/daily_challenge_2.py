import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]

target_number = 3728

pairs = []

for i in range(len(list_of_numbers)):

    for j in range(i + 1, len(list_of_numbers)):

        if list_of_numbers[i] + list_of_numbers[j] == target_number:

            pairs.append((list_of_numbers[i], list_of_numbers[j]))

print("Pairs that sum to", target_number)

for pair in pairs:
    print(pair)

print("Total pairs found:", len(pairs))