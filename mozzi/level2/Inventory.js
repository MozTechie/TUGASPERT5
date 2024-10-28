
import Item from './Item.js';

class Inventory {
  constructor() {
    this.items = []; // Menyimpan daftar item dalam array
  }

  // Menambahkan item ke dalam inventaris
  addItem(item) {
    this.items.push(item);
  }

  // Menghapus item berdasarkan id
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Menampilkan daftar item yang tersedia
  listItems() {
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
