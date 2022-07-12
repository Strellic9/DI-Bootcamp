cars = "Volkswagen, Toyota, Ford Motor, Honda, Chevrolet"

listCars = cars.split(', ')
print(len(listCars))

print(sorted(listCars, reverse=True))
ifLetterO = 0
ifNoLetterI = 0


for i in listCars:
    if 'o' in i:
        # print(i)
        # print(ifLetterO, type(ifLetterO))
        ifLetterO+=1
    if 'i' not in i:
        ifNoLetterI+=1

print(ifLetterO)
print(ifNoLetterI)

print('_____________________BONUS not done (dont want to :)___________')

cars2 = ["Honda","Volkswagen", "Toyota", "Ford Motor", "Honda", "Chevrolet", "Toyota"]

# for i in range(len(cars2)):
#     while cars2[i] in cars2[0:i]+cars2[i+1:]