import { useNavigate } from 'react-router-dom';
import './userdash.css';

function Dashboard() {
    const navigate = useNavigate();

    const handleCreateBidClick = () => {
        navigate('/add-bid-item');
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <nav>
                    <ul className="sidebar-menu">
                        <li><a href="#" className="menu-item">Dashboard</a></li>
                        <li><a href="#" className="menu-item">Auctions</a></li>
                        <li className="section-title">MANAGEMENT</li>
                        <li><a href="#" className="menu-item">Bid Pages</a></li>
                        <li><a href="#" className="menu-item">Profile</a></li>
                        <li><a href="#" className="menu-item">Accounts</a></li>
                        <li><a href="#" className="menu-item">Invoice</a></li>
                        <li><a href="#" className="menu-item">Authentication</a></li>
                        <li><a href="#" className="menu-item">Layouts</a></li>
                    </ul>
                </nav>
            </aside>

            <div className="content">
                <header className="header">
                    <div className="header-icon"></div>
                </header>

                <section className="auctions-section">
                    <h1 className="auctions-title">Auctions</h1>
                    <div className="cards-container">
                        <div className="card">
                            <h2 className="card-title">Pending Bids</h2>
                            <p className="card-number">18</p>
                            <p className="card-subtitle">2 Completed</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Active bids</h2>
                            <p className="card-number">132</p>
                            <p className="card-subtitle">28 Completed</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Sold</h2>
                            <p className="card-number">122</p>
                            <p className="card-subtitle">1 Completed with 23%</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Average percentage</h2>
                            <p className="card-number">76%</p>
                            <p className="card-subtitle-success">5% Completed</p>
                        </div>
                    </div> 
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
