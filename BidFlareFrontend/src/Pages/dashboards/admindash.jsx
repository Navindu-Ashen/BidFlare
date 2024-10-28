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
            <main className="admin-profile-container">
                <header className="admin-header">
                    <h1>Admin Profile</h1>
                </header>

                <section className="profile-details">
                    <h2>Profile details</h2>
                    <p><strong>First Name:</strong> Navindu</p>
                    <p><strong>Last Name:</strong> Ashen</p>
                    <p><strong>Contact number:</strong> 0719967276</p>
                    <p><strong>NIC:</strong> 200224801369</p>
                    <p><strong>Email:</strong> navindu158@gmail.com</p>
                </section>

                <div className="cards-container">
                    <div className="card">
                        <h3>Active Bids</h3>
                        <p>Active Bids: <strong>20</strong></p>
                        <p>Pending Bids: <strong>20</strong></p>
                        <button className="see-all-button">See all</button>
                    </div>
                    
                    <div className="card">
                        <h3>Users</h3>
                        <p>Active users: <strong>157</strong></p>
                        <button className="see-all-button">See all</button>
                    </div>
                    
                    <div className="card">
                        <h3>Bids</h3>
                        <p>Active: <strong>10</strong></p>
                        <button className="see-all-button">See all</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdminDashboard;
