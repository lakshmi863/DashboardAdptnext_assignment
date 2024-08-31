import { DashboardContainer } from './StyledComponents';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { BsExclamationCircle } from "react-icons/bs";
import './index.css';

const salesData = [
    { name: '6/30/2024', orders: 1600, sales: 1404 },
    { name: '7/6/2024', orders: 940, sales: 950 },
    { name: '7/13/2024', orders: 800, sales: 500 },
    { name: '7/27/2024', orders: 800, sales: 400 },
];

const dataPie = [
    { name: 'WooCommerce Store', value: 40 },
    { name: 'Shopify Store', value: 70 },
];

const COLORS = ['#fb7c7c', '#2cdbd3'];

const Dashboard = () => {

    const totalValue = dataPie.reduce((acc, entry) => acc + entry.value, 0);

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
        <div className='chart-heading'>Total: {totalValue}</div>
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
            
        );
    };

    return (
        <DashboardContainer>
            <div className='card-main'>
                <h3 className='card-heading'>Dashboard</h3>
            </div>
            <div className='chart-m'>
                <div className="charts">
                    <div className="line-chart">
                        <h3 className='style-icon'>Sales vs Orders <BsExclamationCircle /></h3>
                        <LineChart width={600} height={300} data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="orders" stroke="#FF6384" />
                            <Line type="monotone" dataKey="sales" stroke="#36A2EB" />
                        </LineChart>
                    </div>
                </div>
                <div className="pie-chart">
                    <div className='chart-heading'>
                        <h3 className='style-icon'>Portion of Sales <BsExclamationCircle /></h3>
                    </div>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={dataPie}
                            cy={200}
                            cx={200}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {dataPie.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className='sub-title'>
                        <div className='list-style'>
                            <p className='data-p'>WooCommerce Store</p>
                        </div>
                        <div>
                            <p className='Shopify_button'>Shopify Store</p>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardContainer>
    );
};

export default Dashboard;
