import { ReturnContainer } from './StyledComponents';
import './index.css'

const sampleData = [
    {
      requestId: 'R001',
      orderId: 'O001',
      customer: 'John Doe',
      customerContact: 'john.doe@example.com',
      type: 'Refund',
      status: 'New',
      requestDate: '2024-08-30'
    },
    {
      requestId: 'R002',
      orderId: 'O002',
      customer: 'Jane Smith',
      customerContact: 'jane.smith@example.com',
      type: 'Exchange',
      status: 'Received',
      requestDate: '2024-08-29'
    },
    {
      requestId: 'R003',
      orderId: 'O003',
      customer: 'Alice Johnson',
      customerContact: 'alice.johnson@example.com',
      type: 'Refund',
      status: 'Approved',
      requestDate: '2024-08-28'
    },
    {
      requestId: 'R004',
      orderId: 'O004',
      customer: 'Bob Brown',
      customerContact: 'bob.brown@example.com',
      type: 'Exchange',
      status: 'Rejected',
      requestDate: '2024-08-27'
    }
  ];

const Returns = () => {
    return (
        <ReturnContainer>
            <h3 className='heading_color'>Returns</h3>
            <div className="returns-dashboard">
      <header className="dashboard-header">
        <input type="text" placeholder="Search" className="search-input"/>
        <select name="statusFilter" className="status-filter">
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="received">Received</option>
          <option value="rejected">Rejected</option>
          <option value="approved">Approved</option>
          <option value="finalized">Finalized</option>
        </select>
        <button className="filter-button">Filter</button>
        <button className="reset-button">Reset</button>
        <button className="export-button">Export</button>
      </header>
      <table className="returns-table">
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Customer Contact</th>
            <th>Type</th>
            <th>Status</th>
            <th>Request Date</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((item, index) => (
            <tr key={index}>
              <td>{item.requestId}</td>
              <td>{item.orderId}</td>
              <td>{item.customer}</td>
              <td>{item.customerContact}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.requestDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">Previous</button>
        <span className="pagination-info">Page 1 of 1</span>
        <button className="pagination-button">Next</button>
      </div>
    </div>


        </ReturnContainer>
    );
};

export default Returns;
