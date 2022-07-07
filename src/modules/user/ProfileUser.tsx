interface ProfileUserProps {
  image: string;
  userName: string;
}

const ProfileUser = ({ image, userName }: ProfileUserProps) => {
  return (
    <div className="translate-y-[-40%]">
      <img src={image} alt="avatar" className="w-38 h-38 rounded-full mx-auto " />
      <h2 className="text-center mt-2">{userName}</h2>
    </div>
  );
};

export default ProfileUser;
