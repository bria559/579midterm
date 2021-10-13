const clickCountButton = document.querySelector('#problem-3 #click-count');

// write your code here
function addS(num) {
    if(num === 1) {
        return '';
    } else {
        return 's';
    }
};

let count = 0;
clickCountButton.addEventListener('click', () =>{
    count = count + 1;
    let plurals = addS(parseInt(count))
    clickCountButton.textContent = "You clicked the button " + count + " time" + plurals
})