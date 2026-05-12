#Daily challenge

#1
n = int(input("input number: "))
l = int(input("input length: "))
result = []
i = 1
while i<=l:
    result.append(n * i)
    i+=1
print(result)  


#2
word = input("Give me a word: ")
result = ""

for l in word:
    if not result or result[-1] != l:
        result+=l
print(result)