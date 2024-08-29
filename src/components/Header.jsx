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
    <nav className="flex items-center justify-between max-w-[1280px] mx-auto h-[70px] text-lg px-3">
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center gap-1">
          <Icon />
          <span className="font-semibold hidden sm:inline">Abstract</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">Help Center</span>
      </div>
      <button
        className="border border-white sm:px-3 px-2 py-1 rounded-lg font-semibold text-sm sm:text-lg "
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
