import React, { Component } from "react";
class Ciphers {
  rot_13 = (some_text) => {
    let plainTextArray = some_text.split("");
    let cipherTextArray = [];
    const increment = 13;
    for (var i = 0; i < plainTextArray.length; i++) {
      var alpha = plainTextArray[i];
      var currentAsciiCode = alpha.charCodeAt();
      // console.log(currentAsciiCode);
      if (currentAsciiCode > 96 && currentAsciiCode < 123) {
        var cipherText = currentAsciiCode + increment;
        if (cipherText > 122) {
          cipherText = cipherText - 26;
          //   console.log(cipherText);
          cipherTextArray.push(String.fromCharCode(cipherText));
        } else {
          cipherTextArray.push(String.fromCharCode(cipherText));
        }
      } else if (currentAsciiCode > 64 && currentAsciiCode < 91) {
        var cipherText = currentAsciiCode + increment;
        if (cipherText > 91) {
          cipherText = cipherText - 26;
          //   console.log(cipherText);
          cipherTextArray.push(String.fromCharCode(cipherText));
        } else {
          cipherTextArray.push(String.fromCharCode(cipherText));
        }
      } else {
        cipherTextArray.push(alpha);
      }
    }
    return cipherTextArray.join("");
  }
}
export default new Ciphers();