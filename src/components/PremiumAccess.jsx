export default function PremiumAccess() {
    return (
      <div className=" w-10/12 mx-auto my-14">
        <h2 className='text-3xl font-bold text-center mb-9'>Premium Access <i className="fa-brands fa-accessible-icon"></i></h2>
        <div className="bg-[rgb(168,224,92,0.3)] py-10 px-2 md:px-5 rounded-3xl">
        <p className='text-center my-9 text-lg font-semibold'>Offer exclusive alerts for special deals available only to users who become organizers of our site</p>
        <div className="flex flex-col md:flex-row items-center w-full md:w-6/12 lg:w-4/12 mx-auto gap-2">
        <label className="input input-bordered flex items-center gap-2">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70">
        <path
        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
        <path
        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="text" placeholder="Email" />
        </label>
        <button className="btn md:font-semibold md:text-lg">Submit</button>
        </div>

        </div>
      </div>
    )
  }