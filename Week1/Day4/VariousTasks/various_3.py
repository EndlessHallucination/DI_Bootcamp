#1
def get_full_name(first_name, last_name, middle_name=None):
    if middle_name:
        return f"{first_name.capitalize()} {middle_name.capitalize()} {last_name.capitalize()}"
    else:
        return f"{first_name.capitalize()} {last_name.capitalize()}"
    
print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))
print(get_full_name(first_name="bruce", last_name="lee"))

#2

MORSE_CODE_DICT = {
    'A': '.-',    'B': '-...',  'C': '-.-.', 'D': '-..',
    'E': '.',     'F': '..-.',  'G': '--.',  'H': '....',
    'I': '..',    'J': '.---',  'K': '-.-',  'L': '.-..',
    'M': '--',    'N': '-.',    'O': '---',  'P': '.--.',
    'Q': '--.-',  'R': '.-.',   'S': '...',  'T': '-',
    'U': '..-',   'V': '...-',  'W': '.--',  'X': '-..-',
    'Y': '-.--',  'Z': '--..',

    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',

    ' ': '/'
}

REVERSE_MORSE_DICT = {value: key for key, value in MORSE_CODE_DICT.items()}


def text_to_morse(text):
    result = []

    for char in text.upper():
        if char in MORSE_CODE_DICT:
            result.append(MORSE_CODE_DICT[char])

    return " ".join(result)

def morse_to_text(morse):
    result = []

    for code in morse.split(" "):
        if code in REVERSE_MORSE_DICT:
            result.append(REVERSE_MORSE_DICT[code])

    return "".join(result)


message = "Hello World"

encoded = text_to_morse(message)
print("Morse:", encoded)

decoded = morse_to_text(encoded)
print("Text:", decoded)

#3
def box_printer(*words):
    max_length = max(len(word) for word in words)
    border = "*" * (max_length + 4)
    print(border)

    for word in words:
          print(f"* {word.ljust(max_length)} *")

    print(border)


#4
def insertion_sort(alist):
   for index in range(1,len(alist)):

     currentvalue = alist[index]
     position = index

     while position>0 and alist[position-1]>currentvalue:
         alist[position]=alist[position-1]
         position = position-1

     alist[position]=currentvalue

alist = [54,26,93,17,77,31,44,55,20]
insertion_sort(alist)
print(alist)

###code for sorting the list