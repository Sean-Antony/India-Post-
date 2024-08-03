export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text,
    text2
}){
    return(
        <div className="flex justify-end mt-10 space-x-4">
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-auto flex justify-center py-2 px-4 border border-[#B01E1D] text-sm font-medium rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B01E1D] mt-10"
                onSubmit={handleSubmit}
            >
                {text2}
            </button>
            :
            <></>
        }
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-auto flex justify-center py-2 px-4 border border-[#B01E1D] text-sm font-medium rounded-md text-white bg-[#B01E1D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B01E1D] mt-10"
                onSubmit={handleSubmit}
            >

                {text}
            </button>
            :
            <></>
        }
        </div>
    )
}