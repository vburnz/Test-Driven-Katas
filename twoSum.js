const twoSum = (arr, sum) => { 
    if (arr.length < 2){ 
        return []; 
    }
    for (let i = 0; i < arr.length; i++){ 
        for (let j = 0; j < arr.length; j++){ 
            if (i!==j){ 
                if ((arr[i]+arr[j]) === sum){ 
                    return [i, j]; 
                }
            }
        }
    }
    return []; 

}

module.exports = twoSum;