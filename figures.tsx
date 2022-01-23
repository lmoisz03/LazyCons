export const figures: any = {
  circle: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  hexagon: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  oval: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.ellipse(x, y, r, r, 0, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  pentagon: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  rectangle: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.rect(x - r, y - r, 2 * r, 2 * r);
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  septagon: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.lineTo(x - r, y);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  square: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.rect(x - r, y - r, 2 * r, 2 * r);
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  triangle: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y + r);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  triangleDown: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x, y + r);
    ctx.lineTo(x + r, y - r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  wave: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  rhombus: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
  trapezoid: (ctx: any, x: any, y: any, r: any, color: any, size: any) => {
    ctx.beginPath();
    ctx.moveTo(x - r, y - r);
    ctx.lineTo(x, y - r);
    ctx.lineTo(x + r, y - r);
    ctx.lineTo(x + r, y + r);
    ctx.lineTo(x - r, y + r);
    ctx.closePath();
    ctx.fillStyle = color;
    // size
    ctx.lineWidth = size;
    ctx.fill();
  },
};
