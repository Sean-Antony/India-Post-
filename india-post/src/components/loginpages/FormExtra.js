export default function FormExtra(){
    return(
        <div className="flex items-center justify-between mr-[25px] ml-[25px]">
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
          <a href="#" className="font-medium text-[#B01E1D]">
            Forgot password?
          </a>
        </div>
      </div>

    )
}