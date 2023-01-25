/*
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
*/

const solution = (val, unit) => {
    if(unit[0] != 'kg'){
      switch(unit[0]) {
        case 'g':
          val[0] /= 1000;
          break;
        case 'mg' :
          val[0] /= 1000000;
          break;
        case 'μg' :
          val[0] /= 1000000000;
          break;
        case 'lb' :
          val[0] *= .453592;
          break;
        }
    }
    if(unit[1] != 'kg'){
      switch(unit[1]) {
        case 'g':
          val[1] /= 1000;
          break;
        case 'mg' :
          val[1] /= 1000000;
          break;
        case 'μg' :
          val[1] /= 1000000000;
          break;
        case 'lb' :
          val[1] *= .453592;
          break;
        }
    }
    if(unit[2] != 'm'){
      switch(unit[2]) {
        case 'cm':
          val[2] /= 100;
          break;
        case 'mm' :
          val[2] /= 1000;
          break;
        case 'μm' :
          val[2] /= 1000000;
          break;
        case 'ft' :
          val[2] *= .3048;
          break;
        }
    }
    let G = 6.67 * 10 ** -11
    let masses = val[0] * val[1]
    let radius = val[2] ** 2
    return G * masses / radius
  }