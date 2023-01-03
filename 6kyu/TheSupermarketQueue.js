/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
Clarifications
There is only ONE queue serving many tills, and
The order of the queue NEVER changes, and
The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
N.B. You should assume that all the test input will be valid, as specified above.

P.S. The situation in this kata can be likened to the more-computer-science-related idea of a thread pool, with relation to running multiple processes at the same time: https://en.wikipedia.org/wiki/Thread_pool
*/

function queueTime(customers, n) {
    // create two local variables - registers, an empty array which we will move items from the 'front' of the customers[] queue into
    // and totalTime, which will increment as we subtract from values in registers (replacing any that reach 0 as we go) and ultimately be returned at the end
    let registers = []
    let totalTime = 0
    // populate registers array from beginning of customers array. break if customers array reaches length of 0 to avoid infinite loop. Shift to 'move the line forward'
    if (customers.length === 0) return 0
    while (registers.length < n) {
        registers.push(customers[0])
        customers.shift()
        if (customers.length == 0) break
    }
    // once customers.length is 0, we no longer need to do this subtraction. we will be able to find the max remaining value from registers and add that to the totalTime
    while (customers.length > 0) {
        // if the min amount (element value) within the registers array is > 0, we deduct 1 from each value therein and add 1 to totalTime, representing 1 minute passing.
        if (Math.min(...registers) > 0) {
            registers = registers.map(time=> time - 1)
            totalTime ++
        } else {
        // if the above is NOT true, then we have at least one 0 value in our registers array, representing a customer who is finished checking out.
        
            registers = registers.filter(amount => amount != 0)
            // filter to remove any 0s, then repeat the re-population while loop to fill with new customers. Again, we break if customers.length is 0
            while (registers.length < n) {
                registers.push(customers[0])
                customers.shift()
                if (customers.length == 0) break
            } // once this is done, the registers array should be back to 'full'
        } // at this point the else is also done, so we zoom back out again...
    } // restarting our check of customers.length. If there are still customers waiting, we continue to decrement registers values while incrementing totalTime
    // when customers.length is 0 due to above loops, we can simply return totalTime + the max remaining value from registers array.
    return totalTime + Math.max(...registers)
}