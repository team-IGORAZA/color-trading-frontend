export default function BannerImage() {
  return (
    <div className="mt-2 flex flex-col items-center p-2">
        <img src="/home-banner.png" 
        className="w-72 lg:w-[440px]"
        alt="Home Banner Image" />
        <button className=" w-full mt-3 bg-white/30 bg:blur backdrop-blur text-white p-2 rounded-full">
            <span className="mr-3">⚡</span>
            Dear members, 369win is giving away great benefits
            <span className="ml-3">⚡</span>
        </button>
    </div>
  )
}
