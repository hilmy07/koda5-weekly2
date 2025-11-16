// fetch data
// let status = true;

export function fetchData(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // const success = true; 

            if (status) {
                resolve("Data berhasil diambil setelah 3 detik");
            } else {
                reject("Gagal mengambil data");
            }
        }, 3000);
    });
}

//async/await cara modern, lebih rapi, lebih mudah dibaca
export async function getDataSatu() {
    const row = "";
    try {
        const data = await fetchData(true);
        console.log("=== async await ===");
        console.log(data);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("selesai\n");
    }
    return row;
}


// .then/.catch cara lama, masih valid, tapi callback-heavy
export function getDataDua() {
    const row = "";
    fetchData(true)
        .then(data => {
            console.log("=== then catch ===");
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            console.log("selesai");
        });
    
    return row;
}

