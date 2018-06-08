
# CifradeCesar


***Salvei  a mensagem do usuário em uma variável**
var userMensager = prompt("Escreva uma frase para cifrar"); //

**criei variáveis , e seus valores foram declarados dentro da função**
var codeASCII = []; 
var formula = [];
var code = [];
var deslocamento = '';

 
**Usado o loopFor para pecorrer a mensagem do usuario**
for (var i = 0; i<userMensager.length; i++) 
**Pegar o código numeral da tabela ASCII de cada letra da mensagem e salvar na variável de array.**	
codeASCII = userMensager.charCodeAt(i);  P
**Aplicar a formula da cifra de Cesar para cada número que foi convertido. Com isso os numneros já tem nova posição.**
formula =  ((codeASCII - 65 + 33) % 26 + 65); //a
**Aos novos numeros, foi aplicado o método fromCharCode para obter a letra correspondente de cada.**
code =  String.fromCharCode(formula); //
 
** Criado variável vazia para poder concatenar. E ter todas as letras juntas em uma variável**
var mensagerCriptografada = deslocamento += code;// 
