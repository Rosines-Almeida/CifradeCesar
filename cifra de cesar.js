var userMensager = prompt("Escreva uma mensagem para cifrar");  
 

function cipher (pharse) {

var codeASCII = []; 
var formula = [];
var code = [];
var deslocamento = '';
var mensagerCriptografada

for (var i = 0; i<userMensager.length; i++) {  
codeASCII = userMensager.charCodeAt(i);  
formula =  ((codeASCII - 65 + 33) % 26 + 65);  
code =  String.fromCharCode(formula); 
 
 mensagerCriptografada = deslocamento += code; 
 }
alert ("Sua mensagem cifrada é:  " +  mensagerCriptografada);
 return mensagerCriptografada ;

}
cipher(userMensager); 
var txt = mensagerCriptografada;

 
 document.write = ("Sua mensagem criptografada é: "  );