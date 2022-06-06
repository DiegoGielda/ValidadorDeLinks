/*
// Importando recursos da lib para uso no código.
import chalk from 'chalk';
import fs from 'fs';

//encadear métodos para colorir texto, cor de fundo e texto em negrito
console.log(chalk.blue.bgWhite.bold('Alura'));

//receber múltiplos argumentos
console.log(chalk.blue('curso', 'de', 'NodeJS'));

//métodos aninhados
console.log(chalk.red('vermelho', chalk.underline.bgBlue('azul')));

// uso de template strings e placeholders
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
*/

import chalk from 'chalk';
import fs from 'fs';

const ENCODE = 'utf-8';

function extrarLinks(pTexto){
    /// para o JS identificar que são expreções regulares é utilizado / no inicio e / no final da expressão 
    const regex = /\[([^\]]*)]\((https?:\/\/[^$#\s].[^\s]*)\)/gm; /// g = Global, m = Mult-linha
    const arrayResultados = [];
    let temp;
    while ((temp = regex.exec(pTexto)) !== null){
      arrayResultados.push({ [temp[1]]: temp[2]});
    }
    return (arrayResultados.length === 0 ? "Não foi encontrado o arquivo" : arrayResultados);
}

function trataErro(pErro){
    throw new Erro(chalk.red(pErro.code, 'Não a arquivos no caminho indicado. Verifique!' ))
}

// ASYNC indicando codigo função assincrono
export default async function pegaArquivo(caminhoDoArquivo){
    const ENCODE = 'UTF-8';
    /// codigo assincrono com AWAIT
    try{    
      const texto = await fs.promises.readFile(caminhoDoArquivo, ENCODE);
      return extrarLinks(texto);
    } catch (pErro){
      trataErro(pErro);
    } finally{
        console.log(chalk.yellow('Operação Concluída!'));
    }
}

// TRATAMENTO DE ERRO COM THEN
// function pegaArquivo(pCaminhoDoArquivo){
//     const ENCODE = 'utf-8';
//     fs.promises.readFile(pCaminhoDoArquivo, ENCODE)
//       .then((texto) => chalk.green(console.log(texto)))
//         .catch((erro => trataErro(erro)));
// }

// TRATAMENTO DE ERRO SEM SABER O TAMANHO DO ARQUIVO
// function pegaArquivo(pCaminhoDoArquivo) {
//    const ENCODE = 'utf-8';
//     fs.readFile(pCaminhoDoArquivo, ENCODE, (e, pTexto) => {
//         if (e) {
//             trataErro(e);
//         }
//         console.log(chalk.green(pTexto));
//     }) 
// }