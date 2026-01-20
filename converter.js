function convertWord(word) {
    const vowels = 'aeiou';
    let index = -1;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        const firstPart = word.slice(0, index + 1).toLowerCase();
        const secondPart = word.slice(index + 1).toLowerCase();
        
        const punctuation = secondPart.match(/[.,!?;]$/);
        const cleanSecondPart = punctuation ? secondPart.slice(0, -1) : secondPart;
        const result = `ku${cleanSecondPart}${firstPart}ro${punctuation ? punctuation[0] : ''}`;
        return result;
    }

    return word.toLowerCase();
}

function convertSentence(sentence) {
    const words = sentence.split(' ');
    const convertedWords = words.map(convertWord);
    return convertedWords.join(' ');
}
