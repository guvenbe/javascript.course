const numberOfOccurence = (numArr, num) => {
    if(isNaN(num)){
        throw new Error(`${num} is not a number`)
    }
    let count=0;
    for (const n of numArr){
        if(n===num) count++;
    }
    return count;
}

export default numberOfOccurence;