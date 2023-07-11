import Layout from "../pages/layout";
import "./market.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

const Market = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Layout>
      <Carousel className="market" responsive={responsive}>
        <div className="market_item">
          <img src="./images/1.png" alt="Massage" />
        </div>
        <div className="market_item">
          <img src="./images/1.png" alt="Massage" />
        </div>
        <div className="market_item">
          <img src="./images/1.png" alt="Massage" />
        </div>
        <div className="market_item">
          <img src="./images/1.png" alt="Massage" />
        </div>
       
      </Carousel>

      <div className="hot_offers">
        <h1>
          <del>Горящие предложения</del>
        </h1>
        <Link to="">
          Посмотреть все <i class="fa-sharp fa-solid fa-arrow-right"></i>
        </Link>
      </div>
      <div className="hot_offers_apps">
        <div className="hot_offers_app">
          <img src="./images/phone.png" alt="" />
          <p>
            1 373 000 сум | <span> 1 304 000 сум</span>{" "}
          </p>
          <h2>
            Телефон TECNO Spark 6 Go <br />
            KE5j 3/64GB Ice Jadeite
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/camera.png" alt="" />
          <p>
            1 529 000 сум | <span>350 000 сум</span>{" "}
          </p>

          <h2>
            Умные часы Haylou <br />
            RT-LS05S
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/wifi.png" alt="" />
          <p>
            1 529 000 сум | <span> 1 350 000 сум</span>{" "}
          </p>
          <h2>
            ТTP-LINK TL-WR940N <br />
            450M (черный)
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/bloots.png" alt="" />
          <p>
            1 373 000 сум | <span> 350 000 сум</span>{" "}
          </p>
          <h2>
            Умные часы Haylou <br />
            RT-LS05S
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/klaviatura.png" alt="" />
          <p>
            1 373 000 сум | <span> 1 304 000 сум</span>{" "}
          </p>
          <h2>
            Клавиатура 2E <br />
            Gaming KG330
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
      </div>

      <div className="hot_offers_apps">
        <div className="hot_offers_app">
          <img src="./images/headphone.png" alt="" />
          <p>
            1 373 000 сум | <span> 1 304 000 сум</span>{" "}
          </p>
          <h2>
            Телефон TECNO Spark 6 Go <br />
            KE5j 3/64GB Ice Jadeite
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/tecnoPhone.png" alt="" />
          <p>
            1 529 000 сум | <span>350 000 сум</span>{" "}
          </p>

          <h2>
            Умные часы Haylou <br />
            RT-LS05S
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/watch.png" alt="" />
          <p>
            1 529 000 сум | <span> 1 350 000 сум</span>{" "}
          </p>
          <h2>
            ТTP-LINK TL-WR940N <br />
            450M (черный)
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/ptscamera.png" alt="" />
          <p>
            1 373 000 сум | <span> 350 000 сум</span>{" "}
          </p>
          <h2>
            Умные часы Haylou <br />
            RT-LS05S
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
        <div className="hot_offers_app">
          <img src="./images/wifi.png" alt="" />
          <p>
            1 373 000 сум | <span> 350 000 сум</span>{" "}
          </p>
          <h2>
            Умные часы Haylou <br />
            RT-LS05S
          </h2>
          <p>Предложение заканчивается через:</p>
          <div className="time">
            <div className="time_box">
              <h2>27</h2>
              <p>ДНЕЙ</p>
            </div>
            <div className="time_box">
              <h2>21</h2>
              <p>ЧАСОВ</p>
            </div>
            <div className="time_box">
              <h2>32</h2>
              <p>МИНУТ</p>
            </div>
            <div className="time_box">
              <h2>05</h2>
              <p>СЕКУНД</p>
            </div>
          </div>
          <div className="icons">
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-scale-unbalanced-flip"></i>
          </div>
        </div>
      </div>

      <div className="popular_categories">
        <h1>Популярные категории</h1>

        <Carousel className="market" responsive={responsive2}>
          <div className="popular_categories_item">
            <h3>Компьютеры</h3>
            <img src="./images/popularComp.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Телефоны, планшеты</h3>
            <img src="./images/popularPhone.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Ноутбуки</h3>
            <img src="./images/popularLaptop.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Товары для офиса</h3>
            <img src="./images/popularCamera.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Компьютеры</h3>
            <img src="./images/popularComp.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Телефоны, планшеты</h3>
            <img src="./images/popularPhone.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Ноутбуки</h3>
            <img src="./images/popularLaptop.png" alt="Massage" />
          </div>

          <div className="popular_categories_item">
            <h3>Товары для офиса</h3>
            <img src="./images/popularCamera.png" alt="Massage" />
          </div>
        </Carousel>
      </div>

      <Carousel className="market" responsive={responsive}>
        <div className="slider2">
          <img src="./images/Slider2.png" alt="Massage" />
        </div>
        <div className="slider2">
          <img src="./images/Slider2.png" alt="Massage" />
        </div>
        <div className="slider2">
          <img src="./images/Slider2.png" alt="Massage" />
        </div>
        <div className="slider2">
          <img src="./images/Slider2.png" alt="Massage" />
        </div>
        <div className="slider2">
          <img src="./images/Slider2.png" alt="Massage" />
        </div>
        
      </Carousel>
    </Layout>
  );
};

export default Market;
