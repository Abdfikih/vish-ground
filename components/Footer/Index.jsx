import Image from "next/image";
import Link from "next/link";
import TRUI from "../../images/logos/TRUI.jpg";
import VTOL_BIG from "../../images/logos/vtol-big.png";
import VTOL_SMALL from "../../images/logos/vtol.png";
import GlobeShape from "../../images/shapes/globe.png";
import AlgeriaSymbol from "../../images/shapes/GDGAlgiers.png";
import { socialsMedia, links } from "./data";

const Footer = () => {
  return (
    <footer className="mt-32 footer-bg text-qiskit-white flex flex-col gap-6 relative">
      <div className="hidden lg:block absolute top-4 left-[33rem]">
        <Image src={GlobeShape} height={42} width={42} />
      </div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row">
        <div className="pt-14 pl-4 pr-4 lg:pl-11 lg:pr-0 2xl:pl-16">
          <div className="flex flex-col gap-6">
            {/* LOGOS */}
            <div className="flex items-center gap-7">
              <div className="cursor-pointer" style={{ maxWidth: "70px" }}>
                <Image src={TRUI} />
              </div>
              <div className="cursor-pointer" style={{ maxWidth: "70px" }}>
                <Image src={VTOL_BIG} />
              </div>
              <div className="cursor-pointer" style={{ maxWidth: "180px" }}>
                <Image src={VTOL_SMALL} />
              </div>
            </div>

            {/* MAIN */}
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex lg:w-2/6 flex-col lg:gap-14">
                <p className="hidden lg:flex font-light text-[0.9375rem] 2xl:text-xl">
                  Together, we inspire and support each other to unlock our full potential and unleash our creativity. We believe in the power of collaboration and knowledge sharing to foster growth and innovation.{" "}
                </p>

                <div className="flex gap-10 justify-center items-center lg:justify-start">
                  {socialsMedia.map((socialMedia, idx) => {
                    return (
                      <a href={socialMedia.redirect} target="__blank" key={idx} className="cursor-pointer">
                        <Image src={socialMedia.logo} />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hidden lg:flex gap-9 flex-1 justify-between">
                {links.map((link, idx1) => {
                  return (
                    <ul key={idx1}>
                      <li className="font-semibold mb-6">{link.linkName}</li>
                      <div className="flex flex-col gap-2">
                        {link.content.map((cont, idx2) => {
                          return (
                            <Link href={cont.redirect} key={idx1 * idx2 + 1}>
                              <li className="text-[0.9375rem] hover:text-qiskit-yellow transition-all duration-500 2xl:text-xl cursor-pointer">{cont.name}</li>
                            </Link>
                          );
                        })}
                      </div>
                    </ul>
                  );
                })}

                {/* Add the Google Maps iframe code here */}
                <div className="mr-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.4471123898966!2d106.82640085155674!3d-6.362309885442591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee15b87a8c0f%3A0x92e67255b39c3a8d!2sUniversitas%20Indonesia%2C%20Kampus%20UI%20Depok!5e0!3m2!1sen!2sid!4v1661633258973!5m2!1sen!2sid"
                    style={{ border: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    className="rounded-xl shadow-2xl"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights */}
      <div className="flex justify-center px-4">
        <p className="text-[0.9375rem] pb-2 text-center">Copyright © 2023 VishGround. All Rights Reserved.</p>
      </div>

      <div className="absolute bottom-[4rem] -left-10 lg:bottom-0 lg:left-0">
        <Image src={AlgeriaSymbol} height={74} width={107} />
      </div>
      <div className="absolute bottom-[4rem] right-0 lg:bottom-0 lg:right-1/4">
        <Image src={GlobeShape} height={42} width={42} />
      </div>
    </footer>
  );
};

export default Footer;
