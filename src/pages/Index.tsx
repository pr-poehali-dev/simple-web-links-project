import ProfileCard from "@/components/ProfileCard";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
                   flex items-center justify-center p-4 font-rubik"
    >
      <div className="w-full max-w-lg">
        {/* Декоративные элементы фона */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Основной контент */}
        <div
          className="relative z-10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 
                       border border-white/10 shadow-2xl"
        >
          <ProfileCard />

          {/* Social Links */}
          <div className="space-y-4 mt-8">
            <a
              href="https://t.me/Lesochek_134"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-blue-500 to-blue-600 
                         hover:from-blue-600 hover:to-blue-700 rounded-xl transition-all duration-300 
                         transform hover:scale-105 hover:shadow-xl group"
            >
              <svg
                className="w-6 h-6 mr-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 6.728-.896 6.728-.302 1.858-1.169 2.196-1.982 1.822-.65-.318-1.05-.6-1.05-.6s-3.635-2.323-4.716-3.103c-.21-.154-.32-.34-.32-.546 0-.266.154-.266.266-.266.112 0 .224-.112.336-.112.112 0 4.604-2.916 4.604-2.916s.434-.224.434-.434c0-.21 0-.434-.224-.434-.224 0-5.488 3.29-6.176 3.654-.688.364-1.358.196-1.358.196s-1.106-.364-1.106-.364-.406-.252-.406-.518c0-.266.14-.406.406-.518.266-.112 6.654-2.59 6.654-2.59s.658-.266 1.106-.266c.448 0 .812.28.812.812z" />
              </svg>
              <span className="text-white font-medium">Телеграм канал</span>
            </a>

            <a
              href="https://www.twitch.tv/alex_strelok07?sr=a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full p-4 bg-gradient-to-r from-purple-500 to-purple-600 
                         hover:from-purple-600 hover:to-purple-700 rounded-xl transition-all duration-300 
                         transform hover:scale-105 hover:shadow-xl group"
            >
              <svg
                className="w-6 h-6 mr-3 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z" />
              </svg>
              <span className="text-white font-medium">Твич канал</span>
            </a>
          </div>

          {/* Футер */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-gray-500 text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
