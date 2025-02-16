function checkprime(number){
let factor = 0;
for(let i=2;i<=number;i++){
    if(number%i==0){
        factor++;
    }
}
if(factor==1){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}
  
}