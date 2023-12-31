import React from 'react'
import mainImage from '../Assets/mainImage.webp'
import Description from '../components/Description'
const HomePage = () => {
  return (
    <>
    <div className='mt-8 mb-8 w-full h-full'>
      <div className='flex justify-center  '>
        <div>
          <img src={mainImage} className='w-[540px]'/>
        </div>
        <div className='bg-teal-100 flex flex-col items-center gap-y-4 pt-8 pl-4 '>
          <h2 className='w-[350px] text-2xl text-gray-500 '>ENVIRONMENTAL SOLUTIONS WITHOUT COST TO BUSINESS</h2>
          <div className='w-[250px] text-3xl '>
            <h1 className='ml-14'>ALIGN</h1>
            <h1>ENVIRONMENTAL</h1>
            <h1 className='ml-10'>SOLUTIONS</h1>
          </div>
          <div className='-ml-20'>
          <p>P. O. Box 9099, Naperville, Illinois</p>
          <p className='text-center'>60567</p>
          </div>
        </div>
      </div>
    </div>
    <section className='bg-black'>
      <h1 className= 'ml-20 pt-8 text-white text-4xl'>We have the solution to your environmental needs.</h1>
    <div className='flex flex-col text-center gap-y-8 pb-8'>
      <Description heading={"Property Transfers"} para1={"Buying or selling property?"} para2={"Know the environmental issues associated with a property before purchasing. We can guide you through the process by conducting a Phase I Environmental Site Assessment (ESA), which includes property record review and interviews.  If the Phase I reveals any environmental concerns a Phase II ESA investigation will be necessary."}/>
      <Description heading={"OSFM UST Compliance"} para1={"Did you get a Notice of Violation from the State Fire Marshal? Or do you want to upgrade, abandon or remove tanks?"} para2={"We have a state-of-the-art monitoring system and dedicated personnel that stay on top of your regulatory obligations, so a violation of the regulations does not occur. We coordinate with you to perform all updates and upgrades on your equipment and manage the removal or abandonment of old tanks and the installation of new ones. Align works only with competent and reputed subcontractors to provide services on your property. If you have preferred contractors, we will work with you to provide the contractors of your choice."}/>
      <Description heading={"IEMA Incident & IEPA Reporting"} para1={"Was an IEMA incident number assigned to your property?"} para2={"It is very common for a release of petroleum to occur from a tank system.  Site investigations and remediation of leaking tanks require technical expertise, a sound strategy, and a large sum of money to execute. Fortunately, Align has decades of experience to implement a comprehensive plan for your site and can help navigate the IEPA’s LUST Program and LUST Fund.  When Align personnel get involved earlier in a project, we get more reimbursement from the LUST Fund for our clients and secure No Further Remediation (NFR) status.  NFR status enables our clients to greatly increase their property’s market value."}/>
      <Description heading={"IEPA LUST Fund Reimbursement"}  para2={"Don't be afraid of the overwhelming cost of remediation. Once you have an incident that is eligible to be reimbursed from the IEPA LUST Fund, we will guarantee you the maximum reimbursement possible from the IEPA. Making it affordable, if not free!"}/>
      <Description heading={"Dry Cleaning Facilities"} para1={"Need assessment and reporting for your dry cleaning facility?"} para2={"We can guide you through the Drycleaner Environmental Response Trust Fund."}/>
      <Description heading={"Commercial and Industrial Properties"} para1={"Need to comply with the USEPA requirements for your facility?"} para2={"We can prepare SPCC and SWPP plans for your facility and can address any RCRA issues associated with your property to demonstrate compliance."}/>
    </div>
    </section>
    </>
  )
}

export default HomePage