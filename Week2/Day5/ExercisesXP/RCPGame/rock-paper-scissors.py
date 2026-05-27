from game import Game


def get_user_menu_choice():
    while True:
        print("\n=== Rock Paper Scissors ===")
        print("1. Play a new game")
        print("2. Show scores")
        print("3. Quit")

        choice = input("Choose an option (1-3): ").strip()

        if choice in ["1", "2", "3"]:
            return choice

        print("Invalid choice. Try again.")


def print_results(results):
    print("\n=== GAME RESULTS ===")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("\nThanks for playing!")


def main():
    results = {"win": 0, "loss": 0, "draw": 0}

    game = Game()

    while True:
        choice = get_user_menu_choice()

        if choice == "1":
            result = game.play()  

            if result in results:
                results[result] += 1

        elif choice == "2":
            print_results(results)

        elif choice == "3":
            print_results(results)
            break


if __name__ == "__main__":
    main()