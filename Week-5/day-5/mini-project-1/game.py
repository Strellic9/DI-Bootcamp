import random

print(' ROCK PAPER SCISSORS BABE')
possibleOptions = ['rock', 'paper', 'scissors']

class Game():
    # def __init__(self): 
    #     pass

    def get_user_item() -> str:
        userInput = input('select paper | rock | scissors  ').lower()
        while userInput not in possibleOptions:
            userInput = input('u stoopid. Select again   ')
        return userInput

    def get_computer_item():
        computerInput = possibleOptions[random.randint(0,2)]
        return computerInput

    def get_game_result(userItem: str, computerItem: str):
        # def compareItems(pl1:str,pl2:str) -> str:
        match userItem:
            case 'rock':
                match computerItem:
                    case 'rock': 
                        return 'Tie'
                    case 'paper':
                        return 'Lose'
                    case 'scissors':
                        return 'Win'
            case 'paper':
                match computerItem:
                    case 'rock': 
                        return 'Win'
                    case 'paper':
                        return 'Tie'
                    case 'scissors':
                        return 'Lose'
            case 'scissors':
                match computerItem:
                    case 'rock': 
                        return 'Win'
                    case 'paper':
                        return 'Lose'
                    case 'scissors':
                        return 'Tie'

    @classmethod
    def play(cls,):
        userItem = cls.get_user_item()
        computerItem = cls.get_computer_item()
        result = cls.get_game_result(userItem, computerItem)
        print(f'You selected {userItem}, computer selected {computerItem}. Result for you: {result}')
        return result

# Game.play()