from asyncio.windows_events import NULL


print('______EXC 1__________ \n')

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

dict =  {keys: values for (keys,values) in zip(keys,values)}
print(dict)

print('______EXC 2 w bonus__________ \n')

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

userX = ''
userY = ''
family = {}
print('Give me the names and age of family. Say `quit` when finished')
while userX!='quit' or userY!='quit':
    print('Lets move to the next family member')
    userX = input('Name  ')
    if userX=='quit':
        break
    userY = input('Age  ')
    if userY=='quit':
        break
    userY = int(userY)
    family[userX] = userY
print(family)

familyPrice = 0
for x,y in family.items():
    if y<3:
        print('0 dollars for {}'.format(x))
    elif y>12:
        familyPrice+=15
        print('15 dollars for {}'.format(x))
    else: 
        familyPrice+=10
        print('10 dollars for {}'.format(x))

print('so the price for whole family is {}'.format(familyPrice))


print('______EXC 3__________ \n')

brand = {}
brand['name'] = 'Zara'
brand['creation_date'] = 1975
brand['creator_name'] = 'Amancio Ortega Gaona'
brand['type_of_clothes'] = ['men', 'women', 'children', 'home' ]
brand['international_competitors'] = ['Gap', 'H&M', 'Benetton' ]
brand['number_stores'] = 7000
brand['major_color'] = {
    'France': 'blue', 
    'Spain': 'red', 
    'US': ['pink', 'green']
}

brand['number_stores'] = 2
clients = brand['type_of_clothes']
print('Zara`s clients are {}, {} and {}.'.format(clients[0], clients[1], clients[2]))

brand['country_creation'] = 'Spain'
if 'international_competitors' in brand:
    print('\n YAY \n')
    brand['international_competitors'].append('Desigual')

del brand['creation_date']

print(brand['international_competitors'][-1], '\n')

print(brand['major_color']['US'], '\n')

print(len(brand.keys()), '\n')

print(brand.keys(), '\n')

more_on_zara = {
    'creation_date': 1975,
    'number_stores': 10000,
}
brand.update(more_on_zara)

print(brand['number_stores'], ';the dictoinaries merged, as intended. thats whats happened')


print('______EXC 4__________ \n')

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

users_A = {name: users.index(name) for name in users}

print (users_A)

users_B = {users.index(name): name for name in users}

print (users_B)

usersSorted = sorted(users)
users_C = {name: usersSorted.index(name) for name in usersSorted}

print (users_C)

users_D = {(name if 'i' in name else None): (users.index(name) if 'i' in name else None) for name in users}
del users_D[None]

print (users_D)

users_E = {(name if name[0]=='M' or name[0]=='P' else None): (users.index(name) if name[0]=='M' or name[0]=='P' else None) for name in users}
del users_E[None]

print (users_E)

