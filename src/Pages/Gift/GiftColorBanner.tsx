export const GiftColorBanner = () => {
    return (
      <div
        style={{
            background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"
        }}
        className="relative w-[370px] lg:w-[407px] h-48 rounded-[24px] p-2 overflow-hidden"
      >
        <div className="absolute left-40 bottom-24 rotate-12 ">
          <GradientCircle />
        </div>
  
        <div className="relative -left-28 -top-20 rotate-12 ">
          <GradientCircle />
        </div>
      </div>
    );
  };
  
  const GradientCircle = () => (
    <div
      style={{
        background: "linear-gradient(90deg, #D1913C 0%, #FFD194 100%)"

      }}
      className="h-96 rounded-full w-96"
    ></div>
  );