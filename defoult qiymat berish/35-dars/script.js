function askAge() {
    var age = parseInt(prompt("Yoshingizni kiriting", "0dan 100gacha"));

    if (isNaN(age) || age < 0 || age > 100) {
        alert("Siz noto'g'ri kiritdingiz. Iltimos qaytadan kiriting.");
        return askAge();
    }
    if else (age < 25)
    else {
        alert("Siz " + age + " yoshdasiz.");
        document.write("<img src=./assets/maxresdefault.jpg>")
        return age
    }
}

var age = askAge();
console.log("Sizning yoshingiz:" + age + " da")