let name = prompt("Hoş geldiniz adınız ?").toUpperCase();

let hamle = prompt(name + " " + "Tekrardan Hoş geldin :)" + " " + "\n Taş , kağıt , Makas  oyunu için hangi hamleyi seçiyorsunuz ?").toLowerCase();


let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));

if ((hamle == "taş") && (bilgisayarHamlesi == "kağıt")) {

  alert("Kaybettiniz !" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "taş") && (bilgisayarHamlesi == "makas")) {
  alert("Kazandınız :)" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "taş") && (bilgisayarHamlesi == "taş")) {
  alert("Berabere ^-^" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "kağıt") && (bilgisayarHamlesi == "taş")) {
  alert("Kazandınız :)" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "kağıt") && (bilgisayarHamlesi == "makas")) {
  alert("Kaybettiniz !" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "kağıt") && (bilgisayarHamlesi == "kağıt")) {
  alert("Berabere ^-^" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "makas") && (bilgisayarHamlesi == "kağıt")) {
  alert("Kazandınız :)" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "makas") && (bilgisayarHamlesi == "taş")) {
  alert("Kaybettiniz !" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else if ((hamle == "makas") && (bilgisayarHamlesi == "makas")) {
  alert("Berabere ^-^" + " " +"\n Bilgisayar Hamlesi :" + " " + bilgisayarHamlesi)
}else {
  alert("Lütfen Geçerli hamle yazınız.")
}