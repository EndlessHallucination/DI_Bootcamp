class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone):
        call_message = f"{self.phone_number} called {other_phone.phone_number}"

        print(call_message)

        self.call_history.append(call_message)
        other_phone.call_history.append(call_message)

    def show_call_history(self):
        print("\nCall History:")
        for call in self.call_history:
            print(call)

    def send_message(self, other_phone, content):
        message = {
            "to": other_phone.phone_number,
            "from": self.phone_number,
            "content": content
        }

        self.messages.append(message)
        other_phone.messages.append(message)

        print(f"Message sent from {self.phone_number} to {other_phone.phone_number}")

    def show_outgoing_messages(self):
        print(f"\nOutgoing messages from {self.phone_number}:")
        
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message)

    def show_incoming_messages(self):
        print(f"\nIncoming messages to {self.phone_number}:")
        
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message)

    def show_messages_from(self, number):
        print(f"\nMessages from {number}:")
        
        for message in self.messages:
            if message["from"] == number:
                print(message)



phone1 = Phone("111-111")
phone2 = Phone("222-222")
phone3 = Phone("333-333")

# Calls
phone1.call(phone2)
phone2.call(phone3)

# Show call history
phone1.show_call_history()
phone2.show_call_history()

# Send messages
phone1.send_message(phone2, "Hello!")
phone2.send_message(phone1, "Hi there!")
phone3.send_message(phone1, "How are you?")

# Show messages
phone1.show_outgoing_messages()
phone1.show_incoming_messages()

phone2.show_outgoing_messages()

phone1.show_messages_from("333-333")