import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './userdash.css';

function UserDashboard() {
    const navigate = useNavigate();
    
    useEffect(() => {
        // Load Stripe.js
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/';
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleCreateBidClick = () => {
        navigate('/add-bid-item');
    };

    const handleCheckout = async () => {
        // Initialize Stripe with your public key
        const stripe = window.Stripe('pk_test_51QEPgtHfjG6ABZDpgTstp0n5BBk9dEF6CTzWEK7VrFWKQ7DRjaemOcNwibkkszbejm4Alqm4UggwETBo76gLtEPa00ejYZRK2n');

        try {
            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: 'cs_test_a1i2xCGOXleKoww4LejFeGWTFmmp2Jq3dUgZ41iiQZrQBtRBHcyBP4mz9L'
            });

            if (result.error) {
                // Handle any errors from Stripe
                console.error('Stripe checkout error:', result.error);
                alert(result.error.message);
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed. Please try again.');
        }
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
                            <p className="card-number">1</p>
                            <p className="card-subtitle">2 Completed</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Active bids</h2>
                            <p className="card-number">8</p>
                            <p className="card-subtitle">5 Completed</p>
                        </div>
                        <div className="card">
                            <h2 className="card-title">Sold</h2>
                            <p className="card-number">12</p>
                            <p className="card-subtitle">1 Completed with 23%</p>
                        </div>
                    </div> 
                    <div>
                        <h1 className="auctions-title">Active Bids</h1>
                        <div></div>
                    </div>
                </section>

                <div className="card">
                    <img src="/car3.jpg" alt="2021 McLaren 720s coupe" />
                    <h3>2021 McLaren 720s coupe</h3>
                    <p className="price">$260,000</p>
                    <p className="price">You won!</p>
                    <button 
                        className="btn bid" 
                        onClick={handleCheckout}
                    >
                        Checkout
                    </button>
                </div>
            </div>                      
        </div>
    );
}

export default UserDashboard;