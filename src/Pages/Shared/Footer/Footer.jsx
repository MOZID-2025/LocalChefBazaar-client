import React from "react";
import Logo from "../../../Components/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer bg-[#0B0B0B] text-primary-content p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <Logo />
          <p className="font-bold">
            LocalChefBazaar
            <br />
            Fresh homemade meals at your doorstep
          </p>
          <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="font-bold text-lg mb-2">Contact Details</h3>
          <p>Email: support@localchefbazaar.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123, Dhaka, Bangladesh</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-bold text-lg mb-2">Follow Us</h3>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-blue-400 transition-colors"
              ></svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-red-500 transition-colors"
              ></svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current hover:text-blue-600 transition-colors"
              ></svg>
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-bold text-lg mb-2">Working Hours</h3>
          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
