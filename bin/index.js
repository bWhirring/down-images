var Download = /** @class */ (function () {
    function Download(width, height) {
        this.width = width;
        this.height = height;
    }
    Download.prototype.image = function (url, name) {
        var _a = this, width = _a.width, height = _a.height;
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = width;
        canvas.height = height;
        var img = new Image();
        img.setAttribute("crossOrigin", "Anonymous");
        img.src = url;
        img.onload = function () {
            context.drawImage(img, 0, 0, width, height);
            var a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = name;
            a.click();
        };
    };
    return Download;
}());
module.exports = Download;
//# sourceMappingURL=index.js.map