// components/TerapiaCard.jsx
import Link from 'next/link';

const TerapiaCard = ({ terapia }) => {
  const { slug, title, icon, color, shortDescription, areas } = terapia;

  return (
    <Link href={`/terapia/${slug}`}>
      <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col group">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `#${color}` }}
        >
          <span className="text-3xl">{icon}</span>
        </div>
        
        <h4 className="text-2xl font-bold text-[#98947B] mb-4 text-center group-hover:text-[#91AFAD] transition-colors">
          {title}
        </h4>
        
        <p className="text-gray-600 leading-relaxed text-center mb-4 grow">
          {shortDescription}
        </p>

        <ul className="space-y-2 text-gray-600 text-sm mb-6">
          {areas.map((area, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className="w-5 h-5 mr-2 shrink-0 mt-0.5" 
                style={{ color: `#${color}` }}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {area}
            </li>
          ))}
        </ul>

        <div 
          className="flex items-center justify-center font-medium text-sm group-hover:translate-x-2 transition-transform"
          style={{ color: `#${color}` }}
        >
          <span>Ver más detalles</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default TerapiaCard;