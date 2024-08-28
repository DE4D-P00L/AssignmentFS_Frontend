import { useRef, useEffect, useState, useContext } from "react";
import { CardsContext } from "../store/CardContext";
import axios from "axios";

function SubmitModal({ isOpen, onClose, modalTitle }) {
  const modalRef = useRef(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { cards, updateCards } = useContext(CardsContext);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (title.trim().length < 3 || description.trim().length < 3)
      return alert("Please enter a title and description");
    const res = await axios.post(import.meta.env.VITE_API_URL + "/cards", {
      title,
      description,
    });
    if (!res.status === 201) return console.log("Error");
    updateCards([...cards, res.data]);
    setDescription("");
    setTitle("");
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className="relative rounded-md shadow-lg border-2 border-gray-100 w-full max-w-[450px]">
      <h2 className="bg-gray-300 px-5 py-2 font-semibold text-xl">
        {modalTitle}
      </h2>
      <div className="px-5 py-4 w-full">
        <form onSubmit={handleSubmitForm} className="flex flex-col gap-3">
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border border-black p-2 rounded-md"
          />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-black p-2"
            rows={3}
          />
          <button
            type="submit"
            className="bg-slate-500 text-white text-xl font-semibold p-1 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="absolute top-2 right-2">
        <button
          onClick={onClose}
          type="submit"
          className="bg-slate-500 size-7 rounded-full text-white">
          X
        </button>
      </div>
    </dialog>
  );
}

export default SubmitModal;
