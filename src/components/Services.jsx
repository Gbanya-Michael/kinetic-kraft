import React from "react";
import NavBar from "./nav";
import Container from "./Container";
import Footer from "./Footer";
import ContactFormModal from "../modals/ContactFormModal";
import ReferalFormModal from "../modals/ReferalFormModal";
import { useForm } from "../contexts/FormContext";
import { services } from "../data/useData";
//

export default function Services() {
  //
  const { openForm, openReferalForm } = useForm();

  //
  return (
    <>
      <div className="dark:bg-black bg-gray-200 relative">
        <NavBar />
        <ContactFormModal />
        <ReferalFormModal />
        <Container>
          <div className="py-20">
            <div className=" lg:w-[48%]   px-3 mx-auto bg-white/50 my-5 shadow-lg dark:bg-black rounded-sm">
              <h1 className="py-5 text-center font-semibold text-xl font-serif  md:text-3xl text-gray-800 dark:text-white/80 ">
                Services
              </h1>

              <p className="text-gray-600 py-5 dark:text-white/80 ">
                At Kinetic Kraft, we offer a spectrum of services tailored to
                elevate your online presence. From web development to
                cutting-edge solutions, our global team of skilled freelancers
                is dedicated to delivering affordable and innovative services.
                Whether you seek project-based collaborations, continual
                support, or flexible contracting, we've got you covered.
              </p>
            </div>
            <div className=" mt-10">
              <div>
                <ul className="md:flex flex-wrap justify-between gap-5 mt-5">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="mx-auto mt-5 px-3 h-50 max-w-[45rem] md:w-[48%] py-5 border-gray-300 bg-white/50 dark:bg-black dark:ring-white/80 rounded-sm shadow-md dark:ring-2 hover:ring-2 hover:ring-bg1 dark:hover:ring-bg1"
                    >
                      <div className="flex gap-5 py-1 ">
                        <div className="flex flex-col gap-2">
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                          <div className="w-12 h-1 dark:bg-gradient-to-l from-bg2 via-bg1 to-indigo-800 dark:hover:bg-gradient-to-r bg-black" />
                        </div>
                        <h1 className="text-gray-700 mb-3 font-semibold text-xl md:text-2xl dark:text-white/80">
                          {service.title}
                        </h1>
                      </div>

                      <p className="text-gray-600 w-90 text-sm leading-6  md:text-xl dark:text-white/80">
                        {service.description}
                      </p>

                      <button
                        onClick={openForm}
                        className="mt-3 text-white border border-1 w-fit px-2 rounded-md text-sm bg-main2 hover:bg-bg1"
                      >
                        Get in touch
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={openReferalForm}
                className="md:text-center md:pl-2 text-xl lg:text-start text-blue-600 hover:text-blue-700 underline mt-3"
              >
                Refer a client
              </button>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
