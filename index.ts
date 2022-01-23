/**
 * This libary is used to generate ugly and lazy, but unique avatars.
 * It uses sha256 to generate a unique hash for a given string.
 * By using math operations and random numbers it will generate a unique avatar
 *
 * Due to the nature of the library, if something changes in the future,
 * the avatar may be different from the previous one. But it will be unique.
 *
 * @author: @lmoisz03
 * @license: MIT
 */
import sha256 from "crypto-js/sha256";
import { randGen } from "./utils/utils";
import { randomColor } from "./utils/colors";

const template = `
  <svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="[cWidth]" height="[zHeight]" >
    <- bg ->
    <- shapes ->
  </svg>
`;
/**
 * this function generate a unique hash for a given string
 * even if the string seems to be the same it will generate a different hash
 * @param str
 * @returns {string}
 */

function getSeed(seed: any): string {
  let array = new Array(seed.length);
  array.fill(0);
  for (let i = 0; i < seed.length; i++) {
    array[i % 4] = (array[i % 4] << 5) - array[i % 4] + seed.charCodeAt(i);
  }
  return sha256(array.join("")).toString();
}
function shapeDraw(ctx: any, shape: any) {
  let x = shape.x;
  let y = shape.y;
  ctx.beginPath();
  ctx.ellipse(x, y, shape.r, shape.r, 0, 0, 2 * Math.PI);
  ctx.fillStyle = shape.color;
  // size
  ctx.lineWidth = shape.size;
  ctx.fill();
}
function genShapes(ctx: any, seed: any, size: number, nShapes: number) {
  let shapes = [];
  let total = 0; // total of generated shapes.
  for (let i = 0; i < nShapes; i++) {
    let color = randomColor(getSeed(seed) + i);
    let rSize = Math.round(((ctx.canvas.width * 2) / (nShapes + 1)) * (i + 1));
    let size = Math.round(
      (rSize * parseInt(randGen(getSeed(seed).toString()).toString() + i)) / 100
    );
    if (size > ctx.canvas.width / 2) {
      size = Math.round(ctx.canvas.width - nShapes);
    }
    let x = Math.round(
      ctx.canvas.width / 2 + (ctx.canvas.width / 2) * Math.cos(total) - size / 2
    );

    let y = Math.round(
      ctx.canvas.height / 2 +
        (ctx.canvas.height / 2) * Math.sin(total) -
        size / 2
    );

    let r = Math.round(size / 2);

    // console.log(color, size, x, y, r);
    total = total + 1;
    shapes.push({
      x,
      y,
      r,
      color,
      size,
    });
  }
  return {
    shapes,
    ctx,
  };
}

/**
 * Generate an avatar for a given seed
 * @param seed
 * @param size
 * @para color - optional background color
 * @param opts - optional options
 * @param opts.maxFigures - max number of figures
 * @returns {string}
 */

export default function genIcon({
  seed,
  size = 100,
  color = "",
  opts = {},
}: {
  seed: string;
  size: number;
  color?: any;
  opts?: {
    maxFigures?: number;
  };
}) {
  var seed = getSeed(seed);
  var type = "image/png";
  var quality = 0.5;

  var bgcolor = randomColor(seed) || color;
  var maxFigures = opts.maxFigures || 8;
  if (maxFigures > 40) {
    throw new Error(
      "maxFigures cannot be greater than 40. This cause a misconduct in the code."
    );
  }
  let shapesN = parseInt(randGen(seed).toString()) % maxFigures;
  if (shapesN === 0) {
    shapesN = maxFigures;
  }
  if (shapesN <= 4) {
    shapesN = maxFigures - shapesN;
  }
  let ctx = {
    canvas: {
      width: size,
      height: size,
    },
  };
  const data = template
    .replace("[cWidth]", ctx.canvas.width.toString())
    .replace("[zHeight]", ctx.canvas.height.toString())
    .replace(
      "<- bg ->",
      `<rect x="0" y="0" width="100" height="100" fill="${bgcolor}" />`
    )
    .replace(
      "<- shapes ->",
      genShapes(ctx, seed, size, shapesN)
        .shapes.map((shape: any) => {
          return `<circle cx="${shape.x}" cy="${shape.y}" r="${shape.r}" fill="${shape.color}" />`;
        })
        .join("")
    );
  // Transform the SVG string in base64
  return `data:image/svg+xml;base64,${encodeSvg(data)}`;
}

function encodeSvg(svgString: string) {
  return Buffer.from(svgString).toString("base64");
}
