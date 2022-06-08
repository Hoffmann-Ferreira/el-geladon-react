import "./style.css";
import githublogo from "../../assets/icons/github.gif";
import linkedinlogo from "../../assets/icons/linkedin.gif";

const Footer = () => {
  return (
    <footer>
      <div className="rodape">
        <h3>Desenvolvido por Andrei Hoffmann Ferreira</h3>
        <a
          href="https://www.linkedin.com/in/advogadoandreihoffmann/"
          target="blank"
        >
          <img src={linkedinlogo} alt="Logo Github" />
        </a>
        <a href="https://github.com/Hoffmann-Ferreira" target="blank">
          {" "}
          <img src={githublogo} alt="logo Linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
