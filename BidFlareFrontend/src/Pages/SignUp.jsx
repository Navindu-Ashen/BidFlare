import React, { useState } from "react";
import axios from "axios";
import authService from "../Services/authService";

function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      console.log("Starting.........................................");

      const response = await fetch(
        "http://localhost:5116/api/account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: username,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
          }),
        }
      );

      const data = await response.json();

      alert("Signup successful");
    } catch (error) {
      setError("Signup failed");
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
          <div className="mb-6">
            <img
              src="https://s3-alpha-sig.figma.com/img/b13b/f6cb/dfc38a00adfa5f2f6e989906f8f22586?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gPgVdMNr2ZlaI9M6OebgmRyqzUsWoV4~uZcfREdkxD8GPgSADOAgCHnxedqNAlE8iEyTOll84Hj6FgK4trsxloaC5LHbIeJG4qCzMp34PyROO2beqU308ag0IWHyl2d4UTfTvc0ss1tPdD9IKTLu8Zad50LkyRbLZeY-jWyu1FRbyIA8Ub1boU94h-BLU3LtB90cPpZ5QZLGeU~--gU03mWm49ODjknhsMbK46U675Wg6HVEgM5dU9fm7mcs0M-cqjiF1XKt-uH9xgw7eKBgSeyLC8S7MZJfaIRYvMPX9k3qblIlsLU0IxxI0tA-7sgi9PNi~PjwnVQxlJLMOdATvA__" // Replace this with your actual icon URL
              alt="Website Icon"
              className="w-16 h-16" // You can adjust the width and height based on your icon's size
            />
          </div>
          <h1 className="text-2xl font-semibold mb-6">Welcome to bidFlare</h1>
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
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: "100%" }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center "
                style={{ height: "100%" }}
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
          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Log in
            </a>
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
}


export default Signup;