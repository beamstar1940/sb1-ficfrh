import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to CodeLearner</h1>
      <p className="text-xl mb-8">Discover, learn, and master programming languages with our interactive platform.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Explore Languages"
          description="Browse our comprehensive database of programming languages."
          link="/languages"
        />
        <FeatureCard
          title="Test Your Knowledge"
          description="Challenge yourself with quizzes on various programming topics."
          link="/quiz"
        />
        <FeatureCard
          title="Join the Community"
          description="Ask questions and share your knowledge in our forum."
          link="/forum"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ title: string; description: string; link: string }> = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="mb-4">{description}</p>
    <Link to={link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
      Get Started <ArrowRight className="ml-2" size={18} />
    </Link>
  </div>
);

export default Home;