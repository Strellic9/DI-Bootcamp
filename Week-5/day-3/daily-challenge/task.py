import math
import turtle

class Circle():
    def __init__(self, value_of_radius_or_diameter: int, radius_or_diameter:str = 'radius') -> int:
        if radius_or_diameter == 'radius':
            self.radius = value_of_radius_or_diameter
        elif radius_or_diameter == 'diameter':
            self.radius = value_of_radius_or_diameter / 2
        else:
            raise Exception ('only `radius` or `diameter` accepeted')

    def circleArea(self):
        self.circleArea = (self.radius**2)*math.pi
        print(self.circleArea)
        return self.circleArea
    
    def drawCircle(self):
        t = turtle.Turtle()
        t.circle(self.radius*10)

    def __add__(self, other):
        if type(other) == type(self):
            self.radius+= other.radius
            print('radiuses of 2nd circle added to the 1st')
        else:
            print('u stoopid. Only circles allowed')

    def compareCircles(self, other):
        if type(other) == type(self):
            if self.radius > other.radius:
                print('1st is bigger')
            elif self.radius == other.radius:
                print('they are equal')
            else:
                print('2nd is bigger')   
        else:
            print('u stoopid. Only circles allowed')

    def putInList(self, *args) -> list:
        circlesList = list()
        circlesList.append(self.radius)
        for i in args:
            if type(i) != type(self):
                print('only circles allowed')
                return
            else:
                circlesList.append(i.radius)
        circlesList = sorted(circlesList)
        print('sorted list of circles (their radiuses):', circlesList)
        return circlesList



c1 = Circle(10)
c2 = Circle(5)
c3 = Circle(3)
c1.circleArea()
# c1.drawCircle()
# c1+c2
# c1.drawCircle()
c1.compareCircles(c2)
c1.putInList(c2,c3)