var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var total = document.getElementById('totalvotos')
var candi = document.getElementById('candi')

var cand1=0
var cand2=0
var cand3=0
var bran=0

var voto
function votar(x)
{

   if((num1.value=='')&&(num2.value=='')){
   num1.value=x;
   }
   else if((num1.value!=='')&&(num2.value=='')){
   num2.value=x;
   }
   
}

function confirma()
{
   voto=num1.value+num2.value;
   
   if(voto=='13'){
      cand1++;
      alert('Você votou no Candidato 13 - João Ferreira')

   }else if(voto=='12')
   {
      cand2++
      alert('Você votou no Candidato 12 - Ciro Gomes')
   }
   else if(voto=='14'){
      cand3++
      alert('Você votou na Candidata 14 - Luiza Barbosa')
   }
   else{
      alert('candidato nao existe')
   }

   
}

function corrige(){
    num1.value = '';
    num2.value = '';
}

function branco(){
    bran++
    alert('Você votou em branco')
}

function resultado(){   
   total.innerHTML = 'O candidato 13 - João Ferreira teve '+ cand1 +' voto(s).<br>'
   total.innerHTML += 'O candidato 12 - Ciro Gomes teve '+ cand2  +'voto(s).<br>'
   total.innerHTML += 'A candidata 14 - Luiza Barbosa teve '+ cand2 +' voto(s).<br>'
   total.innerHTML += 'Total de voto(s) em branco: '+ bran

}
