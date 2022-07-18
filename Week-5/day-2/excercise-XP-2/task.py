print('--------EXC 1-------------')

class Family:
    def __init__(self, members: list, last_name: str) -> None:
        self.members = members
        self.last_name = last_name

    def born(self, **new_guys) -> None:
        newDict = dict()
        for key, value in new_guys.items():
            newDict[key] = value
        self.members.append(newDict)
        print(self.members)

    def is_18(self, name:str) -> None:
        for i in self.members:
            if i['name'] == name:
                if i['age'] > 18:
                    return True
                else:
                    return False

    def family_presentation(self) -> None:
        fNames = str()
        for i in self.members:
            fNames+=(i['name'])+', '
        print(self.last_name, fNames)
    
members1 = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]

family1 = Family(members1, 'Grigorovich')
family1.born(name='Itshak',age=17,gender='Male',is_child=False)
print(family1.is_18('Itshak'))
family1.family_presentation()

print('--------EXC 2-------------')

class theIncredibles(Family):
    def __init__(self, members, last_name) -> None:
        super().__init__(members, last_name)

    def use_power(self, member_name):
        for i in self.members:
            if i['name'] == member_name:
                if i['age'] > 18:
                    print(i['incredible_name'], 'uses his power', i['power'])
                else:
                    raise Exception('not allowed to use powers yet')

    def incredible_presentation(self) -> None:
        self.family_presentation()    
        for i in self.members:
            print(i['incredible_name'], 'has a power of:', i['power'])    

members2 = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
]
family2 = theIncredibles(members2, 'Goldman')
family2.use_power('Michael')
family2.incredible_presentation()
family2.born(name='Jack', power='Unknown Power', incredible_name = 'Baby Jack')
family2.incredible_presentation()