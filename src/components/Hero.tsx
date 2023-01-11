import { Button } from '@components';

export const HeroPattern = (): JSX.Element => {
  return (
    <div className='h-40 min-[425px]:h-48 min-[512px]:h-56 min-[600px]:h-64 min-[690px]:h-72 min-[773px]:h-80 min-[860px]:h-96'>
        <div className='bg-hero-pattern bg-cover bg-center w-full h-full bg-no-repeat'>
        </div>
      </div>
  );
};

export const Hero = (): JSX.Element => {
  return (
    <>
      <HeroPattern />
      <div className='py-12'>
        <span className='font-black text-[40px] leading-[44px] text-dark text-center block px-11'>Group Chat for Everyone</span>
        <p className='font-medium text-base text-center leading-6 text-default-grey pt-6 px-3.5'>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
      </div>
      <div className='flex justify-center mb-4'>
        <Button className='bg-main px-9'>
          <span className='text-white font-bold'>Download</span>
          <span className='text-accent font-bold ml-1'>v1.3</span>
        </Button>
      </div>
      <div className='flex justify-center'>
        <Button className='bg-secondary px-7'>
          <span className='text-white font-bold'>What is it?</span>
        </Button>
      </div>
    </>
  );
};
