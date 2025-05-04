import { useState } from 'react';
import './Scroll.css';

function Invoices() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const HandleClick = () => {    
    const newTab = window.open("/pdf", "_blank");
    if (newTab) {
      newTab.focus();
    }                 
  };

  // Sample invoice data with more details
  const invoices = Array.from({ length: 12 }, (_, i) => ({
    id: `INV-${1000 + i}`,
    date: `2024-06-${String(i + 1).padStart(2, '0')}`,
    amount: (150 + i * 25).toFixed(2),
    status: ['paid', 'pending', 'overdue'][i % 3],
    client: `Client ${String.fromCharCode(65 + (i % 5))}`,
  }));

  // Filter invoices based on active filter and search query
  const filteredInvoices = invoices.filter(invoice => {
    const matchesFilter = activeFilter === 'all' || invoice.status === activeFilter;
    const matchesSearch = invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          invoice.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2 text-teal-700 dark:text-teal-400">
          Invoice Management
        </h1>
        <p className="text-gray-600 text-sm">
          View and manage all your invoices with ease
        </p>
        <div className="w-16 h-1 bg-teal-500 mt-2 rounded-full"></div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              activeFilter === 'all' 
                ? 'bg-teal-600 text-white dark:bg-teal-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-teal-100 hover:text-teal-800 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-teal-900/30 dark:hover:text-teal-400'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('paid')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${activeFilter === 'paid' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700'}`}
          >
            Paid
          </button>
          <button
            onClick={() => setActiveFilter('pending')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${activeFilter === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-700'}`}
          >
            Pending
          </button>
          <button
            onClick={() => setActiveFilter('overdue')}
            className={`px-3 py-1 rounded-full text-sm font-medium ${activeFilter === 'overdue' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-700'}`}
          >
            Overdue
          </button>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 pr-4 py-1.5 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent p-2 w-full dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          />
          <svg
            className="absolute left-2.5 top-2 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Invoice Cards Grid */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Table-like header for larger screens */}
        <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
          <div className="col-span-3">Invoice ID</div>
          <div className="col-span-2">Date</div>
          <div className="col-span-2">Client</div>
          <div className="col-span-2">Amount</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1">Action</div>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto custom-scrollbar" style={{ maxHeight: '500px' }}>
          {filteredInvoices.length > 0 ? (
            filteredInvoices.map((invoice, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="md:col-span-3">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Invoice ID</div>
                  <div className="font-medium text-teal-700">{invoice.id}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Date</div>
                  <div>{invoice.date}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Client</div>
                  <div>{invoice.client}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Amount</div>
                  <div className="font-medium">${invoice.amount}</div>
                </div>
                <div className="md:col-span-2">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Status</div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                    invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </span>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <button
                    onClick={() => HandleClick(invoice.id)}
                    className="text-sm bg-teal-600 hover:bg-teal-700 text-white py-1.5 px-3 rounded-md transition-colors flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span className="hidden md:inline">View</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium">No invoices found</h3>
              <p className="mt-1 text-xs">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-600">
          Showing {filteredInvoices.length} of {invoices.length} invoices
        </div>
        <div className="flex gap-2">
          <button className="text-sm bg-white dark:bg-gray-800 border border-gray-300 hover:bg-gray-50 text-gray-700 py-1.5 px-3 rounded-md transition-colors">
            Export CSV
          </button>
          <button className="text-sm bg-teal-600 hover:bg-teal-700 text-white py-1.5 px-3 rounded-md transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            New Invoice
          </button>
        </div>
      </div>
    </div>
  );
}

export default Invoices;