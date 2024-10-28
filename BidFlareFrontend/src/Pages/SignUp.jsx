import React, { useState } from "react";

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

    // Validate form fields
    if (!username || !email || !phoneNumber || !password || !confirmPassword) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if(username.length < 6){
      setError("User Name must be at least 6 characters");
      setLoading(false);
      return;
    }

    if(phoneNumber.length != 10){
      setError("Please enter a valid phone number");
      setLoading(false);
      return;
    }

    if(password.length < 5){
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Create request body
    const requestBody = {
      userName: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };

    try {
      console.log("Step 1....................");
      console.log(requestBody);
      const response = await fetch(
        "http://localhost:5116/api/account/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );
      console.log("Step 2....................");
      if (!response.ok) {
        console.log("Error....................");
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }
      console.log("Step 3....................");
      let responseData;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }
      console.log("Step 3 Done....................");
      // Clear form fields on success
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");

      window.location.href = "/login";
    } catch (error) {
      console.log(error.message);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-50 items-center justify-center bg-gray-100 mt-0 mb-20 pt-10 ">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://helpinghand.com.au/wp-content/uploads/2021/11/silent-auction.webp"
            alt="Signup Illustration"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="p-8 w-full md:w-1/2">
          <div className="mb-6">
            <img
              src="../src/image/bidflare_logo.png"
              alt="Website Icon"
              className="h-10"
            />
          </div>
          <h1 className="text-2xl font-semibold mb-6">Welcome to bidFlare</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: "100%" }}
              >
                
              </button>
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center"
                style={{ height: "100%" }}
              >
                
              </button>
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-600">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
