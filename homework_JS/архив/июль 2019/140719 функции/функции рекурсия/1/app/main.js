function pow(x, n) {

    if (n != 1) {

      return x * pow(x, n - 1);

    } else {

      return x;
    }
  }
  
  let powNum1 = parseInt(prompt("Введите число: ", 2)),
      powNum2 = parseInt(prompt("Введите степень числа: ", 10));
  
      console.log(pow(powNum1, powNum2)); 