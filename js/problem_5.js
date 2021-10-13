const wordInput = document.querySelector('#problem-5 #rhyme-with-input');
const showRhymesButton = document.querySelector('#problem-5 #show-rhymes-button');
const clearButton = document.querySelector('#problem-5 #clear-rhymes-button');
const rhymesOutput = document.querySelector('#problem-5 #rhymes');

function getRhymes(rel_rhy, callback) {
    fetch(`https://api.datamuse.com/words?${(new URLSearchParams({rel_rhy})).toString()}`)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        }, (err) => {
            console.error(err);
        });
}

// Write your code here

showRhymesButton.addEventListener('click', () =>{
   let data_retrieved = getRhymes(wordInput.value, (result)=>{
    for (const data in result){
        rhymed_word =  result[data];
        let node  = document.createElement('LI');
        let textnode = document.createTextNode(rhymed_word['word']);
        node.appendChild(textnode);
        rhymesOutput.append(node);

    }
   });


});

clearButton.addEventListener('click', () =>{
    rhymesOutput.textContent = ""
    wordInput.value = ""
});

