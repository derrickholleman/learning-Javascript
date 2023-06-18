const barcodes = [
    {
        code: 123,
        description: 'hello'
    },
    {
        code: 456,
        description: 'world'
    },
    {
        code: 789,
        description: 'how'
    },
    {
        code: 101112,
        description: 'are'
    },
    {
        code: 131415,
        description: 'you?'
    }
]

const barcodeMap = new Map(barcodes.map((barcode) => [barcode.code, barcode.description]))

const isValidBarCode = (barcode) => {
    if (barcodeMap.get(barcode)) {
        return 'Barcode Found'
    } else {
        return 'Invalid Barcode'
    }
}

console.log(isValidBarCode(123))