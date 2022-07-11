let allBooks = [
    {
       title: 'LOTR 1',
       author: 'Tolkien',
       image: 'http://prodimage.images-bn.com/pimages/9780547928203_p0_v3_s1200x630.jpg',
       alreadyRead: 'true', 
    }, 
    {
        title: 'LOTR 2',
        author: 'Tolkien',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71+8hoMr+0L.jpg',
        alreadyRead: 'false', 
     } 
]

let div = document.getElementsByClassName('listBooks')[0]

let table = document.createElement('table')
let tr1 = document.createElement('tr')
let tr2 = document.createElement('tr')

div.appendChild(table)
table.style = 'border: solid black 1px'
table.style = 'margin: 20px; padding: 20px;'
tr1.style = 'border: solid black 1px'
tr2.style = 'border: solid black 1px'


table.appendChild(tr1)
table.appendChild(tr2)

console.log(allBooks[0])
console.log(allBooks[0].title)

td11 = document.createElement('td')
td12 = document.createElement('td')
td21 = document.createElement('td')
td22 = document.createElement('td')

td11.style = 'border: solid black 1px'
td12.style = 'border: solid black 1px'
td21.style = 'border: solid black 1px'
td22.style = 'border: solid black 1px'

td11.innerText = allBooks[0].title + ' written by ' + allBooks[0].author;
td21.innerText = allBooks[1].title + ' written by ' + allBooks[1].author;

if (allBooks[0].alreadyRead == 'true') {
   td11.style.color = 'red';
}
if (allBooks[1].alreadyRead == 'true') {
   td21.style.color = 'red';
}

let image1 = document.createElement('img')
let image2 = document.createElement('img')
image1.src = allBooks[0].image;
image2.src = allBooks[1].image;
image1.style = 'width: 100px; heigth: auto;';
image2.style = 'width: 100px; heigth: auto;';

td12.appendChild(image1);
td22.appendChild(image2);

tr1.appendChild(td11);
tr1.appendChild(td21);
tr2.appendChild(td12);
tr2.appendChild(td22);




