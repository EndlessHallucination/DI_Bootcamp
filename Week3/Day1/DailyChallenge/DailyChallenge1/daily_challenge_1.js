let sentence = "This dinner is bad !"
let wordNot = sentence.indexOf("not")
let wordBad = sentence.indexOf("bad")


if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    sentence = sentence.replace(sentence.slice(wordNot, wordBad+3), "good")
}
console.log(sentence);

