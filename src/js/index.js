const navToggler = document.getElementById('toggler');
const navMenu = document.getElementById('nav-menu');
const myForm = document.getElementById('myForm')

navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});


// Form Validation


myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.forms['myForm']['Name'].value;
    const email = document.forms['myForm']['Email'].value;
    const message = document.forms['myForm']['Message'].value;

    if (!name) {
        messageOnSubmit.classList = [];
        messageOnSubmit.classList.add('mt-4');
        messageOnSubmit.classList.add('text-red-700');
        return messageOnSubmit.textContent = 'Name is required';
    } else if (!email) {
        messageOnSubmit.classList = [];
        messageOnSubmit.classList.add('mt-4');
        messageOnSubmit.classList.add('text-red-700');
        return messageOnSubmit.textContent = 'Email is required';
    } else if (!message) {
        messageOnSubmit.classList = [];
        messageOnSubmit.classList.add('mt-4');
        messageOnSubmit.classList.add('text-red-700');
        return messageOnSubmit.textContent = 'Message is required';
    } else {
        messageOnSubmit.classList = [];
        messageOnSubmit.classList.add('mt-4');
        messageOnSubmit.classList.add('text-green-700');
        document.forms['myForm']['Name'].value = '';
        document.forms['myForm']['Email'].value = '';
        document.forms['myForm']['Message'].value = '';
        
        messageOnSubmit.textContent = 'I have received your message. I will contact you soon';
        setTimeout(()=>{
            messageOnSubmit.textContent = ''
            messageOnSubmit.classList.remove('text-green-700')
        },4000)

    }
});