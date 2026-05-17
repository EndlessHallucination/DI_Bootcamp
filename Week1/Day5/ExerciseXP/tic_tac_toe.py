
def print_title():
    print("=" * 30)
    print("TIC TAC TOE")
    print("=" * 30)

def print_board(board):
    print()
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("--|---|--")
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("--|---|--")
    print(f"{board[6]} | {board[7]} | {board[8]}")

def check_winner(board, player):
    win_combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ]
    for combo in win_combinations:
        if all(board[i] == player for i in combo):
            return True
    return False
    
def board_full(board):
    return all(cell in ['X','O'] for cell in board)
            
def tic_tac_toe():
    board = [str(i) for i in range(1,10)]
    current_player = "X"
    while True:
        print_title()
        print_board(board)

        print(f"{current_player} makes a move now")
        move = input("Choose a position (1-9): ")

        #Validation
        if not move.isdigit():
            print("Please enter a number: ")
            input("Press enter to continue....")
            continue
        
        move = int(move)-1

        if move < 0 or move > 8:
            print("Choose a number in range of 1 to 9")
            input("Press enter to continue....")
            continue 

        if board[move] in ['X', 'O']:
            print("This cell is already taken ")
            input("Press enter to continue....")
            continue 

        board[move] = current_player

        if check_winner(board, current_player):
            print(f'{current_player} wins')
            break

        if board_full(board):
            print('its a draw ')
            break

        if current_player == "X":
            current_player = "O"
        else: current_player = "X"



tic_tac_toe()
