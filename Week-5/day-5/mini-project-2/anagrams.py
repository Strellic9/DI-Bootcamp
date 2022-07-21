from string import punctuation
from anagram_checker import AnagramChecker

def main():
    possibleAns = ['i','e']
    userChoice = str()
    while userChoice != 'e':
        print('''
        --------------------MENU-------------------
        Input a word (I)
        Exit (E)
        ''')
        userChoice = str()
        while userChoice not in possibleAns:
            userChoice = input('Your choice?  ').lower()

        if userChoice != 'e':
            userInput = input('Now enter the word:  ')
            userInput = userInput.strip()
            check = checkWord(userInput)
            if check == False:
                print(userInput,'is not a valid word')
                return
            if check == True:
                a1 = AnagramChecker()
                result = a1.getAnagrams(userInput)
                resultString = str()
                for i in result:
                    if i == result[0]:
                        resultString += i
                    else:
                        resultString +=', '+i
                print(f'''
                YOUR WORD: {userInput.upper()}
                this is a valid English word
                Anagrams for your word: {resultString}
                ''')
        else:
            print('''
            ---------------THANKS FOR YOUR TIME--------------
            ''') 
            return


def checkWord(word:str) -> bool:
    # empty string
    if word == '' or word == ' ':
        return False
    # check if no special chars
    for i in punctuation:
        if i in word:
            return False
    # check that 1 word
    if len(word.split(' '))>1:
        return False
    return True

main()