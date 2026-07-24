 

const Hero = () => {
    return (
       <div className="hero bg-base-100 max-w-9xl mx-auto items-center justify-center flex h-screen">
  <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
   <div className="hover-3d">
  {/* content */}
  <figure className="max-w-100 rounded-2xl">
    <img src="https://scontent-lhr11-1.xx.fbcdn.net/v/t39.30808-6/748907866_122268365210132658_737943247740754703_n.jpg?stp=dst-jpg_tt6&cstp=mx960x957&ctp=s960x957&_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fNIQSJHV5ekQ7kNvwHr5_qv&_nc_oc=AdrSZXUfBKefAth8U6bVj7SkBsUiejFYUsONFhL_dppy_yuDu6msMo_C5bWAAGyGJlo&_nc_zt=23&_nc_ht=scontent-lhr11-1.xx&_nc_gid=OZuRbk3tT_oqiWkN9LpP3g&_nc_ss=7b2a8&oh=00_AQC3cDc6mBGFnlHoeAe_VZRaUBTA9VgvBMiUQ3GS7Tc7gA&oe=6A670B87" alt="3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
    <div>
      <h1 className="text-5xl font-bold">Software Engineer</h1>
      <p className="py-6 text-xl max-w-sm">
      Hi, I'm Helder, a Software Engineer from Timor-Leste driven by curiosity and a love for learning. I enjoy exploring new technologies, solving problems, and building clean, efficient software.
      </p>
      <button className="btn bg-black text-white rounded-2xl">Contact Me</button> 
      <a className="btn border-none bg-transparent text-black text-2xl rounded-2xl" href="https://github.com/LagrisolaHelder">
        <i class="fa-brands fa-github"></i> 
      </a>
    </div>
  </div>
</div>
    )
}

export default Hero;