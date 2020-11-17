const inputBox = document.querySelector('input');

const btns = document.querySelectorAll('button');

btns.forEach(element => {
    element.addEventListener("click",(e) => {
        // input.value += e.target.dataset.info;
        calc(e);
    });
});


const calc = ("click",(e) => {
    console.log(e.target.dataset.info);
    const input = e.target.dataset.info;

    switch (input) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '.':
            inputBox.value += input;
            break;
        case 'AC':
            inputBox.value = "0";
            break;
        case 'C':
            if (inputBox.value === "") {
                inputBox.value = "0";
            } else {
                inputBox.value = (inputBox.value).slice(0,-1);
            }
            
            break;
        case '%':
        case '/':
        case 'x':
        case '-':
        case '+':
        case '=':
            alert(e.target.dataset.info);
            break;
    }
});
