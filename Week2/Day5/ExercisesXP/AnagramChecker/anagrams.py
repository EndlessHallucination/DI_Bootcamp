from anagram_checker import AnagramChecker  

def main():
    checker = AnagramChecker("Week2/Day5/ExercisesXP/AnagramChecker/sowpods.txt")   

    while True:   
        print("\n=== ANAGRAM CHECKER ===")
        print("1. Enter a word")
        print("2. Exit")

        choice = input("Choose an option: ")

        if choice == "2":
            print("Goodbye!")
            break

        if choice != "1":
            print("Invalid choice. Try again.")
            continue

        word = input("Enter a word: ").strip()

        if not word.isalpha():
            print("Error: Please enter a single word (letters only).")
            continue

        if not checker.is_valid_word(word):
            print(f"'{word}' is not in the dictionary.")
            continue

        anagrams = checker.get_anagrams(word)

        print("\nRESULT")
        print(f"Your word: {word.lower()}")
        print("This is a valid English word.")
        print(f"Anagrams for your word: {anagrams if anagrams else 'No anagrams found'}")


main()