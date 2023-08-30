/*
You are Chief Commissioning Editor at a broadcaster who recently approved the production of
a televisual sports extravaganza, ‘Monkey Tennis’. Broadcasting from Wimbledon has just finished,
and it did not go well. Adherence to the rules of the game was minimal and, in essence,
you just spent 45 minutes watching a band of chimps running amuck on a tennis court in front of
a live studio audience. Now you are left with a detritus; there are tennis balls and banana peels everywhere!
~
You will receive an array of tennis balls and banana peels, which will each be represented by their weight.
Tennis balls weigh exactly 58 grams, and banana peels weigh 60 grams upwards.
Your job is to gather up just the tennis balls and return them in a sack.
The sack will be represented by an object that has a 'weight' property, the value of which should be equal
to the combined weight of all tennis balls in the array.
If the array contains no tennis balls, then the weight value of the returned sack object should be 0.
*/

// this is a very silly and complicated way of saying "total up the specific elements in an array that have a precise given value" (58 here)
// so I'm just going to filter input for values === 58, and from there just access filtered length & multiply by 58 to get total weight (or 0 if length was 0)

const ballCollector = detritus => ({ weight : detritus.filter(w => w === 58).length * 58 })