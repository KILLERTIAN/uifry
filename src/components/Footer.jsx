function Footer() {
  return (
    <div className=" mt-12">
      <div className="flex flex-row justify-between items-start max-w-[1090px] w-full">
        <div className="flex  flex-col">
          <ul className=" flex flex-col items-start justify-start mr-10">
            <li className=" flex">
              <img
                src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717314249/mzmc23xebiqbqw1eh80w.png"
                alt="logo"
              />
              <span className=" pl-1">
                <img
                  src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717315593/vufpanckk5vuy3iiipse.png"
                  alt="uifry"
                />
              </span>
            </li>
            <li className=" flex pt-4">
              <img
                src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717341091/ez0b4jjzx9zaaba1nvkj.png"
                alt=""
              />
              Help@Frybix.com
            </li>
            <li className=" flex pt-4">
              <img
                src="https://res.cloudinary.com/dl5umecqi/image/upload/v1717341099/ruexyebs0drqljutdoom.png"
                alt=""
              />
              +1 234 456 678 89
            </li>
          </ul>
        </div>
        <div className=" flex flex-col">
          <p className=" text-xl font-bold">Links</p>
          <ul className="flex flex-col items-start justify-center mr-10">
            <li className=" pt-5 ">Home</li>
            <li className=" pt-5">About Us</li>
            <li className=" pt-5">Booking</li>
            <li className=" pt-5">Blog</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className=" text-xl font-bold">Legal</p>
          <ul className="flex flex-col items-start justify-center mr-10">
            <li className=" pt-5">Terms of Use</li>
            <li className=" pt-5">Privacy Policy</li>
            <li className=" pt-5">Cookie Policy</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className=" text-xl font-bold">Product</p>
          <ul className="flex flex-col items-start justify-center mr-10">
            <li className=" pt-5">Take Tour</li>
            <li className=" pt-5">Live Chat</li>
            <li className=" pt-5">Reviews</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <p className=" text-xl font-bold">Newsletter</p>
          <ul>
            <li className=" pt-5">Stay Up To Date</li>
            <li className=" pt-5">
            
              <div className=" flex max-w-[340px] h-[61px] bg-white shadow-sm" >
              <input type="email" placeholder="Your Email" className="pl-3"/>
                <button className=" text-white bg-black h-full flex justify-center rounded-md w-[180px] text-lg cursor-pointer z-30 items-center">Subscribe</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="flex max-w-[900px] h-[104px] items-center justify-center m-auto border-t-black mt-6 flex-col">
      <div className="bg-gradient-to-r from-gray-200 via-black to-gray-200 h-[1px] w-full"></div>

        <p className=" mt-8">Copyright 2024 uifry.com all rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;