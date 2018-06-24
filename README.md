*Criei a variável para guardar a mensagem do usuário e converter a 
string em maiscula com o métodotoUpperCase()
//var userMensager = prompt('Escreva uma mensagem para 
cifrar').toUpperCase();  
 
var  mensagerCipher  = "";

function cipher (pharse){
*Usado o loopFor para pecorrer a mensagem do usuario
//for (var i = 0; i < userMensager.length; i++){
**usado o método charCodeAt para passar a mensagem do usuário para o 
código numeral da tabela ASCII    
//var codeASCII = userMensager.charCodeAt(i); 
**Aplicado a formula da cifra de Cesar para cada número que foi 
convertido. Com isso os numeros já tem nova posição.   
//var formula = ((codeASCII - 65 + 33) % 26 + 65); 
**Aos novos numeros, foi aplicado o método fromCharCode para obter a 
letra correspondente de cada. 
var code =  String.fromCharCode(formula); 
**utilizado o operado +- para contacenar as strings.
mensagerCipher  = mensagerCipher  += code; 
 
 }
    return mensagerCipher;
}
cipher(userMensager)

**Na função para descriptografar foi a mesma sequência da outra função, 
com alteração na formula, para voltar a string para posição inicial.

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

**Mostrar a mensagem do usuário no html.
//document.getElementById("mensagemCifrada").innerHTML = mensagerCipher;
//document.getElementById("mensagemdescriptografada").innerHTML = 
mensagerDecipher;
