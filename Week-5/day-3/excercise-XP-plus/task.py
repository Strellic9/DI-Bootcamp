print('-------EXC 1------------')

import func
print(func.add(1,2))



print('-------EXC 2------------')
import random

def func(num: int) -> int:
    num2 = random.randint(1,100)
    if num == num2:
        print('SUCCESS')
    else:
        print('NO')

func(random.randint(1,100))

print('-------EXC 3------------')

import string

bigString = string.ascii_letters

newString = str()
for i in range(5):
    n = random.randint(0,len(bigString)-1)
    newString+=bigString[n]
print(newString)

print('-------EXC 4------------')
import datetime

print(datetime.datetime.now())

print('-------EXC 5------------')

def timeUntilNY():
    timeNow = datetime.datetime.now()
    timeNY = datetime.datetime(2023, 1, 1, 0, 0, 0)
    delta = timeNY - timeNow
    # delta.time
    print('Time until 1st of Jan:',delta)
    return delta

timeUntilNY()

print('-------EXC 6------------')
# stringBD = input('giv ur birthday DD-MM-YYYY')
stringBD = '03-03-1998'
listBD = stringBD.split('-')
timeNow = datetime.date.today()

for i in range(3):
    listBD[i] = int(listBD[i])
timeBD = datetime.date(listBD[2],listBD[1],listBD[0])
print(timeBD)
deltaBD = timeNow-timeBD
listBD2 = str(deltaBD).split(' ')

print(f'u lived about: {int(listBD2[0])*60} minutes')

print('-------EXC 7------------')

timeNow = datetime.datetime.now()

timeHoliday = datetime.datetime(2022, 8, 12, 0, 0, 0)
holidayName = 'Tu B`av'
def timeUntilHoliday():
    print('until next holiday:', timeHoliday-timeNow, 'hours')
    print('this holiday is called:', holidayName)

timeUntilHoliday()

print('-------EXC 8------------')
meInSeconds = int(listBD2[0])*60*60
# print(meInSeconds)

ageInSeconds = meInSeconds
ageInYears = ageInSeconds / (365*24*60*60)
print('age in seconds:', ageInSeconds)
print('age in Earth years:', ageInYears)

planet = 'Yupiter'

mercuryCoef = 0.2408
venusCoef = 0.6151
earthCoef = 1
marsCoef = 1.8808
jupiterCoef = 11.8626

def ageOnPlanet(planet:str, ageInYears: int) -> int:
    match planet:
        case 'Earth':
            newAge = ageInYears / earthCoef
            print(f'ur age on {planet}:', newAge)
            return newAge
        case 'Mercury':
            newAge = ageInYears / mercuryCoef
            print(f'ur age on {planet}:', newAge)
            return newAge
        case 'Venus':
            newAge = ageInYears / venusCoef
            print(f'ur age on {planet}:', newAge)
            return newAge
        case 'Mars':
            newAge = ageInYears / marsCoef
            print(f'ur age on {planet}:', newAge)
            return newAge
        case 'Jupiter':
            newAge = ageInYears / jupiterCoef
            print(f'ur age on {planet}:', newAge)
            return newAge
        case _:
            print('no such planet in our app. Come back later')
            return 

ageOnPlanet(planet, ageInYears)

print('-------EXC 9------------')

from faker import Faker
fake = Faker()

users = list()

def addUser():
    user = dict()
    user['name'] = fake.name()
    user['adress'] = fake.address()
    user['language_code'] = 'en-us'
    users.append(user)

for i in range(5):
    addUser()

print(users)