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
        case 'Suru verb':
            return 'する';
        case 'Counter':
            return 'Cou';
        case 'Numeric':
            return 'Num';
        case 'Na-adjective (keiyodoshi)':
            return 'な';
        case 'I-adjective (keiyoushi)':
            return 'い';
    }

    if (param.substring(0, 5) === 'Godan') {
        return 'Gdn'
    }

    if (param.substring(0, 4) === 'Noun') {
        return 'Nou'
    }

    if (param.substring(0, 6) === 'Adverb') {
        return 'Adv'
    }

    const newArray = []
    const wordArray = param.split('')

    for (let i = 0; i < 4; i++) {
        newArray.push(wordArray[i])
    }

    return newArray.join('')
}

export function tagsRender (param) {

    switch(param) {
        case 'Usually written using kana alone':
            return 'かな'
        case 'Female term or language':
            return 'Fem'
        case 'Onomatopoeic or mimetic word':
            return 'Ono'
    }

    if (param.substring(0, 6) === 'Humble') {
        return 'Hum'
    }

    if (param.substring(0, 9) === 'Honorific') {
        return 'Hon'
    }

    const newArray = []
    const wordArray = param.split('')

    for (let i = 0; i < 3; i++) {
        newArray.push(wordArray[i])
    }

    return newArray.join('')
}