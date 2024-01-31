import React from 'react'

function Sales() {
    return (
        <>
            <div className='w-[456px] h-[145px] px-[15px] py-[11px] bg-white rounded-[12px] mt-4 ml-3 flex flex-col justify-between'>
                <div className="flex justify-between">
                    <div className='cursor-pointer'>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="36" height="36" rx="8" fill="#5570F1" fill-opacity="0.12" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3983 19.5743C22.9605 19.5743 23.4325 20.0384 23.3465 20.5936C22.8421 23.8603 20.0456 26.2857 16.6728 26.2857C12.9412 26.2857 9.91669 23.2612 9.91669 19.5305C9.91669 16.4568 12.2518 13.5936 14.8807 12.9462C15.4456 12.8068 16.0246 13.2041 16.0246 13.7857C16.0246 17.7261 16.157 18.7454 16.9053 19.2998C17.6535 19.8541 18.5334 19.5743 22.3983 19.5743Z" stroke="#5570F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0772 16.293C26.1219 13.7614 23.0122 9.68072 19.2228 9.75089C18.928 9.75616 18.6921 10.0018 18.6789 10.2956C18.5833 12.3772 18.7122 15.0746 18.7842 16.2974C18.8061 16.6781 19.1052 16.9772 19.485 16.9991C20.7421 17.0711 23.5377 17.1693 25.5894 16.8588C25.8684 16.8167 26.0728 16.5746 26.0772 16.293Z" stroke="#5570F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div>
                        <select className='bg-transparent text-superGray text-[12px] cursor-pointer'>
                            <option value="">This Week</option>
                            <option value="">This Month</option>
                            <option value="">This Year</option>
                        </select>
                    </div>
                </div>

                <div className='flex gap-[32px] items-start'>
                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Sales</p>
                        <p className='text-[20px]'>&#8358;4,000,000.00</p>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Volume</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>450</p>
                            <p className='text-darkGreen text-[12px] mt-2'>+20.00%</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sales
