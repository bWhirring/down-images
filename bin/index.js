var Download = /** @class */ (function() {
  function Download() {}
  Download.prototype.image = function(url, name) {
    var img = new Image();
    img.setAttribute("crossOrigin", "Anonymous");
    img.src = url;
    img.onload = function() {
      var width = img.width,
        height = img.height;
      console.log(width, height);
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      var a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = name;
      a.click();
    };
  };
  return Download;
})();
module.exports = Download;
//# sourceMappingURL=index.js.map
