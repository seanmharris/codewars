/*
Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.
It should only accept addresses in canonical representation, so no leading 0s, spaces etc.
*/

String.prototype.ipv4Address=function(){
    let arr = this.split('.')
    return arr.length === 4 && arr.every(n => +n >= 0 && +n <= 255 && n.length === Number(n).toString().length)
  }