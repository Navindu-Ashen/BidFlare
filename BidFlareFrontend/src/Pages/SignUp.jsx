import React, { useState } from 'react';


function Signup () {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        {/* Left side with the form */}
        <div className="p-8 w-full md:w-1/2">
          <div className="mb-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/b13b/f6cb/dfc38a00adfa5f2f6e989906f8f22586?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPgVdMNr2ZlaI9M6OebgmRyqzUsWoV4~uZcfREdkxD8GPgSADOAgCHnxedqNAlE8iEyTOll84Hj6FgK4trsxloaC5LHbIeJG4qCzMp34PyROO2beqU308ag0IWHyl2d4UTfTvc0ss1tPdD9IKTLu8Zad50LkyRbLZeY-jWyu1FRbyIA8Ub1boU94h-BLU3LtB90cPpZ5QZLGeU~--gU03mWm49ODjknhsMbK46U675Wg6HVEgM5dU9fm7mcs0M-cqjiF1XKt-uH9xgw7eKBgSeyLC8S7MZJfaIRYvMPX9k3qblIlsLU0IxxI0tA-7sgi9PNi~PjwnVQxlJLMOdATvA__"  // Replace this with your actual icon URL
              alt="Website Icon"
              className="w-16 h-16"  // You can adjust the width and height based on your icon's size
            />
          </div>
          <h1 className="text-2xl font-semibold mb-6">Welcome to bidFlare</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">User Name</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            {/* Password Field with Eye Button */}
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
              {/* Eye icon button for password field */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: '100%' }}
              >
                {showPassword ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                    alt="Hide password"
                    className="w-5 h-5"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                    alt="Show password"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>

            {/* Confirm Password Field with Eye Button */}
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
              {/* Eye icon button for confirm password field */}
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: '100%' }}
              >
                {showConfirmPassword ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png"
                    alt="Hide password"
                    className="w-5 h-5"
                  />
                ) : (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png"
                    alt="Show password"
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>

            <div className="mb-6">
              <input type="checkbox" className="mr-2" />
              <label>I agree to the terms and conditions</label>
            </div>
            <button className="w-full py-2 rounded-lg relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:to-yellow-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-pink-500/50 focus:outline-none focus:ring-4 focus:ring-purple-400">
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            Already have an account? <a href="/login" className="text-blue-500">Log in</a>
          </p>
        </div>

        {/* Right side with an image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/8359/bacf/6ae32cbc6a31983abb26574c0a317d77?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUuZpxXqZf1Tr~en8Ydy2w~m7H6gmiIeeHzb1FLQyW0N7amBVsoLTb0vKAvc4qRQF4SV5UNq2JSo9SqJ~GI1nwKwjaZEV7oeLAuNPnD8~B3VYeq~Glwx7YtQP3XecS86QasQEENRZM8E0qvTz0XLaPZaFj-rkePJiJi~Rx9UKsf2ZE0neuRdyMEZc1~YWMTCgSHfmDwq3bnSk-0RVJ--tSIW3jFmtGTXEMAZqJcUoVtec9rPBp9qc2fXG~5AGF30OFUYY0KhduNRMBIaHTNxMsrLThwt7MHrmOFbN-T4SrEWJ1fkKa3qoCqkHgjZycaHunWmVugnS92REv91E~fV9Q__" // You can replace this with the actual image URL
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
