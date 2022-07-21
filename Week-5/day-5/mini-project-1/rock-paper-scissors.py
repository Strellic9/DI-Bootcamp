from game import Game

countWin = 0
countLose = 0
countTie = 0

def get_user_menu_choice() -> str:
    print('''
    --------------------MENU--------------------
    Play a new game (P)
    Show scores (S)
    Quit (Q)
    ''')
    possibleOptions = ['p','s','q']
    userInput = input('Ur choice:  ').lower()
    # USER INPUT HERE
    while userInput not in possibleOptions:
        userInput = input('u stoopid. again  ')
    return userInput
    
    

def print_results() -> None:
    print(f''' 
            ------SCORE-----
            You win: {countWin} times
            You lose: {countLose} times
            You tie: {countTie} times
            ''')


def main() -> None:
    print('Game begins')
    userInput = str()
    global countWin, countTie, countLose
    while userInput != 'q':
        userInput = get_user_menu_choice()
        match userInput:
            case 'p':
                result = Game.play()
                match result:
                    case 'Win':
                        countWin+=1
                        print('''
                        **********************
                        ГРАТС
                        **********************
                        ''')
                    case 'Lose':
                        countLose+=1
                        print('''
                        **********************
                        АБЫДНА ДА?
                        **********************
                        ''')
                    case 'Tie':
                        countTie+=1
                        print('''
                        **********************
                        ЛИЧНО МНЕ НЕЙТРАЛЬНО
                        **********************
                        ''')
            case 's':
                print_results()
    else:
        print_results()
        countWin = 0
        countLose = 0
        countTie = 0
        print('''K game reseted
        **********************
        НАШЕ КАЗИНО ЖДЕТ ВАС СНОВА
        **********************
        ''')

main()