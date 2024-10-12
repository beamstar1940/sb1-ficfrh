import React, { useState } from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';

const Forum: React.FC = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'How to center a div?', author: 'newbie123', replies: 5, likes: 2 },
    { id: 2, title: 'Best practices for React hooks?', author: 'reactfan', replies: 8, likes: 10 },
    { id: 3, title: 'Python vs JavaScript for beginners', author: 'codeExplorer', replies: 15, likes: 7 },
  ]);

  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to an API
    setPosts([
      { id: posts.length + 1, title: newPost.title, author: 'currentUser', replies: 0, likes: 0 },
      ...posts
    ]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Community Forum</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full p-2 mb-4 border rounded"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Post Content"
            className="w-full p-2 mb-4 border rounded"
            rows={4}
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            required
          ></textarea>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit Post
          </button>
        </form>
      </div>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">Posted by {post.author}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <MessageSquare size={16} className="mr-1" /> {post.replies} replies
              </span>
              <span className="flex items-center">
                <ThumbsUp size={16} className="mr-1" /> {post.likes} likes
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;