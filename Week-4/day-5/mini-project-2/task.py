class RPG_attributes:
    '''
    sets the basic char attributes
    '''
    
    def __init__(self, level: int) -> None:
        self.strength = 100+level*10
        self.dexterity = 50+level*10
        self.vigor = 2000+level*100
        self.faith = 20+level*5
        print( self.strength,  self.dexterity,  self.vigor,  self.faith)


conan_attributes = RPG_attributes(0)