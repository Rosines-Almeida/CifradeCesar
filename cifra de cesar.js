var userMensager = prompt('Escreva uma mensagem para cifrar');  
 

function cipher (pharse){

var codeASCII = []; 
var formula = [];
var code = [];
var deslocamento = '';


for (var i = 0; i < userMensager.length; i++){  
codeASCII = userMensager.toUpperCase().charCodeAt(i);  
formula = ((codeASCII - 65 + 33) % 26 + 65);  
code =  String.fromCharCode(formula); 
mensagerCriptografada = deslocamento += code; 
 }
    alert ('Sua mensagem cifrada é:  ' +  mensagerCriptografada);
    return mensagerCriptografada ;
}
cipher(userMensager); 

function decipher (newpharse) {
  var descodeASCII = [];
  var newFormula = [];
  var newCode = [];
 var deslocamento = '';

 for (var j = 0; j < mensagerCriptografada.length; j++) {
descodeASCII= mensagerCriptografada.charCodeAt(j);
newFormula = ((descodeASCII + 65 - 33) % 26 + 65);  
newCode =  String.fromCharCode(newFormula); 
var mensagerdesCriptografada = deslocamento += newCode; 
}
alert ('Sua mensagem descriptografada é:  ' +  mensagerdesCriptografada);
return mensagerdesCriptografada; 
} 
decipher(mensagerCriptografada);
 