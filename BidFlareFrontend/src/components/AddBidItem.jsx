import { useState } from 'react';


function AddBidItem() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [startingBid, setStartingBid] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling the submission
    console.log({ itemName, description, startingBid, image });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">Add New Bid Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Item Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Starting Bid ($)</label>
            <input
              type="number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              value={startingBid}
              onChange={(e) => setStartingBid(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              className="w-full px-4 py-2 mt-2"
              onChange={handleImageUpload}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBidItem;
