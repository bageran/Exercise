function calcNow() {
    // --- 현재 보유 --- //
    // 1. 현재 평단을 입력한다.
    const nowPrice = parseInt(document.querySelector('.now__price').value);
    console.log(nowPrice);
    // 2. 현재 수량을 입력한다.
    const nowQuantity = parseInt(document.querySelector('.now__quantity').value);
    console.log(nowQuantity);
    // 3. 총 금액 계산
    const nowResult = nowPrice * nowQuantity;
    console.log(nowResult);
    // 4. 결과값이 보여진다.
    document.querySelector('.now__total').value = nowResult;

    // --- 추가 매수 --- //
    const addPrice = parseInt(document.querySelector('.add__price').value);
    const addQunatity = parseInt(document.querySelector('.add__quantity').value);
    const addResult = addPrice * addQunatity;
    document.querySelector('.add__total').value = addResult;

    // --- 최종 결과 --- //
    document.querySelector('.result__price').value = (nowResult + addResult) / (nowQuantity + addQunatity);
    document.querySelector('.result__quantity').value = nowQuantity + addQunatity;
    document.querySelector('.result__total').value = nowResult + addResult;
}

// calcNow();

