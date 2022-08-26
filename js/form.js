/*
by tag: getElementByTagName()
by id: getElementById()
by name: getElementsByName()
by class: getElementsByClassName()
by selector: querySelector()
 */

const nameF = document.querySelector('#name');
const contactF = document.querySelector('#contactReason');
const subjectF = document.querySelector('#subject');

const form = document.querySelector('#sendMessage');

const checkName = () => {
    let valid = false;

    const min = 3,
        max = 25;

    const name = nameF.value.trim();

    if (!isRequired(name)) {
        showError(nameF, 'Nome não pode ser vazio.');
    } else if (!isBetween(name.length, min, max)) {
        showError(nameF, 'Nome precisa ter entre 3 e 25 caractéres.')
    } else {
        showSuccess(nameF);
        valid = true;
    }
    return valid;
}

const checkSubject = () => {
    let valid = false;

    const min = 1,
        max = 30;

    const subject = subjectF.value.trim();

    if (!isRequired(subject)) {
        showError(subjectF, 'Assunto não pode ser vazio.');
    } else if (!isBetween(subject.length, min, max)) {
        showError(subjectF, 'Ultaprassa o máximo de caractéres.')
    } else {
        showSuccess(subjectF);
        valid = true;
    }
    return valid;
}

const checkContact = () => {
    let valid = false;

    const min = 1,
        max = 500;

    const contact = contactF.value.trim();

    if (!isRequired(contact)) {
        showError(contactF, 'Mensagem não pode ser vazia.');
    } else if (!isBetween(contact.length, min, max)) {
        showError(contactF, 'Ultaprassa o máximo de caractéres.')
    } else {
        showSuccess(contactF);
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;


/* const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}; */

const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('sucess');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    //form-field element
    const formField = input.parentElement;

    // remove error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isNameValid = checkName(),
        isSubjectValid = checkSubject(),
        isContactValid = checkContact();

    let isFormValid = isNameValid &&
        isSubjectValid &&
        isContactValid;

    if (isFormValid) {
        let statusResponse = document.getElementById('status').innerHTML = "Formulário enviado!";
    }
});

form.addEventListener('input', function (e){
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'subject':
            checkSubject();
            break;
        case 'contact':
            checkContact();
            break;
    }
})






