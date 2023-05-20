import { RiInstagramFill, RiLineFill, RiYoutubeFill, RiLinkedinFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function Profile() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 md:gap-16 items-center p-4 md:p-8 md:h-96 text-center md:text-left pt-2">
      <div className="h-full w-full">
        <h1 className="mb-4 text-2xl font-bold tracking-wide text-white">About Us</h1>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas deserunt consequatur porro dolorem. Quia dolore laboriosam doloribus numquam ex nam architecto temporibus porro animi nemo, vero aliquam quos atque laborum.
          Voluptatum, nobis quasi! Nam numquam cumque rem voluptatum dicta perspiciatis ducimus temporibus odio optio, consequuntur fugiat autem vero sed id.y
        </p>
        <div className="flex justify-center md:justify-start gap-8 mt-8 mb-8 md:mb-0 text-gray-400">
          <a href="https://abdfikih.site" target="_blank" rel="noopener noreferrer">
            <RiLineFill size={32} className="hover:text-green-500" />
          </a>
          <a href="https://abdfikih.site" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill size={32} className="hover:text-pink-500" />
          </a>
          <a href="https://abdfikih.site" target="_blank" rel="noopener noreferrer">
            <RiLinkedinFill size={32} className="hover:text-blue-700" />
          </a>
          <a href="mailto: abdulfikihk@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail size={32} className="hover:text-yellow-500" />
          </a>
        </div>
      </div>
      <div className="h-full w-full mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.4471123898966!2d106.82640085155674!3d-6.362309885442591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee15b87a8c0f%3A0x92e67255b39c3a8d!2sUniversitas%20Indonesia%2C%20Kampus%20UI%20Depok!5e0!3m2!1sen!2sid!4v1661633258973!5m2!1sen!2sid"
          style={{ border: 0, width: "100%", height: "100%", objectFit: "cover" }}
          className="rounded-xl shadow-2xl"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
