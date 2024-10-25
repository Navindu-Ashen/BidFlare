import { useState } from 'react';

function AddBidItem() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [expirationDate, setExpirationDate] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const previewURL = URL.createObjectURL(file);
    setImagePreview(previewURL);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling the submission
    console.log({ itemName, description, startingBid, image });
  };

  return (
    <div
    className="flex justify-center items-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/8359/bacf/6ae32cbc6a31983abb26574c0a317d77?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cUuZpxXqZf1Tr~en8Ydy2w~m7H6gmiIeeHzb1FLQyW0N7amBVsoLTb0vKAvc4qRQF4SV5UNq2JSo9SqJ~GI1nwKwjaZEV7oeLAuNPnD8~B3VYeq~Glwx7YtQP3XecS86QasQEENRZM8E0qvTz0XLaPZaFj-rkePJiJi~Rx9UKsf2ZE0neuRdyMEZc1~YWMTCgSHfmDwq3bnSk-0RVJ--tSIW3jFmtGTXEMAZqJcUoVtec9rPBp9qc2fXG~5AGF30OFUYY0KhduNRMBIaHTNxMsrLThwt7MHrmOFbN-T4SrEWJ1fkKa3qoCqkHgjZycaHunWmVugnS92REv91E~fV9Q__)',
    }}
  >
      <div className="w-full max-w-md shadow-md rounded-lg p-10 m-10  pb-20  bg-blue-500">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Add New Bid Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white">Item Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Description</label>
            <textarea
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-white">Starting Bid ($)</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Expire within</label>
            <select
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              onChange={(e) => setExpirationDate(e.target.value)}
              required
            >
              <option value="" disabled selected>Select a duration</option>
              <option value="1">1 Day</option>
              <option value="2">2 Days</option>
              <option value="3">3 Days</option>
              <option value="4">4 Days</option>
              <option value="5">5 Days</option>
              <option value="6">6 Days</option>
              <option value="1 Week">1 Week</option>
              <option value="2 Weeks">2 Weeks</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-white mb-2">Upload Image</label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:border-blue-500"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-md"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18M13 8v8"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 5MB)</p>
                  </div>
                )}
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                  required
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBidItem;