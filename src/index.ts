class Download {
  image(url: string, name: string) {
    const img = new Image();
    img.setAttribute("crossOrigin", "Anonymous");
    img.src = url;
    img.onload = function() {
      const { width, height } = img;
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      context.drawImage(img, 0, 0, width, height);
      const a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = name;
      a.click();
    };
  }
}

module.exports = Download;
