function Hero() {
    return (
        <div className="w-[1090px] min-h-[90vh] flex flex-row items-center justify-center  pt-10 backdrop-blur-md bg-opacity-60 bg-white">
            {/* Title */}
            <div className="flex w-[50%] flex-col items-start justify-start">
                <div className="flex flex-col ">
                    <h1 className="text-5xl font-bold track mb-6">Make The Best <br /> Financial Decisions</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae voluptates, ea dolores at eius ab optio rerum possimus eos </p>
                    <div className="flex flex-row items-center justify-start mt-10" >
                        <div className="h-[60px] min-w-[180px] flex items-center justify-center text-white bg-black rounded-sm text-lg">
                            Get Started
                            <img className="ml-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717301924/Prescription_Testres/dcjlml8frags8bipo91p.png" alt="arrow" />
                        </div>
                        <div className="h-[60px] min-w-[180px] flex items-center justify-center text-black rounded-sm text-lg">
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
                    <img className="absolute top-[-100px] left-[-50px] z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302414/Prescription_Testres/l3deprsq8839kwcc6n6k.png" alt="1" style={{ zIndex: 3 }} />
                    <img className="absolute top-[-30px] left-[75px] z-20" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302457/Prescription_Testres/lqdnavxdbug8xd9lnfwd.png" alt="2" style={{ zIndex: 2 }} />
                    <img className="absolute top-[40px] left-[200px] z-30" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717302489/Prescription_Testres/qt8fgihopm660ymvm6lj.png" alt="3" style={{ zIndex: 1 }} />
                    <img className="absolute top-[-90px] left-[80px] h-[700px] w-[700px] z-0" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717306659/Prescription_Testres/j6tkve6awbzxg4bhugxp.png" alt="eclipse" />
                </div>
            </div>
        </div>
    )
}

export default Hero