
const marks = [350, 240, 450, 380, 449]
let high_score = [0]

for (let i = 0; i < marks.length; i++) {

    high_score < marks[i] ? high_score = marks[i] : marks
    // if (high_score > marks[i] ? high_score = marks[i] : high_score < marks[i])
    //     high_score = marks[i]
}
console.log(high_score);