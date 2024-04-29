'use strict'
module.exports = function() {


/**보조사 선택 함수**/
  function selectAssistant(type) {
    let content = this;
    let lastWord = content.slice(-1);
    let sP = lastWord.normalize('NFD').split('').length;

    if (sP === 3) {
      switch (type) {
        case 1:
          return content += '은';
        case 2:
          return content += '이';
        case 3:
          return content += '을';
      }
    }

    if (sP === 2) {
      switch (type) {
        case 1:
          return content += '는';
        case 2:
          return content += '가';
        case 3:
          return content += '를';
      }
    }

  }

  if (!String.prototype.selectAssistant) 
    Object.defineProperty(String.prototype, 'selectAssistant', {
  value: selectAssistant, 
  writable: true, 
  configurable: true});
/**보조사 선택 함수**/



/**format함수**/


  function format(objects) {
    let res = this;
    let maxIndex = Object.keys(objects);
    try {

      for (let v of maxIndex) {
        res = res.replace(new RegExp('{' + v + '}','g'), objects[v]);
      }

      return res;
    } catch (e) {
      throw new TypeRrror('Number of variables to convert and number of keys do not match.\nFirst Error Part : '+varArr[varArr.indexOf(this.split('{')[num].split('}')[0])])
    }
  }


  if (!String.prototype.format) 
    Object.defineProperty(String.prototype, 'format', {
  value: format,
  writable: true, 
  configurable: true});
/**format함수**/



/**replace함수**/
if (!Array.prototype.replace)
    Object.defineProperty (Array.prototype,'replace',{

      value (target, thing) {
        let arr = this;
        let index = arr.indexOf(target)

        if (arr.indexOf(target) === -1)
          throw new TypeError ('Could not found ' + target + ' in this Array.');

        arr.splice(index, 1, thing)
        return arr
      },

      writable: true,
      configurable: true
  })
/**replace함수**/



  return {}
};



/**
 * Created by 왕초보 on 2024/04/
 * Copyright (c) 왕초보.
 * This code is licensed under the MIT Licensing Principles.
 */