let metin = prompt("Bir metin giriniz: ");
let harf = prompt("Metinde adetini bulmak istediğiniz harfi yazınız: ");

harfSayisiBulma(harf);

function harfSayisiBulma(harf) {
    let toplam = 0;
    for (let i = 0; i < metin.length; i++) {
        if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
            toplam += 1;
        }
    }

    alert("metninizde seçtiğiniz harften " + toplam + " adet vardır.");
}