// a,b sonlar berilgan. A b dan katta a va b sonlar orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va b ni o'zi ham chiqsin.

function btn(a,b){
    for(let i = a; i <= b; i++){
        document.querySelector(".res").innerHTML += i
    }
}
btn(8,16);