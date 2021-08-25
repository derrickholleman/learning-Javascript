const orders = [
    {
        userId: 1, 
        amount: 10
    },
    {
        userId: 1, 
        amount: 15
    },
    {
        userId: 1,
        amount: 10
    },
    {
        userId: 2, 
        amount: 5
    },
    {
        userId: 2,
        amount: 100
    }
];

/* filter orders and return a new array (order) for all instances that userId === 1 */
const result = orders.filter(order => order.userId === 1)
/* map order into a new array that only has amount */
.map(order => order.amount)
/* reduce returns sum of amounts of userId that equals 1 */
.reduce((a, b) => a + b)
console.log(result)