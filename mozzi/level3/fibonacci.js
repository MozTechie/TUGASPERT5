
function calculateFibonacci(term) {
    if (term === 0) return 0;
    if (term === 1) return 1;
    return calculateFibonacci(term - 1) + calculateFibonacci(term - 2);
  }
  
  // Jangan hapus kode di bawah ini!
  export default calculateFibonacci;
  