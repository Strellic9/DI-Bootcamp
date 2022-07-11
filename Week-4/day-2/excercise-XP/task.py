print('EXC 1') 
my_fav_numbers = set()
my_fav_numbers.add (1)
my_fav_numbers.add (3)
my_fav_numbers.add (7)
my_fav_numbers.remove(7)

friend_fav_numbers = set()
friend_fav_numbers.add(3)
friend_fav_numbers.add(5)
friend_fav_numbers.add(9)

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print(my_fav_numbers)
print(friend_fav_numbers)
print(our_fav_numbers)


# EXC 2 
print('EXC 2') 
print('u cant, by definition. not intil u convert it to list for example')


# EXC 3
print('EXC 3') 
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove('Banana')
del basket[2]
basket.append('Kiwi')
basket.insert(0, 'Apples')
print(basket)


appleCount = 0
for i in range(len(basket)):
    if basket[i] == 'Apples':
        appleCount +=1

print(appleCount) 

basket = []

print(basket)

# EXC 4
print('EXC 4') 

print('1) float in an integer with decimal numbers after the comma') 
print('2) fnction random.random() multiplied by whatever range u want ur floats to be from') 

floatSequence = [];
for i in range(8):
    floatSequence.append (1.5+0.5*i)

print(floatSequence)


# EXC 5
print('EXC 5') 
numbersList = [];
for i in range(1,21):
    numbersList.insert(i, i)

print(numbersList)

numbersListEven = list()
for i in numbersList:
    if numbersList.index(i) % 2 == 0:
        numbersListEven.append(i)

print(numbersListEven)

# EXC 6
print('EXC 6') 
myName = 'Aleksei'
userName = input('Give me a name  ')
while userName != myName:
    userName = input('Give me a better name')


# EXC 7
print('EXC 7') 
userFruits = input('Give me ur fav fruts. Separate by 1 space  ')
userFruitsList = userFruits.split(' ')
print(userFruitsList)
userOneFruit = input('Give me a frut   ')

if userOneFruit in userFruitsList:
    print('You chose one of your favorite fruits! Enjoy!')
else: 
    print('You chose a new fruit. I hope you enjoy')

# EXC 8
print('EXC 8')
userToppings = list() 
userPizzaInput = list()
while 'quit' not in userPizzaInput:
    userPizzaInput = input('Any topping for piza? type quit when over \n')
    if userPizzaInput == 'quit':
        break
    userToppings.append(userPizzaInput)
    print('ok, adding {} to the pizza'.format(userPizzaInput))

userPrice = 10+2.5*len(userToppings)
print('so all of ur toppings are: {} \n and the price is {} \n'.format(userToppings, userPrice))

# EXC 9
print('EXC 9') 

familyInput = str()
familyPrice = 0
familyAge = 0
while 'quit' not in familyInput:
    familyInput = input ('giv an age \n')
    if 'quit' in familyInput:
        break
    familyAge = int(familyInput)
    if familyAge<3:
        familyPrice += 0
    if familyAge>12:
        familyPrice += 15
    else:
        familyPrice += 10
    print('renewed price is {} \n'.format(familyPrice))

print('so the final price is {}'.format(familyPrice))

teensList = ['Joe', 'Jesse', 'Mike', 'Oguzok']
teensRemove = list()
teensAge = int()
for i in teensList:
    print(i)
    teensAge = int(input('{}, whats ur age \n'.format(i)))
    if teensAge not in range (16,22):
        teensRemove.append(i)

for i in teensRemove:
    teensList.remove(i)

print('so the guys who are permitted: {} \n'.format(teensList))

# EXC 10
print('EXC 10') 

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = list()
for i in sandwich_orders:
    print('i made your {}'.format(i))
    finished_sandwiches.append(i)

# EXC 11
print('EXC 11') 
for i in range(5):
    sandwich_orders.append('Pastrami sandwich')

print(sandwich_orders)

finished_sandwiches = list()
for i in range(len(sandwich_orders)):
    if i>len(sandwich_orders):
        break
    if i==6:
        print('deli ran out of pastrami :(')
        while 'Pastrami sandwich' in sandwich_orders:
            sandwich_orders.remove('Pastrami sandwich')
        continue
    print('i made your {}'.format(sandwich_orders[i]))
    finished_sandwiches.append(sandwich_orders[i])

print(finished_sandwiches)
