declare class Download {
    private width;
    private height;
    constructor(width: number, height: number);
    image(url: string, name: string): void;
}
