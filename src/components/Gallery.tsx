
interface IGalleryProps {
  data: Array<IPhoto>;
}

export interface IPhoto {
  id: number | string;
  path: string;
}

export const Gallery = ({ data, }: IGalleryProps): JSX.Element => {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-6'>
      {data.map(({ id, path, }) => (
        <div
          style={{ backgroundImage: `url(${path})`, }}
          className='rounded-lg h-36 w-full bg-cover bg-no-repeat bg-center' key={id}>
        </div>
      ))}
    </div>
  );
};
