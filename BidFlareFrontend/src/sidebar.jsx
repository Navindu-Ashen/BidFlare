import './sidebar.css'

function Sidebar(){
    return(
        <div class="sidebar">
        <div class="logo">
            
            <span>Bid Flare</span>
        </div>
        <nav>
            <ul>
                <li><a href="#" class="active">Dashboard</a></li>
                <li><a href="#">Auctions</a></li>
                <li class="management-title">MANAGEMENT</li>
                <ul class="submenu">
                    <li><a href="#">Bid Pages</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Accounts</a></li>
                    <li><a href="#">Invoice</a></li>
                </ul>
                <li><a href="#">Authentication</a></li>
                <li><a href="#">Layouts</a></li>
            </ul>
        </nav>
    </div>

    );
}

export default Sidebar
