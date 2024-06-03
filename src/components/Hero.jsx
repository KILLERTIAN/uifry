import FadeIn from "./FadeIn";

function Hero() {
    return (
        <div className="w-[1090px] min-h-[90vh] flex flex-row items-center justify-center  pt-10 backdrop-blur-md  bg-white">
            {/* Title */}


            <div className="flex w-[50%] flex-col items-start justify-start ">

                <div className="flex flex-col z-10">
                    <h1 className="text-6xl font-bold tracking-tighter mb-6">Make The Best <br /> Financial Decisions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae voluptates, ea dolores at eius ab optio rerum possimus eos </p>
                    <div className="flex flex-row items-center justify-start mt-10" >
                        <div className="h-[60px] min-w-[180px] flex items-center justify-center text-white bg-black rounded-sm text-lg cursor-pointer">
                            Get Started
                            <img className="ml-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717301924/Prescription_Testres/dcjlml8frags8bipo91p.png" alt="arrow" />
                        </div>
                        <div className="h-[60px] min-w-[180px] flex items-center justify-center text-black rounded-sm text-lg cursor-pointer">
                            <img className="mr-2 ml-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302126/Prescription_Testres/dxgmrsxkhirhakznt5vf.png" alt="video" />
                            Watch Video
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1717301220/Prescription_Testres/wb0yevi76hnkuhnwsthi.png" alt="a" />
                </div>
            </div>
            {/* Representation */}

            <div className="relative w-[50%] flex flex-row items-center justify-center">
                <div className="relative w-full h-[90vh] flex items-start justify-start">
                <img className="absolute top-[-90px] left-[80px] h-[700px] w-[700px] z-5" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717306659/Prescription_Testres/j6tkve6awbzxg4bhugxp.png" alt="eclipse" />
                    <FadeIn direction="left" delay={0.2}>
                        <img
                            className="absolute top-[-100px] left-[-50px] z-10 ease-in"
                            src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302414/Prescription_Testres/l3deprsq8839kwcc6n6k.png"
                            alt="1"
                            style={{ zIndex: 3 }}
                        />
                    </FadeIn>
                    <FadeIn direction="left" delay={0.4}>
                        <img
                            className="absolute top-[-30px] left-[75px] z-20 ease-in"
                            src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302457/Prescription_Testres/lqdnavxdbug8xd9lnfwd.png"
                            alt="2"
                            style={{ zIndex: 2 }}
                        />
                    </FadeIn>
                    <FadeIn direction="left" delay={0.6}>
                        <img
                            className="absolute top-[40px] left-[200px] z-30 ease-in"
                            src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302414/Prescription_Testres/l3deprsq8839kwcc6n6k.png"
                            alt="3"
                            style={{ zIndex: 1 }}
                        />
                    </FadeIn>


                    
                    {/* SVG */}
                    <div className="absolute top-[240px] left-[40px]  z-0">
                        <svg width="528" height="479" viewBox="0 0 528 479" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_101_131)">
                                <ellipse cx="283.618" cy="239.068" rx="198.714" ry="107.054" transform="rotate(150 283.618 239.068)" fill="#FF5555" />
                            </g>
                            <defs>
                                <filter id="filter0_f_101_131" x="0.192055" y="0.0192642" width="566.853" height="478.098" filterUnits="userSpaceOnUse">
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_101_131" />
                                </filter>
                            </defs>
                        </svg>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero