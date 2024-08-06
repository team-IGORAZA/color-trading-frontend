export const WalletBanner = () => {
    return (
      <div
        style={{
            background: "linear-gradient(90deg, #72C6EF 0%, #004E8F 100%)"

        }}
        className="relative w-[370px] lg:w-full h-48 rounded-[24px] p-4 overflow-hidden"
      >
        <div className="absolute left-40 bottom-24 rotate-12 ">
          <GradientCircle />
        </div>
        {/* ?Body */}
        <div className="flex items-center justify-between">
        <div className="flex flex-col items-start z-50">
          <div className="text-white  font-bold relative bottom-10">
           <span className="text-xl">Wallet</span> <br/>
           <span className="test-sm">Available Balance</span>
          </div>
          <div className="flex items-center relative -bottom-10">
            <img src="/coins.png" alt="coin image" />
            <span className="text-white font-bold">
                0 Coins
            </span>
          </div>
        </div>
        <div>
          <img src="/star.png" alt="star image" />
        </div>
        <div className="flex flex-col items-center z-50 mt-8 relative">
          <img className="mt-8" src="/wallet.png" alt="game Image" />
        </div>
      </div>
        {/* ? body close */}
  
        <div className="relative -left-28 -top-20 rotate-12 ">
          <GradientCircle />
        </div>
      </div>
    );
  };
  
  const GradientCircle = () => (
    <div
      style={{
        background: "linear-gradient(90deg, #72C6EF 0%, #004E8F 100%)"


      }}
      className="h-96 rounded-full w-96"
    ></div>
  );