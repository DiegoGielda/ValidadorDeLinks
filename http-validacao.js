function  geraArraydeURLs(pArrayLinks){
    // loop para cada { chave: valor }
    // objeto -> [valor]
    // Object.Values(pObjeto)
    return pArrayLinks.map(objetoLink => Object.values(objetoLink).join());
}


export default function validarURL(pArrayLinks) {
    return geraArraydeURLs(pArrayLinks);
}

