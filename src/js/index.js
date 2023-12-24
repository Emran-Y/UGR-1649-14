const myForm = document.getElementById('myForm');
const messageOnSubmit = document.getElementById('messageOnSubmit');



document.getElementById('toggler').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('show');
  });

  
  
  
  // Form Validation
  
  myForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.forms['myForm']['Name'].value;
      const email = document.forms['myForm']['Email'].value;
      const message = document.forms['myForm']['Message'].value;
  
      if (!name) {
          messageOnSubmit.classList = [];
          messageOnSubmit.classList.add('is-block');
          messageOnSubmit.classList.add('mb-4');
          messageOnSubmit.classList.add('text-danger');
          messageOnSubmit.textContent = 'Name is required';
      } else if (!email) {
          messageOnSubmit.classList = [];
          messageOnSubmit.classList.add('is-block');
          messageOnSubmit.classList.add('mb-4');
          messageOnSubmit.classList.add('text-danger');
          messageOnSubmit.textContent = 'Email is required';
      } else if (!message) {
          messageOnSubmit.classList = [];
          messageOnSubmit.classList.add('is-block');
          messageOnSubmit.classList.add('mb-4');
          messageOnSubmit.classList.add('text-danger');
          messageOnSubmit.textContent = 'Message is required';
      } else {
          messageOnSubmit.classList = [];
          messageOnSubmit.classList.add('is-block');
          messageOnSubmit.classList.add('mb-4');
          messageOnSubmit.classList.add('text-success');
          messageOnSubmit.textContent = 'I have received your message. I will contact you soon';
          setTimeout(() =>{
            messageOnSubmit.textContent = '';
            messageOnSubmit.classList.add('mb-4');
          },4000)
      }
      document.forms['myForm']['Name'].value = '';
      document.forms['myForm']['Email'].value = '';
      document.forms['myForm']['Message'].value = '';
  

  });