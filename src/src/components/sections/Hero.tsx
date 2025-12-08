import Button from '../ui/Button';

const Hero = () => {
  return (
    <div className="bg-brutal-bg p-4 sm:p-6 md:p-8 relative overflow-hidden col-span-12 md:col-span-8 flex flex-col justify-center min-h-[400px] md:min-h-[500px]">
      <div className="scanlines absolute inset-0 z-10" />
      <p className="text-sm mb-2 sm:mb-4 font-bold">// IDENTITY_VERIFIED</p>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-3 sm:mb-4 tracking-tighter">
        Aryan Saxena<span className="animate-cursor">_</span>
      </h1>
      
      <p className="text-base sm:text-lg mb-1 sm:mb-2">Software Engineer Focused on Backend Systems.</p>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">Visualizing logic through code.</p>
      
      <div>
        <Button href="#contact">Init_Connect</Button>
      </div>
    </div>
  );
};

export default Hero;