function App() {
  return (
    <>
      <header>
        <div className="topHead">
          <span>√ HALAL</span>

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
          <span className="oblText">Very Flicking Good</span>
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
        </div>
      </div>
    </>
  );
}

export default App;
