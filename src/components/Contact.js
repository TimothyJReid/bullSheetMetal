import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-primary-bg"
    >
      {/* Container */}
      <div className="p-8 rounded-lg bg-secondary-bg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-3xl text-center text-primary-text mb-6">
          Contact Us
        </h2>

        {/* Description */}
        <p className="text-secondary-text mb-4">
          We'd love to hear from you. If you can imagine it, we can bring it to
          life. Let's discuss your ideas and transform them into reality. Reach
          out to us via email:
        </p>

        {/* Email */}
        <div className="text-center">
          <a
            href="mailto:info@yourcompany.com"
            className="text-accent-1 text-lg underline"
          >
            info@yourcompany.com
          </a>
        </div>

        {/* Copy Email Button (Optional) */}
        <button
          onClick={() => navigator.clipboard.writeText("info@yourcompany.com")}
          className="mt-4 bg-accent-2 text-primary-text px-4 py-2 rounded-full mx-auto block"
        >
          Copy Email
        </button>
      </div>
    </div>
  );
};

export default Contact;
