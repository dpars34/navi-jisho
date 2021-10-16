export function jlptRender(param) {
    switch(param) {
        case 'jlpt-n1':
            return 'N1';
        case 'jlpt-n2':
            return 'N2';
        case 'jlpt-n3':
            return 'N3';
        case 'jlpt-n4':
            return 'N4';
        case 'jlpt-n5':
            return 'N5';
      }
}

export function partsOfSpeechRender(param) {

    switch(param) {
        case 'Noun':
            return 'Nou';
        case 'Suru verb':
            return 'する';
    }

    if (param.substring(0, 5) === "Godan") {
        return "Gdn"
    }

    const newArray = []
    const wordArray = param.split('')

    for (let i = 0; i < 4; i++) {
        newArray.push(wordArray[i])
    }

    return newArray.join('')
}