const fs = require("fs")

// Read Data
const text = fs.readFileSync("./data.txt", "utf8");

// Parse into ranges
const ranges = text.split(",")
let range = []

for(let i =0;i<ranges.length; i++){
    range.push(ranges[i].split("-").map(Number))
}

let totalSum = 0

// Loop Through each int in range
for(let r=0;r < range.length;r++){

    for(let i = range[r][0];i <= range[r][1]; i++){
        let str = i.toString()
        const L = str.length
        // Pt 2 Test every possible chunk size from 1 -> L/2
        for(let k = 1; k <= L/ 2; k++){
            //Pt 2 if length divided by k remainder equals 0 contiue if not we skip
            if(L % k ==0){
                //create tmp Pattern
                let pattern = str.slice(0,k)

                // reconstruct tmp pattern L/k times
                let rebuilt = pattern.repeat(L/k)
                // Compare with str
                if(rebuilt === str){
                    totalSum += i
                    break
                }
            }
        }
// PT 1 -> if even length split and compare
        // if(L % 2 === 0){
        //     const mid =L/2
        //     const first = str.slice(0, mid), second = str.slice(mid)
        //     if (first === second) totalSum += i
        // }
    }
}

// output TotalSum
console.log(totalSum)