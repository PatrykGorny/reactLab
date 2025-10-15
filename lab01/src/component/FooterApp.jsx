function FooterApp() {
  return (
    <footer
      className="bg-light text-light text-center py-3 mt-auto "
      style={{
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
      }}
    >
      <img
        src="/2_wsei_short_color.png"
        alt="WSEI"
        className="img-fluid mb-3"
        style={{
          maxWidth: "150px",
          height: "auto",
        }}
      />
      <p>
        Autor:{" "}
        <a
          href="mailto:patryk.gorny@microsoft.wsei.edu.pl"
          className="text-info"
        >
          patryk.gorny@microsoft.wsei.edu.pl
        </a>
      </p>
    </footer>
  );
}

export default FooterApp;
