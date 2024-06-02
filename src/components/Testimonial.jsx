function Testimonial() {
    return (
        <div className="flex flex-col items-center justify-center  min-h-[80vh]" >
            <div className="flex flex-col items-center">
                <h3 className="text-black mb-2">ADVANTAGES</h3>
                <h1 className="text-5xl font-bold tracking-tight mb-5">Why Choose Uifry?</h1>
            </div>
            <div className="flex flex-row-reverse items-center justify-between max-w-[1388px]  min-h-[80vh]">
                <div className="flex flex-col items-start justify-center w-[50%]">
                    <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1717347752/Prescription_Testres/iih31e85bceddm76qql7.png" alt="" />
                </div>
                <div className="flex items-center justify-center w-[50%]">
                    <img className="relative z-10  w-[700px]" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717347445/Prescription_Testres/ga4dtkludghqqmn9ipdb.png" alt="test" />

                    {/* SVG */}
                    <div className="absolute left-0">
                        <svg width="577" height="493" viewBox="0 0 577 493" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_101_95)">
                                <ellipse cx="179.764" cy="94.8408" rx="179.764" ry="94.8408" transform="matrix(1 0 0 -1 80 293.682)" fill="#FDE598" />
                            </g>
                            <g filter="url(#filter1_f_101_95)">
                                <ellipse cx="176.044" cy="94.8408" rx="176.044" ry="94.8408" transform="matrix(1 0 0 -1 120.911 389.142)" fill="#FF5555" />
                            </g>
                            <defs>
                                <filter id="filter0_f_101_95" x="-23.1546" y="0.845436" width="565.836" height="395.991" filterUnits="userSpaceOnUse">
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_101_95" />
                                </filter>
                                <filter id="filter1_f_101_95" x="17.7569" y="96.306" width="558.398" height="395.991" filterUnits="userSpaceOnUse">
                                    <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_101_95" />
                                </filter>
                            </defs>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial