#1
words = input("Enter words separated by commas: ")
word_list = words.split(",")
word_list.sort()
sorted_words = ",".join(word_list)
print(sorted_words)

#2
def longest_word(sentence):
    words = sentence.split()
    longest = words[0]
    for word in words:
        if len(word) > len(longest):
            longest = word
    return longest


sentence = input("Enter a sentence: ")

print("Longest word:", longest_word(sentence))