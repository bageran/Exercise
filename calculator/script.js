const input = document.querySelector('input');

// numbers
const num1 = document.querySelector('[data-info="1"]');
num1.addEventListener("click", () => {
    let num1Text = num1.dataset.info;
    input.value += num1Text;
});

const num2 = document.querySelector('[data-info="2"]');
num2.addEventListener("click", () => {
    let num2Text = num2.dataset.info;
    input.value += num2Text;
});

const num3 = document.querySelector('[data-info="3"]');
num3.addEventListener("click", () => {
    let num3Text = num3.dataset.info;
    input.value += num3Text;
});

const num4 = document.querySelector('[data-info="4"]');
num4.addEventListener("click", () => {
    let num4Text = num4.dataset.info;
    input.value += num4Text;
});

const num5 = document.querySelector('[data-info="5"]');
num5.addEventListener("click", () => {
    let num5Text = num5.dataset.info;
    input.value += num5Text;
});

const num6 = document.querySelector('[data-info="6"]');
num6.addEventListener("click", () => {
    let num6Text = num6.dataset.info;
    input.value += num6Text;
});

const num7 = document.querySelector('[data-info="7"]');
num7.addEventListener("click", () => {
    let num7Text = num7.dataset.info;
    input.value += num7Text;
});

const num8 = document.querySelector('[data-info="8"]');
num8.addEventListener("click", () => {
    let num8Text = num8.dataset.info;
    input.value += num8Text;
});

const num9 = document.querySelector('[data-info="9"]');
num9.addEventListener("click", () => {
    let num9Text = num9.dataset.info;
    input.value += num9Text;
});

const num0 = document.querySelector('[data-info="0"]');
num0.addEventListener("click", () => {
    let num0Text = num0.dataset.info;
    input.value += num0Text;
});

const dot = document.querySelector('[data-info="."]');
dot.addEventListener("click", () => {
    let dotText = dot.dataset.info;
    if ((input.value).indexOf('.') === -1) {
        input.value += dotText;
    } else {
        return;
    }
});

// operators
const allClear = document.querySelector('[data-operator="AC"]');
allClear.addEventListener("click", () => {
    input.value = "";
    // input.value = "0";
});


const clear = document.querySelector('[data-operator="C"]');
clear.addEventListener("click", () => {
    input.value = (input.value).slice(0,-1);
});

const percent = document.querySelector('[data-operator="%"]');
const divide = document.querySelector('[data-operator="/"]');
const multiple = document.querySelector('[data-operator="x"]');
const minus = document.querySelector('[data-operator="-"]');
const plus = document.querySelector('[data-operator="+"]');
const result = document.querySelector('[data-operator="="]');
