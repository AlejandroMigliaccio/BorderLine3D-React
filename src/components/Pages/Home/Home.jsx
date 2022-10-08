import "./style.scss";

//Components 
import Pcards from "./Pcards/Pcard";
import Swiper from "./Swiper/Swiper";
import MapFrame from "./Map/MapFrame";
const Home = () => {

  return (
    <>
      <main className="main">
        <div className="main__container">
          <Swiper/>
          <div className="main__container__cards">
            <Pcards/>
          </div>
          <div className="main__container__map">
            <MapFrame/>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;