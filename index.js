let inputValue = document.getElementById("number").value;
let body = document.querySelector('body')
let basamakSayisi = inputValue.length;
let number = parseInt(inputValue);
let toplam = 0, i, n;
let temp = number;
let ters = "";


function hesapla() {
    for (i = 0; i < basamakSayisi; i++) {
        n = parseInt(number % 10);
        toplam = (toplam * 10) + n;
        number = number / 10;
    }

    if (toplam === temp) 
    {
        body.innerHTML="Palindrome"
    }
    else {
        body.innerHTML="değil"
    }
    toplam = 0;

    // Matametiksel işlem olmadan Stringler şeklinde yapılan yöntem:

    // ters = inputValue.split("").reverse().join("");

    // if (ters === inputValue) {
    //     body.innerHTML = "Palindrome"
    // }
    // else {
    //     body.innerHTML = "değil"
    // }


}
