import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-3">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[1280px] mx-auto py-10 md:px-0 md:justify-items-center gap-y-10 justify-items-stretch text-center md:text-left">
        <div className="flex flex-col ">
          <h2 className="font-bold text-2xl mb-3">Abstract</h2>
          <span className="">Branches</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-3">Resources</h2>
          <span className="">Blog</span>
          <span className="">Help Center</span>
          <span className="">Release Notes</span>
          <span className="">Status</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-3">Community</h2>
          <span className="">Twitter</span>
          <span className="">Linkedin</span>
          <span className="">Facebook</span>
          <span className="">Dribbble</span>
          <span className="">Podcast</span>
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-2xl mb-3">Company</h2>
          <span className="">About Us</span>
          <span className="">Careers</span>
          <span className="">Legal</span>
          <span className="mt-7 font-semibold">Contact Us</span>
          <span className="info@abstract.com">info@abstract.com</span>
        </div>
      </div>
      <div className="text-center pb-10 flex justify-center items-center flex-wrap">
        <Icon />
        <span className="ml-3">@Copyright 2022</span>
        <span>Abstract Studios Design, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
};
export default Footer;
