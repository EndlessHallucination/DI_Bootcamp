#Daily challenge
#1
user_input = input("Give me your word: ")
letter_indices={}

for i, l in enumerate(user_input):
        if l in letter_indices:
            letter_indices[l].append(i)
        else:
            letter_indices[l] = [i]
            
print(letter_indices)


#2
items_purchase = {"Water": "$1", "Bread": "$3", "TV": "$1,000", "Fertilizer": "$20"}
wallet = int("$0".replace("$",""))

basket = []

for item, price in items_purchase.items():
    clean_price = int(price.replace("$","").replace(",",""))
    if clean_price < wallet:
        basket.append(item)
        wallet -= clean_price 

if len(basket) == 0:
    print("Nothing")
else:
    basket.sort()
    print(basket, wallet)


   
    