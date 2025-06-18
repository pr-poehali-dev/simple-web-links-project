import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-500/20">
        <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-bold">
          A
        </AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
        Alex Strelok
      </h1>

      <p className="text-gray-400 text-lg">твич и тгк</p>
    </div>
  );
};

export default ProfileCard;
