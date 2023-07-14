/**
 * Esta Función me permite tomar una carta.
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} Retorna la carta del Deck
 */

export const pedirCarta = (deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }

    const carta = deck.pop();
    return carta;
}

// export default pedirCarta;


