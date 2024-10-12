import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Book, Search, HelpCircle, Award } from 'lucide-react';
import Home from './components/Home';
import LanguageDatabase from './components/LanguageDatabase';
import Quiz from './components/Quiz';
import Forum from './components/Forum';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">CodeLearner</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="flex items-center"><Book className="mr-1" size={18} /> Home</Link></li>
                <li><Link to="/languages" className="flex items-center"><Search className="mr-1" size={18} /> Languages</Link></li>
                <li><Link to="/quiz" className="flex items-center"><Award className="mr-1" size={18} /> Quiz</Link></li>
                <li><Link to="/forum" className="flex items-center"><HelpCircle className="mr-1" size={18} /> Forum</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow container mx-auto mt-8 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/languages" element={<LanguageDatabase />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>

        <footer className="bg-gray-200 text-center p-4 mt-8">
          <p>&copy; 2024 CodeLearner. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;