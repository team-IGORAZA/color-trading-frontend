export default function TimeBanner() {
    return (
        <div
            style={{ background: "linear-gradient(180deg, #AFFF00 0%, #699900 100%)" }}
            className="relative w-[370px] lg:w-[407px] h-48 rounded-[24px] p-2 overflow-hidden">
            <div className="absolute left-40 bottom-24 rotate-12 ">
                <GradientCircle />
            </div>
            <div className="flex items-center justify-between">

                <div className="flex flex-col items-start z-50">
                    <h2 className="text-black text-xl font-bold relative bottom-10">1234567890</h2>
                    <div className="relative -bottom-10">
                        <h4 className="text-lg text-white font-bold">Remaining Time:</h4>
                        <span className="text-3xl font-bold text-white">00:59</span>
                    </div>
                </div>

                <div>
                    <img src="/star.png" alt="star image" />
                </div>

                <div className="flex flex-col items-center z-50">
                    <button className="badge w-20 py-3 bg-indigo-900 text-white border-none">1 min</button>
                    <img className="mt-4 " src="/game.png" alt="game Image" />
                </div>
            </div>
            <div className="relative -left-28 -top-20 rotate-12 ">
                <GradientCircle />
            </div>
        </div>
    )
}




const GradientCircle = () => (
    <div style={{
        background: "linear-gradient(19.38deg, #8FC225 39.14%, #3A5306 84.37%)"

    }} className="h-96 rounded-full w-96"></div>
)


// 