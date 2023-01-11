import brand from '@assets/brand.svg';

export const Header = (): JSX.Element => {
  return (
    <div className='flex justify-center py-12'>
      <img src={brand} alt="" className='w-32' />
    </div>
  );
};
