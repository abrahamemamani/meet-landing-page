import { v4 as uuid } from 'uuid';
import { Gallery, Header, Hero, IPhoto, SectionPath } from '@components';

function App (): JSX.Element {
  const photos: Array<IPhoto> = [
    {
      id: uuid(),
      path: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1673353655/meet-landing-page/svgs/Image_1_fnelcv.svg',
    },
    {
      id: uuid(),
      path: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1673353655/meet-landing-page/svgs/Image_2_g7ks1m.svg',
    },
    {
      id: uuid(),
      path: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1673353655/meet-landing-page/svgs/Image_3_bv3ze8.svg',
    },
    {
      id: uuid(),
      path: 'https://res.cloudinary.com/dyssylzmz/image/upload/v1673353655/meet-landing-page/svgs/Image_4_jbxfkv.svg',
    },
  ];

  return (
    <div className="app">
      <Header />
      <Hero />
      <div className='my-16'>
        <SectionPath value='01' />
      </div>
      <div className='px-6'>
        <Gallery data={photos} />
      </div>
      <div className='flex flex-col items-center text-center my-16 px-6'>
        <span className='font-black text-base text-main uppercase mb-6 tracking-[4px]'>Built for modern use</span>
        <span className='font-black text-3xl text-dark leading-9 mb-8'>Smarter meetings, all in one place</span>
        <p className='font-medium text-base text-default-grey leading-6'>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
      </div>
      <SectionPath value='02' />
    </div>
  );
}

export default App;
