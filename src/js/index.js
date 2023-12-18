const navToggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');
const messageOnSubmit = document.getElementById('messageOnSubmit');

navToggler.addEventListener('click', () => {
    if (navToggler.classList.contains('toggle')) {
        navToggler.classList.remove('toggle');
        nav.classList.remove('nav--active');
    } else {
        navToggler.classList.add('toggle');
        nav.classList.add('nav--active');
    }
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.forms['myForm']['Name'].value;
    const email = document.forms['myForm']['Email'].value;
    const message = document.forms['myForm']['Message'].value;

    if (!name) {
        messageOnSubmit.style.color = 'red';
        return messageOnSubmit.textContent = 'Name is required';
    } else if (!email) {
        messageOnSubmit.style.color = 'red';
        return messageOnSubmit.textContent = 'Email is required';
    } else if (!message) {
        messageOnSubmit.style.color = 'red';
        return messageOnSubmit.textContent = 'Message is required';
    } else {
        messageOnSubmit.style.color = 'green';
        return messageOnSubmit.textContent = 'I have received your message. I will contact you soon';
    }
});
