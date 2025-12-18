// components/ExperienceCard.jsx
import Link from 'next/link';

const ExperienceCard = ({ image, title, description, color = "91AFAD", link }) => {
  return (
    <Link href={link}>
      <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
        {/* Image with overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div 
            className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity"
            style={{ backgroundColor: `#${color}` }}
          ></div>
          {/* Color accent bar */}
          <div 
            className="absolute top-0 left-0 w-2 h-full"
            style={{ backgroundColor: `#${color}` }}
          ></div>
        </div>

        {/* Content */}
        <div className="p-6 grow flex flex-col">
          <h3 className="text-xl font-semibold text-[#98947B] mb-3 group-hover:text-[#91AFAD] transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed text-sm mb-4 grow">
            {description}
          </p>

          {/* Arrow indicator */}
          <div className="flex items-center text-[#91AFAD] font-medium text-sm group-hover:translate-x-2 transition-transform">
            <span>Ver más</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;