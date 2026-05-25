class BankAccount:
    def __init__(self, username, password, balance=0):
        self.username = username
        self.password = password
        self.balance = balance
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        else:
            raise Exception("Authentication failed")

    def deposit(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Deposit must be positive")

        self.balance += amount

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdraw must be positive")

        self.balance -= amount

class MinimumBalanceAccount(BankAccount):
    def __init__(self, username, password, balance=0, minimum_balance=0):
        super().__init__(username, password, balance)
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if not self.authenticated:
            raise Exception("User not authenticated")

        if amount <= 0:
            raise Exception("Withdraw must be positive")

        if self.balance - amount < self.minimum_balance:
            raise Exception("Cannot go below minimum balance")

        self.balance -= amount


class ATM:
    def __init__(self, account_list, try_limit):
        # validate accounts
        for acc in account_list:
            if not isinstance(acc, BankAccount):
                raise Exception("Invalid account in list")

        self.account_list = account_list

        # validate try_limit
        if not isinstance(try_limit, int) or try_limit <= 0:
            print("Invalid try_limit, setting to default 2")
            try_limit = 2

        self.try_limit = try_limit
        self.current_tries = 0

        self.show_main_menu()

    def show_main_menu(self):
        while True:
            choice = input("\n1. Login\n2. Exit\nChoose: ")

            if choice == "1":
                username = input("Username: ")
                password = input("Password: ")
                self.log_in(username, password)

            elif choice == "2":
                print("Goodbye")
                break

    def log_in(self, username, password):
        for acc in self.account_list:
            try:
                acc.authenticate(username, password)
                self.show_account_menu(acc)
                return
            except:
                continue

        self.current_tries += 1

        if self.current_tries >= self.try_limit:
            print("Max tries reached. Shutting down.")
            exit()

        print("Wrong credentials")

    def show_account_menu(self, account):
        while True:
            choice = input("\n1. Deposit\n2. Withdraw\n3. Exit\nChoose: ")

            if choice == "1":
                amount = int(input("Amount: "))
                account.deposit(amount)
                print("Balance:", account.balance)

            elif choice == "2":
                amount = int(input("Amount: "))
                account.withdraw(amount)
                print("Balance:", account.balance)

            elif choice == "3":
                break