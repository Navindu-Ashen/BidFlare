import React, { useState, useEffect } from 'react';
import carOne from '../assets/images/car1.png'


//This is the countdown
function Auction(){
    const [bid,setBid] = useState('');
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        Hours: 8,
        Minutes: 0,
        Seconds: 0,
    });



    function handleBidSubmit(event){
        event.preventDefault();
        alert('Bid of $${bid} has been placed ');
        setBid('');
    }
   
    function handleBidChange(event){
        setBid(event.target.value);
    }


useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 8);

    const timer = setInterval(() => {
        const now = new Date();
        const difference= targetDate-now;

        if(difference>0){
            const days = Math.floor(difference / (1000*60*60*24));
            const hours = Math.floor((difference % (1000*60*60*24))/ (1000*60*60));
            const minutes = Math.floor((difference % (1000*60*60))/ (1000*60));
            const seconds = Math.floor((difference % (1000*60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds});
            
        }else{
            clearInterval(timer);
            setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
        }

    }, 1000);
    return () => clearInterval(timer);
}, []);


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
                    <p className="text-gray-600" >Ends in: {timeLeft.days} Days {timeLeft.hours}  Hours {timeLeft.minutes}  Minutes  {timeLeft.seconds} Seconds </p>
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