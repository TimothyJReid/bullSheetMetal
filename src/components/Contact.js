import React, { useState } from "react";

const Contact = () => {
  // State variable to track if email is copied
  const [emailCopied, setEmailCopied] = useState(false);

  // Function to handle email copy
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@bullsheetmetal.ca");
    setEmailCopied(true); // Set emailCopied to true

    // Reset emailCopied to false after 3 seconds
    setTimeout(() => {
      setEmailCopied(false);
    }, 3000);
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col items-center justify-center bg-primary-bg"
    >
      <div className="p-8 rounded-lg bg-secondary-bg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-3xl text-center text-primary-text mb-6">
          Contact Us
        </h2>
        <p className="text-secondary-text mb-4">
          We'd love to hear from you. If you can imagine it, we can bring it to
          life. Let's discuss your ideas and transform them into reality. Reach
          out to us via email:
        </p>
        <div className="text-center">
          <a
            href="mailto:info@yourcompany.com"
            className="text-accent-1 text-lg underline"
          >
            info@bullsheetmetal.ca
          </a>
        </div>
        <button
          onClick={handleCopyEmail}
          className="mt-4 bg-accent-2 text-primary-text px-4 py-2 rounded-full mx-auto block"
        >
          {emailCopied ? "Email Copied!" : "Copy Email"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
