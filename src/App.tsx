import type { menuItem } from "./types/menuItem";
import type { bigOffer } from "./types/menuItem";

function App() {
  const menuItems: menuItem[] = [
    { name: "1 pc Chicken & Fries", price: 3.5 },
    { name: "2 pcs Chicken & Fries", price: 4.95 },
    { name: "3 pcs Chicken & Fries", price: 6.85 },
    { name: "4 pcs Chicken & 2 Fries", price: 9.5 },
    { name: "6 pcs Chicken & 3 Fries", price: 14.0 },
    { name: "8 pcs Chicken & 4 Fries", price: 17.95 },
    { name: "12 pcs Chicken & 4 Fries", price: 24.5 },
    { name: "Chicken Feast", price: 12.5 },
    { name: "Donor Kebab (Regular)", price: 6.0 },
    { name: "Donor Kebab (Large)", price: 7.5 },
    { name: 'Pizza 9" (Buy 1)', price: 3.95 },
    { name: "Garlic Bread", price: 1.95 },
  ];

  const bigItem: bigOffer[] = [
    {
      offerName: "Chicken Feast",
      item1: "5 pcs Chicken",
      item2: "2 Fries",
      item3: "2 Drinks",
      price: 12.5,
    },
    {
      offerName: "Family Pack",
      item1: "6 pcs Chicken",
      item2: "3 Fries",
      item3: "1 lrg Drink",
      price: 16.5,
    },
    {
      offerName: "Bargain Bucket",
      item1: "8 pcs Chicken",
      item2: "4 Fries",
      item3: "1 lrg Drink",
      item4: "Coleslaw or Beans £1 each",
      price: 20.0,
    },
    {
      offerName: "Mega Pack",
      item1: "16 pcs Chicken",
      item2: "5 Fries",
      item3: "1 lrg Drink",
      price: 31.95,
    },
  ];
  return (
    <>
      <header>
        <div className="topHead">
          <span>√ HALAL</span>
          <span>حلال</span>

          <a href="01582 519519">Order by phone: 01582 519519</a>
        </div>

        <div className="largeHead">
          <div className="logo">SF</div>
          <div className="nextLogoText">
            <h1>Southern Fried Chicken & pizza Direct</h1>
            <span>Dallow road - Luton</span>
          </div>
          <nav className="links">
            <a href="#menu">Menu</a>
            <a href="#deal">Deals</a>
            <a href="">Find Us</a>
          </nav>
          <button className="buttonCall">Call to order</button>
        </div>
      </header>
      <section className="hero">
        <div className="heroText">
          <span className="oblText">Lip Licking Flavour</span>
          <h2>
            Fried <strong>Fresh</strong>
            <br />
            Served <strong id="red">Hot</strong>
            <br />
            <strong id="green">Every</strong> Time
          </h2>
          <p className="lead">
            Halal fried chicken, stone-baked pizza, kebabs and burgers — cooked
            to order on Dallow Road, Luton. Dine in, collect, or get it
            delivered.
          </p>
          <div className="heroBtn">
            <button className="btn1">See the menu</button>
            <button className="btn2">Call 01582 519519</button>
          </div>
        </div>
        <div className="circle">
          <span>
            100% Halal <br />
            Free delivery{" "}
          </span>
        </div>
      </section>
      <div className="infobox">
        <h3>160 Dallow Road, Luton LU1 1NF</h3>
        <h3>Chicken · Pizza · Kebabs · Burgers</h3>
        <h3>Dine In · Collection · Delivery</h3>
      </div>
      <div className="menu" id="menu">
        <div className="menuBox">
          <div className="menuTitle">
            <span>Straight off the board</span>
            <h3>Chicken & Fries</h3>
          </div>
          <div className="menuGrid">
            {menuItems.map((item) => (
              <div className="itemBox" key={item.name}>
                <span>{item.name}</span>
                <span id="priceBox">£ {item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bigOffer" id="deal">
        <div className="bigOfferBox">
          <div className="dealTitle">
            <span>Bring the family</span>
            <h3>Feasts & Bucket Deals</h3>
          </div>
          <div className="dealGrid">
            {bigItem.map((deal) => (
              <div className="dealCard" key={deal.offerName}>
                <h3>{deal.offerName}</h3>
                <span>{deal.item1}</span>
                <span>{deal.item2}</span>
                <span>{deal.item3}</span>
                <span>{deal.item4}</span>
                <span>{deal.item5}</span>
                <span id="price">£{deal.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
