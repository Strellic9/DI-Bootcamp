print('__________EXC 1___________')

catNames = list()
catAges = list()

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
        catNames.append(self.name)  
        catAges.append(self.age)

Tom = Cat('Tom',3)
Bulb = Cat('Bulb', 19)
Peanut = Cat('Peanut', 12)

def compareCats():
    max = 0
    maxIndex= int()
    for i in range(len(catNames)):
        if catAges[i] > max:
            max = catAges[i]
            maxIndex = i
    print(catNames[maxIndex])
    return catNames[maxIndex], max 

oldCat, oldCatAge = compareCats()
print(f'The oldest guy is a {oldCat}, and he`s age is {oldCatAge}')


print('__________EXC 2___________')

dogNames = list()
dogSize = list()

class Dog:
    def __init__(self, name, heigth):
        self.name = name
        self.heigth = heigth
        dogNames.append(self.name)
        dogSize.append(self.heigth)

    def bark(self):
        print(f'de dog {self.name} goes WOOF')

    def jump(self):
        x = self.heigth*2
        print(f'{self.name} jumps {x}cm heigth!')

davids_dog = Dog('Rex', 50)
dog2 = Dog('Muha', 70)
dog3 = Dog('Sosiska', 80)
print(davids_dog.name, davids_dog.heigth)
davids_dog.bark()
davids_dog.jump()

for i in range(len(dogNames)):
    max = 0
    maxIndex = int()
    if dogSize[i]>max:
        max = dogSize[i]
        maxIndex = i
print(dogNames[maxIndex], 'is the biggest')

print('__________EXC 3___________')

class Song:
    def __init__(self, lyrics: list):
        self.lyrics = lyrics

    def singMeASong(self):
        for i in self.lyrics:
            print(i)

stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.singMeASong()


print('__________EXC 4___________')

sortedAnimalsDict = dict()

class Zoo:
    def __init__(self, animals: list, name: str) -> None:
        self.animals = animals
        self.name = name
    
    def add_animal(self, new_animal: str) -> None:
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(new_animal, 'is added to the zoo')

    def sell_animal(self, animal_sold: str) -> None:
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(animal_sold, 'is sold from the zoo')
    

    def sort_animals(self) -> None:
        # k = 0
        sortedAnimals = sorted(self.animals)
        for i in sortedAnimals:
            if i[0] not in sortedAnimalsDict:
                sortedAnimalsDict[i[0]] = [i]
            else:
                sortedAnimalsDict[i[0]].append(i)
    
    def get_groups(self) -> None:
        print(sortedAnimalsDict)

animals_1 = ["Ape","Baboon", "Bear",'Cat', 'Cougar','Eel', 'Emu']
Orlenok = Zoo(animals_1, 'Orlenok')
# Orlenok.sort_animals()

new_animal_1 = input('who should we buy? ')
Orlenok.add_animal(new_animal_1)

sell_animal_1 = input('who should we sell? ')
Orlenok.sell_animal(sell_animal_1)

Orlenok.sort_animals()
Orlenok.get_groups()
