input_string = input("Give me a string: ")
input_char = input("Char to check: ")

def occurrences_checker(s, ch):
    counter = 0

    for char in s:
        if char == ch:
            counter += 1

    print(counter)

occurrences_checker(input_string, input_char)