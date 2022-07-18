print('--------EXC 1-------------')

import math
class Pagination:
    def __init__(self, items: list = [], pageSize: int = 10) -> None:
        self.items = items
        self.pageSize = pageSize
        self.pagesNumber = math.ceil( len(self.items) / self.pageSize)
        # self.pagesList = list(range(self.pagesNumber))
        self.currentPage = 0
        # print(self.pagesNumber, self.pagesList, self.currentPage)

    def getVisibleItems(self) -> None:
        k = self.currentPage * self.pageSize
        newList = list()
        if k>= (self.pageSize-1) * self.pagesNumber:
            for i in range(len(self.items)-(self.pagesNumber-1)*self.pageSize):
                newList.append(self.items[k+i])
        else:    
            for i in range(self.pageSize):
                newList.append(self.items[k+i])
        print(newList)

    def prevPage(self) -> None:
        self.currentPage-=1
        print('we moved to the prev page:', self.currentPage+1)

    def nextPage(self) -> None:
        self.currentPage+=1
        print('we moved to the next page:', self.currentPage+1)

    def firstPage(self) -> None:
        self.currentPage=0
        print('we moved to the 1st page:', self.currentPage+1)

    def lastPage(self) -> None:
        self.currentPage=self.pagesNumber-1
        print('we moved to the last page:', self.currentPage+1)


    def goToPage(self, page_number:int) -> None:
        try:
            self.currentPage=page_number-1
            print('we moved to the page:', self.currentPage+1)
        except:
            raise Exception('u stoopid. We have less pages')


alphabetString = "abcdefghijklmnopqrstuvwxyz"
alphabetString2 = str()
for i in alphabetString:
    alphabetString2+= i+' '
alphabetList = alphabetString2.split(' ')
alphabetList.remove('')
print(alphabetList)

p = Pagination(alphabetList, 3)
p.getVisibleItems()

p.nextPage()
p.getVisibleItems()

p.lastPage()
p.getVisibleItems()

p.firstPage()
p.getVisibleItems()

p.goToPage(5)
p.getVisibleItems()


