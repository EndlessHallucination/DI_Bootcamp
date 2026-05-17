#1
for i in range(1, 4):

    spaces = 3 - i
    stars = 2 * i - 1

    print(" " * spaces + "*" * stars)

#2
for i in range(1, 6):

    spaces = 5 - i
    stars = i

    print(" " * spaces + "*" * stars)

#3

for i in range(1, 6):
    print("*" * i)

for i in range(5, 0, -1):

    spaces = 5 - i

    print(" " * spaces + "*" * i)


#4
my_list = [2, 24, 12, 354, 233]

# Outer loop:
# i goes from 0 to 3
# Each loop searches for the smallest number
# in the remaining unsorted part of the list

for i in range(len(my_list) - 1):

    # Assume current position contains minimum
    minimum = i

    # Inner loop checks the rest of the list
    for j in range(i + 1, len(my_list)):

        # Compare current number with current minimum
        if(my_list[j] < my_list[minimum]):

            # Save new minimum index
            minimum = j

            # If a smaller number was found
            if(minimum != i):

                # Swap numbers
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]

# Print sorted list
print(my_list)