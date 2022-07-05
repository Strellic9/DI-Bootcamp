 
// noun">Noun:</label><input type="text" id="noun" required><br>
// <label for="adjective">Adjective:</label><input type="text" id="adjective" required><br>
// <label for="person">Someone's Name:</label><input type="text" id="person" required><br>
// <label for="verb">Verb:</label><input type="text" id="verb" required><br>
// <label for="place

var body = document.body;

 var form = document.getElementById('libform');

 var noun = document.getElementById('noun');
 var adjective = document.getElementById('adjective');
 var person = document.getElementById('person');
 var verb = document.getElementById('verb');
 var place = document.getElementById('place');

 var buttonShuffle = document.getElementById('shuffle');
console.log(buttonShuffle); 

//  form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     var personC = person.value;
//     console.log(personC);
//  })

// function getValues () {
//     var nounC = noun.value;
//     var adjectiveC = adjective.value;
//     var personC = person.value;
//     var verbC = verb.value;
//     var placeC = place.value;
// }

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var nounC = noun.value;
    var adjectiveC = adjective.value;
    var personC = person.value;
    var verbC = verb.value;
    var placeC = place.value;

    var div = document.createElement('div');

    div.textContent = (`So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    body.append(div);
    // var div1 = document.createElement('div');
    // body.append(div1);

 })

    // //  // HERE BEGINS SHUFFLE
    //  shuffleFunc () {
    //     body.remove(div);
    //     getValues();
    //     var div = document.createElement('div');

    //     var i=parseInt(Math.random()*5);
    //     console.log('i=', i);

    //     switch (i) {
    //     case 0:
    //     div.textContent = (`Story 0. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     case 1:
    //     div.textContent = (`Story 1. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     case 2:
    //     div.textContent = (`Story 2. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     case 3:
    //     div.textContent = (`Story 3. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     case 4:
    //     div.textContent = (`Story 4. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     case 5:
    //     div.textContent = (`Story 5. So at some point ${personC} meets with ${nounC} while on his way to ${placeC}. After a reasonbly short conversation, the ${adjectiveC} ${verbC} takes place. ${personC} emerges victorious.`);
    //     break;
    //     }

    //     body.append(div);
    // })



