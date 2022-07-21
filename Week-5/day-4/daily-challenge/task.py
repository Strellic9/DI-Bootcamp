from string import punctuation

print('--------EXC 1-------------')
testString = 'A good book, would, sometimes, cost,.., as much.,. as. .a good good house'

# def checkWhiteSpaceInList(list: list) -> list:
#     print(list)
#     try:
#         list1 = list.remove('')
#         # list1 = list.remove(' ')
#         list = list1
#     except:
#         print('no WS in list')
#     print(list)
#     return list

class Text():
    text = testString
    textList = text.split(' ')
    # textList = checkWhiteSpaceInList(textList)

    def __init__(self) -> None:
        pass
    
    def wordFrequency(self, word:str) -> str:
        x = Text.text.count(word)
        if x==0:
            print('no luck with word:', word)
        else:
            print('got this one. Number of instances:', x)
    
    def mostCommonWord(self) -> str:
        max = 0
        maxWord = str()
        for i in Text.textList:
            x = Text.text.count(i)
            if x>max:
                max=x
                maxWord = i
        print(f'most frequent word: |{maxWord}|','\nnumber of instances:', max)
        return(maxWord)

    def allUniqueWords(self) -> list:
        # newList = self.list.copy()
        newList = list()
        for i in Text.textList:
            i = i.lower()
            if i in newList:
                pass
            else:
                newList.append(i)
        print('list of unique words:', newList)
        return newList
    
    @classmethod
    def fromFile(cls, direction:str) -> None:
        with open(direction, mode='r') as myFile:
            textFromFile = myFile.read()
        # countN = textFromFile.count('\n')
        # textFromFile= textFromFile.replace('\n', str())
        # textFromFile = textFromFile.strip('\n')
        cls.text = textFromFile
        cls.textList =  cls.text.split(' ')
        # cls.textList = checkWhiteSpaceInList(cls.textList)


    # @classmethod
    # def deleteWhiteSpace(cls) -> list:
    #     cls.textList = cls.textList.remove(' ')
    #     cls.textList = cls.textList.remove('  ')

stopWords = [ 'stop', 'the', 'to', 'and', 'a', 'in', 'it', 'is', 'I', 'that', 'had', 'on', 'for', 'were', 'was']
WS = ' '
# for i in stopWords:
stopWords = ['{} '.format(i) for i in stopWords]
# print(i)
print(stopWords)

class TextModification(Text):
    text = Text.text
    textList = text.split(' ')
    punc = ['.', ',', ':', ';']

    def __init__(self):
        pass
            
    @classmethod
    def refresh(cls) -> None:
        cls.text = Text.text
        cls.textList = cls.text.split(' ')

    @classmethod
    def noPunctuation(cls) -> None:
        for i in cls.punc:
            if cls.text.count(i)>0:
                # print(i, cls.text.count(i))
                cls.text = cls.text.replace(i, '')
        print(cls.text)

    @classmethod
    def noSpecialChar(cls) -> None:
        for i in punctuation:
            if cls.text.count(i)>0:
                # print(i, cls.text.count(i))
                cls.text = cls.text.replace(i, '')
        print(cls.text)

    @classmethod
    def noStopWords(cls) -> None:
        for i in stopWords:
            if cls.text.count(i)>0:
                # print(i, cls.text.count(i))
                cls.text = cls.text.replace(i, '')
        print(cls.text)

t1 = Text()
# t2 = TextModification()

Text.fromFile(r'C:\Users\Acca\Desktop\DI-Bootcamp\Week-5\day-4\daily-challenge\the_stranger.txt')
TextModification.refresh()
# TextModification.noPunctuation()
# TextModification.noSpecialChar()
TextModification.noStopWords()
# t1.wordFrequency('ggg')
# t1.mostCommonWord()
# t1.allUniqueWords()

