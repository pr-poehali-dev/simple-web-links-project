import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const SocialLink = ({
  href,
  icon,
  title,
  description,
  color,
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full p-6 rounded-2xl bg-gradient-to-r ${color} 
                 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 
                 transition-all duration-300 group animate-fade-in`}
    >
      <div className="flex items-center space-x-4">
        <div
          className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                       bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors"
        >
          {icon}
        </div>

        <div className="flex-1 text-left">
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-white/80 text-sm">{description}</p>
        </div>

        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 text-white/60 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default SocialLink;
