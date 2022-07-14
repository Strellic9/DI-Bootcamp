# display_board() – To display the Tic Tac Toe board (GUI).
# player_input(player) – To get the position from the player.
# check_win() – To check whether there is a winner or not.
# play() – The main function, which calls all the functions created above.

from winsound import PlaySound


row1, row2, row3 = list(), list(), list()
matrix = [
    row1,
    row2,
    row3
]
isGameOver = False
gameResult = 'default'

print(isGameOver)

def create_board() -> None:
    '''
    create matrix which will hold values of X and O
    '''
    for i in matrix:
        for j in range(3):
            i.append(' ')


def display_board() -> None:
    '''
    print the playing field with current situation
    '''
    board = f'''
            PLAYING FIELD
            ***********************
            *    {matrix[0][0]}  |  {matrix[0][1]}  |  {matrix[0][2]}    *
            *  _____|_____|_____  *
            *    {matrix[1][0]}  |  {matrix[1][1]}  |  {matrix[1][2]}    *
            *  _____|_____|_____  *
            *    {matrix[2][0]}  |  {matrix[2][1]}  |  {matrix[2][2]}    *
            *       |     |       *
            ***********************
            '''
    print(board)

def player_input(player: str) -> None:
    '''
    take x,y from player (row and column of his move).
    assign X or O to cell (x,y) of matrix
    '''
    playerMark = str()
    if player=='Player X':
        playerMark='X'
    else:
        playerMark='O'
    
    possible_input = [0,1,2]
    x=input('Enter row:  ')
    y=input('Enter column:  ')
    while x.isnumeric()!=True and y.isnumeric()!=True:
        print('u stoopid. X or Y not number. Enter again')
        x=input('Enter row:  ')
        y=input('Enter column:  ')
    x=int(x)-1
    y=int(y)-1
    while x not in possible_input or y not in possible_input:
        print('u stoopid. X or Y invalid numbers. Enter again')
        x=int(input('Enter row:  '))-1
        y=int(input('Enter column:  '))-1
    while matrix[x][y]!=' ':
        print('u stoopid. Cell is already taken. Enter again')
        x=int(input('Enter row:  '))-1
        y=int(input('Enter column:  '))-1

    for i in range(3):
        for j in range(3):
            if i==x and j==y:
                matrix[i][j] = playerMark

def is_game_over() -> bool:
    global gameResult
    # проверка по строкам
    for i in matrix:
        if i[0]==i[1]==i[2] and i[0]!=' ':
            if i[0]=='X':
                gameResult='Player X won'
                return True
            else:
                gameResult='Player O won'
                return True
                
    # проверка по столбцам
    for i in range(3):
        if matrix[0][i]==matrix[1][i]==matrix[2][i] and  matrix[0][i]!=' ':
            if matrix[0][i]=='X':
                gameResult='Player X won'
                return True
            else:
                gameResult='Player O won'
                return True

    # проверка по диагоналям
    if (matrix[0][0]==matrix[1][1]==matrix[2][2] or matrix[2][0]==matrix[1][1]==matrix[0][2]) and matrix[1][1]!=' ':
        if matrix[1][1]=='X':
            gameResult='Player X won'
            return True
        else:
            gameResult='Player O won'
            return True

    # проверка что не кончилось место
    
    for i in matrix:
        if ' ' in i:
            ifNoSpaceLeft = False
            break
        else:
            ifNoSpaceLeft = True

    if ifNoSpaceLeft == True:
        gameResult='Tie. No space left'
        return True
    else:
        gameResult='Game not finished'
        return False

players = ['Player X', 'Player O']
player = ''
def play_game () -> None:
    '''
    function to play the game
    '''
    global isGameOver
    global playerMark
    global players
    global player
    playerCount = 0
    
    create_board()
    display_board()
    print('LETS GOOOO \n')

    while isGameOver==False:
        player=players[playerCount % 2]
        playerCount+=1
        print(f'{player}`s turn')
        player_input(player)  
        isGameOver = is_game_over()
        display_board()
    else:
        print(gameResult)

        
play_game()
    
