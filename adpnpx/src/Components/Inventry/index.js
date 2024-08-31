import { InvContainer } from './StyledComponents';
import { useState } from 'react';
import './index.css'
const sampleData = [
    { submitter: 'jon__see', sid: '001', status: 'Pending', message: 'Order Received', createdAt: '2024-08-30' },
    { submitter: 'seen_joi', sid: '002', status: 'Succeeded', message: 'Order Shipped', createdAt: '2024-08-29' },
    { submitter: 'Bob', sid: '003', status: 'Failed', message: 'Order in Hold', createdAt: '2024-01-25' },
    { submitter: 'bar_se', sid: '004', status: 'Succeeded', message: 'Order Shipped', createdAt: '2024-05-24' },
    { submitter: 'sandi_va', sid: '005', status: 'Pending', message: 'Order Received', createdAt: '2024-084-28' },
    { submitter: 'abbar_vai', sid: '006', status: 'Pending', message: 'Order Received', createdAt: '2024-08-09' },
    { submitter: 'alli_vas', sid: '007', status: 'Pending', message: 'Order Received', createdAt: '2024-06-07' },
    { submitter: 'ssad_ba', sid: '008', status: 'Succeeded', message: 'Order Shipped', createdAt: '2024-03-12' },
    { submitter: 'mavas_vee', sid: '009', status: 'Failed', message: 'Order in Hold', createdAt: '2024-08-23' },
    { submitter: 'sava_diban', sid: '010', status: 'Succeeded', message: 'Order Shipped', createdAt: '2024-04-22' },
    { submitter: 'see_joub', sid: '011', status: 'Failed', message: 'Order in Hold', createdAt: '2024-06-15' },
    { submitter: 'jau_li', sid: '012', status: 'Failed', message: 'Order in Hold', createdAt: '2024-01-13' },
    { submitter: 'sic_alli', sid: '013', status: 'Failed', message: 'Order in Hold', createdAt: '2024-05-11' },
  ];

const Inventry = () => {
    const [filterStatus, setFilterStatus] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
  
    const handleFilterChange = (event) => {
      setFilterStatus(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const filteredData = sampleData.filter(item => {
      return (filterStatus === 'all' || item.status === filterStatus) &&
             (item.submitter.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.message.toLowerCase().includes(searchQuery.toLowerCase()));
    });
  
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    return (
        <InvContainer>
            <h3 className='heading_color'> Inventry</h3>
            <div className="dashboard">
      <header>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
        <select name="filterStatus" value={filterStatus} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
          <option value="succeeded">Succeeded</option>
        </select>
        <button onClick={() => setCurrentPage(1)}>Submit</button>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>Submitter</th>
            <th>sid</th>
            <th>Status</th>
            <th>Message</th>
            <th>CreatedAt</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.submitter}</td>
              <td>{item.sid}</td>
              <td>{item.status}</td>
              <td>{item.message}</td>
              <td>{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}>Next</button>
      </div>
    </div>
        </InvContainer>
    );
};

export default Inventry;
