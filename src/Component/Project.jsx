import React from 'react'

export const Project = () => {
  return (
    <>
        <div className='w-full h-full px-[10rem] py-[4rem] text-center font-[Nunito] max-[992px]:mt-[10rem] max-md:px-[1rem] max-md:mt-[20rem]'>
            <h2 className='text-[3rem] font-extrabold'>Past Project</h2> 

            <div className='w-full flex items-center gap-[4rem] text-start mt-[3rem] max-[992px]:flex-col'>
                <div className='w-full h-[35rem] bg-white shadow-1xl rounded-2xl px-8 py-8'>
                    <img src="./image/9.jpg" alt="" className='w-full h-3/5 rounded-xl object-cover' />
                    <h3 className='pt-10 font-extrabold text-[1.5rem]'>Monthly Blogging Subscription</h3>
                    <p className='text-[1.2rem] text-[#9999A8] pt-5'>Grow revenue and traffic with a fully managed content marketing solution at a flat monthly fee. SEO</p>
                </div>

                <div className='w-full h-[35rem] bg-white shadow-1xl rounded-2xl px-8 py-8'>
                    <img src="./image/10.jpg" alt="" className='w-full h-3/5 rounded-xl object-cover    ' />
                    <h3 className='pt-10 font-extrabold text-[1.5rem]'>Content on Demand</h3>
                    <p className='text-[1.2rem] text-[#9999A8] pt-5'>Our writers create blog posts, web pages, product descriptions, white papers, press releases, and more, including custom projects.</p>
                </div>
            </div>
        </div>
    </>
  )
}
