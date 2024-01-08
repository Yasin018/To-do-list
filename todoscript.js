const todoList = [{
    work:'Learn JavaScript',
    date: '09-12-2023'
}, { 
    work: 'Complete Portfolio',
     date: "20-12-2023"
}, {
    work: 'Learn React',
    date: '01-02-2024'
}];

/* 
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

const todayDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' :'') + day;

let parts = todayDate;
let part = parts.split('-');
for(let i=0; i<part.length[-1]; i++) {
    console.log(part[i])
}
console.log(part);
document.querySelector('.js-date').value = todayDate;
*/

updateTodolist(); 

function updateTodolist () {
    let todo = '';

    todoList.forEach((todoObject,index) => {
        const { work, date } = todoObject;
        //Generating HTML
        const todoListHtml = `
        <div>${work}</div>
        <div>${date}</div>
        <button class="delete-button" onclick="
            todoList.splice(${index},1);updateTodolist();
            ">DELETE
        </button>`
        todo += todoListHtml;
    });

    //assigning generated HTML to HTML
    document.querySelector('.para').innerHTML = todo;
}

//setting keyboard function
document.querySelector('.js-searchbar')
  .addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        addTodo();
    }
})
document.querySelector('.js-date')
  .addEventListener('keydown', (event)=> {
    if(event.key === 'Enter') {
        addTodo();
    }
})

function addTodo() {

    const inputElement = document.querySelector('.searchbar');
    //trimmed so that empty input should not be added
    const work = inputElement.value.trim();
    const dateInputElement = document.querySelector('.js-date');
    const date = dateInputElement.value;

    //to check if work and date are empty or not
    if (work === '') {
        inputElement.style.borderColor = 'red';
        inputElement.style.boxShadow = '0 0 10px red';
        return;
    } else if (date === '') {
        dateInputElement.style.borderColor = 'red';
        dateInputElement.style.boxShadow = '0 0 10px red';
        return;
    } else {
        inputElement.style.borderColor = '';
        inputElement.style.boxShadow = '';        
        dateInputElement.style.borderColor = '';
        dateInputElement.style.boxShadow = '';
    }

    todoList.push({
        work,
        date
    });

    inputElement.value = '';

    updateTodolist();
}