import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slider from "react-slick";
import Button from '../components/Button';
import NavigLink from '../components/NavigLink';
import triangle from '/src/assets/shapes/Polygon 3.png';
import diamond from "/src/assets/shapes/Polygon 3 (2).png"
import pentagon from "/src/assets/shapes/Polygon 3 (3).png"
import heroSectionData from '../components/HomePageData';
import companyLogos from '../components/Logos';
import EIRprogramData from '../components/EIRProgramdata';
import RightArrow from '../components/RightArrow';
import LeftArrow from '../components/LeftArrow';
import Footer from '../components/Footer';



const Homepage = () => {

  const [windowSize, setWIndowSize] = useState(window.innerWidth)
  const [entered, setEntered] = useState(false)
  const [oldSlide, setOldSlide] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [disabledArrow, setDisabledArrow] = useState(false)

  useEffect(()=> {  
    const handleScreenResize= ()=> { //the lengths I go to get responsive layouts ehh! shoutout to ksforgeeks.org though for this idea
      setWIndowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleScreenResize)
    return ()=> {
      window.removeEventListener('resize', handleScreenResize)
    }
  }, [])

  useEffect(()=> {
    if (activeSlide === 0) {
      setDisabledArrow(true)
    }else {
      setDisabledArrow(false)
    }
    console.log(activeSlide, disabledArrow)
  }, [activeSlide, disabledArrow])

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    waitForAnimate: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  const secondSettings = {
    className: "odd:flex odd:items-stretch",
    dots: false,
    fade: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
    waitForAnimate: true,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <RightArrow arrowStyle={'top-[470px] md:top-[125%]'} />,
    prevArrow: <LeftArrow  arrowStyle={'top-[470px] md:top-[125%]'} disabledArrow={disabledArrow}/>,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    responsive: [
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          dots: false
        }
      },
    
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          appendDots: dots => (
            <div
              style={{
                backgroundColor: "#e7e6e6",
                borderRadius: "10px",
                padding: "0px",
                bottom: '-40px'
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
        }
      }
    ]
  };

  const areasOfFocusData = [
    {
      id: 0,
      number: '01',
      spec: 'Business Support & Incubation',
      color: 'bg-[#303030]'
    },
    {
      id: 1,
      number: '02',
      spec: 'On-Demand & As-A-Service',
      color: "bg-[#F47733]"
    },
    {
      id: 2,
      number: '03',
      spec: 'Marketplace & Crowdsourcing',
      color: "bg-[#ff78bf]"
    },
    {
      id: 3,
      number: '04',
      spec: 'Aggregation & Shared Economy',
      color: "bg-[#20888f]"
    },
    {
      id: 4,
      number: '05',
      spec: 'Decentralized Economy & Digital Assets',
      color: 'bg-[#ff88c6]'
    }
  ]


  return (
    <>
     <Navbar/>
     <section className='w-screen bg-[#ffffff63] md:bg-transparent h-screen max-h-[640px] md:max-h-screen'>
        <Slider {...settings}>
          {heroSectionData.map((slide)=>
             <div key={slide.id} className='h-[94vh] max-h-[600px] md:max-h-[94vh] pt-0 md:pt-20 w-screen flex flex-row items-start md:items-center justify-center'>
                <div className='w-screen h-full max-h-[600px] md:max-h-screen flex flex-row items-center justify-center'>
                    <section className={`h-full pt-4 md:pt-0 max-h-[600px] pl-4 md:pl-0 bg-white flex flex-col items-start *:md:items-center md:items-start md:max-h-screen justify-center ${windowSize < 930? 'w-full': 'w-1/2'}`}>
                      <h1 className='text-2xl md:text-3xl ml-0 md:ml-[15%] w-full md:w-4/5 min-w-64 font-semibold text-[#303030]'>{slide.header}</h1>
                      <p className='text-xl  ml-0 md:ml-[15%] w-full md:w-4/5 min-w-64 font-normal whitespace-pre-line text-[#303030]  my-3'>{slide.text}</p>
                    <Button buttonText={slide.CTA} buttonStyle={'bg-[#303030] mt-3 ml-[0] md:ml-[15%] text-white'}/>
                    </section>

                    {
                    slide.id === 3 ?
                    <section className={`h-full bg-[#212121] w-1/2 flex items-center justify-center relative ${windowSize < 930? 'hidden': ''}`}>
                      {slide.image_path.map((img)=> <img key={img.id} src={img.path} className={img.config} alt=''/>)}
                    </section> 
                    :
                    <section className={`h-full w-1/2 flex items-center justify-center relative ${windowSize < 930? 'hidden': ''}`}>
                      <img src={slide.image_path} alt='' className={`object-cover h-full`}/>
                    </section>
                    }
                </div> 
              </div>
            )}

        </Slider>      
     </section>
      {/* Hero Section above*/}
     <section className='w-screen max-w-[1180px] flex flex-col items-center mx-auto md:pt-8'>
        <div className='pt-8 md:pt-0 w-full bg-[#ffffff63] md:bg-transparent flex justify-center'>
          <div className='bg-white py-6 px-4 md:px-12 rounded-3xl w-[90%] md:w-[70%] text-center'>
              <p className='mb-6 text-lg font-medium'>"Nigeria and Africa has a massive network effect that have not be fully utilized. With Nigerians/Africans in every country and territory of the world, we can scale an African business to 100+ countries in few weeks"
              </p>
              <p>
              <span className='font-bold'>Daniel Izeghs Oratokhai</span> <br/> Managing Partner at SINC Partners Ltd
              </p>
          </div>
        </div>
        

        <section className='w-full hidden md:flex flex-col items-center justify-center mt-20'>
          <h1 className='w-4/5 md:max-w-2xl text-5xl font-semibold text-center mb-12'>Network of builders helping startup scale</h1>
          <div className='flex flex-row items-stretch justify-center flex-wrap w-full p-0'>
            <span className='flex flex-col w-4/5 mb-4 md:mr-4 p-6 bg-white rounded-lg md:w-[38%]'>
              <h2 className='text-xl font-bold mb-6'>Work with Service Incubators to expedite your time-to-market</h2>
              <p>Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.</p>
              <p className='font-semibold mt-4 mb-4'>For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
              <NavigLink linkName={`Learn more`} linkStyle={`mt-auto`}/>
            </span>

            <span className='flex flex-col w-4/5 mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[38%]'>
              <h2 className='text-xl font-bold mb-6'>Access funding after your mvp is validated</h2>
              <p>Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.</p>
              <p className='font-semibold mt-4 mb-2'>Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months.</p>
              <NavigLink linkName={`Learn more`} linkStyle={`mt-auto`}/>
            </span>
            
            <span>

            </span>
          </div>
        </section>
        <section className='md:hidden w-full bg-[#ffffff63] flex flex-col items-center justify-center pt-20'>
          <h1 className='w-4/5 text-2xl font-semibold text-center mb-2'>Building the future together, democratizing success.</h1>
          <div className='flex flex-row items-stretch justify-center flex-wrap w-full p-0'>
            <span className='flex flex-col items-center w-4/5 mb-4 rounded-lg'>
              
              <p className='mb-6 text-center'>SINC Partners has a novel vision of making success available to everyone and democratizing the pain point of success. We are a next generation startup studio focus on building and supporting enterprises at scale and we help them raise service investments and funds across 3-5 deals from as low as $25k at start to up to $15m before you leave the lab.
              We are a Gasus Business, a business built on the foundation of Christian values and belief.</p>
              
              <Button buttonText={'Read About Us'} buttonStyle={'bg-[#303030] mt-auto px-2 lg:w-1/2 text-white'}/>
            </span>
           
            <span>

            </span>
          </div>
        </section>

        <section className='flex flex-col items-center w-full my-20 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center'>
            <h1 className=' text-2xl md:text-5xl font-semibold mb-8'>Our Area of Focus</h1>
            <p className='w-full md:w-3/5'>In our quest to help make success available to everyone, we have initial strategic direction to focus on these five (5) key areas at the lab.</p>
          </div>

          <div className='w-full mt-12 flex items-center flex-wrap'>
            {areasOfFocusData.map((area)=>
                <span key={area.id} className={`p-2 w-full h-32 md:w-1/5 flex text-white font-medium flex-col ${area.color}`}>
                  <p>{area.number}</p>
                  <p className='mt-auto w-full md:w-3/5'>{area.spec}</p>
                </span>
            )}
          
          </div>
          
        </section>

        <section className='flex flex-col items-center w-full my-4 px-8 md:px-0'>
        <div className='flex flex-col items-center text-center'>
            <h1 className='text-2xl md:text-5xl font-semibold mb-8'>Our Concept Innovations</h1>
            <p className='w-full md:w-3/5'>We have proprietary concept innovations that will support the startup ecosystem, support solution-providers/entrepreneurs and ultimately help democratize success;</p>
          </div>

          <div className='flex items-stretch flex-wrap justify-between mt-12'>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl text-center font-bold mb-8'>Service Incubator</h2>
              <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl font-bold mb-8 text-center'>Virtualting</h2>
              <p>A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <h2 className='text-xl font-bold mb-8 text-center'>Diiming</h2>
              <p>A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice
              </p>
            </span>
          </div>
        </section>

        <section className='flex flex-col items-start w-full my-20 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center mx-auto'>
            <h1 className='text-2xl md:text-5xl font-semibold mb-8'>Our Service Incubation Model</h1>
            <p className='w-full md:w-4/5'>The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 – 24 months as been first to invest.</p>
          </div>

          <div className='flex flex-col items-center md:items-start text-center md:text-left mt-8'>
            <h1 className='text-xl md:text-2xl font-semibold mb-2'>Hypothesis</h1>
            <p className='w-full'>Just a few reasons we know its time for this model within the ecosystem</p>
          </div>

          <div className='flex items-stretch flex-wrap justify-between mt-12'>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src={triangle} alt="triangle"/>
              </span>
              <p>A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src={diamond} alt="diamond"/>
              </span>
              <p>If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='mb-4'>
                <img src={pentagon} alt="pentagon"/>
              </span>
              <p>Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
              </p>
            </span>
            
          </div>

          <div className='flex flex-col items-center md:items-start text-center md:text-left mt-8'>  
            <h1 className='text-3xl md:text-2xl font-semibold mb-2'>Case Study</h1>
            <p className='w-full'>See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
          </div>
          <div className='flex items-start flex-wrap justify-between mt-8 md:mt-12'>
            <Button buttonText={'Service Incubator Equity'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4 w-full md:w-fit md:mt-0'}/>
            <Button buttonText={'SEEQ Maths Equation'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4  w-full md:w-fit md:mt-0'}/>
            <Button buttonText={'Value of my Equity Over Time'} buttonStyle={'bg-white text-black border-[1px] border-[#303030] mr-0 md:mr-2 mt-4 md:mt-0 w-full md:w-fit'}/>
          </div>

          <NavigLink linkName={'Become A Service Incubator'} linkStyle={'mt-12 mx-auto'}/>

        </section>

        <section className='w-full my-4'>
          <div className='flex flex-col items-center text-center mx-auto'>
              <h1 className='text-2xl md:text-5xl font-semibold mb-4 md:mb-8'>Our Studio Portfolio</h1>
              <p className='w-full md:w-4/5'>Our 2024 Service Incubator Portfolio Companies</p>
          </div>

          <div className='w-full flex flex-wrap justify-center mt-8 md:mt-12 gap-2 lg:gap-5' onMouseEnter={()=> setEntered(true)} onMouseLeave={()=>setEntered(false)}>
            {companyLogos.map((logo)=> 
              <span className={`${entered? 'opacity-30': 'opaque'} md:w-[124px] hover:opacity-100 md:h-[60px] w-[78px] h-[40px] flex items-center justify-center bg-white rounded-md cursor-pointer`}>
                <img key={logo.id}  src={logo.logo_path} alt='' className='w-1/2'/>
              </span>
            )}
           
          </div>
        </section>

        <section className='flex flex-col items-start w-full my-24 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center mx-auto'>
            <h1 className='text-2xl md:text-5xl font-semibold mb-8'>Co-found With Us</h1>
            <p className='w-full md:w-4/5'>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed.</p>
          </div>

          

          <div className='flex items-stretch flex-wrap justify-between mt-12'>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='w-[60px] h-[60px] mb-4 rounded-[50%] bg-[#303030] flex items-center justify-center'>
                  <p className='text-white font-semibold'>1</p>
              </span>
              <h2 className='text-xl font-bold mb-4'>We Ideate</h2>
              <p>We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='w-[60px] h-[60px] mb-4 rounded-[50%] bg-[#F47733] flex items-center justify-center'>
                  <p className='text-white font-semibold'>2</p>
              </span>
              <h2 className='text-xl font-bold mb-4'>You Validate</h2>
              <p>You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions.
              </p>
            </span>
            <span className='flex flex-col w-full mb-4 md:ml-4 p-6 bg-white rounded-lg md:w-[30%]'>
              <span className='w-[60px] h-[60px] mb-4 rounded-[50%] bg-[#ff78bf] flex items-center justify-center'>
                  <p className='text-white font-semibold'>3</p>
              </span>
              <h2 className='text-xl font-bold mb-4'>You Co-own</h2>
              <p>After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
              </p>
            </span>

          </div>

          <NavigLink linkName={'Build Your Dream'} linkStyle={'mt-12 mx-auto'}/>

        </section>
        <section className='flex flex-col items-start w-full my-2 px-8 md:px-0'>
          <div className='flex flex-col items-center text-center mx-auto'>
            <h1 className='text-5xl font-semibold mb-8 hidden md:block'>How It Works</h1>
            <h1 className='text-2xl font-semibold mb-4 block md:hidden'>Service Incubation Process</h1>
            <p className='w-full md:w-4/5 hidden md:block'>Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
          </div>

          <section className='w-full h-[420px] mt-12 overflow-y-visible'>
            <Slider {...secondSettings}>
              {EIRprogramData.map((procedure)=>
              <span key={procedure.id} className='w-[400px]'>
                <span className='w-full h-[420px] flex items-center justify-center'> 
                <span className='w-[90%] h-[420px] p-4 pb-8 bg-white rounded-xl flex flex-col'>
                  <span>
                    <img src={procedure.icon} alt=''/>
                  </span>
                  <h2 className='font-bold mt-4 mb-2'>{procedure.step}</h2>
                  <p className='mb-4 text-sm'>{procedure.process.split('/')[0]}</p>
                  <p className='text-sm text-start'>{procedure.process.split('/')[1]}</p>
                </span>
                </span>
                
              </span>)}
            </Slider>
          </section>

          <NavigLink linkName={'Support the Future'} linkStyle={'mt-16 mx-auto hidden md:flex'}/>

        </section>

        <section className='mt-52 md:mt-36'>
          <div className='flex flex-col items-center text-center mx-4 md:mx-auto mb-4 lg:max-w-[1050px]'>
              <h1 className='text-2xl md:text-5xl font-semibold mb-8'>SINC Investors Network</h1>
              <p className='w-full md:w-4/5'>Our deals are structured not just to take in investments but to onboard owners passionate about our solutions. Our portfolio companies are valued at $50k at start, with these low valuation, you are guaranteed at least 2x-5x, usually been the first to invest. <br/>
              Disclaimer: These deal flows is a statement of our projections and may differ from stage to stage and from venture to venture and the guarantee is for deal 1, usually the first to invest. 
              </p>
          </div>

          <section className='w-full px-4 '>
            <h1 className='py-4 text-center md:text-left'><span className='font-bold'>Micro Angel Investors & Service incubators</span> (Invest from $500 & above)</h1>
            <div className='grid grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-none border-y-[1px] border-[#303030]'>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:[&>*:nth-child(3)]:border-b-0 md:[&>*:nth-child(4)]:border-b-[1px] lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 1</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0  lg:border-b-0 border-[#303030] lg:even:border-r-[1px] lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 2</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:border-b-0  lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 3</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:[&>*:nth-child(3)]:border-b-0 md:[&>*:nth-child(4)]:border-b-[1px] lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 4</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              
            </div>
            <h1 className= 'py-4 text-center md:text-left'><span className='font-bold'>Angel Investors & Venture Capital </span>(Invest from $50k and above) </h1>
            <div className='grid grid-flow-row md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-none border-y-[1px] border-[#303030]'>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:[&>*:nth-child(3)]:border-b-0 md:[&>*:nth-child(4)]:border-b-[1px] lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 5</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0  lg:border-b-0 border-[#303030] lg:even:border-r-[1px] lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 6</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:border-b-0  lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <h3 className='font-bold'>Deal 7</h3>
                <p>
                  ✓ Idea Stage: <span className='font-bold'>$5k for 5% Equity</span>
                  <br/>✓ Expected Revenue at This Stage: <span className='font-bold'>$0/mth</span>
                  <br/>✓ Duration of Raise: <span className='font-bold'>1mth</span>
                  <br/>✓ Who Can Invest: <span className='font-bold'>People with Domain Expertise and Advisors</span> 
                </p>
              </span>
              <span className='px-2 py-4 border-b-[1px] last:border-b-0 border-r-0 md:odd:border-r-[1px] md:even:border-r-0 md:[&>*:nth-child(3)]:border-b-0 md:[&>*:nth-child(4)]:border-b-[1px] lg:border-b-0 border-[#303030]  lg:last:border-r-0'>
                <div className='bg-black w-full h-full min-h-[150px] md:min-h-0 p-2 flex flex-col'>
                  <h3 className='font-bold text-white'>Work with to Service Incubators (SINC) to expedite your time to market.</h3>
                  <Button buttonText={'Join SINC Network'} buttonStyle={'bg-[#303030] text-white mt-auto w-fit'}/>                 
                </div>
                
              </span>
              
            </div>
          </section>

          <section className='w-full my-16 hidden md:block'>
            <div className='flex flex-col items-center text-center mx-auto'>
                <h1 className='text-2xl md:text-5xl w-1/2 font-semibold mb-4 md:mb-8'>Let's build companies that help everyone succeed</h1>
                <div>
                <Button buttonText={'SINC With Us'} buttonStyle={'bg-white text-black mr-6'}/>
                <Button buttonText={'Apply to SIP 1.0'} buttonStyle={'bg-black text-white'}/>
                </div>
            </div>
          </section>

        </section>
       

     </section>

     <Footer/>    

    </>
  )
}

export default Homepage