
const Comment = () => {
    return (
    <div className="w-full sm:w-3/4 mx-auto px-0 border-b-2">
        <div className='relative m-0 flex bg-white'>
            <div className='flex-no-shrink p-1 w-1/6'>
                <img alt='' className='w-auto h-2/5 sm:h-1/2 lg:w-32 lg:h-32 block mx-auto rounded-3xl' src='https://source.unsplash.com/WLUHO9A_xik/1600x900'/>
            </div>
            <div className='flex-no-shrink sm:w-1/5 w-1/6 p-2'>
                <div className="p-0 sm:p-4 mb-2">
                    <h4 className='font-medium  text-xs sm:text-sm text-left whitespace-normal ml-1'>Nickname add</h4>
                </div>
                <div className="p-1 ">
                    <h4 className='font-medium text-md text-center'>UPVOTE</h4>
                </div>
                <div className="p-1">
                    <h4 className='font-medium text-md text-center'>DOWNVOTE</h4>
                </div>
            </div>
            <div className='flex-1 card-block relative w-2/3'>
                <div className="p-6">
                    <h4 className='font-medium text-md md:text-xl mb-3 text-left'>Niezłe wideo</h4>
                    <p className='leading-normal text-left text-sm md:text-md'>Naprawde spoko wideo! Like!</p>
                    <div className="text-xs sm:text-sm text-grey mt-6 text-right flex">
                        <p className="text-left">16:00 20.05.2021</p>
                        <p className="text-right ml-auto">REPORTUJ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}



export default Comment;