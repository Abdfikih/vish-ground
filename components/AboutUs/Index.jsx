import Image from "next/image";
import TRUI from "../../images/logos/TRUI.jpg";
import SectionTitle from "../shared/SectionTitle";
import VTOL from "../../images/logos/vtol-big.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"UI Robotics Team "}
              paragraph1={`is a group of talented students from the University of Indonesia who are passionate about robotics. They specialize in developing advanced robotic systems and participating in national and international competitions.`}
              keyword2={"The team members are dedicated to pushing the boundaries of robotics and developing innovative solutions."}
              paragraph2={`Through their projects and research, they contribute to the advancement of robotics technology and its applications in various industries.`}
              img={TRUI}
              reverse={true}
              redirect={"https://www.example.com"}
            ></ParagSection>
            <ParagSection
              keyword1={"Vishwakharma Team "}
              paragraph1={`is a team from the University of Indonesia specializing in VTOL (Vertical Take-Off and Landing) technology. They are dedicated to advancing and innovating in the field of aerial vehicles. The team consists of passionate and motivated individuals who strive to push the boundaries of aviation engineering.`}
              keyword2={"They actively participate in various competitions and projects, showcasing their expertise and technical skills."}
              paragraph2={`Their commitment to excellence and continuous learning makes them a valuable asset in the field of aviation technology.`}
              img={VTOL}
              reverse={false}
              redirect={"https://www.abdfikih.site"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
