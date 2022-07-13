from random import random


print('_____________EXC 1___________ \n')
def display_message() -> None:
    print('am learnin')

display_message()


print('_____________EXC 2___________ \n')
def favorite_book(title: str) -> None:
    print(f'one of my fav books is {title}')

favorite_book('Black Swan by NN Taleb')

print('_____________EXC 3___________ \n')
def describe_city(city: str, country: str = 'Israel') -> None:
    print(f'{city} is in {country}')

describe_city('Tel-Aviv')

print('_____________EXC 4___________ \n')
import random

def compareNumbers (x: int) -> None: 
    y = random.randint(1,100)
    print(x,y)
    if x==y:
        print('success')
    else:
        print('fail')

compareNumbers(random.randint(1,100))

print('_____________EXC 5___________ \n')
def make_shirt(size: str = 'L', text: str = 'I love Python') -> None:
    print(f'The size of the shirt is {size} and the text is `{text}`')

make_shirt()
make_shirt('M')
make_shirt('M', 'Give war a chance')

make_shirt(text='The freedom is coming for all men who bend thier will', size='S')


print('_____________EXC 6___________ \n')

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

show_magicians = map(lambda str: print(str), magician_names)
show_magicians

# make_great = map(lambda str: str.insert(0, 'The Great '), magician_names)


def make_great (names: list) -> list:
    newNames = []
    for i in names:
        k = list(i)
        k.insert(0, 'The Great ')
        k = ''.join(k)
        print(k)
        newNames.append(k)
    return newNames

magicial_names = make_great(magician_names)
show_magicians


print('_____________EXC 7___________ \n')



def get_random_temp (season: str) -> float:
    if season == 'winter':
        tmin = -10
        tmax = 10
    if season == 'spring':
        tmin = 5
        tmax = 30
    if season == 'summer':
        tmin = 20
        tmax = 40
    if season == 'fall' or 'autumn':
        tmin = 0
        tmax = 25
    else:
        tmin = -10
        tmax = 40
    x = int(100*(random.random()*(tmax-tmin)+tmin))
    x = float(x / 100)
    return(x)

def main() -> None:
    userInput = int(input('whats de number of month?'))
    if userInput in range(3,6):
        season='spring'
    elif userInput in range(6,9):
        season='summer'
    elif userInput in range(9,12):
        season='fall'
    else:
        season='winter'
    
    randomTemp = get_random_temp(season)
    print(randomTemp)
    if randomTemp<0:
        print('cold temp')
    elif randomTemp<16:
        print('decent temp')
    elif randomTemp<23:
        print('good temp')
    elif randomTemp<32:
        print('warm temp')
    else:
        print('hot temp')

main()
