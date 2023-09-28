/*
You have a two-dimensional list in the following format:
data = [[2, 5], [3, 4], [8, 7]]
Each sub-list contains two items, and each item in the sub-lists is an integer.
Write a function process_data()/processData() that processes each sub-list like so:
[2, 5] --> 2 - 5 --> -3
[3, 4] --> 3 - 4 --> -1
[8, 7] --> 8 - 7 --> 1
and then returns the product of all the processed sub-lists: -3 * -1 * 1 --> 3.
For input, you can trust that neither the main list nor the sublists will be empty.
*/

const processData = data => data.reduce((a,b) => a * (b[0] - b[1]), 1)

// with deconstruction, perhaps even cleaner:
// const processData = data => data.reduce((a, [b, c]) => a * (b - c), 1)