import { useForm } from 'react-hook-form';

const PostForm = ({ initialData = {}, onSubmit, categories = [] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: initialData.title || '',
      content: initialData.content || '',
      category: initialData.category || '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Title Field */}
      <div>
        <input
          {...register('title', { required: true })}
          placeholder="Post Title"
          className="w-full border px-3 py-2"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">Title is required</p>
        )}
      </div>

      {/* Content Field */}
      <div>
        <textarea
          {...register('content', { required: true })}
          placeholder="Write your content here..."
          className="w-full border px-3 py-2 h-32 resize-none"
        />
        {errors.content && (
          <p className="text-sm text-red-500 mt-1">Content is required</p>
        )}
      </div>

      {/* Category Dropdown */}
      <div>
        <select {...register('category')} className="w-full border px-3 py-2">
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Post
      </button>
    </form>
  );
};

export default PostForm;
