import React from 'react'

export const Project = () => {
  return (
    <>
        <div className='w-full h-full px-[10rem] py-[4rem] text-center font-[Nunito] max-[992px]:mt-[10rem] max-md:px-[1rem] max-md:mt-[20rem]'>
            <h2 className='text-[3rem] font-extrabold'>Past Project</h2> 

            <div className='w-full flex items-center gap-[4rem] text-start mt-[3rem] max-[992px]:flex-col'>
                <div className='w-full h-[35rem] bg-white shadow-1xl rounded-2xl px-8 py-8'>
                    <img src="https://s3-alpha-sig.figma.com/img/6fe4/8907/e147ea94efd24c0ae278a652584a9aac?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IQb2UtbWagSyx3aE3cQyras33dg4aYQ75dkWIwKzOlox1TyiCzeg8ijbNTJfCxS0LUQcF0EF7XWsd0dnuLZgaNXH0JF4G3smewZkMACgTqOI8ZoZD5Fe5HQoJFllWIpDyGP76VYH7LmNQvqO47-5sN5o-UUuoxPyoDtl2tM4aAOOoTwAJg-UYWRyqpb~22DEAl4mcmmKqd6Ho74kUZWT~-NGDM~FPGn1uq5qnPd6ohlSECE25SCycUlcTsgk6I~u3xJmMereghCuns0vvIHNuB-cWdipUpVTuAEuN4eV7hWejwhulmcPZm1ZcxAseGG7TKAgoSWkiUR1nwsbYUNmTQ__" alt="" className='w-full h-3/5 rounded-xl object-cover' />
                    <h3 className='pt-10 font-extrabold text-[1.5rem]'>Monthly Blogging Subscription</h3>
                    <p className='text-[1.2rem] text-[#9999A8] pt-5'>Grow revenue and traffic with a fully managed content marketing solution at a flat monthly fee. SEO</p>
                </div>

                <div className='w-full h-[35rem] bg-white shadow-1xl rounded-2xl px-8 py-8'>
                    <img src="https://s3-alpha-sig.figma.com/img/be8c/cbf8/10238a226ce22533eb6e133aa37ffc02?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eawpls25Zfdt~hsvNbFRBaw9Bumth6bTqhHmBd~srB2Jcb5seRFhGKmGbCBSX9EeoLmls61FIAOMAGrOFTsGn7Z7xq0b991HTJa4U5dRqytosdEDZoufzXKZcPwj4tUGiLI8ng3x3o1R8fZTUj40wtlgn5GXnwIOyh3gRm39W5ojzhrc-YamQ8PQmMM8Mn9932IXGPxmMCpJD2zNDLQ7baRksEGzXYAeWmuzQa9Xy9~7Un4lC50F1SYp-hjQGqcWJn2loqPXRj63kgPyRsAYkj0t8e4VftD1ARfkMbWDbdFgkqEdZfr82lfSPwDXtP2ICr2IVqZ5xAg1ZRE0w4XEcg__" alt="" className='w-full h-3/5 rounded-xl object-cover    ' />
                    <h3 className='pt-10 font-extrabold text-[1.5rem]'>Content on Demand</h3>
                    <p className='text-[1.2rem] text-[#9999A8] pt-5'>Our writers create blog posts, web pages, product descriptions, white papers, press releases, and more, including custom projects.</p>
                </div>
            </div>
        </div>
    </>
  )
}
