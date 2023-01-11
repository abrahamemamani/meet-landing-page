
interface ISectionPathProps {
  value: string;
}

export const SectionPath = ({ value, }: ISectionPathProps): JSX.Element => {
  return (
    <div className='flex justify-center'>
      <div className='inline-flex flex-col items-center'>
        <div className='h-20 w-px bg-default-grey'></div>
        <span className='inline-flex justify-center items-center border-default-grey border h-14 w-14 rounded-full'>
          <span className='font-black text-base text-default-grey'>{value}</span>
        </span>
      </div>
    </div>
  );
};
