// variaveis 
let variavel_local = 10;  // number
const constante = [];    // array
const objeto = []        // string
const msg = false;       // bool 


console.log(1 == '1');
console.log(1 === '1');



// funcoes
function  soma(a , b) {
    return a + b;
}
function soma(a, b) {

}
let resultado = soma (1 , 2);
const multiplica = (a, b) => a * b; 
resultado = multiplica(1, 2);
/* function multiplica(a, b) {
return a * b;
}
*/ 
async function tempo(duracao){
     await new Promise((r) =>{
        setInterval(r, duracao)
     })
    console.log("passou o tempo");
}

tempo(3000);
// objetos



const pessoa = {nome: "Luiz", email: "luiz.c.brochado@iesbpedu.br"};
    console.log(pessoa.nome);
pessoa.nome = "Luiz";
    console.log(pessoa.nome);

const {nome} = pessoa;
    console.log(nome);

const pessoa_fisica = {cpf: 111, ...pessoa};
    const lista = []; 
lista.push("uva");
     const achou = lista.find((item) => item === "uva");



// modulos






// aula 3

import Flexbox from "./screens/Flexbox";
import GaleriaScreen from "./screens/GaleriaScreen";
import PadraoAndroid from "./screens/PadraoAndroid";
import PadraoIOS from ";/screens/PadraoIOS";
 function App() {
    return <View style={{flex: 1}}>
       <View>
          <View></View>
          <View>
            <Text>Jose Reginaldo</Text>
            <Text>Desenvolvedor Senior</Text>
          </View>
       </View>
       <View>
         <Text>Habilidades</Text>
         <View>
            <Text>JS</Text>
            <Text>React</Text>
            <Text>React Native</Text>
         </View>
       </View>
    </View>
 }

 export default PerfilScreen;
