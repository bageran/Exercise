//데이터를 저장할 변수들 선언
const item = document.querySelector('.shopping-item');

const itemList = document.querySelector('.shopping-list');
const itemField = document.querySelector('#item-input');
const itemSubmit = document.querySelector('#save-btn');

function saveItem() {
    itemSubmit.addEventListener('click', (saveItem) => {
        let item = '';
        let itemInput = itemField.value;
        localStorage.setItem('item', itemInput);
        itemList.append(`<li class="shopping-item">- ${itemInput}<img src="images/icon_close.png"></li>`);
        
    })

    // itemField.addEventListener('submit', () => {
    //     let itemInput = itemField.value;
    //     item.appendChild = `<li class="shopping-item">${itemInput}</li>`;
    // })

    itemField.value = '';
    itemField.focus();
}

saveItem();