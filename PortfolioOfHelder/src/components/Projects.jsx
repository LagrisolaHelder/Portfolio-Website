import Card from './Card';
import portfolioImage from '../assets/6ix7even.png';
import portfolioImage2 from '../assets/coffee.png';

const Project = () => {
  return(
     <>
     
     
     
     <div className="flex gap-2.5 items-center justify-center p-4 bg-base-100 rounded-lg  min-h-screen">

      <Card image={portfolioImage} title="Ideas 1" description="Cafe Website Ideas " />
      <Card image={portfolioImage2} title="Ideas 2" description="Cafe Website Ideas " />

     </div>
     
     
     
     
     
     
     </>
  )

}

export default Project;
