/*
Given the molecular mass of two molecules M1 and M2, their masses present m1 and m2 in a vessel of volume V at a specific temperature T, find the total pressure exerted by the molecules.
The formula to calculate pressure is:
            m1      m2
            __  +   __      *   R   *   T
            M1      M2 
Ptotal =    _________________________________

                        V

Input: six values
- M1, M2: molar masses of both gases in g/mol
- m1, m2: present mass of both gases, in g
- V: volume of the vessel, in dm^3
- T: temperature in celsius
Output: one value, Ptotal, in units of atm
Notes: remember temperature is given in celsius while the SI unit is Kelvin. 0 celsius = 273.15 K
The gas constant R = .082 dm^3 atm / K mol
*/

solution = (mM1, mM2, gM1, gM2, v, t) => {
    const m1 = gM1 / mM1,
          m2 = gM2 / mM2,
          R = .082,
          k = t + 273.15
    return (m1 + m2) * R * k / v
  }