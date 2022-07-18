print('--------EXC 1-------------')
class Pets():
    def __init__(self, animals):
        self.animals = animals

    # def walk(self):
    #     for animal in self.animals:
    #         print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

cat1 = Bengal('Cart', 10)
cat2 = Chartreux('Gag', 6)
cat3 = Siamese('Gus', 14)

all_cats = [cat1, cat2, cat3]
sara_pets = Pets(all_cats)


for i in all_cats:
    print(i.walk())

print('--------EXC 2-------------')
class Dog():
    def __init__(self, name:str, age:int, weight: int):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        print(f'{self.name} is barking')

    def run_speed(self):
        speed = self.weight/self.age*10
        print('speed =', speed)
        return (speed)

    def fight(self, other_dog):
        strength1 = Dog.run_speed(self) * self.weight
        strength2 = other_dog.run_speed() * other_dog.weight
        print(strength1, strength2)
        if strength1 > strength2:
            print(self.name,'wins')
        elif strength1==strength2:
            print('tie')
        else:
            print(other_dog.name,'wins')

dog1 = Dog('Sam', 3, 30)
dog2 = Dog('Tiger', 6, 60)
dog3 = Dog('Panzerschwein', 2, 80)

dog1.bark()
dog2.run_speed()
dog3.fight(dog2)

print('--------EXC 3-------------')
