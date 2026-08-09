import type { menuItem } from "./types/menuItem";

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
    { name: "Family Pack", price: 16.5 },
    { name: "Bargain Bucket", price: 20.0 },
    { name: "Party Pack", price: 26.5 },
    { name: "Mega Pack", price: 31.95 },
    { name: "Donor Kebab (Regular)", price: 6.0 },
    { name: "Donor Kebab (Large)", price: 7.5 },
    { name: 'Pizza 9" (Buy 1)', price: 3.95 },
    { name: "Garlic Bread", price: 1.95 },
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
            <a href="menu">Menu</a>
            <a href="">Deals</a>
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
        <div className="menubox">
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
    </>
  );
}

export default App;
