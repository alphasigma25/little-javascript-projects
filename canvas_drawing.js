/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Vec2d} p
 */
export function drawPoint(ctx, p) {
    ctx.beginPath()
    ctx.moveTo(p.x, p.y)
    ctx.lineTo(p.x + 1, p.y + 1)
    ctx.stroke()
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Vec2d} p1
 * @param {Vec2d} p2
 */
export function drawLine(ctx, p1, p2) {
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
}