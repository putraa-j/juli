import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow py-6">
      <div className="container mx-auto text-center">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/juliana-nur-rosiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .8 0 1.78v20.44C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.58c-1.13 0-2.05-.92-2.05-2.05S4.21 3.48 5.34 3.48s2.05.92 2.05 2.05-1.01 2.05-2.05 2.05zM20.45 20.45h-3.56v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.68h-3.56V9h3.42v1.56h.05c.48-.91 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/juliana.nurrosiba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-pink-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.243 1.326 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.851c-.062 1.365-.35 2.632-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.646.07-4.851.07s-3.585-.012-4.851-.07c-1.365-.062-2.632-.35-3.608-1.326-.975-.975-1.264-2.243-1.326-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.585.07-4.851c.062-1.365.35-2.632 1.326-3.608.975-.975 2.243-1.264 3.608-1.326 1.266-.058 1.646-.07 4.851-.07M12 0C8.741 0 8.332.014 7.053.072 5.775.13 4.604.397 3.556 1.445 2.508 2.493 2.241 3.665 2.183 4.943.126 8.332 0 8.741 0 12s.014 3.668.072 4.947c.058 1.278.325 2.45 1.373 3.498 1.048 1.048 2.22 1.315 3.498 1.373 1.278.058 1.687.072 4.947.072s3.668-.014 4.947-.072c1.278-.058 2.45-.325 3.498-1.373 1.048-1.048 1.315-2.22 1.373-3.498.058-1.278.072-1.687.072-4.947s-.014-3.668-.072-4.947c-.058-1.278-.325-2.45-1.373-3.498C17.395.397 16.223.13 14.945.072 13.666.014 13.257 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.163a3.998 3.998 0 110-7.996 3.998 3.998 0 010 7.996zm6.406-11.845a1.44 1.44 0 11-2.882 0 1.44 1.44 0 012.882 0z" />
            </svg>
          </a>
          {/* Email */}
          <a
            href="mailto:juliana@example.com"
            className="text-gray-500 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20 4H4C2.897 4 2 4.897 2 6v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2-8 5-8-5h16zM4 18V8l8 5 8-5v10H4z" />
            </svg>
          </a>
        </div>
        <p className="text-gray-500">
          &copy; 2025 Juliana Nur Rosiba. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
