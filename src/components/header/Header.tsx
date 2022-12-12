import { BeakerIcon } from '@heroicons/react/outline';
function Header() {
  return (
    <div className=' w-full py-4 bg-[#F0F5F5] items-center justify-between flex px-12'>
      {/* logo */}
      <div className='items-center w-full justify-center flex space-x-4'>
        <BeakerIcon className='w-6 h-6' />
        <h1 className='text-xl text-gray-900 font-medium '> Genesis22 </h1>
      </div>
      {/* icons */}
    </div>
  );
}

export default Header;
