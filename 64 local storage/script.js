'use strict';

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked') == "true") {
    checkbox.checked = true;
} else {
    checkbox.checked = false;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
} 

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        localStorage.setItem('isChecked', true);
    } else {
        localStorage.setItem('isChecked', false);
    }
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const person = {
    name: 'John',
    age: 25
};

const serializedPerson = JSON.stringify(person);

localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));