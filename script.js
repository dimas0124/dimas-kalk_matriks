// Fungsi untuk membaca nilai matriks
function getMatrixValues(matrixId) {
    const matrix = document.getElementById(matrixId);
    return [
        [parseFloat(matrix.children[0].value) || 0, parseFloat(matrix.children[1].value) || 0],
        [parseFloat(matrix.children[2].value) || 0, parseFloat(matrix.children[3].value) || 0],
    ];
}

// Fungsi untuk menampilkan hasil
function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>${result[0][0]} ${result[0][1]}</p>
        <p>${result[1][0]} ${result[1][1]}</p>
    `;
}

// Operasi penjumlahan
function addMatrices() {
    const A = getMatrixValues("matrixA");
    const B = getMatrixValues("matrixB");
    const result = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]],
    ];
    displayResult(result);
}

// Operasi pengurangan
function subtractMatrices() {
    const A = getMatrixValues("matrixA");
    const B = getMatrixValues("matrixB");
    const result = [
        [A[0][0] - B[0][0], A[0][1] - B[0][1]],
        [A[1][0] - B[1][0], A[1][1] - B[1][1]],
    ];
    displayResult(result);
}

// Operasi perkalian
function multiplyMatrices() {
    const A = getMatrixValues("matrixA");
    const B = getMatrixValues("matrixB");
    const result = [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1],
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1],
        ],
    ];
    displayResult(result);
}
