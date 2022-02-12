

function Laheta(){
let kayttaja = document.getElementById('id').value;
let posti = document.getElementById('pNumero').value;
let testi = /^[0-9-.,]+$/.test(posti);
let sPostiTarkistus = /\S+@\S+\.\S+/;;
let sahkoposti = document.getElementById('sPosti');

if(kayttaja.length < 6){
    alert('ID:n tulee olla vähintää 6 merkkiä pitkä.')
}
else if(testi == false){
    alert('Postinumeroon vain numeroita.')
}
else if(posti.length < 5 || posti.length > 5){
    alert('Postinumeron pitää olla 5 kirjainta pitkä.')
}
else if (sPostiTarkistus.test(sahkoposti)) {
  alert('ei posti')
} else {
  return false; 
}

}