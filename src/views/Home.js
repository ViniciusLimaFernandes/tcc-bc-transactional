import Navigator from "../components/Navigator";
import "../App.css";

const Home = () => {
  return (
    <div className="App">
      {/* <link href="//db.onlinewebfonts.com/c/ed6103f87d67647f670014e8bb40678b?family=Inter+ExtraBold" rel="stylesheet" type="text/css"/>
          <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/> */}
      <Navigator />
      <div className="Home-content">
        <h1 id="home-title">Blockchain,</h1>
        <h1 id="home-title">IoT,</h1>
        <h1 id="home-title">Inovação</h1>
        <p id="home-subtitle">
          Mantenha o controle dos seus dispositivos de forma segura e
          transparente.{" "}
        </p>
      </div>
    </div>
  );
};

export default Home;
