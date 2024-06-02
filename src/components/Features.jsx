function Features() {
    return (
        <div className="flex flex-row min-w-[1388px] w-full pl-10 items-center justify-center min-h-[80vh] pt-10">
            <div className="flex items-center justify-center w-[50%]">
                <img className="absolute  z-10" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717319373/Prescription_Testres/hvyjezvkr2uur3le8sev.png" alt="iphone" />
                <img className="absolute left-3 z-0" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717306659/Prescription_Testres/j6tkve6awbzxg4bhugxp.png" alt="eclipse" />
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
            <div className="flex flex-col items-start justify-center w-[50%]">
                <h3 className="text-[#FF5555]">FEATURES</h3>
                <h1 className="text-5xl font-bold tracking-tight mb-5">Uifry Premium</h1>
                <ul className="pr-10 z-10">
                    <li className="">
                        <h3 className="mb-4 flex flex-row font-bold">
                            <img className="mr-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717320512/Prescription_Testres/pqjqsm6txjs9vbtolvhj.png" alt="" />
                            Budgeting Intervals</h3>
                        <h5 className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae voluptates, ea dolores at eius ab optio rerum possimus eos </h5>
                    </li>
                    <li className="">
                        <h3 className="mb-4 flex flex-row font-bold">
                            <img className="mr-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717320527/Prescription_Testres/vmwskhqhbowaldkispy9.png" alt="" />Budgeting Intervals</h3>
                        <h5 className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae voluptates, ea dolores at eius ab optio rerum possimus eos </h5>
                    </li>
                    <li className="">
                        <h3 className="mb-4 flex flex-row font-bold">
                            <img className="mr-2" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717320523/Prescription_Testres/hkt2w2h0opfiuvyqtevh.png" alt="" />Budgeting Intervals</h3>
                        <h5 className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, vitae voluptates, ea dolores at eius ab optio rerum possimus eos </h5>
                    </li>

                </ul>
                <div className="absolute right-0">
                    <svg width="273" height="445" viewBox="0 0 273 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_f_101_89)">
                            <ellipse cx="253.574" cy="262.051" rx="149.574" ry="78.9132" fill="#FDE598" />
                        </g>
                        <g filter="url(#filter1_f_101_89)">
                            <ellipse cx="284.52" cy="182.622" rx="146.479" ry="78.9132" fill="#FF5555" />
                        </g>
                        <defs>
                            <filter id="filter0_f_101_89" x="0.845436" y="79.9831" width="505.457" height="364.136" filterUnits="userSpaceOnUse">
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_101_89" />
                            </filter>
                            <filter id="filter1_f_101_89" x="34.8862" y="0.554176" width="499.268" height="364.136" filterUnits="userSpaceOnUse">
                                <feGaussianBlur stdDeviation="51.5773" result="effect1_foregroundBlur_101_89" />
                            </filter>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Features