function removeStrings(array){
    return array.filter(item => typeof item !== 'string');
}
let numbers = [56, 14, 46, 11, 8, 'hello world', 113, 89, 12, 78, 5, 67, 12];
let result = removeStrings(numbers);
console.log(result);