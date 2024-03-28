function wordTracker(input) {
    let wordObj = {};
    let searched = input[0].split(' ');
    input.shift();

    for (let word of searched) {
        wordObj[word] = 0;
        for (let searchedWord of input) {
            if (word === searchedWord) {
                wordObj[word]++;
            }
        }
    }
    let sortedKeys = Object.keys(wordObj).sort((a, b) => wordObj[b] - wordObj[a]);
    for (let word of sortedKeys) {
        console.log(`${word} - ${wordObj[word]}`);
    }
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);