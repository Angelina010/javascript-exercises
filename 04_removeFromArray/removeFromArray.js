
const removeFromArray = function(arr, ...toRemove) {
    let newArr = [];
    // for(let i = 0; i < arr.length; i++){
    //     if (!toRemove.includes(arr[i])){
    //         newArr.push(arr[i]);
    //     }
    // }
    arr.forEach(element => {
        if (!toRemove.includes(element)){
            newArr.push(element)
        }
        
    });
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
