import Image from "next/image";

const HeroBanner = () => (
     <section className="relative w-full h-[300px] bg-gray-100">
          <Image
               width={100}
               height={100}
               src="https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg" // Replace with actual path
               alt="Hero"
               className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
               <h2 className="text-5xl font-light text-white">
                    Simple
                    <br />
                    is More
               </h2>
          </div>
     </section>
);

export default HeroBanner;
