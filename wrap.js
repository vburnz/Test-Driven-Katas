const wrap = (line, maxLen) => {
    if (line.length < maxLen) {
        return line;
    }

    let wordArr = line.split(' ');
    let wrappedArr = [];
    let curLine = [];
    for (let idx = 0; idx < wordArr.length; idx++) {
        if ((curLine.length + wordArr[idx].length) > maxLen) {
            wrappedArr.push(curLine.trim());
            curLine = wordArr[idx] + ' ';
        } else {
            curLine += wordArr[idx] + ' '
        }
    }
    wrappedArr.push(curLine.trim());
    return wrappedArr.join('\n');
};


module.exports = wrap;
