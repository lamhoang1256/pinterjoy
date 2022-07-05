interface ProfileBannerProps {
  url: string;
}

const ProfileBanner = ({ url }: ProfileBannerProps) => {
  return (
    <div className="w-full h-[300px] lg:h-[400px] rounded-xl overflow-hidden bg-graye9">
      <img src={url} className="w-full h-full object-covers" alt="banner" />
    </div>
  );
};

export default ProfileBanner;
