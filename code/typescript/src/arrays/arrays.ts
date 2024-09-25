export default class Arrays {
    private data: number[];

    // Constructor initializes the 'data' property
    constructor(data: number[]) {
        this.data = data;
    }

    set(data: number[]): void {
        this.data = data;
    }

    insertAtEnd(value: number): number[] {
        this.data[this.data.length + 1] = value;
        return this.data;
    }

    insert(value: number): number[] {
        this.data[this.data.length + 1] = value;
        return this.data;
    }

    // Method to read the data
    read(): void {
        console.log(`Array Content: ${this.data}`);
    }
}