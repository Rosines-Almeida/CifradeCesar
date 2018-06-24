var userMensager = prompt('Escreva uma mensagem para cifrar').toUpperCase();  
 
 
 
var  mensagerCipher  = "";
function cipher (pharse){
 
for (var i = 0; i < pharse.length; i++){  
var codeASCII = pharse.charCodeAt(i);  
var formula = ((codeASCII - 65 + 33) % 26 + 65);  
var code =  String.fromCharCode(formula); 
mensagerCipher  = mensagerCipher  += code; 
 
 }
    return mensagerCipher;
}
cipher(userMensager)

 
var  mensagerDecipher = "";
function decipher (newpharse) {
for (var i = 0; i < newpharse.length; i++) {
var codeASCII= newpharse.charCodeAt(i);
var formula = ((codeASCII + 65 - 33) % 26 + 65);  
var code =  String.fromCharCode(formula); 
 mensagerDecipher = mensagerDecipher += code; 
}
 return mensagerDecipher; 
} 

decipher(mensagerCipher);




document.getElementById("mensagemCifrada").innerHTML = mensagerCipher;
document.getElementById("mensagemdescriptografada").innerHTML = mensagerDecipher;
