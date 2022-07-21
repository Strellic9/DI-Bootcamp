print('-------EXC 1---------')

# myFile = open(r'C:\Users\Acca\Desktop\DI-Bootcamp\Week-5\day-4\excercise-XP\sowpods.txt')
myList = list()
myFile = r'C:\Users\Acca\Desktop\DI-Bootcamp\Week-5\day-4\excercise-XP\sowpods.txt'

def get_words_from_file(myFile) -> list:
    with open(myFile, mode='r') as myFile:
        for line in myFile:
            x = line
            x1 = x[:-1]
            myList.append(x1)

    print(myList)
    return(myList)

randomList = get_words_from_file(myFile)
from logging import exception
import random

def get_random_sentence(length:int) -> str:
    sentence = str()
    for i in range(length):
        x = random.randint(0, len(randomList)-1)
        x = randomList[x].lower()
        sentence+=x+' '
    print('\n ur random sentence sir/maam:',sentence)
    return sentence

# get_random_sentence(15)

def main() -> None:
    print('we take a legnth of sentence from u and give u a sentence with given amount of random words. Cool right?')
    length = input('Give a number of words in sentence. from 2 to 20:   ')
    try:
        length = int(length)
        if length<2 or length>20:
           raise exception('u stoopid') 
    except:
        raise Exception('u stoopid')
    return get_random_sentence(length)
    
# main()

print('-------EXC 2---------')

import json
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# with open(sampleJson, 'r') as myFile:
    # myDict = json.load(myFile)

myDict = json.loads(sampleJson)

print(myDict)
x= myDict['company']['employee']['payable']['salary']
print('salary:', x)
myDict['company']['employee']['birth_date'] = '03-03-1998'
print(type(myDict))

with open(r'C:\Users\Acca\Desktop\DI-Bootcamp\Week-5\day-4\excercise-XP\sampleJson.json', 'w') as myFile:
    json.dump(myDict, myFile)