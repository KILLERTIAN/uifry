function Customize() {
    return (
        <div className="flex flex-row-reverse items-center justify-start max-w-[1090px]  min-h-[80vh]">
            <div className="flex flex-col items-start justify-center w-[50%]">
                <div className="flex flex-row items-center justify-center  mb-5">
                    <img className="mr-4" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717331419/Prescription_Testres/mpof8qw27x0xbkjetls4.png" alt="bell" />

                    <h2 className="text-2xl font-bold">Fully Customizable</h2>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius aliquam tenetur asperiores similique, veniam et, incidunt molestias nobis nemo voluptas dignissimos aliquid dolor debitis, nisi at consectetur error fugit repellendus! Ex eum laborum pariatur totam facere, eligendi nulla architecto quaerat quis neque provident amet voluptatibus accusantium repudiandae numquam? Pariatur?</p>
            </div>
            <div className="flex items-center justify-center w-[50%] pr-10">
                <img className="absolute  left-1 z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717306659/Prescription_Testres/j6tkve6awbzxg4bhugxp.png" alt="eclipse" />
                <img className="absolute left-[150px] z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717335258/Prescription_Testres/mezlgqukpf7ejnjwk0yu.png" alt="iphone" />
                <img className="absolute z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717346991/Prescription_Testres/bi7u0ak8etpiv2wopl8a.png" alt="hold" />

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
    )
}

export default Customize