// Code your solutions in this file
function countDown(i)
    {
    let countDown = 10;
    while (countDown > -1) {
  console.log(countDown--);
    }
};

const names = ["Ada", "Brendan", "Ali"]
const event = 'surprise'
 function writeCards(names,event)
 {
     let newArray = []
    for (let i = 0; i < names.length; i++){
        
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
 };