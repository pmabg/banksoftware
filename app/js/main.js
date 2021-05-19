/** @function displayActivePaymentMethod
 *
 * @description Displays the active current payment method on the screen
 * @example
 * displayActive("EasyPay");
 * @param {string} paymentMethodName - The name of the current payment method
 */
var displayActivePaymentMethod = function (paymentMethodName) {
    
    document.write("Your activate payment method is: " + paymentMethodName);

};


/** @function displayBalance
 *
 * @description Displays the balance of the client
 * @example
 * displayBalance(8361031);
 * @param {string} money - The balance of the client/user
 */
var displayBalance = function (money) {

    var currency = "BGN";
    
    document.write("Your balance is: " + money + currency);

};
/** @function displayBalanceEvening1
 *
 * @description Displays balance in the evening1
 * @example
 * displayBalanceEvening1 (1000);
 * @param {string} money - Balance of the client in the evening1
 */
var displayBalanceEvening = function (money) {

   var currency = "BGN";
    
    document.write("Your evening balance1 is: " + money + currency);

};


