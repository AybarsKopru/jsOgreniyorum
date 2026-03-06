let sayi = Number(prompt("Faktöriyeli bulunacak sayıyı giriniz: "));
let carpim = 1;

if (sayi > 0) {
    for (let i = 1; i <= sayi; i++) {
        carpim = carpim * i;
    }
} else {
    alert("pozitif bir sayı gir!");
}

console.log("Sonuç faktöriyel: " + carpim); 