function askAge(){
    var age = prompt("Yoshingizni kiriting");

    if (isNaN(age) || age < 7 || age > 100){
        alert("Siz noto'g'ri kiritdingiz. Iltimos qaytadan urinib ko'ring");
        return askAge();
    } else {
        alert("Siz " + age + " yoshdasiz.");
        return age;
    }
}
var age = askAge();
console.log("Sizning yoshingiz: " + age + " da.")