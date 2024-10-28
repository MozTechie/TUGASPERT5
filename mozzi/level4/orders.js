// Fungsi untuk menghasilkan ID unik
function createUniqueId() {
  return `#${Math.random().toString(36).substring(2, 9)}`;
}

// Array untuk menyimpan daftar pesanan
let orderList = [];

// Fungsi untuk menambahkan pesanan baru
function createOrder(customer, orderItems) {
  const id = createUniqueId();
  const totalCost = orderItems.reduce((sum, item) => sum + item.price, 0);
  const newOrder = {
    id,
    customer,
    orderItems,
    totalCost,
    status: 'Menunggu'
  };
  orderList.push(newOrder);
}

// Fungsi untuk mengubah status pesanan
function modifyOrderStatus(orderId, newStatus) {
  const foundOrder = orderList.find(order => order.id === orderId);
  if (foundOrder) {
    foundOrder.status = newStatus;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan selesai
function getTotalRevenue() {
  return orderList
    .filter(order => order.status === 'Selesai')
    .reduce((sum, order) => sum + order.totalCost, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function removeOrder(orderId) {
  orderList = orderList.filter(order => order.id !== orderId);
}

export { orderList, createOrder, modifyOrderStatus, getTotalRevenue, removeOrder };
