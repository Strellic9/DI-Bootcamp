class Farm():
    def __init__(self, name: str) -> None:
        self.name = name
        self.animals = dict()

    def add_animal(self, name: str, count: int = 1) -> None:
        if name not in self.animals:
            self.animals[name] = count
        else:
            self.animals[name]+=count
    
    def get_info(self) -> None:
        print(f'{self.name}`s farm \n')
        for key, value in self.animals.items():
            print(f'{key}: {value}')
        print('\n      E-I-E-I-O!')

    def get_animal_types(self) -> list:
        sortedAnimals = list()
        for i in self.animals:
            sortedAnimals.append(i)
        sortedAnimals = sorted(sortedAnimals)
        return sortedAnimals

    def get_short_info(self) -> None:
        sortedAnimals = Farm.get_animal_types(self)
        stringAnimals = str()
        for i in range (len(sortedAnimals)-2):
            stringAnimals += sortedAnimals[i]+', '
        stringAnimals += sortedAnimals[-2]
        stringAnimals += ' and '+sortedAnimals[-1]
        print(f'{self.name}`s farm has {stringAnimals}')

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()

print(macdonald.get_animal_types())
macdonald.get_short_info()