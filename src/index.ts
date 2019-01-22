class Download {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  image(url: string, name: string) {
    const { width, height } = this;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    const img = new Image();
    img.setAttribute("crossOrigin", "Anonymous");

    img.src = url;
    img.onload = function() {
      context.drawImage(img, 0, 0, width, height);
      const a = document.createElement("a");
      a.href = canvas.toDataURL();
      a.download = name;
      a.click();
    };
  }
}

module.exports = Download;
