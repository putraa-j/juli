import React from "react";
import Navbar from "../components/Navbar"; // Impor Navbar
import Footer from "../components/Footer"; // Impor Footer

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Tambahkan Navbar */}
      
      {/* Header Banner */}
      <header className="w-full h-[60vh] sm:h-[100vh] bg-white text-black flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Hi!
        </h1>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          I am Juliana Nur Rosiba
        </h1>
        <p className="text-lg sm:text-xl mt-4">Frontend Developer</p>
      </header>

      <br /><hr /><hr />
      
      {/* About Section */}
<section
  id="about"
  className="w-full h-auto bg-white text-black flex flex-col justify-center items-center text-center px-4 shadow-lg rounded-xl"
>
  <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center p-8 bg-white shadow-lg rounded-xl">
    {/* Left Side (Image) */}
    <div className="flex-1 flex justify-center mb-8 sm:mb-0">
      <img
        src="./assets/jujul.png"
        alt="Juliana"
        className="max-w-[70%] sm:max-w-[60%] h-auto rounded-lg"
      />
    </div>

    {/* Right Side (Text) */}
    <div className="flex-1 text-left sm:pl-8">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Me</h2>
      <p className="text-lg">
      I am Juliana Nur Rosiba, a fresh graduate of Informatics Management. Experienced in student organizations, have critical thinking skills, and are proficient in computer operations. Skilled in document management, archiving, and report preparation.
      </p>
    </div>
  </div>
</section>


<br /><br />

      
     {/* Skill Section */}
<section id="skills" className="w-full h-auto bg-white text-black flex flex-col justify-center items-center text-center px-4 shadow-lg rounded-xl">
  <div className="container mx-auto p-8 bg-white shadow-lg rounded-xl">
    <h2 className="text-3xl sm:text-4xl font-semibold">My Skills</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
      {/* Skill: Microsoft Office */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
          alt="Microsoft Office"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Microsoft Office</h3>
      </div>

      {/* Skill: Google Workspace */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="Google Workspace"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Google Workspace</h3>
      </div>

      {/* Skill: HTML */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
          alt="HTML"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">HTML</h3>
      </div>

      {/* Skill: CSS */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
          alt="CSS"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">CSS</h3>
      </div>

      {/* Skill: PHP */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919830.png"
          alt="PHP"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">PHP</h3>
      </div>

      {/* Skill: MySQL */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png"
          alt="MySQL"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">MySQL</h3>
      </div>

      {/* Skill: Visual Studio Code */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/906/906324.png"
          alt="Visual Studio Code"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Visual Studio Code</h3>
      </div>

      {/* Skill: Canva */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968773.png"
          alt="Canva"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Canva</h3>
      </div>

      {/* Skill: Draw.io */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
          alt="Draw.io"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">Draw.io</h3>
      </div>

      {/* Skill: XAMPP */}
      <div className="skill-item flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-move-and-blink">
        <img
          src="https://cdn-icons-png.flaticon.com/512/919/919836.png"
          alt="XAMPP"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-xl font-semibold">XAMPP</h3>
      </div>
    </div>
  </div>
</section>



      <br /><br />

      {/* Contact Section */}
      <section id="contact" className="w-full h-auto bg-white text-black flex justify-center items-center px-4 shadow-lg rounded-xl">
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Contact Me</h2>
          <form className="w-full max-w-lg mx-auto">
            <table className="table-auto w-full text-left border-collapse">
              <tbody>
                <tr>
                  <td className="px-4 py-2 font-semibold">Name:</td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Email:</td>
                  <td className="px-4 py-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-semibold">Message:</td>
                  <td className="px-4 py-2">
                    <textarea
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center mt-6">
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer /> {/* Tambahkan Footer */}
    </div>
  );
};

export default Home;
