import { useState } from "react";
import Icon from "./Icon";
import SubmitModal from "./SubmitModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="flex items-center justify-between max-w-[1280px] mx-auto h-[70px] text-lg">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center gap-1">
          <Icon />
          <span className="font-semibold">Abstract</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Help Center</span>
      </div>
      <button
        className="border border-white px-3 py-1 rounded-lg font-semibold"
        onClick={handleOpenModal}>
        Submit a request
      </button>
      <SubmitModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        modalTitle="Submit a request"
      />
    </nav>
  );
};
export default Header;
