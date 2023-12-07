import "./Home.scss";
import Navbar from "../../components/navbar/navBar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
      </div>
    </>
  );
};

export default Home;
