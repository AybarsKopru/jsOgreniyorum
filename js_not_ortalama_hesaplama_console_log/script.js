let vize = Number(prompt("vize notunu gir: "));
let final = Number(prompt("Final notunu gir: "));

let sonuc = (vize * 0.4) + (final * 0.6);

if (sonuc > 50) {
    console.log("Notunuz: ", sonuc, " Derste geçtin");
    alert("Geçtiniz!");

} else {
    console.log("Notunuz: ", sonuc, " Kaldın.");
    alert("Kaldınız!");
}