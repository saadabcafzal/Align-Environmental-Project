import React, { useState } from 'react';
import AboutImage1 from "../Assets/AboutImage1.webp"; 
import AboutImage2 from "../Assets/AboutImage2.webp";
import AboutComponent from '../components/AboutComponent';
 
const AboutPage = () => {
  return(
  <>
  <div className='flex gap-x-4 ml-8 mt-8 bg-black mr-8 mb-8 pb-12 pl-8'>
  <AboutComponent heading={"Bringing Client Expectations and Plans into Alignment with Environmental Regulations"} para1={"Bringing Client Expectations and Plans into Alignment with Environmental Regulations"} para2={"Because Align Environmental Solutions provides services, as opposed to a product, our advantage includes the extensive experience of our consultants in the field and in this region. Aside from ensuring that the team we are building is flexible, we can provide expert advice and can work within short deadlines."}
    AboutImage1={AboutImage1}
    para3={"· Team of certified technical experts. Our staff members at minimum have a four-year degree in their respective field, maintain HAZWOPER 40-hour certification and 8-hour annual refresher, CPR and First Aid training."} para4={"· Assurance of regulatory fulfillment for our clients by using our proprietary compliance process to manage submission and reporting requirements pursuant to governmental agencies. Align is one of a few consulting companies that specialize in maximizing the reimbursement of eligible costs from the IEPA LUST Fund."}
    para5={" · Develop close relationships with subcontractors that provide support with tank removal or abandonment, sample analysis and waste removal, to ensure that environmental regulations are adhered to and that the safety regulations are followed."}
    para6={" · We are a minority and women-owned small business enterprise (MWBE) and will soon be certified. MWBE status will also enhance Align’s posture and allow us to open doors to opportunities not available otherwise."}
    para7={"· We are a small company without a lot of overhead costs or strict corporate rules, which saves time, money and creates a flexible workplace to get things done."}
    para8={"Align Environmental Solutions will provide quality consulting services to clients allowing them to properly adhere to IEPA regulations with minimum impact on their company’s bottom line. Provide technical expertise by developing methodologies for active cleanup of a property, as well as securing administrative restrictions on the proper"}
  />
   <AboutComponent heading={"Tahseen Qureshi — owner, business manager, sales manager, consultant"}
    AboutImage1={AboutImage2}
    para1={"Tahseen completed a Bachelor of Science in Civil Engineering and a Masters in Environmental Studies before embarking on his career in Environmental Consulting. Before moving to the US, he worked on projects administered and/or funded by the United States Agency for International Development and the World Bank. After settling down and completing his Masters degree, he has accumulated over 30 years of experience as a senior project manager and engineer leading the design and completion of civil and environmental initiatives. Industrial permitting (Air, Water & Land) and compliance, AER, SPCC, SWPP and FRP development and compliance monitoring. Adept at monitoring field work at sites to ensure compliance with standard operating procedures, health and safety requirements and other government regulations. Skilled at handling safety and environmental compliance inspections and evaluating risks. Expertise includes field supervision, environmental site assessments, sampling, data analysis and presentation, risk-based closures, remediation, cleanup and disposal of hazardous materials, contract negotiation, scheduling, reporting, and full life-cycle project management. Dedicated to developing and leveraging relationships with contractors, clients and regulators to ensure projects are consistently completed on time, within budget, and beyond expectations."}
    para8={"Tahseen completed a Bachelor of Science in Civil Engineering and a Masters in Environmental Studies before embarking on his career in Environmental Consulting. Before moving to the US, he worked on projects administered and/or funded by the United States Agency for International Development and the World Bank. After settling down and comp"}
  />
   </div>
    </>
  );
};

export default AboutPage;