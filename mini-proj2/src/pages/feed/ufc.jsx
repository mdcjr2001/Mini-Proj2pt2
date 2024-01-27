import React from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../../components/accountBox/common";

const UFC = () => {
  
  return (

<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Post Your Highlights Here</title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
    crossOrigin="anonymous"
  />
  "
  <link
    rel="stylesheet"
    href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css"
  />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  {/* Sidebar */}
  <div
    className="w3-sidebar w3-bar-block w3-border-right"
    style={{ display: "none" }}
    id="mySidebar"
  >
    <button onclick="w3_close()" className="w3-bar-item w3-large">
      Close ×
    </button>
    <a href="nba.html" className="w3-bar-item w3-button">
      NBA
    </a>
    <a href="nfl.html" className="w3-bar-item w3-button">
      NFL
    </a>
    <a href="ufc.html" className="w3-bar-item w3-button">
      UFC
    </a>
    <a href="login.html" className="w3-bar-item w3-button">
      Log Out
    </a>
  </div>
  {/* Page Content */}
  <div className="w3-container w3-red">
    <button className="w3-button w3-red w3-xlarge" onclick="w3_open()">
      ☰
    </button>
    <div className="w3-container">
      <h1>UFC Feed</h1>
    </div>
  </div>
  <form action="" className="create-post">
    <div className="profile-photo">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAY1BMVEUFBwb///8AAAD7+/s9PT2np6elpKVBQUGrq6t7e3udnZ0AAwAXFxdVVVXl5eXz8/N0dXSRkZErKyvW1ta5ubkwMDBNTU1nZ2eEhITExMRISEjQ0NBsbGxeXl6Li4sODg4hIiJVtHC4AAADFUlEQVR4nO2a25KiMBBA7Q5GEAS5qQyI/v9Xbi7cxgWsfaBD1fZ5mJKCqpxpkk4n5HBgGIZhGIZhGIZhGIZhHIAK1w4jmEm/3I0PZjFAvBsfvIHi7lAnnPYWfOcqOhnO3qSxaWs58UHp48Qmrc+kPnhXbycYW8Rzgb9vPpzq5IlLnRAfeYHhIIAA5eRlyTwdb9L4YBWNfaeZhgPRj6hshjGDft3/DLEAqAaDsSNtPsDw7nu2CQyg7VstVRpMvP7qKdLukdIPNvXBi4C4a8sD+BnMFLK7OIk+I2IN4rKlD2a18Lu23ir1mYggxlrHhAfxmQzdGlNRZ9uGB8uHjYnWgfimE3ABhlr/ToX69bZPZG25decJMTreTEwuxqFoghw68uZh4gSNecCTb4LcjGX91HE4wyKFvn+pPZJUqOJSXC/pso3yuTcF2RSvA5Os2QAIAT5VKgztUFonoZvTsRFfda50c2ioEtwXcsqCB3++6TxpC4yzv4o8EFen36Ay+Wytu3TkhJkvZfrqWwoxkPLYIN7l+ZPjtvOn1Tnpnlp1/zliqy/VOuI4059/qHT0tHQwCxxzdVRLmxmdE5kOVGrsqHoCdqJjpu0WdqOjfIZZfQ86MNRdE53EIFzowN86orkobuledDyT/q770dHPsM6+dGx92o0h9zpXX/3Jb3vRCbBSi+JyVYduCtV7X/4bvXmdmypCpPTJCgyto5nXORCWX2N09Dp8XocO1mEd1mGd/10niveko8KTrOpQ72HYPf9lnciSvWh0QrOlvKQT5SA0cCYLD+aLOm/f9nTKzUH94XxBp18bxwSl1+jzXNCBfoeXdKvygPIxr9OR0o53fHlrOhX1CRHb3oJOHFEnw05qVoc+Na/qtI5s5nWks6MqczqkH0e+6iSuOs68Dm3++9DparFRR9KeBfn0qX7rVE5t7PGLUcf5eTT7unodgv2lbz7tqOMs/42YwztWp3DbcSy6NjQ6DvPfFDwJ83nNfcexYKCic9z2INM/EKpaDL3XDjqOJdRfindjwzAMwzAMwzAMwzAM81/xB6u0JGxVT97DAAAAAElFTkSuQmCC" />
    </div>
  </form>
  {/*--------------- LIVE FEED ------------------*/}
  <div className="feeds">
    {/* --------------- FEED 3 ------------------*/}
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-photo"> 
             {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/National_Football_League_logo.svg/1200px-National_Football_League_logo.svg.png" /> */}
          </div>
          <div className="info">
            <h3>UFC</h3>
            <small>New York City, New York 1 Hour Ago</small>
          </div>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h" />
        </span>
      </div>
      <div className="photo">
        <img src="https://i.insider.com/5f701df20ab50d00184acae5?width=700" />
      </div>
      <div className="action-buttons">
        <div className="interaction-buttons">
          <span>
            <i className="uil uil-heart" />
          </span>
          <span>
            <i className="uil uil-comment-dots" />
          </span>
          <span>
            <i className="uil uil-share-alt" />
          </span>
        </div>
        <div className="bookmark">
          <span>
            <i className="uil uil-bookmark-full" />
          </span>
        </div>
      </div>
      <div className="liked-by">
        <p>
          Liked by <b>Brandon Kennedy Smith</b> and <b> 598 others</b>
        </p>
      </div>
      <div className="caption">
        <p>
          <b>nfl</b> Israel Andesanya knockout.
        </p>
      </div>
      <div className="comments text-muted">View all 45 comments</div>
    </div>
  </div>
  
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n body {\n margin: 0;\n font-family: Arial, Helvetica, sans-serif;\n }\n \n .navbar {\n overflow: hidden;\n background-color: #333;\n position: fixed;\n bottom: 0;\n width: 100%;\n }\n \n .navbar a {\n                  float: left;\n                  display: block;\n                  color: #f2f2f2;\n                  text-align: center;\n                  padding: 14px 16px;\n                  text-decoration: none;\n                  font-size: 17px;\n                }\n                \n                .navbar a:hover {\n                  background: #f1f1f1;\n                  color: black;\n                }\n                \n                .navbar a.active {\n                  background-color: red;\n                  color: white;\n                }\n                \n                .main {\n                  padding: 16px;\n                  margin-bottom: 30px;\n                }\n                ",
    }}
  />
</>
); 
}

export default UFC;