import Image from "next/image";
import YourImage from "../../public/drone1.png";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-1 md:grid md:grid-cols-2 gap-8 pt-4 md:pt-24 pb-16 px-4 md:px-16 text-white min-h-full items-center p-4 md:py-36 md:h-200 text-center md:text-left pt-2">
      <div className="flex flex-col justify-center items-center md:items-start md:text-left pt-24">
        <h1 className="text-8xl md:text-12xl font-bold tracking-wide text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text">VISH</h1>
        <h1 className="text-4xl md:text-6xl font-extralight tracking-wide text-white">GROUND</h1>
        <p className="mt-6 text-sm md:text-base font-light tracking-wide ">
          VishGround merupakan sebuah sistem yang digunakan untuk mengontrol dan memantau pesawat tak berawak (Unmanned Aerial Vehicle atau UAV) atau pesawat terbang lainnya secara jarak jauh dari daratan. GCS berfungsi sebagai pusat
          komando yang memungkinkan operator manusia untuk mengontrol operasi pesawat secara real-time.
        </p>
        <div className="flex mt-4">
          <button
            onClick={() => (document.location.href = "https://abdfikih.site")}
            className="flex items-center px-4 h-10 rounded-lg bg-transparent text-white hover:bg-blue-500 focus:outline-none border-2 border-green-900 hover:border-blue-500"
          >
            <p className="ml-2 uppercase text-sm font-medium tracking-wide">DOCUMENTATION</p>
          </button>
          <button
            onClick={() => (document.location.href = "https://abdfikih.site")}
            className="flex items-center ml-4 px-4 h-10 rounded-lg bg-transparent text-white hover:bg-green-500 focus:outline-none border-2 border-blue-900 hover:border-green-500"
          >
            <p className="ml-2 uppercase text-sm font-medium tracking-wide">GET STARTED</p>
          </button>
        </div>
      </div>
      <div className="ml-auto mr-[-80px]">
        <Image src={YourImage} alt="Your Image" width={500} height={400} objectFit="contain" />
      </div>
    </div>
  );
}
