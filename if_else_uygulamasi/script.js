let ad = prompt("Adınızı giriniz: ");
let tcno = prompt("Tc kimlik numaranızı giriniz: ");

kontrol(ad, tcno);

function kontrol(ad, tcno) {
    if (ad == "") {
        console.log("isminizi boş bırakmayın !");
        alert("isminizi boş bırakmayın !");
        return;
    }

    if (tcno == "") {
        console.log("tc alanını boş bırakmayın !");
        alert("tc alanını boş bırakmayın !");
        return;

    } else if (tcno.length != 11) {
        console.log("tc no 11 karakter olmak zorunda!");
        alert("tc no 11 karakter olmak zorunda!");
        return;
    } else {
        console.log("adınız: ", ad, "tc'niz: ", tcno);
    }
}