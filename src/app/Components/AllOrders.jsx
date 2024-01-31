import React from 'react'

function AllOrders() {
    return (
        <>
            <div className='w-[549px] h-[145px] px-[15px] py-[11px] bg-white rounded-[12px] mt-4 ml-8 flex flex-col justify-between'>
                <div className="flex justify-between">
                    <div className='cursor-pointer bg-superPink p-[8px] rounded-[8px]'>
                        <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5137 20.5H6.16592C3.09955 20.5 0.747152 19.3925 1.41534 14.9348L2.19338 8.8936C2.60528 6.66934 4.02404 5.81808 5.26889 5.81808H15.4474C16.7105 5.81808 18.0469 6.73342 18.5229 8.8936L19.3009 14.9348C19.8684 18.889 17.5801 20.5 14.5137 20.5Z" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.651 5.5984C14.651 3.21233 12.7167 1.27804 10.3307 1.27804V1.27804C9.18168 1.27317 8.07807 1.7262 7.26388 2.53695C6.44969 3.34771 5.99199 4.44939 5.992 5.5984H5.992" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.2963 10.1018H13.2506" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.46572 10.1018H7.41995" stroke="#53545C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
                        <p className='text-lightGray text-[14px]'>All Orders</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>450</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Pending</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>5</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-[8px] w-[197px] h-[55px]'>
                        <p className='text-lightGray text-[14px]'>Completed</p>
                        <div className='flex gap-2 items-start'>
                            <p className='text-[20px]'>445</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllOrders
