import "./style.scss";

//Components 
import Pcards from "./Pcards/Pcard";
import Swiper from "../../Swiper/Swiper";

const Home = () => {

  return (
    <>
      <main className="main">
        <div className="main__container">
          <Swiper></Swiper>
          <div className="main__container__cards">
            <Pcards></Pcards>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;