function yosh_sorash() {
    var yosh = prompt("Yoshingizni kiriting:");
    if (yosh !== null) {
      yosh = parseInt(yosh);
      if (!isNaN(yosh)) {
        if (yosh >= 20) {
          alert("Siz universitetga kirishingiz mumkin!");
        } else {
          alert("Siz universitetga kirish uchun hali yoshsiz!");
        }
      } else {
        alert("Yosh raqam ko'rinishida emas!");
      }
    }
  }
  yosh_sorash();