// CanvasHelper.js
// Tim Montesa - tmontesa@sfu.ca
// v1.0.0

class CanvasHelper {

    _options = {
        fillColor: "#222",
        strokeColor: "#000",
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Constructor
    ////////////////////////////////////////////////////////////////////////////////

    constructor(context, w, h) {
        this._context = context;
        this._w = w;
        this._h = h;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Set Options
    ////////////////////////////////////////////////////////////////////////////////

    setOptions(options = {}) {
        if (options.hasOwnProperty("fillColor")) {
            this.setFillColor(options.fillColor);
        }
        if (options.hasOwnProperty("strokeColor")) {
            this.setStrokeColor(options.strokeColor);
        }
    }

    setFillColor(fillColor) {
        this._context.beginPath();
        this._options.fillColor = fillColor;
        this._context.fillStyle = fillColor;
    }

    setStrokeColor(strokeColor) {
        this._context.beginPath();
        this._options.strokeColor = strokeColor;
        this._context.strokeStyle = strokeColor;
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Fill
    ////////////////////////////////////////////////////////////////////////////////

    fillRect(x, y, w, h) {
        this._context.beginPath();
        this._context.rect(x, y, w, h);
        this._context.fill();
    }

    fillRectFromCenter(cx, cy, w, h) {
        this._context.beginPath();
        let x = cx - (w/2);
        let y = cy - (h/2);
        this._context.rect(x, y, w, h);
        this._context.fill();
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Draw
    ////////////////////////////////////////////////////////////////////////////////

    drawImage(image, sx, sy, sw, sh, x, y, w, h) {
        this._context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    }

    drawImageFromCenter(image, sx, sy, sw, sh, cx, cy, w, h) {
        let x = cx - (w/2);
        let y = cy - (h/2);
        this._context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    }

}
