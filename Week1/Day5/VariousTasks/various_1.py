#1
my_list = [1, 2, 3, 4]

my_list.insert(2, 100)

print(my_list)

#2
text = input("Enter a string: ")

spaces = 0

for char in text:
    if char == " ":
        spaces += 1

print("Spaces:", spaces)

#3
text = input("Enter a string: ")

upper = 0
lower = 0

for char in text:

    if char.isupper():
        upper += 1

    elif char.islower():
        lower += 1

print("Uppercase:", upper)
print("Lowercase:", lower)

#4
def my_sum(numbers):
    total = 0

    for num in numbers:
        total += num

    return total


print(my_sum([1,5,4,2]))

#5
def find_max(numbers):

    maximum = numbers[0]

    for num in numbers:
        if num > maximum:
            maximum = num

    return maximum


print(find_max([0,1,3,50]))

#6
def factorial(n):

    result = 1

    for i in range(1, n + 1):
        result *= i

    return result


print(factorial(4))

#7
def list_count(lst, element):

    count = 0

    for item in lst:
        if item == element:
            count += 1

    return count


print(list_count(['a','a','t','o'], 'a'))

#8
import math

def norm(numbers):

    total = 0

    for num in numbers:
        total += num ** 2

    return math.sqrt(total)


print(norm([1,2,2]))

#9
def is_mono(lst):

    ascending = True
    descending = True

    for i in range(len(lst) - 1):

        if lst[i] > lst[i + 1]:
            ascending = False

        if lst[i] < lst[i + 1]:
            descending = False

    return ascending or descending


print(is_mono([7,6,5,5,2,0]))
print(is_mono([2,3,3,3]))
print(is_mono([1,2,0,4]))

#10
def longest_word(words):

    longest = words[0]

    for word in words:
        if len(word) > len(longest):
            longest = word

    print(longest)


longest_word(["cat", "elephant", "dog"])

#11
items = [1, "hello", 5, "python", 3]

integers = []
strings = []

for item in items:

    if type(item) == int:
        integers.append(item)

    elif type(item) == str:
        strings.append(item)

print(integers)
print(strings)


#12
def is_palindrome(word):

    return word == word[::-1]


print(is_palindrome("radar"))
print(is_palindrome("John"))

#13
def sum_over_k(sentence, k):

    words = sentence.split()

    count = 0

    for word in words:
        if len(word) > k:
            count += 1

    return count


sentence = 'Do or do not there is no try'

print(sum_over_k(sentence, 2))

#14
def dict_avg(dictionary):

    total = 0

    for value in dictionary.values():
        total += value

    return total / len(dictionary)


print(dict_avg({'a': 1,'b':2,'c':8,'d':1}))


#15
def common_div(a, b):

    divisors = []

    for i in range(1, min(a, b) + 1):

        if a % i == 0 and b % i == 0:
            divisors.append(i)

    return divisors


print(common_div(10,20))

#16
def is_prime(n):

    if n < 2:
        return False

    for i in range(2, n):

        if n % i == 0:
            return False

    return True


print(is_prime(11))

#17
def weird_print(lst):

    result = []

    for i in range(len(lst)):

        if i % 2 == 0 and lst[i] % 2 == 0:
            result.append(lst[i])

    print(result)


weird_print([1,2,2,3,4,5])

#18
def type_count(**kwargs):

    counts = {}

    for value in kwargs.values():

        t = type(value).__name__

        if t not in counts:
            counts[t] = 0

        counts[t] += 1

    print(counts)


type_count(a=1,b='string',c=1.0,d=True,e=False)

#19
def my_split(text, separator=" "):

    result = []
    current = ""

    for char in text:

        if char == separator:
            result.append(current)
            current = ""

        else:
            current += char

    result.append(current)

    return result


print(my_split("hello world python"))
print(my_split("a,b,c,d", ","))

#20
password = input("Enter password: ")

hidden = "*" * len(password)

print(hidden)