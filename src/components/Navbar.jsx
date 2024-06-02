
function Navbar() {
    return (
        <div className="flex flex-row items-center justify-between max-w-[1090px] w-full h-[60px] mt-10 mb-5">
            <div className="flex flex-row items-center">
                {/* Logo */}
                <div className=" flex flex-row items-center justify-center m-0 mr-10 p-0">
                    <img className="mr-1" src="https://res.cloudinary.com/djoebsejh/image/upload/v1717292373/Prescription_Testres/ymnt52sfz9riehww79nq.png" alt="logo" />
                    <img src="https://res.cloudinary.com/djoebsejh/image/upload/v1717292417/Prescription_Testres/nqdz0xduswt2ymsgy9bq.png" alt="logo-m" />
                </div>
                {/* Menu */}
                <div className="flex items-center justify-center">
                    <ul className="flex flex-row text-xl items-center justify-center font-semibold">
                        <li className="mr-3 text-[#FF5555] tracking-tight">
                            Home
                        </li>
                        <li className="mr-3 tracking-tight">
                            About Us
                        </li>
                        <li className="mr-3 tracking-tight">
                            Pricing
                        </li>
                        <li className="mr-3 tracking-tight">
                            Features
                        </li>
                    </ul>
                </div>
            </div>
            <div className="h-full w-[180px] flex items-center justify-center text-white bg-black rounded-sm text-lg">
                Download
            </div>
        </div>
    )
}

export default Navbar