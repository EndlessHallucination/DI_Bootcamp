class AnagramChecker:
    def __init__(self, file_path):
        with open(file_path, "r") as file:
            self.words = set()
            for line in file:
                word = line.strip().lower()
                if word:
                    self.words.add(word)

    def is_valid_word(self, word):
        return word.lower() in self.words

    def is_anagram(self, word1, word2):
        return sorted(word1.lower()) == sorted(word2.lower())

    def get_anagrams(self, word):
        anagrams = []

        for w in self.words:
            if self.is_anagram(w, word) and w.lower() != word.lower():
                anagrams.append(w)

        return anagrams