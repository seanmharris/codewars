/*
Story
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".
Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if (enteredCode !== correctCode) return false
    const months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
    const curArr = currentDate.split(' ').map((item, idx) => idx == 1 ? item.slice(0, item.length-1) : item)
    const expArr = expirationDate.split(' ').map((item, idx) => idx == 1 ? item.slice(0, item.length-1) : item)
    if (+curArr[2] < +expArr[2]) return true
    if (+curArr[2] === +expArr[2] && months.indexOf(curArr[0].toLowerCase()) < months.indexOf(expArr[0].toLowerCase())) return true
    if (+curArr[2] === +expArr[2] && months.indexOf(curArr[0].toLowerCase() == months.indexOf(expArr[0].toLowerCase())) && +curArr[1] <= +expArr[1]) return true
    return false
  }