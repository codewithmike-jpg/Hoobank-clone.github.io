import React from "react";
import "./Main.css";

function Main() {
  const robot = "./src/assets/robot1.png";
  const discount = "./src/assets/Discount.svg";
  const star = "./src/assets/star.svg";
  const shield = "./src/assets/shield.svg";
  const send = "./src/assets/send.svg";
  const paypal = "./src/assets/bill.png";
  const apple = "./src/assets/apple.svg";
  const google = "./src/assets/google.svg";
  const card = "./src/assets/card3.png";
  return (
    <div className="main">
      <div className="flex-1">
        <div id="intro">
          <div id="disc">
            <h3>
              {" "}
              <span>
                <img src={discount} />
              </span>{" "}
              20% Discount For 1 Month Account
            </h3>
          </div>
          <h1>
            The Next <br />
            <span>Generation</span>
            <br />
            Payment <br /> Method.
          </h1>
          <p>
            Our team of experts uses a methodology to identify <br /> the credit
            cards most likely to fit your needs. We <br />
            examine annual percentage rates, annual fees.
          </p>
        </div>
        <div id="rob">
          <img src={robot} />
        </div>
      </div>
      {/* end of flex-1 */}
      <div className="flex-2">
        <h1>
          3800+ <span>USER ACTIVE</span>
        </h1>
        <h1>
          230+ <span>TRUSTED BY COMPANY</span>
        </h1>
        <h1>
          $250M <span>TRANSACTIONS</span>
        </h1>
      </div>
      {/* end of flex 2 */}
      <div className="flex-3">
        <div id="feat">
          <h1>
            You do the business,
            <br />
            we'll handle the <br />
            money.
          </h1>
          <p>
            With the right credit card, you can improve your <br />
            financial life by building credit, earning rewards and <br />
            saving money. But with hundreds of credit cards on <br />
            the market.
          </p>
          <button>Get Started</button>
        </div>
        <div className="feat-2">
          <div id="box-1">
            <div id="img-1">
              <img src={star} />
            </div>
            <div id="write">
              <h2>Rewards</h2>
              <p>
                The best credit cards offer some tantalizing <br />
                combinations of promotions and prizes.
              </p>
            </div>
          </div>
          {/* end of box-1 */}
          <div id="box-1">
            <div id="img-1">
              <img src={shield} />
            </div>
            <div id="write">
              <h2>100% secured</h2>
              <p>
                We take proactive steps make sure your information <br />
                and transactions are secure.
              </p>
            </div>
          </div>
          {/* end of box-2 */}
          <div id="box-1">
            <div id="img-1">
              <img src={send} />
            </div>
            <div id="write">
              <h2>Balance Transfer</h2>
              <p>
                A balance transfer credit card can save you a lot of <br />
                money in interest charges.
              </p>
            </div>
          </div>
          {/* end of box-3 */}
        </div>
      </div>
      {/* end of flex-3 */}
      <div className="flex-4">
        <div id="pay">
          <img src={paypal} />
        </div>
        <div id="download">
          <h1>
            Easily control your <br />
            billing & invoicing.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing <br />
            elit. Est cumque exercitationem debitis. Tempore <br />
            molestias consequatur harum.
          </p>
          <div id="store">
            <img src={apple} />
            <img src={google} />
          </div>
        </div>
      </div>
      {/* end of flex-4 */}
      <div className="flex-5">
        <div id="deal">
          <h1>
            Find a better card <br />
            deal <br />
            in few easy steps.
          </h1>
          <p>
            Arcu tortor, purus in mattis at sed integer faucibus. <br />
            Aliquet quis aliquet eget mauris tortor.ç Aliquet <br />
            ultrices ac, ametau.
          </p>
          <button>Get Started</button>
        </div>
        <div id="card">
          <img src={card} />
        </div>
      </div>
      {/* end of flex-5 */}
      <div className="flex-6">
        <h1>
          What people are <br />
          saying about us.
        </h1>
        <p>
          Everything you need to accept card payments and <br />
          grow your business anywhere on the planet.
        </p>
      </div>
      {/* end of flex-6 */}
    </div>
  );
}

export default Main;
