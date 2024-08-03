export default function FormExtra(){
    return(
        <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-[#B01E1D] focus:[#B01E1D] border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="relative font-medium text-[#B01E1D] group">
            Forgot password?
            <span className=" absolute left-1/2 bottom-[-8px] transform -translate-x-1/2 w-0 h-0.5 bg-[#B01E1D] group-hover:w-1/2 transition-all duration-300 ease-in-out"></span>
          </a>
        </div>
      </div>

    )
}