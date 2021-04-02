"use strict"

// fundamentals -1-challenges
const BMI=(mass,height)=> mass/height**2
const marksBMI=BMI(78,1.69)
console.log(marksBMI)
const johnsBMI=BMI(95,1.88)
console.log(johnsBMI)
const markHigherBMI=marksBMI>johnsBMI?`Mark has higher BMI than John about  ${marksBMI-johnsBMI}`:`john has higher BMI ${Math.trunc(johnsBMI-marksBMI)}`
console.log(markHigherBMI)

const markBMI=BMI(95,1.88)
console.log(marksBMI)
const johnBMI=BMI(85,1.76)
console.log(johnBMI)
const marksHigherBMI=marksBMI>johnsBMI?`Mark has higher BMI than john about  ${marksBMI-johnsBMI}`:`john has higher BMI ${Math.trunc(johnsBMI-marksBMI)}`
console.log(marksHigherBMI)

const avgScore=(a,b,c)=>(a+b+c)/3
const minScore=100
const dolphinscore=avgScore(97,112,101)
console.log(dolphinscore)
const koalascore=avgScore(88,91,110)
console.log(koalascore)
if(dolphinscore>koalascore)console.log(`dolphins score is higher than koalas about ${dolphinscore-koalascore}`)
else if(dolphinscore<koalascore)console.log(`koalas score is higher than dolphins about ${koalascore-dolphinscore}`)
else  console.log(`draw score ${dolphinscore-koalascore}`)
const dolphinscore1=avgScore(97,112,101)
const koalascore1=avgScore(109,95,123)
if(dolphinscore1>minScore&&dolphinscore1>koalascore1)console.log(`dolphins team won by ${dolphinscore1-koalascore1}`)
else if(dolphinscore1===koalascore1 && dolphinscore1>minScore)console.log(`Match Draw by ${dolphinscore1}`)
else if(dolphinscore1===koalascore1 && dolphinscore1<minScore)console.log(`No team won the match ${koalascore1-dolphinscore1}`)
else console.log(`Match draw with ${dolphinscore1}`)


let bill=prompt("type the bill value")
const tip=(bill>50&&bill<300)? (15/100)*bill: (20/100)*bill
console.log(tip)

// fundamentals-2 challenges
const avgScoreDolphins=avgScore(85,54,41)
const avgScoreKoals=avgScore(23,34,27)
const checkWinner=(avgScoreDolphins>2*avgScoreKoals)?`Dolphins won by ${avgScoreDolphins} vs ${avgScoreKoals}`:`Kolas won by ${avgScoreKoals} vs ${avgScoreDolphins}`
console.log(checkWinner)


let tips=[]
const biills=[125,655,44]
const calcTip=(biills)=>(biills>50&& biills<300)?.15*biills:.20*biills
for(let i=0;i<biills.length;i++){
    tips.push(calcTip(biills[i]))
}
console.log(tips)

const Johns={
    name:"john",
    mass:95,
    height:1.88,
    calcBMI:(mass,height)=>mass/height**2,
    
}
const BMIJOHNS=(Johns.calcBMI(95,1.88))
const Mark={
    name:"john",
    mass:85,
    height:1.50,
    calcBMI:(mass,height)=>mass/height**2,
}
const BMIMARK=(Mark.calcBMI(85,1.50))
const higherBMI=BMIJOHNS>BMIMARK?`JOhns have higer BMI of ${BMIJOHNS}than marks ${BMIMARK}`:`Mark has higher BMI of ${BMIMARK} than JOHNS ${BMIJOHNS}`
console.log(higherBMI)

const billValues=[22, 295, 176, 440, 37, 105, 10, 1100, 86,52]
console.log(billValues)
const tipss=[]
const totals=[]
for(let j=0;j<billValues.length;j++){
    tipss.push(calcTip(billValues[j]))
    totals.push(tipss[j]+billValues[j])

}
console.log("billvalues ",billValues)
console.log("tipss",tipss)
console.log("totals",totals)


let sums=0
const calcAvg=(arr)=>{
    arr =[22,295,176,440,37,105,10,1100,86,52]
    for(let i=0;i<arr.length;i++){
        sums=sums+arr[i]
    }
    return sums/arr.length
}
console.log(calcAvg())

const printforecast=(arr)=>{
    arr=[10,10,10]
    let sum=0
    for(let i=0;i<arr.length;i++){
         sum=sum+arr[i]
        return sum/arr.length
    }
}
console.log(printforecast());

const players1=["gk","fp1","fp2","fp3","fp4","fp5","fp6","fp7","fp8","fp9"]
const players2=["gk11","fp11","fp21","fp31","fp41","fp51","fp61","fp71","fp81","fp91"]
