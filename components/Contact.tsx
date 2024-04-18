import React, { useState } from "react";
import Image from 'next/image';

const Contact: React.FC = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState<{ success?: boolean; message?: string }>(
    {}
  );

  const onFormUpdate = (
    category: string,
    value: string | number | boolean
  ) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(formDetails)
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later."
      });
    }
  };

  return (
    <section id="contact">
         <div className="max-w-[60rem] md:w-[58rem] mx-auto bg-[#141c27]">
    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
      <div className="w-full md:w-auto mb-8 md:mb-0">
        <Image 
          src="/images/blog3.jpg" 
          alt="Contact Us"
          width={800} height={500} // Changed width to 800px
          className="hidden md:block" 
        />
      </div>
      <div className="w-full md:w-auto md:pl-8 mx-2 md:mx-[2rem] my-2">
 

        <div className="md:mx-[2rem] my-[2rem]">
          <h2 className="text-2xl text-white font-bold mb-4">Get In Touch</h2>
          <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) =>
                        onFormUpdate("lastName", e.target.value)
                      }
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <textarea
                      rows={6}
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) =>
                        onFormUpdate("message", e.target.value)
                      }
                      className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                    ></textarea>
                  </div>
                  <div className="w-full px-2 mb-4">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
                    >
                      {buttonText}
                    </button>
                  </div>
                  {status.message && (
                    <div className="w-full px-2 mb-4">
                      <p
                        className={`${
                          status.success === false
                            ? "text-red-500"
                            : "text-green-500"
                        }`}
                      >
                        {status.message}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
      
  );
};

export default Contact;
