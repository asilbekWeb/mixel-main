import {useEffect} from "react";
import "./navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {



  return (
    <div className="navbar">
      <div className="first-part">
        <ul>
          <li>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
            <span>Ташкент</span>
          </li>
          <li>
            <Link to="/">Наши магазины</Link>
          </li>
          <li>
            <Link to="/salesB2B">B2B продажи</Link>
          </li>
          <li>
            <Link to="/purchase">Покупка в рассрочку</Link>
          </li>
          <li>
            <Link to="/payment">Способы оплаты</Link>
          </li>
          <li>
            <Link to="/warranty">Гарантия на товары</Link>
          </li>
        </ul>

        <ul>
          <li>
            <a href="tel:+998 95 123 55 88">
              <i class="fa-solid fa-phone"></i>
              <span>+998 95 123 55 88</span>
            </a>
          </li>
          <li>
            <select>
              <option>Рус</option>
              <option>En</option>
              <option>Uz</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="second-part">
        <ul>
          <li>
            <Link to="/">
              <img src="./images/Logo.png" alt="Massage" />
            </Link>
          </li>
          <li>
            <form>
              <select>
                <option>Все категории</option>
                <option>Все категории</option>
                <option>Все категории</option>
                <option>Все категории</option>
              </select>
              <label className="label-input">
                <input type="text" placeholder="Телефоны и бытовая" />
                <i class="fa-solid fa-microphone"></i>
              </label>
              <label className="label-input-second">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="submit" value="Поиск" />
              </label>
            </form>
          </li>
        </ul>

        <ul>
          <li>
            <i class="fa-regular fa-user"></i>
            <span>Войти</span>
          </li>

          <li>
            <i class="fa-solid fa-scale-unbalanced"></i>
            <span>Сравнение</span>
            <div className="number">12</div>
          </li>

          <li>
            <i class="fa-regular fa-heart"></i>
            <span>Избранное</span>
            <div className="number">12</div>
          </li>

          <li>
            <i class="fa-sharp fa-solid fa-cart-shopping"></i>
            <span>Корзина</span>
            <div className="number ">12</div>
          </li>
        </ul>
      </div>
      <div className="third-part">
        <ul>
          <li>
            <button>
              <i class="fa-solid fa-bars"></i>
              <span>Категории</span>
            </button>
          </li>
          <li>
            <Link className="active" to="/">Наши магазины</Link>
          </li>
          <li>
            <Link  to="/monoblocks">Моноблоки</Link>
          </li>
          <li>
            <Link to="/phone">Телефоны, планшеты</Link>
          </li>
          <li>
            <Link to="/laptop">Ноутбуки</Link>
          </li>
          <li>
            <Link to="/accessories">Комплектующие</Link>
          </li>
          <li>
            <Link to="/network">Сетевое оборудование</Link>
          </li>
          <li>
            <Link to="/office">Оргтехника</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
