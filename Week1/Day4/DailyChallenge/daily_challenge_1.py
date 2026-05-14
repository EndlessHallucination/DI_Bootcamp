#Coffee Shop Menu Manager

menu = {
    "espresso": 7.0,
    "latte": 12.0,
    "cappuccino": 10.0
}

def show_menu(menu_dict):
    if len(menu_dict) == 0:
        print("The menu is empty")
    for i, p in menu_dict.items():
        print(f"{i} - {p}₪")

def add_item(menu_dict):
    user_input = input("Add new drink and its price separated by a colon (key:value): ")
    key, val = user_input.split(':')
    if key not in menu_dict.keys():
        menu_dict[key.strip()] = float(val.strip())
        print(f"{user_input} added\n")
    else: 
        print("Item already exists!")

def update_price(menu_dict):
    user_key= input("which drink would you like to update").lower()
    if user_key in menu_dict:
        user_value = float(input("provide new price"))
        menu_dict[user_key] = user_value
        print(f"{user_key} price has been changed\n")
    else:
        print("Item not found")

def delete_item(menu_dict):
    user_input = input("Which drink to remove")
    if user_input in menu_dict:
        del(menu_dict[user_input])
        print(f"{user_input} deleted\n")
    else: 
        print("Item not found")

def show_options():
    print("What would you like to do?\n1. Show menu\n2. Add item\n3. Update price\n4. Delete item\n5. Exit")
    
def run_coffee_shop():
    shop_running = True
    while(shop_running):
        show_options()
        user_input = input("> ")

        if user_input == "1":
            show_menu(menu)
        elif user_input == "2":
            add_item(menu)
        elif user_input == "3":
            update_price(menu)
        elif user_input == "4":
            delete_item(menu)
        elif user_input == "5":
            print("Goodbye")
            shop_running = False
            break
        else: 
            print("Invalid choice, try again.")

run_coffee_shop()