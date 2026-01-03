import { useEffect, useState } from 'react';
import type { Resource } from '../types/Resource';
import axios from 'axios';

export default function ResourceList() {
  const [rows, setRows] = useState<Resource[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Resource[]>('http://localhost:3000/resources');
        setRows(response.data);
      } catch (error) {
        console.error("Erreur API:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8 w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-tight">
          Guide for Newcomers in Paris
        </h1>
        <p className="text-gray-500 mt-2">Find food, showers, and support near you.</p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Name</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Category</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Type</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Address</th>
                  <th className="px-6 py-4 text-sm font-semibold text-gray-700 uppercase">Opening Hours</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {rows.length > 0 ? (
                  rows.map((row) => (
                    <tr key={row.id} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.title}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                          {row.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 italic text-sm">{row.sub_category}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">{row.address}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm whitespace-pre-line">{row.hours}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500 italic">
                      No resources found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}