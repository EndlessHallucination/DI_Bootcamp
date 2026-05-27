import random

class Game:
    def __init__(self):
        pass

    def get_user_item(self):
        choice = input("Select rock/paper/scissors: ")
        return choice.lower()
    
    def get_computer_item(self):
        item = random.choice(['rock', 'paper', 'scissors'])
        return item
    
    def get_game_result(self, user_item, computer_item):

        user_item = user_item.lower()
        computer_item = computer_item.lower()

    
        if user_item == computer_item:
            return "draw"

    
        if (
            (user_item == "rock" and computer_item == "scissors") or
            (user_item == "scissors" and computer_item == "paper") or
            (user_item == "paper" and computer_item == "rock")
        ):
            return "win"

    
        return "loss"
    

    def play(self):
        user = self.get_user_item()
        computer = self.get_computer_item()

        result = self.get_game_result(user, computer)

        print(f"You: {user} | Computer: {computer}")
        print(f"Result: {result}")

        return result