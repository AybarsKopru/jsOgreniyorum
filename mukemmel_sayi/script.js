let sayi = Number(prompt("Bir sayı giriniz: "));

mukemmelSayi(sayi);

function mukemmelSayi(number) {
    let toplam = 0;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0) {
            toplam += i;

        }
    }
    toplam += 1 + number;

    if (toplam == number * 2) {
        console.log("Mükemmel sayıdır!");
    } else {
        console.log("Mükemmel sayı değildir!");
    }
}