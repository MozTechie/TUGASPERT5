
function calculateFactorial(num) {
    if (num <= 1) return 1;
    return num * calculateFactorial(num - 1);
  }
  
  // Jangan hapus kode di bawah ini!
  export default calculateFactorial;
  
