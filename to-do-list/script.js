const input = document.querySelector(".input-box");

function nowIs() {
    const time = document.querySelector(".time");

    let now = new Date();

    let hour = now.getHours();
    hour = hour >= 10 ? hour : '0' + hour;

    let minute = now.getMinutes();
    minute = minute >= 10 ? minute : '0' + minute;

    // let seconds = now.getSeconds();
    // seconds = seconds >= 10 ? seconds : '0' + seconds;

    time.innerHTML = `${hour}:${minute}`;
}

function todayIs() {
    const todayDate = document.querySelector(".date");

    let today = new Date();

    let year = today.getFullYear();
    year = year >= 10 ? year : '0' + year;

    let month = today.getMonth() + 1;
    month = month >= 10 ? month : '0' + month;

    let date = today.getDate();
    date = date >= 10 ? date : '0' + date;

    let day = today.getDay();

    switch (day) {
        case 0:
            day = 'Sun';
            break;
        case 1:
            day = 'Mon';
            break;
        case 2:
            day = 'Tue';
            break;
        case 3:
            day = 'Wed';
            break;
        case 4:
            day = 'Thu';
            break;
        case 5:
            day = 'Fri';
            break;
        case 6:
            day = 'Sat';
    }

    todayDate.innerHTML = `${year}.${month}.${date}.${day}`;
}

function createList() {
    input.addEventListener('click', deleteInput);

    input.addEventListener('keyup', (e) => {
        e.preventDefault();
        if (e.keyCode == 13) {
            setList(input.value);   
            deleteInput();
        }

    });
}

function setList(text) {
    const list = document.querySelector('.list');
    let listItem = document.createElement('li');
    listItem.className = 'list-item';

    let inputCheck = document.createElement('div');
    inputCheck.className = 'input-check';
    inputCheck.innerHTML = `<i class="fas fa-check-square"></i>`;

    let listContent = document.createElement('div');
    listContent.className = 'list-content';
    listContent.innerHTML = text;

    listContent.innerText = text;
    if (input.value === '') {
        return;
    } else {
        list.appendChild(listItem);
        listItem.appendChild(inputCheck);
        listItem.appendChild(listContent);
    }
    
    inputCheck.addEventListener('click', () => {
        list.removeChild(listItem);
        alert('You did it 🤓');
    });
}

function deleteInput() {
    input.value = '';
}

function init() {
    createList();
    todayIs();
    nowIs();
    setInterval(nowIs, 10000);
}

init();