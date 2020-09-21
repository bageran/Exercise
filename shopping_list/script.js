//데이터를 저장할 변수들 선언
const items = document.querySelector('.shopping-list');
const input = document.querySelector('#item-input');
const saveBtn = document.querySelector('#save-btn');

function addItem() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return        
    }
    const item = createItem(text);
    items.appendChild(item);
    input.value = '';
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'shopping-item');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class', 'item-name');
    itemName.innerText = text;

    const deleteItem = document.createElement('button');
    deleteItem.setAttribute('class', 'item-delete');
    deleteItem.innerHTML = `<i class="fas fa-trash-alt"></i>`;
    deleteItem.addEventListener('click', () => {
        items.removeChild(itemRow);
    })
    
    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider'); 

    item.appendChild(itemName);
    item.appendChild(deleteItem);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);
    return itemRow;
}

saveBtn.addEventListener('click', () => {
    addItem();
});

input.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addItem();
    }
});
