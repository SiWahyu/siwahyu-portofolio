import { useState } from "react";

import { MagicCard } from "@/components/ui/magic-card";

const FormContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState(false);

  const formUrl = import.meta.env.VITE_FORMSPREE_URL;

  const handleChangeName = (e) => {
    setName(e.target.value);
    setSendMessage(false);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    setSendMessage(false);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setSendMessage(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      const data = {
        name: name,
        email: email,
        message: message,
      };

      fetch(formUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("success");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setSendMessage(true);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <MagicCard className="rounded-xl">
      <div className="px-6 py-6 rounded-xl">
        <form>
          <div>
            <label
              className="block mb-2 text-sm text-neutral-200"
              htmlFor="full_name"
            >
              Nama Lengkap
            </label>
            <input
              id="full_name"
              type="text"
              value={name}
              onChange={handleChangeName}
              placeholder="John "
              className="block w-full px-5 py-2.5 mt-2 border rounded-lg bg-neutral-900 text-neutral-100 border-neutral-700 focus:outline-none placeholder:text-neutral-400"
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm text-neutral-200"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChangeEmail}
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-2.5 mt-2 border rounded-lg  bg-neutral-900 text-neutral-100 border-neutral-700 focus:outline-none placeholder:text-neutral-400"
            />
          </div>
          <div className="w-full mt-4">
            <label
              className="block mb-2 text-sm text-neutral-200"
              htmlFor="message"
            >
              Pesan
            </label>
            <textarea
              id="message"
              className="block w-full h-32 px-5 py-2.5 mt-2  border  rounded-lg md:h-56  bg-neutral-900 text-neutral-100 border-neutral-700  focus:outline-none placeholder:text-neutral-400"
              placeholder="Pesan"
              value={message}
              onChange={handleChangeMessage}
            />
          </div>
          {!sendMessage ? (
            <button
              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform border border-neutral-700 rounded-lg hover:bg-white/90 focus:outline-none focus:ring focus:ring-neutral-100 focus:ring-opacity-50 hover:text-black"
              onClick={handleSendMessage}
            >
              🚀 Kirim Pesan
            </button>
          ) : (
            <button
              className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide capitalize transition-colors duration-300 transform border border-neutral-700 rounded-lg bg-neutral-50 text-neutral-900"
              onClick={handleSendMessage}
            >
              ✨ Selesai
            </button>
          )}
        </form>
      </div>
    </MagicCard>
  );
};

export default FormContact;
