import shareVideo from "assets/videos/share.mp4";

const SignIn = () => {
  return (
    <div className='h-screen w-full relative'>
      <video
        src={shareVideo}
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center gap-y-5'>
        <h2 className='text-white'>Welcome to Pinterjoy</h2>
        <button type='button' className='bg-rede7 text-white rounded-xl block px-10 py-5'>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
