import React from "react";
import Contact from "./Contact";
import profile1 from "../assets/pdip.jpg";
import profile2 from "../assets/up.jpg";
import profile3 from "../assets/balance.png";
import profile4 from "../assets/R.jfif";
import profile5 from "../assets/image1.jpg";
import profile6 from "../assets/comp.jpg";
import profile7 from "../assets/bali.png";
import profile8 from "../assets/face2.jpg";

const Contacts = () => {
  const contacts = [
    {
      img: profile1,
      name: "Kader Baru",
      message: "Djawa adalah Koentji",
    },
    {
      img: profile2,
      name: "Zahra",
      message: "Ditunggu ya stikernya",
    },
    {
      img: profile3,
      name: "Zulpuket",
      message: "selesaimi bagianku, pull saja kalau mau diliat",
    },
    { img: profile4,
      name: "Atira",
      message: "apakah task viewer gk lengkapp??" },
    {
      img: profile5,
      name: "Husnul",
      message: "Setidaknya parona berjumpa kembali sama machii😌",
    },
    {
      img: profile6,
      name: "Viery",
      message: "Minta lwt pdf aja men",
    },
    {
      img: profile7,
      name: "Akram",
      message: "Sudah ada didalm??",
    },
    { img: profile8, name: "Haters", message: "Adakkah jawaban UTS?" },
  ];
  return (
    <div>
      <div className="md:w-[20rem] lg:w-[30rem]  md:px-4  ">
        {contacts.map((contact) => (
          <Contact
            img={contact.img}
            name={contact.name}
            message={contact.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Contacts;
