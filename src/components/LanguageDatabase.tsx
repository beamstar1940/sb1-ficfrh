import React, { useState } from 'react';
import { Search } from 'lucide-react';

const LanguageDatabase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for languages (replace with API call in the future)
  const languages = [
    { id: 1, name: 'JavaScript', description: 'A high-level, interpreted programming language.' },
    { id: 2, name: 'Python', description: 'An interpreted, high-level and general-purpose programming language.' },
    { id: 3, name: 'Java', description: 'A class-based, object-oriented programming language.' },
    // Add more languages here
  ];

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Programming Languages Database</h1>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search languages..."
            className="w-full p-2 pl-10 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLanguages.map(lang => (
          <div key={lang.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{lang.name}</h2>
            <p className="text-gray-600 mb-4">{lang.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageDatabase;