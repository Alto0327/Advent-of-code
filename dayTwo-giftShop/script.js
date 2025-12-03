import fs from 'fs'

// Read Data 
const text = fs.readFileSync("./data.txt", "utf8");
// console.log(text)

// Parse into ranges
const ranges = text.split(",")
// console.log(ranges)
let range = []

for(let i =0;i<ranges.length; i++){
    range.push(ranges[i].split("-").map(Number))
}
// console.log(range[0][0])

let totalSum = 0

// Loop Through each int in range
for(let r=0;r < range.length;r++){

    for(let i = range[r][0];i <= range[r][1]; i++){
        let str = i.toString()
        // if even length split and compare
        if(str.length % 2 === 0){
            const mid =str.length/2
            const first = str.slice(0, mid), second = str.slice(mid)
            
            if (first === second) totalSum += i
            
        } 
    }
}

// output TotalSum
console.log(totalSum)