import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";

function Reservation() {
  return (
    <div className=" container mx-auto py-12">
      <div className="flex justify-between flex-wrap items-center gap-x-10">
        <div className=" lg:flex-1 w-full">
          <Title text="Book A Table" MyClassName="text-4xl mb-10" />
          <div className=" flex flex-col gap-y-5">
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <button className=" btn-primary my-4 ">BOOK NOW</button>
        </div>
        <div className=" lg:flex-1 w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6499.994588797598!2d-73.82597551521248!3d40.76520104811015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261ccc015963d%3A0x2eca844d8a81ac6!2sWitch%20Topokki%20%7C%20AYCE%20Korean%20Cuisine%20Topokki%20Queens%2C%20NY!5e0!3m2!1str!2str!4v1699125671213!5m2!1str!2str"
            width="600"
            height="450"
            className="border-0"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
