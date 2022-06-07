import chalk from 'chalk';
import pegaArquivo from './index.js';
import validarURL from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(pCaminhoDoArquivo){
    const resultado = await pegaArquivo(pCaminhoDoArquivo[2]);
    if (pCaminhoDoArquivo[3] === 'validar'){
        console.log(chalk.yellow('Links Validados'), await validarURL(resultado));
    } else {
        console.log(chalk.yellow('Lista de Links'), resultado);
    }
   // console.log(chalk.red('Lista de Links'), resultado);
}

processaTexto(caminho);