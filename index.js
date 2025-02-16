function checkprime(num) {
    let count = 0;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            count++;
        }
    }

    if (count == 0) {
        return true
    } else {
        return false
    }
}


let ans = checkprime(5);

if (ans == true) {
    console.log("prime")
} else {
    console.log("not a prime")
}