import sha256 from "crypto-js/sha256";

export function addAlpha(color: string, opacity: number): string {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

/**
 * Based on a number or string this function will return a new number that is
 * the same for a given range.
 *
 * @param string
 */
export function randGen(string: any): Number {
  // Hash the string to hex
  var seed = sha256(string).toString();
  // Convert to a number
  var seedNum = parseInt(seed, 16);
  // Get the first 8 digits
  var xNum = seedNum.toString().substring(0, 8);
  // Put the last number of Xnum to the beginning
  xNum = xNum.substring(xNum.length - 1) + xNum.substring(0, xNum.length - 1);
  // Get the 4 of middle
  var yNum = seedNum.toString().substring(4, 8);
  // Put the last number of Ynum to the beginning
  yNum = yNum.substring(yNum.length - 1) + yNum.substring(0, yNum.length - 1);
  // Get the last 4 digits
  var zNum = seedNum.toString().substring(8, 12);
  // Put the last number of Znum to the beginning
  zNum = zNum.substring(zNum.length - 1) + zNum.substring(0, zNum.length - 1);
  return Math.round(
    (parseInt(xNum, 16) + parseInt(yNum, 16) + parseInt(zNum, 16)) / 3
  );
}
