let boy = Number(prompt("Lütfen boyunuzu giriniz(santimetre olarak): "));
let kilo = Number(prompt("Lütfen kilonuzu giriniz(kg cinsinden): "));
let sonuc;

bki(boy, kilo);

function bki(boy, kilo) {

    if (boy != "") {
        if (kilo != "") {
            boy = boy / 100;
            sonuc = kilo / (boy * boy);
            console.log("Boy kitle indeksiniz şu şekilde: ", sonuc);
        } else {
            alert("kilonuzu boş bırakamazsınız!!");
        }
    } else {
        alert("boyunuzu boş bırakamazsınız!!");
    }
}