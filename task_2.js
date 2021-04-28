function task_2() {
      let number = document.getElementById("a").value;
      let arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
      let roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
      
      number = number.toUpperCase();
      var rezult = 0;
      var posit = 0;
      var n = arab.length - 1;
      while (n >= 0 && posit < number.length) {
            if (number.substr(posit, roman[n].length) == roman[n]) {
                  rezult += arab[n];
                  posit += roman[n].length;
            }
      else n--;
      }
      document.getElementById("answer").innerHTML = "Римский вид: " + rezult;
      }