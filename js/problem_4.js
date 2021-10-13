const messageInput = document.querySelector('#problem-4 #message-input');
const messageFeedback = document.querySelector('#problem-4 #message-feedback')

const MAX_CHARACTERS = 50;

// Write your code here



messageInput.addEventListener('input', () =>{
    if (messageInput.value.length <= MAX_CHARACTERS){
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
        messageFeedback.classList.add('valid-feedback');
        messageFeedback.classList.remove('invalid-feedback');
        messageFeedback.textContent = MAX_CHARACTERS - messageInput.value.length + " characters left";
    }
    else {
        messageInput.classList.add('is-invalid');
        messageInput.classList.remove('is-valid');
        messageFeedback.classList.add('invalid-feedback');
        messageFeedback.classList.remove('valid-feedback');
        messageFeedback.textContent = MAX_CHARACTERS - messageInput.value.length + "characters too long"
    };

})