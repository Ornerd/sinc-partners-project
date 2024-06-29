import imageOne from '../assets/images/image.png'
import imageTwo from '../assets/images/Frame 49221.png'
import imagePath3a from "../assets/images/Rectangle1.png"
import imagePath3b from "../assets/images/Rectangle2.png"
import imagePath3c from "../assets/images/Rectangle3.png"
import imagePath3d from "../assets/images/Rectangle 4.png"

const heroSectionData = [
    {
      id: 1,
      header: "SINC Partners is a service incubation company",
      text: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
      CTA:  "SINC With Us",
      image_path: imageOne,
      additional: []  
    },
    {
      id: 2,
      header: "We are big on these 3 things;",
      text: `✓ Service Incubation & Ecosystem Advocacy \n ✓ Building SAAS & Marketing Tech Platforms \n ✓ Institutional Innovations`,
      CTA:  "SINC With Us",
      image_path: imageTwo,
      additional: []  
    },
    {
      id: 3,
      header: "Come with an idea, leave with a company.",
      text: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
      CTA:  "SINC With Us",
      image_path: [
        {id: 1, path: imagePath3a, config:"absolute top-0 -left-[20%]"},
         {id: 2, path:imagePath3b, config:"absolute w-3/5 max-w-[350px] right-4"},
          {id: 3, path:imagePath3c, config:"w-4/12 absolute bottom-[2%] left-[5%]"},
           {id: 4, path:imagePath3d, config:"w-4/12 absolute bottom-[2%] -right-[5%]"}],
      additional: []  
    },
  ]

  export default heroSectionData;