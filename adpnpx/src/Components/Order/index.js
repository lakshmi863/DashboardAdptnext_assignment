import React, { useState } from 'react';
import { OrdContainer } from './StyledComponents';
import './index.css';

const sampleOrders = [
  { id: 1, date: '2024-08-30', customer: 'Alice Johnson', paymentStatus: 'Paid', fulfillmentStatus: 'Shipped' },
  { id: 2, date: '2024-08-29', customer: 'Bob Smith', paymentStatus: 'Pending', fulfillmentStatus: 'Processing' },
  { id: 3, date: '2024-08-28', customer: 'Carol White', paymentStatus: 'Paid', fulfillmentStatus: 'Delivered' },
];

const OrdersDashboard = () => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 5;

  const filteredOrders = sampleOrders.filter(order =>
    order.customer.toLowerCase().includes(filter.toLowerCase())
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handlePrevious = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredOrders.length / ordersPerPage)));

  return (
    <OrdContainer>
        <h3 className='heading_color'>Order</h3>
      <div className="orders-dashboard">
        <header className='header-i'>
          <label>Customer Name: </label>
          <input
            type="text"
            placeholder="Filter orders by customer name"
            value={filter}
            onChange={handleFilterChange}
          />
        </header>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th data-label="Order">Order</th>
              <th data-label="Date">Date</th>
              <th data-label="Customer">Customer</th>
              <th data-label="Payment Status">Payment status</th>
              <th data-label="Fulfillment Status">Fulfillment status</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map(order => (
              <tr key={order.id}>
                <td><input type="checkbox" /></td>
                <td>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.fulfillmentStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {Math.ceil(filteredOrders.length / ordersPerPage)}</span>
          <button onClick={handleNext} disabled={currentPage === Math.ceil(filteredOrders.length / ordersPerPage)}>Next</button>
        </div>
      </div>
    </OrdContainer>
  );
};

export default OrdersDashboard;
