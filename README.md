
# CifradeCesar



**Salvei  a mensagem do usuário em uma variável**
var userMensager = prompt('Escreva uma mensagem para cifrar');  
 


function cipher (pharse){
***criei variáveis , e seus valores foram declarados dentro da função**
var codeASCII = []; 
var formula = [];
var code = [];
var deslocamento = '';

**Usado o loopFor para pecorrer a mensagem do usuario**
for (var i = 0; i < userMensager.length; i++){

***Pegar o código numeral da tabela ASCII de cada letra da mensagem e salvar na variável de array.**
**usado toUpperCase para converter para maisculas a mensagem do usario se estiver em mnisculas.	
codeASCII = userMensager.toUpperCase().charCodeAt(i); 
**Aplicar a formula da cifra de Cesar para cada número que foi convertido. Com isso os numneros já tem nova posição.**
formula = ((codeASCII - 65 + 33) % 26 + 65);  

**Aos novos numeros, foi aplicado o método fromCharCode para obter a letra correspondente de cada.**
code =  String.fromCharCode(formula); 

** Criado variável vazia para poder concatenar. E ter todas as letras juntas em uma variável**
mensagerCriptografada = deslocamento += code; 
 }
    alert ('Sua mensagem cifrada é:  ' +  mensagerCriptografada);
    return mensagerCriptografada ;
}
cipher(userMensager); 
**Na funcção para descriptografar foi usada os mesmos códigos porém alterando a formula  para retornar a mensagem criptografada.**
function decipher (newpharse) {
newFormula = ((descodeASCII + 65 - 33) % 26 + 65);  
 
