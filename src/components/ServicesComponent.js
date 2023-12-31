import React from 'react'
import ServicesContent from '../components/ServicesContent'
import ServiceImage1 from "../Assets/UST REMOVAL.webp"
import ServiceImage2 from "../Assets/SOIL & GROUNDWATER REMEDIATION.webp"
import ServiceImage3 from "../Assets/SAFETY.webp"
import ServiceImage4 from "../Assets/SOIL & GROUNDWATER INVESTIGATION.webp"
import ServiceImage5 from "../Assets/SITE CHARACTERIZATION & RISK ASSESSMENT.webp"
import ServiceImage6 from "../Assets/REPORTING.webp"
const ServicesComponent = ({mainHeading,para1,para2,serviceContent1,serviceContent2}) => {
  return (
    <>
    <section className='bg-black mt-8'>
    <h1 className='text-teal-500 text-center text-4xl pt-8'>{mainHeading}</h1>
    <p className='text-gray-500 text-center'>{para1}</p>
    <p className='text-gray-500 text-center'>{para2}</p>
    {serviceContent1 && <div className='flex gap-x-8 ml-8 mt-20 mr-8 pb-8'>
    <ServicesContent heading={"UST REMOVAL"} para={"Align personnel have extensive experience in addressing Leaking Underground Storage Tanks (LUST) and Site Remediation Program (SRP) sites to accomplish a favorable resolution for our clients. We also partner with subcontractors that are industry leaders and best in business enterprises, to provide the most efficient and comprehensive service to our clients."} src_image={ServiceImage1}/>
    <ServicesContent heading={"SOIL & GROUNDWATER REMEDIATION"} para={"In developing alternative clean-up methods specific to our client's needs, Align considers all factors involved, including the type and extent of contamination, soil characteristics, planned future use of the site, and appropriate legislation."} src_image={ServiceImage2}/>
    <ServicesContent heading={"SAFETY"} para={"Safety is a key focus at Align, with a strict emphasis on compliance with all local, state, and federal regulations.All personnel working on hazardous waste project sites complete a 40-hour Hazardous Waste Operations and Emergency Response (HAZWOPER) training (29 CFR 1910.120) program with an annual 8-hour refresher course, Construction Best Practices, CPR & 1st Aid. "} src_image={ServiceImage3}/>
    </div>
  }
  
  {serviceContent2 && <div className='flex gap-x-8 ml-16 mt-20 mr-2 pb-20 '>
  <ServicesContent heading={"SOIL & GROUNDWATER INVESTIGATION"} para={"Depending on the specific program, Align provides specific services encompassing the soil and groundwater investigation in accordance with applicable regulations and ASTM methods for the LUST program, SRP, or programs managed by the USEPA, leading to site characterization and site risk assessment."} src_image={ServiceImage4}/>
    <ServicesContent heading={"SITE CHARACTERIZATION & RISK ASSESSMENT"} para={"In order to provide the IEPA information required under the regulations, or information that will help them make a decision favorable to our client, Align evaluates and presents data gathered at the site that is in accordance with the regulations or with generally accepted engineering practices. "} src_image={ServiceImage5}/>
    <ServicesContent heading={"REPORTING"} para={"Align personnel have submitted numerous reports to the IEPA and USEPA in accordance with prevailing regulations applicable to the sites. Our reports are concise, accurate and complete, earning minimal comments or objections from the regulatory Agency. Our team has secured many No Further Remediation (NFR) letters from the IEPA. Since we get more reimbursement for our clients, we enable our clients to divest their property at a large profit."} src_image={ServiceImage6}/>
    </div>
  }
  </section>
  </>
  )
}

export default ServicesComponent