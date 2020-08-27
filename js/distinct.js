// distinct.js

let arr1 = Array.from(new Array(10000), (x, index)=>{
    return index
})



let start = new Date().getTime()
console.log('开始数组去重')

function delRepeat(arr) {
    // 数组去重
    // const newArr = []
    // for (let i = 0; i < arr.length; i++) {
    //     if(newArr.indexOf(arr[i]) === -1) {
    //     	newArr.push(arr[i])
    //     }
    // }
    // return newArr;


    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === arr[i]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;

    // arr.sort();
    // function loop(index) {
    //     if (index >= 1) {
    //         if (arr[index] === arr[index - 1]) {
    //             arr.splice(index, 1);
    //         }
    //         loop(index - 1);
    //     }
    // }
    // loop(arr.length - 1);
    // return arr;



}


console.log('去重后的长度', delRepeat(arr1).length)

let end = new Date().getTime()
console.log('耗时', end - start)