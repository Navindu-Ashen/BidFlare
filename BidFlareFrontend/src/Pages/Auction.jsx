import React, { useState } from 'react';
import carOne from '../assets/images/car1.png'


function Auction(){
    const [bid,setBid] = useState('');
    function handleBidSubmit(event){
        event.preventDefault();
        alert('Bid of $${bid} has been placed ');
        setBid('');
    }
   
    function handleBidChange(event){
        setBid(event.target.value);
    }

    return(
        <div className="bg-gray-100 min-h-screen p-4">
            {/* Auction Header */}
            <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg" >
                <h1 className="text-3xl font-bold mb-4" >Auction Details</h1>

                {/*Auction Image*/}
                <div className='mb-6' >
                    <img className= "w-full h-auto object-cover rounded-lg "  src= {carOne} alt="Auction Item" />
                </div>

                {/**Bid Details */}
                <div className='mb-6' >
                    <h2 className= "text-xl font-semibold" >Current Bid: $500,000</h2>
                    <p className="text-gray-600" >Ends in: 3 Days 8 Hours</p>
                    <p className="text-gray-600" >Minimum Increment: $50,000</p>
                </div>

                {/*Bid Form*/}
                <div className='mb-6' >
                    <form className ="flex space-x-4" onSubmit={handleBidSubmit}>
                        <input className="border p-2 w-2/3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" type='number' value={bid} onChange={handleBidChange}  placeholder='Enter your bid'  />

                        <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auction