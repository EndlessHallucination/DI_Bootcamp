import random

wordslist = [
    'correction',
    'childish',
    'beach',
    'python',
    'assertive',
    'interference',
    'complete',
    'share',
    'credit card',
    'rush',
    'south'
]

word = random.choice(wordslist).lower()

hidden_word = []

for char in word:
    if char == " ":
        hidden_word.append(" ")
    else:
        hidden_word.append("*")

guessed_letters = []
wrong_guesses = 0
body_parts = [
    "Head",
    "Body",
    "Left arm",
    "Right arm",
    "Left leg",
    "Right leg"
]

print("Welcome to Hangman!")

while True:

    print("\nWord:", " ".join(hidden_word))
    print("Guessed letters:", guessed_letters)

    guess = input("Guess a letter: ").lower()

    # Validation
    if len(guess) != 1 or not guess.isalpha():
        print("Please enter ONE letter.")
        continue

    if guess in guessed_letters:
        print("You already guessed that letter.")
        continue

    guessed_letters.append(guess)

    if guess in word:

        for i in range(len(word)):
            if word[i] == guess:
                hidden_word[i] = guess

        print("Correct!")

    else:
        print("Wrong!")

        print("Added:", body_parts[wrong_guesses])

        wrong_guesses += 1

    if "*" not in hidden_word:
        print("\nYou won!")
        print("The word was:", word)
        break

    if wrong_guesses == 6:
        print("\nGame Over!")
        print("The word was:", word)
        break