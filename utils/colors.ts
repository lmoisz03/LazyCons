import { addAlpha } from "./utils";
import sha256 from "crypto-js/sha256";

export function getColorBrightness(color: string): number {
  if (color.charAt(0) === "#") {
    color = color.substr(1);
  }
  if (color.length === 3) {
    color = color.replace(/(.)/g, "$1$1");
  }
  return parseInt(color, 16);
}
export function randomColor(seed: any, opacity: number = 0): string {
  const hash = sha256(seed).toString();
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  // Increase the opacity depending on the seed

  var letters =
    hash.substring(0, 6) + hash.substring(hash.length - 4, hash.length);
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters.charAt(i);
  }
  return addAlpha(color, _opacity);
  // RGba color
}
