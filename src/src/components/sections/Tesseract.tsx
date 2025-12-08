const Tesseract = () => {
  return (
    <div className="bg-brutal-bg p-4 sm:p-6 md:p-8 relative overflow-hidden flex items-center justify-center min-h-[250px] sm:min-h-[300px] md:min-h-[400px] col-span-12 md:col-span-4">
      <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] flex items-center justify-center">
        {/* Outer Square */}
        <div className="absolute inset-0 border-2 border-brutal-text animate-spin-slow" />
        {/* Middle Square */}
        <div className="absolute inset-[12.5%] border-2 border-brutal-text animate-spin-mid" />
        {/* Inner Square */}
        <div className="absolute inset-[25%] border-2 border-brutal-text animate-spin-fast" />
        {/* Core (Solid) */}
        <div className="absolute inset-[37.5%] bg-brutal-text animate-spin-core" />
      </div>
    </div>
  );
};

export default Tesseract;