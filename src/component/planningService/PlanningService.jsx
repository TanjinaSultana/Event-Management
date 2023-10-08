


const PlanningService = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-24">
  <div className="hero-content text-center">
    <div className="">
    <h1 className="text-5xl text-center mb-8 mt-24"><span className="text-[#FFA500] ">Hi There!</span>From The Best Event Planner Agency.</h1>
    <p className="text-gray-500 text-center font-bold py-6">We craft every detail with utmost care,<br></br> ensuring your special day is a reflection of your unique love story.<br></br> Join us for an unforgettable celebration where dreams become reality</p>
    <div className='grid grid-cols-4  mt-14'>
                <div>

                {/* //<FaHome></FaHome> */}
                <img src='https://i.ibb.co/47PKZnL/home2.png' className='bg-[#ff3e49] w-[50px] h-[50px] '></img>
                <h4 className="mt-8 text-gray-500  font-bold ">Find the perfect venue for free</h4>
                </div>
                <div >
        <img src='https://i.ibb.co/YQsrCtP/message.png' className="w-[50px] h-[50px]"></img>
        <h4 className="mt-8 text-gray-500  font-bold">Connect with the best vendor</h4>
                </div>
                <div >
<img src='https://i.ibb.co/R3rXXg1/edit.png' className="w-[50px] h-[50px]"></img>
<h4 className="mt-8 text-gray-500 font-bold">Let us help you with the event</h4>
                </div>
                <div >
<img src='https://i.ibb.co/gFC42f8/party.png' className="w-[50px] h-[50px]"></img>
<h4 className="mt-8 text-gray-500 font-bold">Enjoy the party with your friends</h4>
                </div>


            </div>
    </div>
  </div>
</div>
       
    );
};

export default PlanningService;