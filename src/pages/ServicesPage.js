import ServicesComponent from "../components/ServicesComponent"
import ServicesContent from "../components/ServicesContent"


const ServicesPage = () => {
  return (
    <>
    <ServicesComponent mainHeading={"Leaking Underground Storage Tanks"} para1={"EPA underground storage tank regulations require that tank owners abandon, remove, replace, or retrofit single-walled steel underground storage tanks, as well as keep"} para2={"monitoring, piping and leak detection systems up to date. We have a state of the art monitoring system and dedicated personnel that stay on top of your needs."} serviceContent1={"active"} />
    <hr/>
    <ServicesComponent mainHeading={"LUST & SRP Program Management"} para1={"Align provides environmental management, assessment, characterization and reporting services under the IEPA Leaking Underground Storage Tank (LUST) and Site"} para2={"Remediation Program (SRP) programs to commercial and industrial clients."} serviceContent2={"active"} />
    <p className="bg-black text-gray-500 text-center pb-4">“Bringing Client Expectations and Plans into Alignment with Environmental Regulations”</p>
    </>
    )
}

export default ServicesPage