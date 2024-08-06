export default function GiftForm() {
  return (
    <section className="">
        <form className='mt-6 p-12 header-bg rounded-lg font-bold'>
        <h4>Hi</h4>
        <h4 className="mt-3">We have a gift for you</h4>
        <h3 className="text-white mt-3">Please enter the gift code below</h3>
        <input type="text" className='mt-3 input w-full bg-[#1f2c62]' placeholder='Please enter gift code' />
    </form>
    <div className="flex items-center justify-center mt-6">
    <button className="btn bg-red-500 hover:bg-red-800 w-44 text-white border-none">Recieve</button>
    </div>
    </section>
  )
}
