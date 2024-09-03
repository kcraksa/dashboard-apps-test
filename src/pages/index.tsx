import SellerMap from "@root/components/seller-map";
import SellerModal from "@root/components/seller-modal";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Sample data, replace with your actual data
  const data = [
    { name: "Jan", Electronics: 4000, Mobiles: 2400, Fashion: 2400 },
    { name: "Feb", Electronics: 3000, Mobiles: 1398, Fashion: 2210 },
    // ...
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);

  const openModal = (seller: any) => {
    setSelectedSeller(seller);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSeller(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 bg-black-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Market Analysis System - Dashboard Global
      </h1>

      <div className="flex gap-3">
        {/* Tables */}
        <div className="w-1/2 flex flex-col gap-3">
          <div className="p-4 rounded shadow  bg-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label>Kategori Produk</label>
                <select className="text-black w-full mt-1 p-2 border rounded">
                  <option>Elektronik</option>
                  <option>Fashion</option>
                </select>
              </div>
              <div>
                <label>E-commerce</label>
                <select className="text-black w-full mt-1 p-2 border rounded">
                  <option>Semua</option>
                </select>
              </div>
              <div>
                <label>Status Penjual</label>
                <select className="text-black w-full mt-1 p-2 border rounded">
                  <option>Semua</option>
                </select>
              </div>
              <div>
                <label>Periode</label>
                <select className="text-black w-full mt-1 p-2 border rounded">
                  <option>1 Tahun Terakhir</option>
                </select>
              </div>
            </div>

            <h2 className="font-bold mb-2">Tabel Kategori Produk</h2>
            <table className="min-w-full text-white border-none text-sm">
              <thead>
                <tr>
                  <th className="py-2 text-left">No</th>
                  <th className="py-2 text-left">E-Commerce</th>
                  <th className="py-2 text-left">Penjual</th>
                  <th className="py-2 text-left">Status Penjual</th>
                  <th className="py-2 text-left">Lokasi</th>
                  <th className="py-2 text-left">Jumlah Produk</th>
                  <th className="py-2 text-left">Produk Terjual</th>
                  <th className="py-2 text-left">Rating</th>
                  <th className="py-2 text-left">Link Penjual</th>
                </tr>
              </thead>
              <tbody className="border-none">
                {Array.from({ length: 7 }).map((_, index) => (
                  <tr key={index}>
                    <td className="py-2">1</td>
                    <td className="py-2">Tokopedia</td>
                    <td
                      className="py-2 cursor-pointer"
                      onClick={() =>
                        openModal({
                          name: "Bahagia Elektronik",
                          ecommerce: "Tokopedia",
                          location: "Jakarta Timur",
                          link: "http://tokopedia/BahagiaElektronik",
                        })
                      }
                    >
                      Bahagia Elektronik
                    </td>
                    <td className="py-2">Terverifikasi</td>
                    <td className="py-2">Jakarta Timur</td>
                    <td className="py-2">54</td>
                    <td className="py-2">1,125</td>
                    <td className="py-2">4.8</td>
                    <td className="py-2">
                      <a href="http://aaaaaaa">Link</a>
                    </td>
                  </tr>
                ))}
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          <div>
            <SellerMap />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-1/2">
          <div className="flex gap-3">
            <div className="w-1/2">
              <div className="bg-gray-700 p-4 rounded shadow">
                <h2 className="font-bold mb-2 text-center text-sm">
                  Penjualan Produk per Kategori 1 Tahun Terakhir
                </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Electronics"
                      stroke="#8884d8"
                    />
                    <Line type="monotone" dataKey="Mobiles" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Fashion" stroke="#ffc658" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-gray-700 p-4 rounded shadow">
                <h2 className="font-bold mb-2 text-center text-sm">
                  Perbandingan Total Penjualan per Kategori
                </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Electronics" fill="#8884d8" />
                    <Bar dataKey="Mobiles" fill="#82ca9d" />
                    <Bar dataKey="Fashion" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-1/2">
              <div className="bg-gray-700 p-4 rounded shadow">
                <h2 className="font-bold mb-2 text-center text-sm">
                  Top 5 - Penjual Berdasarkan Penjualan
                </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Electronics" fill="#8884d8" />
                    <Bar dataKey="Mobiles" fill="#82ca9d" />
                    <Bar dataKey="Fashion" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="w-1/2">
              <div className="bg-gray-700 p-4 rounded shadow">
                <h2 className="font-bold mb-2 text-center text-sm">
                  Top 5 - Penjual Berdasarkan Kota
                </h2>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Electronics" fill="#8884d8" />
                    <Bar dataKey="Mobiles" fill="#82ca9d" />
                    <Bar dataKey="Fashion" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div>
            <div className="p-4 rounded shadow  bg-gray-700">
              <h2 className="font-bold mb-2">Tabel Kategori Produk</h2>
              <table className="min-w-full text-white border-none text-sm">
                <thead>
                  <tr>
                    <th className="py-2 text-left">No</th>
                    <th className="py-2 text-left">E-Commerce</th>
                    <th className="py-2 text-left">Penjual</th>
                    <th className="py-2 text-left">Status Penjual</th>
                    <th className="py-2 text-left">Lokasi</th>
                    <th className="py-2 text-left">Jumlah Produk</th>
                    <th className="py-2 text-left">Produk Terjual</th>
                    <th className="py-2 text-left">Rating</th>
                    <th className="py-2 text-left">Link Penjual</th>
                  </tr>
                </thead>
                <tbody className="border-none">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <tr key={index}>
                      <td className="py-2">1</td>
                      <td className="py-2">Tokopedia</td>
                      <td className="py-2">Bahagia Elektronik</td>
                      <td className="py-2">Terverifikasi</td>
                      <td className="py-2">Jakarta Timur</td>
                      <td className="py-2">54</td>
                      <td className="py-2">1,125</td>
                      <td className="py-2">4.8</td>
                      <td className="py-2">
                        <a href="http://aaaaaaa">Link</a>
                      </td>
                    </tr>
                  ))}
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <SellerModal seller={selectedSeller} onClose={closeModal} />
      )}
    </div>
  );
};

export default Dashboard;
