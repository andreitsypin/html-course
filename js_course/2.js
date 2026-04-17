let elem = document.getElementsByTagName("h1")[0];
console.log(elem);
elem.textContent = "Привет, я  Вася пупкин";

let elem2 = document.getElementById("about").children;
console.log(Array.from(elem2)[1]);
Array.from(elem2)[1].textContent = "asdgjiasdkgjlkasdgasdv"



let elem3 = document.getElementById("services");

let uslugi = document.createElement("div");
uslugi.className = "uslugi";

for(let i = 0; i < 5; i++){
    let el = document.createElement("div");
    el.className = "card";
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h3.textContent = `Услуга ${i + 1}`;
    p.textContent = `Описание услуги ${i + 1}`;
    el.appendChild(h3);
    el.appendChild(p);
    el.className = 'card';
    uslugi.appendChild(el);
}


elem3.appendChild(uslugi);




