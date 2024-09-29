
# BidFlare:Web-Based Bidding Platform

This project is a web-based bidding platform that allows to place and manage bids on various products or services. 
The platform is built using **ASP.NET Web API** for the backend and **React** for the frontend, providing a robust and scalable solution for real-time bidding interactions.

## Features

- **User Registration & Authentication**: Secure user accounts with role-based access (buyers, sellers, admins).
- **Real-Time Bidding**: Buyers can place bids in real time, and sellers can manage their auctions.
- **Product/Service Listings**: Sellers can create and manage listings with detailed information.
- **Bid History & Notifications**: Both buyers and sellers can track bidding activity and receive notifications.
- **Admin Panel**: Manage users, listings, and monitor platform activity.

## Technologies

- **Backend**: ASP.NET Web API
- **Frontend**: React
- **Database**: SQL Server
- **Authentication**: JWT-based authentication
- **Real-Time Features**: SignalR (optional) for real-time bid updates

## Installation & Setup

1. **Clone the repository**:
   ```
   git clone https://github.com/your-repo-url.git](https://github.com/Navindu-Ashen/BidFlare.git
   ```

2. **Backend**:
   - Navigate to the backend folder and restore NuGet packages.
   ```
   cd BidFlareBackend
   dotnet restore
   dotnet run
   ```

3. **Frontend**:
   - Navigate to the frontend folder and install npm dependencies.
   ```
   cd BidFlareFronend
   npm install
   npm start
   ```

4. **Database Setup**:
   - Ensure the SQL Server is set up, and update the connection string in the appsettings.json file.
   - To create the database.
   ```
   cd cd BidFlareBackend
   dotnet ef databse update
   ```

## Contributing

We welcome contributions! Please submit issues or pull requests as needed.

## License

This project is licensed under the MIT License.
