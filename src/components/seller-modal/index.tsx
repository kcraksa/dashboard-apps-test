// components/SellerModal.tsx
import React from "react";

const SellerModal = ({ seller, onClose }: { seller: any; onClose: any }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-sm">
      <div className="bg-gray-700 p-4 rounded shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Detil Penjual</h2>
          <button onClick={onClose} className="text-red-500">
            &times;
          </button>
        </div>
        <div className="mb-4 flex gap-4">
          <p>
            <strong>Penjual:</strong> {seller.name}
          </p>
          <p>
            <strong>E-commerce:</strong> {seller.ecommerce}
          </p>
          <p>
            <strong>Lokasi:</strong> {seller.location}
          </p>
          <p>
            <strong>Link Penjual:</strong>{" "}
            <a href={seller.link} className="text-blue-500">
              {seller.link}
            </a>
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Sosial Media</p>
          <p>Facebook: {seller.name}</p>
          <p>Instagram: {seller.name}</p>
          <p>Tiktok: {seller.name}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Tabel Summary Engagement</h3>
          <table className="min-w-full bg-gray-700">
            <thead>
              <tr>
                <th className="py-2">No</th>
                <th className="py-2">Sosial Media</th>
                <th className="py-2">Viewers</th>
                <th className="py-2">Like</th>
                <th className="py-2">Comment</th>
                <th className="py-2">Share</th>
                <th className="py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">1</td>
                <td className="border px-4 py-2">Facebook</td>
                <td className="border px-4 py-2">501,242</td>
                <td className="border px-4 py-2">235,643</td>
                <td className="border px-4 py-2">21,125</td>
                <td className="border px-4 py-2">124,754</td>
                <td className="border px-4 py-2">
                  <a href="http://aaaaaaa">Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">2</td>
                <td className="border px-4 py-2">Instagram</td>
                <td className="border px-4 py-2">545,555</td>
                <td className="border px-4 py-2">359,223</td>
                <td className="border px-4 py-2">57,539</td>
                <td className="border px-4 py-2">97,387</td>
                <td className="border px-4 py-2">
                  <a href="http://aaaaaaa">Link</a>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">3</td>
                <td className="border px-4 py-2">Tiktok</td>
                <td className="border px-4 py-2">767,868</td>
                <td className="border px-4 py-2">584,453</td>
                <td className="border px-4 py-2">132,441</td>
                <td className="border px-4 py-2">424,355</td>
                <td className="border px-4 py-2">
                  <a href="http://aaaaaaa">Link</a>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button
            onClick={onClose}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerModal;
