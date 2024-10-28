
import { orderList, createOrder, modifyOrderStatus, getTotalRevenue, removeOrder } from './orders.js';

// Menambahkan pesanan baru
createOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

createOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

console.log(orderList);
/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '#uniqueId1',
 *     customer: 'Alice',
 *     orderItems: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalCost: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '#uniqueId2',
 *     customer: 'Bob',
 *     orderItems: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalCost: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan
modifyOrderStatus(orderList[0].id, 'Diproses');
modifyOrderStatus(orderList[1].id, 'Selesai');

console.log(orderList);
/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '#uniqueId1',
 *     customer: 'Alice',
 *     orderItems: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalCost: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '#uniqueId2',
 *     customer: 'Bob',
 *     orderItems: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalCost: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

// Menghitung total pendapatan dari pesanan yang selesai
console.log(getTotalRevenue());
/**
 * Output yang diharapkan:
 * 25000
 */

// Menghapus pesanan berdasarkan ID
removeOrder(orderList[0].id);

console.log(orderList);
/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '#uniqueId2',
 *     customer: 'Bob',
 *     orderItems: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalCost: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
