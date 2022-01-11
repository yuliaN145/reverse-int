module.exports = function reverse (n) {
    if (n< 0) {
        let num1 = Math.abs(n);
        let str = String(num1);
        let str1 = ''
        for (let i = str.length - 1; i >= 0; i--){
          str1 += str[i];
        }
        let result = Number(str1);
        return result;
      }
      else {
        let str = String(n);
        let str1 = ''
        for (let i = str.length - 1; i >= 0; i--){
          str1 += str[i];
        }
        let result = Number(str1);
        return result;
      }
}
