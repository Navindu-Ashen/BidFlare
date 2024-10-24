import React, { useState } from 'react';
import authService from '../Services/authService';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await authService.register(username, email, phoneNumber, password);
      alert('Signup successful');
    } catch (error) {
      setError(error.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/8359/bacf/6ae32cbc6a31983abb26574c0a317d77?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUuZpxXqZf1Tr~en8Ydy2w~m7H6gmiIeeHzb1FLQyW0N7amBVsoLTb0vKAvc4qRQF4SV5UNq2JSo9SqJ~GI1nwKwjaZEV7oeLAuNPnD8~B3VYeq~Glwx7YtQP3XecS86QasQEENRZM8E0qvTz0XLaPZaFj-rkePJiJi~Rx9UKsf2ZE0neuRdyMEZc1~YWMTCgSHfmDwq3bnSk-0RVJ--tSIW3jFmtGTXEMAZqJcUoVtec9rPBp9qc2fXG~5AGF30OFUYY0KhduNRMBIaHTNxMsrLThwt7MHrmOFbN-T4SrEWJ1fkKa3qoCqkHgjZycaHunWmVugnS92REv91E~fV9Q__"
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <h1 className="text-2xl font-semibold mb-6">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Signup'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;