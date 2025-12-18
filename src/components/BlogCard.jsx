// components/BlogCard.jsx
import Link from 'next/link';

const BlogCard = ({ post }) => {
  const { slug, title, excerpt, author, date, readTime, category, categoryColor, image } = post;

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <Link href={`/blog/${slug}`}>
      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col group">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category badge */}
          <div 
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold"
            style={{ backgroundColor: `#${categoryColor}` }}
          >
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 grow flex flex-col">
          {/* Meta info */}
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{formatDate(date)}</span>
            <span className="mx-2">•</span>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#98947B] mb-3 group-hover:text-[#91AFAD] transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-4 grow line-clamp-3">
            {excerpt}
          </p>

          {/* Author and Read more */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span className="text-sm text-gray-600">Por {author}</span>
            <div 
              className="flex items-center font-medium text-sm group-hover:translate-x-2 transition-transform"
              style={{ color: `#${categoryColor}` }}
            >
              <span>Leer más</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;