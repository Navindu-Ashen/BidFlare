import React, { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State for showing/hiding the password

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        
        {/* Left side with an image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/8359/bacf/6ae32cbc6a31983abb26574c0a317d77?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUuZpxXqZf1Tr~en8Ydy2w~m7H6gmiIeeHzb1FLQyW0N7amBVsoLTb0vKAvc4qRQF4SV5UNq2JSo9SqJ~GI1nwKwjaZEV7oeLAuNPnD8~B3VYeq~Glwx7YtQP3XecS86QasQEENRZM8E0qvTz0XLaPZaFj-rkePJiJi~Rx9UKsf2ZE0neuRdyMEZc1~YWMTCgSHfmDwq3bnSk-0RVJ--tSIW3jFmtGTXEMAZqJcUoVtec9rPBp9qc2fXG~5AGF30OFUYY0KhduNRMBIaHTNxMsrLThwt7MHrmOFbN-T4SrEWJ1fkKa3qoCqkHgjZycaHunWmVugnS92REv91E~fV9Q__" // Replace this with the actual image URL
            alt="Login Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right side with the form */}
        <div className="p-8 w-full md:w-1/2">
          
          {/* Website Icon (Aligned to the left) */}
          <div className="mb-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/b13b/f6cb/dfc38a00adfa5f2f6e989906f8f22586?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPgVdMNr2ZlaI9M6OebgmRyqzUsWoV4~uZcfREdkxD8GPgSADOAgCHnxedqNAlE8iEyTOll84Hj6FgK4trsxloaC5LHbIeJG4qCzMp34PyROO2beqU308ag0IWHyl2d4UTfTvc0ss1tPdD9IKTLu8Zad50LkyRbLZeY-jWyu1FRbyIA8Ub1boU94h-BLU3LtB90cPpZ5QZLGeU~--gU03mWm49ODjknhsMbK46U675Wg6HVEgM5dU9fm7mcs0M-cqjiF1XKt-uH9xgw7eKBgSeyLC8S7MZJfaIRYvMPX9k3qblIlsLU0IxxI0tA-7sgi9PNi~PjwnVQxlJLMOdATvA__"  // Replace this with your actual icon URL
              alt="Website Icon"
              className="w-16 h-16"
            />
          </div>

          <h1 className="text-2xl font-semibold mb-6">Log in</h1>

          {/* Social login buttons */}
          <div className="mb-6">
            <button className="w-full mb-4 flex items-center justify-center border py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105">
              <img 
                src="https://banner2.cleanpng.com/20190228/qby/kisspng-google-logo-google-account-g-suite-google-images-g-icon-archives-search-png-1713904157115.webp" 
                alt="Google Logo" 
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 px-4 rounded-lg transition-transform duration-200 transform hover:scale-105">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" 
                alt="Twitter Logo" 
                className="w-5 h-5 mr-2"
              />
              Continue with Twitter
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Login form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-6 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
              />
              {/* Eye icon button to toggle password visibility */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: '100%' }} // Ensure the icon button is vertically centered
              >
                {showPassword ? (
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/565/565655.png" 
                    alt="Hide password" 
                    className="w-5 h-5"
                  />
                ) : (
                  <img 
                    src="https://cdn-icons-png.flaticon.com/512/159/159604.png" 
                    alt="Show password" 
                    className="w-5 h-5"
                  />
                )}
              </button>
            </div>
            <button 
              className="w-full py-2 rounded-lg relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:to-yellow-500 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-1 hover:shadow-lg hover:shadow-pink-500/50 focus:outline-none focus:ring-4 focus:ring-purple-400"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-gray-600 text-sm">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
