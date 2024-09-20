// let fruitsName = ["mango","cherry"];
// let userFruits = prompt("give fruits name")
    
// for(let i=+fruitsName.length ; i<=10 ; i++){
// fruitsName.splice(1,0,prompt("give fruits name at " + i));
// let userFruits = prompt("give fruits name at " + i)
// fruitsName.push(userFruits)
// if(userFruits == 'run' ||userFruits == 'stop'){
// break;
// }
// }

let fruitsName = ["mango","cherry","stroaberry"];
let userCounter = +prompt("jis counter se ap ko ap ke fruits start karne hen wo counter number mujhe batao optionj 0,1,2,3");
let userFruits = prompt("give fruits name from counter " + userCounter);
let i = userCounter;
while(isNaN(userFruits) || " "){
    // fruitsName.push(userFruits);
    fruitsName.splice(i,0,userFruits);
    i++;
    userFruits = prompt("give fruits name at counter : " + i);
    if(userFruits == 'run' ||userFruits == 'stop'){
            break;
        }
    }
alert(fruitsName);