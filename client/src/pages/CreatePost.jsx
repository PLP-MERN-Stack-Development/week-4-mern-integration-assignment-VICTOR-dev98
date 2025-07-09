import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PostForm from '../components/PostForm';
import { postService, categoryService } from '../services/api';
import { AppContext } from '../context/AppContext';

const CreatePost = () => {
  const { categories, setCategories, setPosts } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    categoryService.getAllCategories()
      .then(setCategories)
      .catch(() => console.error('Failed to fetch categories'));
  }, [setCategories]);

  const handleCreate = async (formData) => {
    setLoading(true);

    // Optimistic update (you can remove this if you prefer waiting for success)
    setPosts(prev => [formData, ...prev]);

    try {
      const newPost = await postService.createPost(formData);
      setPosts(prev => [newPost, ...prev]);
      navigate('/');
    } catch (err) {
      alert('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      {loading ? <p>Creating post...</p> : <PostForm onSubmit={handleCreate} categories={categories} />}
    </div>
  );
};

export default CreatePost;
