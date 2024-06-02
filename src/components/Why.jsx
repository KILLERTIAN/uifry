function Why() {
    return (
        <div className="flex flex-row items-center justify-start max-w-[1090px]  min-h-[80vh]">
            <div className="flex flex-col items-start justify-center w-[50%]">
                <h3 className="text-[#FF5555]">ADVANTAGES</h3>
                <h1 className="text-5xl font-bold tracking-tight mb-5">Why Choose Uifry?</h1>
                <div className="flex flex-row items-center justify-center  mb-5">
                    <img className="mr-4" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717331419/Prescription_Testres/mpof8qw27x0xbkjetls4.png" alt="bell" />

                    <h2 className="text-2xl font-bold">Clever Notifications</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius aliquam tenetur asperiores similique, veniam et, incidunt molestias nobis nemo voluptas dignissimos aliquid dolor debitis, nisi at consectetur error fugit repellendus! Ex eum laborum pariatur totam facere, eligendi nulla architecto quaerat quis neque provident amet voluptatibus accusantium repudiandae numquam? Pariatur?</p>
            </div>
            <div className="flex items-center justify-center w-[50%] pr-10">
            <img className="absolute  right-1 z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717306659/Prescription_Testres/j6tkve6awbzxg4bhugxp.png" alt="eclipse" />
                <img className="absolute right-10 z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717331422/Prescription_Testres/tysc8wf6tiabysxt0ajq.png" alt="iphone" />
                <img className="absolute mr-5 right-10 z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717331425/Prescription_Testres/hqpb7nlxpbchjnrviezm.png" alt="hold" />
                
                {/* SVG */}
                <div className="absolute right-[200px] z-0">
                    <svg width="517" height="430" viewBox="0 0 517 430" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_101_132)">
                            <ellipse cx="245" cy="253.5" rx="145" ry="76.5" fill="#FDE598" />
                        </g>
                        <g filter="url(#filter1_f_101_132)">
                            <ellipse cx="275" cy="176.5" rx="142" ry="76.5" fill="#FF5555" />
                        </g>
                        <defs>
                            <filter id="filter0_f_101_132" x="0" y="77" width="490" height="353" filterUnits="userSpaceOnUse">
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_101_132" />
                            </filter>
                            <filter id="filter1_f_101_132" x="33" y="0" width="484" height="353" filterUnits="userSpaceOnUse">
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_101_132" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Why