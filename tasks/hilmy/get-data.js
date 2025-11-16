export function getDataFromServer(status, callback) {
    const row = "";
    if(status) {
        setTimeout(() => {
            const products = [
                "Product 1",
                "Product 2",
                "Product 3",
            ];
            callback(products, null);
        }, 3000);
    } else {
        const err = new Error("Failed to fetch data");
        callback(null, err);
    }
    return row;
}

export function processData(products) {
    const row = "";
    try {
        if (!products) {
            throw new Error("Tidak ada data untuk diproses");
        }

        products = ["Laptop", "Mouse", "Keyboard"];

        console.log("\nData berhasil diproses:", products);
        console.log("\n===========================================\n");
    } catch (error) {
        console.log("Error:", error.message);
    }
    return row;
}

