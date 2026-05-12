#daily challenge

import random

text = input("Type some words: ")
current = ""
if len(text) == 10:
    print("Perfect string")
    print(text[0] + text[-1]) 
    for c in text:
        current += c
        print(current)

    chars = list(text)
    random.shuffle(chars)
    text2 = ''.join(chars)
   
    current = ""
    for c in text2:
        current += c
        print(current)
    
elif len(text)<10:
    print("String not long enough.")
else:
    print("String is too long")
