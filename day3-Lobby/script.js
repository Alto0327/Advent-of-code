const fs = require("fs")

const data = fs.readFileSync("./data.txt", "utf8");
const dataSplit = data.trim().split(/\r?\n/);

let banks = []
for(let i=0; i< dataSplit.length ; i++){
    banks.push(dataSplit[i].split(''))
}

let totalSum = 0

for(let b=0;b < banks.length;b++){
    
    let section = banks[b]
    if (section.length === 0) continue; 
    console.log("BANK:", section.join(""), "LEN:", section.length);

    let bestValueForBank = 0
    for (let i = 0; i <= section.length - 2; i++) {
        let tensDigit = Number(section[i]);
        let onesDigit = 0;
        for (let x = i + 1; x < section.length; x++) {
            let digit = Number(section[x]);
            if (digit > onesDigit) onesDigit = digit;
        }
        let value = tensDigit * 10 + onesDigit;
        if (value > bestValueForBank) {
            bestValueForBank = value;
        }
    }
    totalSum += bestValueForBank
}


console.log(totalSum)