import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Pooja Ingalagi | 
        <a 
          href="https://github.com/Pooja-1506"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub |
        </a>
        <a 
        href="https://linkedin.com/Pooja Ingalagi"
        target="_blank"
        rel="noopener noreferrer"
        >
            LinkedIn 
        </a>
      </p>
    </footer>
  );
}

export default Footer;
