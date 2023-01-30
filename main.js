let title1 = document.getElementById('title');
title1.textContent = 'Alisherning sayohati';

let input = document.getElementById('value');
let newID = document.getElementById('getID');

console.log(input.value)

function getValue() {
    newID.textContent = input.value;
    if(input.value >= 5000) {
        newID.textContent ='siz bilet olasiz!'
    }else{
        newID.textContent ='yaxshisi uyda dam oling!'
    }
}