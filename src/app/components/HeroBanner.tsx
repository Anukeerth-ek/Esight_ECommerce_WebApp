import Image from "next/image";

const HeroBanner = () => (
     <section className="relative w-full h-[350px] bg-gray-100">
          {/* <Image
               width={100}
               height={100}
               src={bannerImage}
               alt="Hero"
               className="w-full h-full object-cover"
          /> */}

          <Image alt="banner image" className="w-full h-full object-fit " src="https://t4.ftcdn.net/jpg/06/22/74/79/360_F_622747997_4s5nw9y2WG3LJyQ5iRF4KRGLbySGRd82.jpg"/>
       {/* <div className="absolute top-1/2 left-12 transform -translate-y-1/2">
               <h2 className="text-5xl font-light text-white">
                    Simple
                    <br />
                    is More
               </h2>
          </div> */}
         
     </section>
);

export default HeroBanner;
