import './dashboardpage.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleCreateBidClick = () => {
        navigate('/add-bid-item');
    };

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="logo">
                    <h2>Bid Flare</h2>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Auctions</a></li>
                        <li className="section-title">MANAGEMENT</li>
                        <li><a href="#">Bid Pages</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Accounts</a></li>
                        <li><a href="#">Invoice</a></li>
                        <li><a href="#">Authentication</a></li>
                        <li><a href="#">Layouts</a></li>
                    </ul>
                </nav>
            </aside>

            <div className="main-content">
                <header className="topbar">
                    <div className="user-info"></div>
                </header>

                <section className="auctions">
                    <h1>Auctions</h1>
                    <div className="cards">
                        <div className="card">
                            <h2>Pending Bids</h2>
                            <p className="number">18</p>
                            <p className="status">2 Completed</p>
                        </div>
                        <div className="card">
                            <h2>Active bids</h2>
                            <p className="number">132</p>
                            <p className="status">28 Completed</p>
                        </div>
                        <div className="card">
                            <h2>Sold</h2>
                            <p className="number">122</p>
                            <p className="status">1 Completed with 23%</p>
                        </div>
                        <div className="card">
                            <h2>Average percentage</h2>
                            <p className="number">76%</p>
                            <p className="status"><span className="percentage">5%</span> Completed</p>
                        </div>
                    </div>
                    <button className="create-bid" onClick={handleCreateBidClick}>Create New Bid</button>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;