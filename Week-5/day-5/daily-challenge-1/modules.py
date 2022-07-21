import time
import requests
from requests_html import HTMLSession

def measureTimeLoad(adress: str) -> float:
    timeList = list()
    for i in range(5):
        time1 = time.time()
        get = requests.get(url=adress)
        time2 = time.time()
        delta = time2-time1
        timeList.append(delta)
    # print(timeList, len(timeList))
    result = sum(timeList) / len(timeList)
    print('time passed:', result)

measureTimeLoad('https://www.google.com/')