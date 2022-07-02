interface ProfileBannerProps {
  url: string;
}

const ProfileBanner = ({ url }: ProfileBannerProps) => {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden">
      <img src={url} className="w-full h-full object-covers" alt="banner" />
    </div>
  );
};

export default ProfileBanner;
