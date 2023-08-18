"""
Create a function that will take any amount of money and break it down to the smallest number of bills as possible.
Only integer amounts will be input, NO floats.
This function should output a sequence, where each element in the array represents the amount of a certain bill type.
The array will be set up in this manner:
array[0] ---> represents $1 bills
array[1] ---> represents $5 bills
array[2] ---> represents $10 bills
array[3] ---> represents $20 bills
array[4] ---> represents $50 bills
array[5] ---> represents $100 bills
In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:
365 =>  [0,1,1,0,1,3]
In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:
217 => [2,1,1,0,0,2]
"""

def give_change(amount): 
    h = amount // 100
    fif = (amount - 100 * h) // 50
    tw = (amount - 100 * h - 50 * fif) // 20
    te = (amount - 100 * h - 50 * fif - 20 * tw) // 10
    fiv = (amount - 100 * h - 50 * fif - 20 * tw - 10 * te) // 5
    o = (amount - 100 * h - 50 * fif - 20 * tw - 10 * te - 5 * fiv) // 1
    return (o, fiv, te, tw, fif, h)

# alternative reassigning amount with modulus

def give_change_mod(amount): 
    h = amount // 100
    amount %= 100
    fif = amount // 50
    amount %= 50
    tw = amount // 20
    amount %= 20
    te = amount // 10
    amount %= 10
    fiv = amount  // 5
    amount %= 5
    return (amount, fiv, te, tw, fif, h)