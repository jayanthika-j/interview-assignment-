import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Screen1() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: '',
    formType: '',
    taxYear: '',
    taxQuarter: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to screen 2 when form is submitted
    navigate('/s2');
  };

  return (
    <Layout>
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#0A5F6D] mb-1">
              Tax Year & Quarter Ending
            </h1>
            <p className="text-sm text-[#0A5F6D] font-medium">Tax Year</p>
          </div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 bg-[#0D7C8E] text-white rounded font-medium hover:bg-[#0A5F6D] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-semibold text-[#0A5F6D] mb-2">
              Business Name<span className="text-red-500">*</span>
            </label>
            <select
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border-2 border-[#0D7C8E] rounded bg-white text-gray-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7C8E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
              required
            >
              <option value="">Select Business</option>
              <option value="business1">ABC Corporation</option>
              <option value="business2">XYZ Industries</option>
              <option value="business3">Tech Solutions Inc</option>
            </select>
          </div>

          {/* Form Type */}
          <div>
            <label htmlFor="formType" className="block text-sm font-semibold text-[#0A5F6D] mb-2">
              Form Type<span className="text-red-500">*</span>
            </label>
            <select
              id="formType"
              name="formType"
              value={formData.formType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border-2 border-[#0D7C8E] rounded bg-white text-gray-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7C8E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
              required
            >
              <option value="">Select Form Type</option>
              <option value="form720">Form 720</option>
              <option value="form941">Form 941</option>
              <option value="form1040">Form 1040</option>
            </select>
          </div>

          {/* Tax Year */}
          <div>
            <label htmlFor="taxYear" className="block text-sm font-semibold text-[#0A5F6D] mb-2">
              Tax Year<span className="text-red-500">*</span>
            </label>
            <select
              id="taxYear"
              name="taxYear"
              value={formData.taxYear}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border-2 border-[#0D7C8E] rounded bg-white text-gray-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7C8E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
              required
            >
              <option value="">Select Tax Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>

          {/* Tax Quarter */}
          <div>
            <label htmlFor="taxQuarter" className="block text-sm font-semibold text-[#0A5F6D] mb-2">
              Tax Quarter
            </label>
            <select
              id="taxQuarter"
              name="taxQuarter"
              value={formData.taxQuarter}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border-2 border-[#0D7C8E] rounded bg-white text-gray-600 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D7C8E] focus:ring-opacity-50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%230D7C8E'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
                paddingRight: '2.5rem'
              }}
            >
              <option value="">Select Quarter</option>
              <option value="q1">Q1 (January - March)</option>
              <option value="q2">Q2 (April - June)</option>
              <option value="q3">Q3 (July - September)</option>
              <option value="q4">Q4 (October - December)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="px-12 py-2.5 bg-[#0D7C8E] text-white rounded font-medium hover:bg-[#0A5F6D] transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Screen1;
