/**varibles */
const form = document.querySelector('#form'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message'),
    emailLabel = document.querySelector('#email-label'),
    subjectLabel = document.querySelector('#subject-label'),
    messageLabel = document.querySelector('#message-label');



/**events */
// check if childrens have [move-up] class or not
email.addEventListener('focus', function(){
    if (!form.children[0].classList.contains('move-up')) {
        emailLabel.classList.add('move-up');
        email.classList.remove('move-right');
    }
});
email.addEventListener('blur', function(event){
    if (event.target.classList.contains('js-email')) {
        emailLabel.classList.remove('move-up');
        email.classList.add('move-right');
    }
});

subject.addEventListener('focus', function(){
    if (!form.children[1].classList.contains('move-up')) {
        subjectLabel.classList.add('move-up');
        subject.classList.remove('move-right');
    }
});
subject.addEventListener('blur', function(event){
    if (event.target.classList.contains('js-subject')) {
        subjectLabel.classList.remove('move-up');
        subject.classList.add('move-right');
    }
});

message.addEventListener('focus', function(){
    if (!form.children[2].classList.contains('move-up')) {
        messageLabel.classList.add('move-up');
        message.classList.remove('move-right');
    }
});
message.addEventListener('blur', function(event){
    if (event.target.classList.contains('js-message')) {
        messageLabel.classList.remove('move-up');
        message.classList.add('move-right');
    }
});

/**functions */
