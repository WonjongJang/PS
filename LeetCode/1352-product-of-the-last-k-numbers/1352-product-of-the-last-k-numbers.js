
var ProductOfNumbers = function() {
    this.product = []
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.product.push(num)
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    return this.product.slice(-k).reduce((acc, v) => acc * v, 1)
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */