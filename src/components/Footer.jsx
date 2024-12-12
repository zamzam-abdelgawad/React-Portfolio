import React, { useState } from "react";
import Swal from "sweetalert2";
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from "react-icons/ai"; // Importing specific icons
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../style";
import { socialMedia, profileLink } from "../constants";

const Footer = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f7e599c5-bb46-48ac-ad48-7c373c47ae82");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent.",
        icon: "success",
        background: "rgb(16 23 35)",
        color: "#fff",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "bg-teal-400 text-white px-4 py-2 rounded",
        },
      }).then(() => {
        event.target.reset();
      });
      (error) => {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong, please try again.',
          icon: 'error',
          background: 'rgb(16 23 35)',
          color: '#fff',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: "bg-teal-400 text-white px-4 py-2 rounded",
          },
        });
      }
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {/* ToastContainer for displaying toast notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            id="contactMe"
            className={`flex md:flex-row flex-col ${styles.paddingY}`}
          >
            <div className="flex-1 flex flex-col ">
              <div className="space-y-4">
                <h1 className="font-poppins font-semibold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight text-center sm:text-left">
                  Let&apos;s Connect!
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                {/* Contact Information */}
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                  <p
                    className={`${styles.paragraph} mt-5 mb-5 text-base sm:text-sm lg:text-xl max-w-full sm:text-left`}
                  >
                    If you have any questions or concerns, please don't hesitate
                    to contact me. I am open to any work opportunities that
                    align with my skills and interests.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <AiOutlinePhone className="w-6 h-6 text-teal-400" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-sm">+20 01017541401</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <AiOutlineMail className="w-6 h-6 text-teal-400 flex-shrink-0" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-sm break-words">
                          zamzamabdelgawad@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <AiOutlineHome className="w-6 h-6 text-teal-400" />
                      <div className="text-gray-400">
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-sm">Cairo, Egypt</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex flex-wrap justify-start mt-8">
                    {socialMedia.map((social, index) => (
                      <a
                        href={social.link}
                        target="_blank"
                        key={social.id}
                        className="text-white mr-5 mb-4 text-[25px] hover:text-teal-200"
                      >
                        {React.createElement(social.icon)}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="p-6 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg">
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-gray-400" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={`w-full py-2 bg-teal-400 text-white rounded-md font-semibold ${
                        isLoading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>

              {/* Say Hello Button */}
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-gray-900 sm:px-16 px-6">
        <div className="flex flex-row mt-4 justify-center pt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>
        <div className="flex justify-center pt-4 pb-4">
          <a
            href="mailto:umairazmatdev@gmail.com"
            className="px-6 py-1 bg-teal-400 text-black rounded-md text-lg font-semibold hover:bg-teal-500"
          >
            Say Hello!
          </a>
        </div>
        <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
          <p>
            Made with 💙 by{" "}
            <a
              href={profileLink}
              className="font-bold text-teal-200 font-poppins dark:text-white hover:text-teal-200 dark:hover:text-gray-300"
            >
              Zamzam Abdelgawad
            </a>{" "}
            & the Open Source Community
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
