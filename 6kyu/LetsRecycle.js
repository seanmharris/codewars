/*
You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.
Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.
Notes
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list
Example
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]
output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

function recycle(array) {
    let res = [[],[],[],[]]
    
    for (let item of array) {
      if (item.material === 'paper') res[0].push(item.type)
      if (item.material === 'glass') res[1].push(item.type)
      if (item.material === 'organic') res[2].push(item.type)
      if (item.material === 'plastic') res[3].push(item.type)
      if (item.secondMaterial === 'paper') res[0].push(item.type)
      if (item.secondMaterial === 'glass') res[1].push(item.type)
      if (item.secondMaterial === 'organic') res[2].push(item.type)
      if (item.secondMaterial === 'plastic') res[3].push(item.type) 
    }
    
    return res
  }