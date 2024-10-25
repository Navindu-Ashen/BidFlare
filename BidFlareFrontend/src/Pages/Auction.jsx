import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import carOne from '../assets/images/car1.png';
import carTwo from '../assets/images/car2.png';
import carThree from '../assets/images/car3.png';
import carFour from '../assets/images/car4.png';

function Auction() {
    const [bid, setBid] = useState('');
    const [timeLeft, setTimeLeft] = useState({
        days: 3,
        hours: 8,
        minutes: 0,
        seconds: 0,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleBidSubmit(event) {
        event.preventDefault();
        setIsModalOpen(true);
    }

    function handleBidChange(event) {
        setBid(event.target.value);
    }

    function confirmBid() {
        alert(`Bid of $${bid} has been placed`);
        setBid('');
        setIsModalOpen(false);
    }

    function cancelBid() {
        setIsModalOpen(false);
    }

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 3);
        targetDate.setHours(targetDate.getHours() + 8);

        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
                <h1 className="text-3xl font-bold mb-4 font-sans">McLaren 720s</h1>
                <div className='mb-6'>
                    <img className="w-full h-auto object-cover rounded-lg" src={carOne} alt="Auction Item" />
                </div>
                <div className='mb-6'>
                    <Slider {...settings}>
                        <div>
                            <img className="w-full h-auto object-cover rounded-lg" src={carOne} alt="Auction Item 1" />
                        </div>
                        <div>
                            <img className="w-full h-auto object-cover rounded-lg" src={carTwo} alt="Auction Item 2" />
                        </div>
                        <div>
                            <img className="w-full h-auto object-cover rounded-lg" src={carThree} alt="Auction Item 3" />
                        </div>
                        <div>
                            <img className="w-full h-auto object-cover rounded-lg" src={carFour} alt="Auction Item 3" />
                        </div>
                    </Slider>
                </div>
                <div className='mb-6'>
                    <h2 className="text-xl font-semibold">Current Bid: $500,000</h2>
                    <p className="text-red-700 text-lg font-extrabold mb-4">Ends in:</p>
                    <div className="flex justify-center space-x-4 mb-6">
                        <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md">
                            <p className="text-3xl font-bold text-blue-600">{timeLeft.days}</p>
                            <p className="text-sm text-gray-700">Days</p>
                        </div>
                        <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md">
                            <p className="text-3xl font-bold text-blue-600">{timeLeft.hours}</p>
                            <p className="text-sm text-gray-700">Hours</p>
                        </div>
                        <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md">
                            <p className="text-3xl font-bold text-blue-600">{timeLeft.minutes}</p>
                            <p className="text-sm text-gray-700">Minutes</p>
                        </div>
                        <div className="text-center bg-blue-100 p-4 rounded-lg shadow-md">
                            <p className="text-3xl font-bold text-blue-600">{timeLeft.seconds}</p>
                            <p className="text-sm text-gray-700">Seconds</p>
                        </div>
                    </div>
                    <p className="text-gray-600">Minimum Increment: $50,000</p>
                </div>
                <div className='mb-6'>
                    <form className="flex space-x-4" onSubmit={handleBidSubmit}>
                        <input className="border p-2 w-2/3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" type='number' value={bid} onChange={handleBidChange} placeholder='Enter your bid' />
                        <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Submit</button>
                    </form>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Confirm Bid</h2>
                        <p className="mb-4">Are you sure you want to place a bid of ${bid}?</p>
                        <div className="flex justify-end space-x-4">
                            <button onClick={cancelBid} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700">No</button>
                            <button onClick={confirmBid} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Auction;