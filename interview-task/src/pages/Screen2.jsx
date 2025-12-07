import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Screen2() {
  const navigate = useNavigate();
  const [rows, setRows] = useState([
    {
      id: 1,
      taxDate: '',
      odcName: '',
      pounds: '',
      taxRate: '$0.000',
      taxAmount: '$0.00'
    }
  ]);
  const [noExcise, setNoExcise] = useState(false);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      taxDate: '',
      odcName: '',
      pounds: '',
      taxRate: '$0.000',
      taxAmount: '$0.00'
    };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id) => {
    if (rows.length > 1) {
      setRows(rows.filter(row => row.id !== id));
    }
  };

  const handleInputChange = (id, field, value) => {
    setRows(rows.map(row => 
      row.id === id ? { ...row, [field]: value } : row
    ));
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-sm p-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#0A5F6D] mb-2">
              Environmental Taxes
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium text-[#0A5F6D]">Tax Year</span>
              <span>/</span>
              <button className="text-[#0D7C8E] hover:underline flex items-center gap-1">
                Form 720
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <span>/</span>
              <span>Environmental Taxes</span>
              <span>/</span>
              <button className="text-[#0D7C8E] hover:underline flex items-center gap-1">
                98 - Ozone Depleting Chemicals (ODCs)
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate('/s1')}
            className="px-6 py-2.5 bg-[#0D7C8E] text-white rounded font-medium hover:bg-[#0A5F6D] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>

        {/* Tax Details Card */}
        <div className="bg-[#0A5F6D] text-white p-4 rounded mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            98 - Ozone Depleting Chemicals (ODCs)
          </h2>
          <div className="text-right">
            <span className="text-sm">Tax End Month and Tax Year: </span>
            <span className="font-semibold">March 2025</span>
          </div>
        </div>

        {/* No Excise Checkbox */}
        <div className="mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={noExcise}
              onChange={(e) => setNoExcise(e.target.checked)}
              className="w-4 h-4 text-[#0D7C8E] border-2 border-gray-300 rounded focus:ring-[#0D7C8E]"
            />
            <span className="text-sm font-medium text-[#0A5F6D]">
              The Business has no excise - taxable activity (file as "None")
            </span>
          </label>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0A5F6D] text-white">
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-[#0D7C8E]">
                  Tax Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-[#0D7C8E]">
                  ODCs Name
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-[#0D7C8E]">
                  No.of Pounds
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-[#0D7C8E]">
                  Tax Rate
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold border-r border-[#0D7C8E]">
                  Tax Amount
                </th>
                <th className="px-4 py-3 text-center text-sm font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 border border-gray-200">
                    <input
                      type="date"
                      value={row.taxDate}
                      onChange={(e) => handleInputChange(row.id, 'taxDate', e.target.value)}
                      className="w-full px-3 py-2 border-2 border-[#0D7C8E] rounded bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
                      disabled={noExcise}
                    />
                  </td>
                  <td className="px-4 py-3 border border-gray-200">
                    <select
                      value={row.odcName}
                      onChange={(e) => handleInputChange(row.id, 'odcName', e.target.value)}
                      className="w-full px-3 py-2 border-2 border-[#0D7C8E] rounded bg-white text-gray-600 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7C8E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.25em 1.25em',
                        paddingRight: '2rem'
                      }}
                      disabled={noExcise}
                    >
                      <option value="">select ODC name</option>
                      <option value="cfc11">CFC-11</option>
                      <option value="cfc12">CFC-12</option>
                      <option value="cfc113">CFC-113</option>
                      <option value="cfc114">CFC-114</option>
                      <option value="cfc115">CFC-115</option>
                    </select>
                  </td>
                  <td className="px-4 py-3 border border-gray-200">
                    <input
                      type="number"
                      value={row.pounds}
                      onChange={(e) => handleInputChange(row.id, 'pounds', e.target.value)}
                      className="w-full px-3 py-2 border-2 border-[#0D7C8E] rounded bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
                      placeholder="0"
                      disabled={noExcise}
                    />
                  </td>
                  <td className="px-4 py-3 border border-gray-200">
                    <input
                      type="text"
                      value={row.taxRate}
                      readOnly
                      className="w-full px-3 py-2 border-2 border-[#0D7C8E] rounded bg-gray-100 text-gray-700 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3 border border-gray-200">
                    <input
                      type="text"
                      value={row.taxAmount}
                      readOnly
                      className="w-full px-3 py-2 border-2 border-[#0D7C8E] rounded bg-gray-100 text-gray-700 text-sm"
                    />
                  </td>
                  <td className="px-4 py-3 border border-gray-200 text-center">
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="text-red-600 hover:text-red-800 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={rows.length === 1 || noExcise}
                      title="Delete row"
                    >
                      <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => {/* Save functionality */}}
            className="px-6 py-2.5 bg-[#0D7C8E] text-white rounded font-medium hover:bg-[#0A5F6D] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
            </svg>
            Save
          </button>
          
          <button
            type="button"
            onClick={() => {/* Proceed to Summary */}}
            className="px-6 py-2.5 border-2 border-[#0A5F6D] text-[#0A5F6D] rounded font-medium hover:bg-[#E8F4F6] transition-colors flex items-center gap-2"
          >
            Proceed to Summary
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            type="button"
            onClick={() => {/* Proceed to Deposit */}}
            className="px-6 py-2.5 border-2 border-[#0A5F6D] text-[#0A5F6D] rounded font-medium hover:bg-[#E8F4F6] transition-colors flex items-center gap-2"
          >
            Proceed to Deposit
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            type="button"
            onClick={addRow}
            disabled={noExcise}
            className="ml-auto px-6 py-2.5 bg-[#0D7C8E] text-white rounded font-medium hover:bg-[#0A5F6D] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add Row
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Screen2;
