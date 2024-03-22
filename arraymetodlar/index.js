const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getNumbers(){
    let numbers = [];

    function askNumbers(){
        rl.question(`Raqam kiriting (bekor qilish uchun "exit" yoki "stop" yozing): `, (answer) => {
            if (answer.toLowerCase() ==='exit' || answer.toLowerCase() === 'stop'){
                calculateSum(numbers);
                rl.close()
            } else {
                let number = parseInt(answer);
                if (!isNaN(number)){
                    numbers.push(number);
                } else {
                    console.log(`Noto'g'ri kiritish! Faqat son kiritish mumkin.`);
                }
                askNumbers();
            }
        });
    }
    askNumbers();
}
function calculateSum(numbers){
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log('Kiritilgan raqamlar:', numbers);
    console.log(`Kiritilgan raqamlar yig'indisi:`, sum);
}
getNumbers();