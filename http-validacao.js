import fetch from "node-fetch";

function manejaErro(pErro) {
    //throw new Error(pErro.message);
}

async function checaStatus(pArrayURLs) {
    try {
        const arrayStatus = await Promise.all(pArrayURLs.map(async url => {
            const retorno = await fetch(url);
            return retorno.status;
        }));
        return arrayStatus;
    } catch (pErro) {
        manejaErro(pErro);
    }
}

function geraArraydeURLs(pArrayLinks) {
    // loop para cada { chave: valor }
    // objeto -> [valor]
    // Object.Values(pObjeto)
    return pArrayLinks.map(objetoLink => Object.values(objetoLink).join());
}


export default async function validarURL(pArrayLinks) {
    const links = geraArraydeURLs(pArrayLinks);
    const statusLinks = await checaStatus(links);
    const resultado = pArrayLinks.map((objeto, indice) => ({ ...objeto, status: statusLinks[indice] }));

    return resultado;
}