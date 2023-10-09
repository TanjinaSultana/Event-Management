import toast from "react-hot-toast";


const BookNow = () => {
    const handleSubmit  = (e) =>{
        e.preventDefault()
  toast.success("Submitted");

    }
    return (
        <div>
        <div className = "hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Booking now!</h1>
      <p className="py-6">Give Details for Booking</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input onChange={(e)=> e.target.value } type="name" placeholder="" className="input input-bordered" required name="name" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" placeholder="" className="input input-bordered" required name="quantity" onChange={(e)=> e.target.value }/>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#FE612C]" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookNow;