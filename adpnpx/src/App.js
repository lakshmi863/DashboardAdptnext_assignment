import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Inventry from './Components/Inventry';
import Order from './Components/Order';
import Returns from './Components/Returns';
import Customers from './Components/Customers';
import Shipping from './Components/Shipping';
import Channel from './Components/Channel';
import Integrations from './Components/Integrations';
import Calculators from './Components/Calculators';
import Reports from './Components/Reports';
import Account from './Components/Account';
import './App.css'
function App() {
    return (
        <Router>
          <div className='App-container'>
          <Home />
          <div className='main-container'>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/inventry" element={<Inventry />} />
                <Route path="/order" element={<Order />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/channel" element={<Channel />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/calculators" element={<Calculators />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/account" element={<Account />} />
            </Routes>
            </div>
            </div>
        </Router>
    );
}

export default App;
