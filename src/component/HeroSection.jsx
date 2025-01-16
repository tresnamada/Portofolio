import { ReactTyped } from "react-typed";
import Gambar from "./Gambar";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:justify-center md:gap-12 items-center bg-gradient-to-r from-primary to-secondary text-white p-8 h-screen mx-auto shadow-lg animate-fade-down animate-once animate-ease-in-out">
      {/* Gambar Profil */}
      <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-tertiary shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 mt-12">
        <Gambar />
        <div className="absolute bottom-4 right-4 bg-tertiary text-primary rounded-full p-2 shadow-md">
          👨‍💻
        </div>
      </div>

      {/* Konten Teks */}
      <div className="text-center pt-4 md:pt-0 animate-fade-right animate-once animate-ease-in-out">
        <h1 className="text-2xl md:text-4xl md:m-3 font-bold text-kuning drop-shadow-lg ">
          Erlangga Tresnamada Muliawan
        </h1>
        <h1 className="md:mb-3">
          <ReactTyped
            strings={["Front End Developer", "Mobile App Developer",]}
            typeSpeed={50}
            backSpeed={50}
            loop
            className="text-xl md:text-2xl text-tertiary"
          />
        </h1>
        <h2 className="text-tertiary pt-2">
          Hi <span className="animate-wiggle animate-infinite animate-ease-in-out">👋</span> Welcome to my portfolio
          website!
        </h2>

        {/* Tombol Aksi */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/tresnamada"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden py-2 px-6 rounded-lg bg-tertiary text-primary font-semibold hover:scale-105 hover:bg-opacity-90 transition-transform duration-300 shadow-md"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-kuning to-tertiary opacity-0 group-hover:opacity-20 transition duration-300"></span>
            My Github
          </a>
          <Link to={"/Contact"}>
            <button className="group relative overflow-hidden py-2 px-6 rounded-lg bg-kuning text-primary font-semibold hover:scale-105 hover:bg-opacity-90 transition-transform duration-300 shadow-md">
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary opacity-0 group-hover:opacity-20 transition duration-300"></span>
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
