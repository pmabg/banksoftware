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


/** @function myFunctionName
 *
 * @description Опиши накратко какво прави функцията
 * @example
 * примерно използване на функцията. Например myFunctionName(2021);
 * @param {string} year - Например календарната година
 */
var myFunctionName = function (year) {

    // Направи някакво действие във функцията.

};


