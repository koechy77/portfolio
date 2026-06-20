import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setStatus("message sent successfully! ✨");

    setTimeout(() => {
      setStatus();
    }, 700);
  }
  return (
    <>
      <main className="bg-gray-950 min-h-screen font-poppins text-white overflow-x-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-extrabold text-4xl md:text-5xl lg:text-6xl"
        >Let"s Build Something Unique!

        </motion.h2>
        {status && <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
          className="text-orange-400 font-semibold text-center">{status}
        </motion.p>}

        <div className=" flex justify-center px-7">
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            className="my-7" onSubmit={handleSubmit}>

            <fieldset className="flex flex-col gap-4 border p-4 md:p-7 ">
              <legend>Contact Me</legend>

              <label htmlFor="name">Name</label>
              <input id="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="enter your name..."autoComplete="name" required className="px-4 py-2" />

              <label htmlFor="email">Email</label>
              <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email..." autoComplete="email" required className="px-4 py-2" />

              <label htmlFor="message">Message</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} minLength={10} maxLength={500} placeholder="watchu got for me 🙂" required className="px-4 py-2" ></textarea>

              <button type="submit" className="text-orange-400">send <span className="inline-block transition-transform duration-300 group hover:translate-x-2">💨</span></button>
            </fieldset>

          </motion.form>
        </div>


      </main>
    </>
  );
}
