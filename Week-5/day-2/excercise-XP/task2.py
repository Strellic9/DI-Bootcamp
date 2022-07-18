print('--------EXC 3-------------')

from task import Dog
import random
# import task


class petDog(Dog):
    def __init__(self, name:str, age:int, weigth: int, trained:bool = False) -> None:
        # Dog.__init__(name, age, weigth):
        super().__init__(name, age, weigth)
        self.trained = trained

    def train(self):
        self.bark()
        self.trained = True

    def play(self, *dogs) -> None:
        dog_names = str(self.name)
        for i in dogs:
            dog_names+=', '+ i.name
        print(f'{dog_names} all play together ')

    def do_a_trick(self) -> None:
        if self.trained==True:
            k = random.randint(0,3)
            match k:
                case 0: 
                    print(f'{self.name} does a barrel roll')
                case 1: 
                    print(f'{self.name} stands back on his legs')
                case 2: 
                    print(f'{self.name} shaken hand')
                case 3: 
                    print(f'{self.name} play dead')
    

dog1 = petDog('Asseater', 5, 40, False)
dog2 = petDog('Truck', 2, 200, False)
dog3 = petDog('Amogus', 3, 50, False)


dog1.train()
dog1.play(dog2, dog3)
dog1.do_a_trick()
