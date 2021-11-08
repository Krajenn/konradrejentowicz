const input = document.querySelector('.text');
const btnAdd = document.querySelector('.task-add');
const ulList = document.querySelector('.tasks');

function addTask(e) {
    e.preventDefault();
    if (input.value == 0) return;

    const taskValue = input.value;

    const div = document.createElement('div');
    div.classList.add('task');

    const liElement = document.createElement('li');
    liElement.innerText = taskValue;
    div.appendChild(liElement);

    const btnDone = document.createElement('button');
    btnDone.classList.add('btnDone');
    btnDone.innerHTML = '<i class="fas fa-check"></i>';
    div.appendChild(btnDone);

    const btnRemove = document.createElement('button');
    btnRemove.classList.add('btnRemove');
    btnRemove.innerHTML = '<i class="fas fa-trash-alt"></i>';
    div.appendChild(btnRemove);

    ulList.appendChild(div);
    input.value = null;

    btnDone.addEventListener('click', taskDone);
    btnRemove.addEventListener('click', taskRemove);
}

function taskDone(e) {
    e.target.parentElement.classList.toggle('done');
}

function taskRemove(e) {
    e.target.parentElement.remove();
}

btnAdd.addEventListener('click', addTask);