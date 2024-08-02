export default function ProfileBalance() {
  return (
    <div className='flex flex-col justify-center mx-auto mt-6 mb-6 rounded-xl max-w-xl'>
      <div style={{background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)"}} className='p-4 w-full rounded-xl mb-4'>
        <h3 className='font-bold text-black text-sm'>Total Balance</h3>
        <h2 className='font-bold text-2xl text-black'>₹0.00</h2>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {/* first one */}
        <div className='bg-cyan-700 p-4 rounded-xl'>
          <div className='flex items-center mb-2'>
            <svg className='w-9 h-9 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' />
            </svg>
            <span className='text-white font-semibold'>Wallet</span>
          </div>
          <p className='text-white font-bold'>₹0.00</p>
        </div>
        <div className='bg-purple-700 p-4 rounded-xl'>
          <div className='flex items-center mb-2'>
            <svg className='w-9 h-9 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6v6m0 0v6m0-6h6m-6 0H6' />
            </svg>
            <span className='text-white font-semibold'>Deposit</span>
          </div>
          <p className='text-white font-bold'>₹0.00</p>
        </div>
        <div className='bg-gray-700 p-4 rounded-xl'>
          <div className='flex items-center mb-2'>
            <svg className='w-9 h-9 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' />
            </svg>
            <span className='text-white font-semibold'>Withdraw</span>
          </div>
          <p className='text-white font-bold'>₹0.00</p>
        </div>
        <div className='bg-gray-800 p-4 rounded-xl'>
          <div className='flex items-center mb-2'>
            <svg className='w-9 h-9 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
            </svg>
            <span className='text-white font-semibold'>VIP</span>
          </div>
          <p className='text-white font-bold'>LEVEL-0</p>
        </div>
      </div>
    </div>
  )
}