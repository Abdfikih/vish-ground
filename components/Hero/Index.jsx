import Image from "next/image";
import Navbar from "./Navbar";
import Qiskit from "../../images/logos/Drone.png";
import Arrow from "../../images/shapes/Arrow.png";
import CounterContainer from "./CounterContainer";
import Maqam from "../../images/shapes/paper-pink.png";
import Atom from "../../images/shapes/computer-blue.png";
import Globe from "../../images/shapes/drone-pink.png";
import Computer from "../../images/shapes/computerWhite.png";
import Purpulebutton from "../shared/Purpulebutton";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen hero-bg">
      <div className="section-container pb-2 md:pb-0">
        <Navbar />
        <div className="flex py-20 flex-col gap-16 lg:gap-0 relative">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-center lg:text-left text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                <Typewriter
                  options={{
                    strings: ["VishGround | Ground Control Station"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="font-medium text-center lg:text-left leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                VishGround is a system used to control and monitor unmanned aerial vehicles (UAVs) or other aircraft remotely from the ground. It serves as a command center that enables human operators to control aircraft operations in
                real-time.
              </p>
              <div className="flex items-end py-8">
                <div className="relative h-[67px] bounce w-[67px] 2xl:w-[101px] 2xl:h-[114px]">
                  <Image src={Arrow} layout="fill" />
                </div>
                <Link href="/Error">
                  <a>
                    <div className="mb-[-50px] 2xl:mb-[-110px] cursor-pointer">
                      <Purpulebutton title={"Register Now!"} />
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Tilt>
                <Image src={Qiskit} />
              </Tilt>
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex"></div>
            <CounterContainer countDownLimit={1690732800000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
