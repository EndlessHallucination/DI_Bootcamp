import string


class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.split()
        counter = 0

        for w in words:
            if w == word:
                counter += 1

        if counter == 0:
            return "Word not found"

        return counter

    def most_common_word(self):
        words = self.text.split()
        frequencies = {}

        for word in words:
            if word in frequencies:
                frequencies[word] += 1
            else:
                frequencies[word] = 1

        return max(frequencies, key=frequencies.get)

    def unique_words(self):
        return list(set(self.text.split()))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            content = file.read()

        return cls(content)


class TextModification(Text):

    def remove_punctuation(self):
        cleaned_text = self.text

        for char in string.punctuation:
            cleaned_text = cleaned_text.replace(char, "")

        return cleaned_text

    def remove_stop_words(self):

        stop_words = {
            "a", "an", "the", "is", "are", "was", "were",
            "in", "on", "at", "to", "for", "of", "and",
            "or", "but", "with", "this", "that", "it"
        }

        words = self.text.split()

        filtered_words = []

        for word in words:
            if word.lower() not in stop_words:
                filtered_words.append(word)

        return " ".join(filtered_words)