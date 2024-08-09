import React from 'react'
import "./Client.css";

function Client() {
  const Herman = "./src/assets/herman.png";
  const steve = "./src/assets/steve.png";
  const mike = "./src/assets/person3.png";
  const quote = "./src/assets/quotes..svg";
  return (
    <div className='clients'>
         <div id="com-1">
          <img src={quote} />
          <p>
            Money is only a tool. It will take <br />
            you wherever you wish, but it <br />
            will not replace you as the
            <br /> driver.
          </p>
          <div id="dis">
            <div id="ceo"> 
              <img src={Herman} />
            </div>
            <div id="name">
                <h3>Herman Jensen</h3>
                <p>Founder & Leader</p>
            </div>
          </div>
        </div>
        {/* comment two */}
        <div id="com-1">
          <img src={quote} />
          <p>
            It is usually people in the money <br />
            business, finance, and <br />
            international trade that are
            <br /> really rich.
          </p>
          <div id="dis">
            <div id="ceo"> 
              <img src={steve} />
            </div>
            <div id="name">
                <h3>Steven Mark</h3>
                <p>Managing Director</p>
            </div>
          </div>
        </div>
        {/* comment 3 */}
        <div id="com-1">
          <img src={quote} />
          <p>
            Money makes your life easier. If<br />
            you're lucky to have it, you're <br />
            lucky.
            <br />
          </p>
          <div id="dis">
            <div id="ceo"> 
              <img src={mike} />
            </div>
            <div id="name">
                <h3>Michael Snoop</h3>
                <p>Developer & C.E.O</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Client