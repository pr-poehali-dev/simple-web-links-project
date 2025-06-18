import SocialLink from "./SocialLink";
import Icon from "@/components/ui/icon";

const SocialLinks = () => {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <SocialLink
        href="https://t.me/Lesochek_134"
        icon={<Icon name="Send" size={24} className="text-white" />}
        title="Telegram канал"
        description="Подписывайся на мой канал в Telegram"
        color="from-blue-500 to-blue-600"
      />

      <SocialLink
        href="https://www.twitch.tv/alex_strelok07?sr=a"
        icon={<Icon name="Tv" size={24} className="text-white" />}
        title="Twitch канал"
        description="Смотри мои стримы на Twitch"
        color="from-purple-600 to-purple-700"
      />
    </div>
  );
};

export default SocialLinks;
