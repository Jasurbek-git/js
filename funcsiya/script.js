// 3ga bo'linadigan sonlar
// 5ga bo'linadigan sonlar

function sum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++) {
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sum(20));