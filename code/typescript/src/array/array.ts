export default class NumberArray {
    private data: number[];

    // Constructor initializes the 'data' property
    constructor(data: number[]) {
        this.data = data;
    }

    set(data: number[]): void {
        this.data = data;
    }

    insertAtEnd(value: number): number[] {
        this.data[this.data.length] = value;
        return this.data;
    }

    insert(position: number, value: number): number[] {
        const dataLength: number = this.data.length;

        if (position < 0 || position > dataLength) {
            throw new RangeError("invalid array position");
        }

        for (let iCnt: number = dataLength; iCnt >= position; iCnt--) {
            this.data[iCnt] = this.data[iCnt - 1];
        }

        this.data[position] = value;

        return this.data;
    }

    // Method to read the data
    read(): void {
        console.log(`Array Content: ${this.data}`);
    }
}
