import { useNavigate } from 'react-router-dom';
import './admindash.css';

function AdminDashboard() {
    const navigate = useNavigate();

    const handleCreateBidClick = () => {
        navigate('/add-bid-item');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <nav>
                    <ul className="sidebar-menu">
                        <li><button onClick={() => handleNavigation('/dashboard')} className="menu-item">Dashboard</button></li>
                        <li><button onClick={() => handleNavigation('/auctions')} className="menu-item">Auctions</button></li>
                        <li className="section-title">MANAGEMENT</li>
                        <li><button onClick={() => handleNavigation('/bid-pages')} className="menu-item">Bid Pages</button></li>
                        <li><button onClick={() => handleNavigation('/profile')} className="menu-item">Profile</button></li>
                        <li><button onClick={() => handleNavigation('/accounts')} className="menu-item">Accounts</button></li>
                        <li><button onClick={() => handleNavigation('/invoice')} className="menu-item">Invoice</button></li>
                        <li><button onClick={() => handleNavigation('/authentication')} className="menu-item">Authentication</button></li>
                        <li><button onClick={() => handleNavigation('/layouts')} className="menu-item">Layouts</button></li>
                    </ul>
                </nav>
            </aside>
            <div className="admin-profile-container">
                <header className="admin-header">
                    <h1>Admin Profile</h1>
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

export default AdminDashboard;
