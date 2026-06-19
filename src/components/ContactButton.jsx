import { useNavigate } from "react-router-dom";

export default function ContactButton() {
    const navigate = useNavigate();
  return (
    <>
    <button type="submit" onClick={() => navigate("/contact")} className="bg-gray-800 text-orange-400 font-supermercado font-extrabold w-fit my-20 px-7 py-4 rounded-lg group hover:translate-y-1">Contact Me</button>
    </>
  );
}
