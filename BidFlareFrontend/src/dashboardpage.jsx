import './dashboardpage.css'
import { Route, Routes } from 'react-router-dom';

function Dashboard(){
    return(
        <div class="dashboard-container">
        
        <aside class="sidebar">
            <div class="logo">
                
                <h2>Bid Flare</h2>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Auctions</a></li>
                    <li class="section-title">MANAGEMENT</li>
                    <li><a href="#">Bid Pages</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Accounts</a></li>
                    <li><a href="#">Invoice</a></li>
                    <li><a href="#">Authentication</a></li>
                    <li><a href="#">Layouts</a></li>
                </ul>
            </nav>
        </aside>

      
        <div class="main-content">
         
            <header class="topbar">
             
                <div class="user-info">
                   
                </div>
            </header>

          
            <section class="auctions">
                <h1>Auctions</h1>
                <div class="cards">
                    <div class="card">
                        <h2>Pending Bids</h2>
                        <p class="number">18</p>
                        <p class="status">2 Completed</p>
                    </div>
                    <div class="card">
                        <h2>Active bids</h2>
                        <p class="number">132</p>
                        <p class="status">28 Completed</p>
                    </div>
                    <div class="card">
                        <h2>Sold</h2>
                        <p class="number">122</p>
                        <p class="status">1 Completed with 23%</p>
                    </div>
                    <div class="card">
                        <h2>Average percentage</h2>
                        <p class="number">76%</p>
                        <p class="status"><span class="percentage">5%</span> Completed</p>
                    </div>
                </div>
                
                <button class="create-bid">Create New Bid</button>
                
            </section>
        </div>
    </div>

    
    

    );
}

export default Dashboard