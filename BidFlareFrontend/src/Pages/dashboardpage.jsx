import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    const handleCreateBidClick = () => {
        navigate('/add-bid-item');
    };

    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-gray-800 text-white p-5 flex flex-col">
                <nav>
                    <ul className="space-y-5">
                        <li><a href="#" className="text-white hover:underline">Dashboard</a></li>
                        <li><a href="#" className="text-white hover:underline">Auctions</a></li>
                        <li className="text-sm font-bold text-gray-400 mt-5">MANAGEMENT</li>
                        <li><a href="#" className="text-white hover:underline">Bid Pages</a></li>
                        <li><a href="#" className="text-white hover:underline">Profile</a></li>
                        <li><a href="#" className="text-white hover:underline">Accounts</a></li>
                        <li><a href="#" className="text-white hover:underline">Invoice</a></li>
                        <li><a href="#" className="text-white hover:underline">Authentication</a></li>
                        <li><a href="#" className="text-white hover:underline">Layouts</a></li>
                    </ul>
                </nav>
            </aside>

            <div className="flex-1 p-5 bg-gray-100">
                <header className="flex justify-between items-center mb-5">
                    <div className="flex items-center space-x-3">
                        <div className="bg-gray-200 p-3 rounded-full"></div>
                    </div>
                </header>

                <section className="bg-gray-100">
                    <h1 className="text-4xl text-orange-500 mb-5">Auctions</h1>
                    <div className="flex space-x-5 mb-5">
                        <div className="bg-white p-5 rounded-lg shadow-md w-1/4">
                            <h2 className="text-lg font-semibold mb-3">Pending Bids</h2>
                            <p className="text-4xl font-bold mb-2">18</p>
                            <p className="text-sm text-gray-500">2 Completed</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md w-1/4">
                            <h2 className="text-lg font-semibold mb-3">Active bids</h2>
                            <p className="text-4xl font-bold mb-2">132</p>
                            <p className="text-sm text-gray-500">28 Completed</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md w-1/4">
                            <h2 className="text-lg font-semibold mb-3">Sold</h2>
                            <p className="text-4xl font-bold mb-2">122</p>
                            <p className="text-sm text-gray-500">1 Completed with 23%</p>
                        </div>
                        <div className="bg-white p-5 rounded-lg shadow-md w-1/4">
                            <h2 className="text-lg font-semibold mb-3">Average percentage</h2>
                            <p className="text-4xl font-bold mb-2">76%</p>
                            <p className="text-sm text-green-500 font-semibold">5% Completed</p>
                        </div>
                    </div>
                    <button onClick={handleCreateBidClick} className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg">Create New Bid</button>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
