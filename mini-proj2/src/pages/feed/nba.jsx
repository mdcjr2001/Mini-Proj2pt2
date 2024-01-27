import React from "react";
import { useNavigate } from "react-router-dom";
import { BoxContainer } from "../../components/accountBox/common";

const NBA = () => {
  
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
      <h1>Home...</h1>
    </div>
  </div>
  <form action="" className="create-post">
    <div className="profile-photo">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAY1BMVEUFBwb///8AAAD7+/s9PT2np6elpKVBQUGrq6t7e3udnZ0AAwAXFxdVVVXl5eXz8/N0dXSRkZErKyvW1ta5ubkwMDBNTU1nZ2eEhITExMRISEjQ0NBsbGxeXl6Li4sODg4hIiJVtHC4AAADFUlEQVR4nO2a25KiMBBA7Q5GEAS5qQyI/v9Xbi7cxgWsfaBD1fZ5mJKCqpxpkk4n5HBgGIZhGIZhGIZhGIZhHIAK1w4jmEm/3I0PZjFAvBsfvIHi7lAnnPYWfOcqOhnO3qSxaWs58UHp48Qmrc+kPnhXbycYW8Rzgb9vPpzq5IlLnRAfeYHhIIAA5eRlyTwdb9L4YBWNfaeZhgPRj6hshjGDft3/DLEAqAaDsSNtPsDw7nu2CQyg7VstVRpMvP7qKdLukdIPNvXBi4C4a8sD+BnMFLK7OIk+I2IN4rKlD2a18Lu23ir1mYggxlrHhAfxmQzdGlNRZ9uGB8uHjYnWgfimE3ABhlr/ToX69bZPZG25decJMTreTEwuxqFoghw68uZh4gSNecCTb4LcjGX91HE4wyKFvn+pPZJUqOJSXC/pso3yuTcF2RSvA5Os2QAIAT5VKgztUFonoZvTsRFfda50c2ioEtwXcsqCB3++6TxpC4yzv4o8EFen36Ay+Wytu3TkhJkvZfrqWwoxkPLYIN7l+ZPjtvOn1Tnpnlp1/zliqy/VOuI4059/qHT0tHQwCxxzdVRLmxmdE5kOVGrsqHoCdqJjpu0WdqOjfIZZfQ86MNRdE53EIFzowN86orkobuledDyT/q770dHPsM6+dGx92o0h9zpXX/3Jb3vRCbBSi+JyVYduCtV7X/4bvXmdmypCpPTJCgyto5nXORCWX2N09Dp8XocO1mEd1mGd/10niveko8KTrOpQ72HYPf9lnciSvWh0QrOlvKQT5SA0cCYLD+aLOm/f9nTKzUH94XxBp18bxwSl1+jzXNCBfoeXdKvygPIxr9OR0o53fHlrOhX1CRHb3oJOHFEnw05qVoc+Na/qtI5s5nWks6MqczqkH0e+6iSuOs68Dm3++9DparFRR9KeBfn0qX7rVE5t7PGLUcf5eTT7unodgv2lbz7tqOMs/42YwztWp3DbcSy6NjQ6DvPfFDwJ83nNfcexYKCic9z2INM/EKpaDL3XDjqOJdRfindjwzAMwzAMwzAMwzAM81/xB6u0JGxVT97DAAAAAElFTkSuQmCC" />
    </div>
  </form>
  {/*--------------- LIVE FEED ------------------*/}
  <div className="feeds">
    {/*--------------- FEED 1 ------------------*/}
    <div className="feed">
      <div className="head">
        <div className="user">
          <div className="profile-photo">
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAAB6CAMAAACWTHHjAAAAq1BMVEX///8AQ4zaGjKcrcnYABfwr7UAMoUAOohvhrEANYYAQYsAPYkAP4rZACaIm72Dk7lkfavXAADYAB0ALoMAKYHy9fj++PnaEy7xur4AIH7ZACIAG32orcjY3+rldX764+XhXGjk6fDpjZT87e/gUF71z9L0xcm5w9cnUpPK0uFed6jjaXPsmqHtp6rnhItNZp4AEXrcMUEdS5BBWpjfSFXdOUqst89jcaQAAHKWrkQQAAAELklEQVR4nO2bXXeqOhCGE0UC4UuEiNKiIlXE+rGLHrv//y/bCaBF8LqZtU7eC80ae/GsGWYyTFKElJSUlJSUlJSUlJSUlP4vStzxQ/sCodHnQuiwlA1WiRlzk1i1iJkI09F3uCb+aSobjuOdTfwQ2dfGw2QgpK3kA7r6Dx7Wh7Vxow1qwINcOO6+Py08Sm61ddbwDXy5dAjlYYuPeI115dz5NlLpEBrqr/i+ooZPG0ml6/DRMq2M2WAAkg/jmu/TAchHsU0uTNjWPjz/Ed3Gl3MuTJtBBI4v2OdF0pj8eACN716XKy0XMTA+YjwbTxqo+mJbrGOd3QsgCD5z2DNnDSAEPvvSdR/X1gHDZ7qvfqi3YAh8b+mrH0YaEL57T9rR0ofCV7z8IQMS3/DcN4quPgOSH3967pueIv6ZRTD4+sXlOtG4A6f/RSD4vK6FJ4Yv3nyrJlA6n9sL78kZaEf+vY5B8HXDK3a2+MQXowkIvq7/RF2OVnyx1CDwDQ3Gnlwomr/oSzyAYoeTzxeW1q1tmH7wvJ0IrA0Ivt7+thUBdsRqFUHgo0nHJDbeyoE8g+XzBZeu6YPHNbpOq1SRzxeOu6ajKCz+qKrU8vnmve50wxMkjgTYKpbP99Z7+Zheo6pAc20j6Xyh0bMt/PV9OTr+Kk1fL/KDF+afse72N2FeiNe/vGtbrF/9pRwNdavXQM9kB7Ul8f7WbREyWHzWd8eWSZ/a/6iab3Qd+PmzhDAf770Bnxb31UG2KwUfpfvnIn3Qmvo88qXXZ706l7GeZhzHePJ1mM2OV03+/lbPd8lTl7CNB1HsODGI/q+ej8/bOZI9Brxg+Oiu/RbymECD4cNmu0/YgJo/1wra+/B6Ao6PklYOTzVwfJh8tx7BUwyOD+utIjMDyId17+HBDbz4Vsdwd3tzAAKMD5uPXusDJB9/BpsQfwKZj3f4sNmc8R+gnH90+LBF61NqKOcfvDLbNrYptvmXWNPAYM2cDQQf3Z0v9LIrz+edTvknxaEYmi9BzHfF+aCHkjJ59xhjXjBm7GLVJ5ofMOaT1fnlJX330HuaYu65MbGqMigCDIVvL/jKnJXvLHVNWoqZJYjzhZqPuTy+aMf5bklyq0IOZX5f8SWF4LPytCy4TN7up2gDJj9cdEsLzpeiXE9vRWFRTFyUAeLzmOArWG4jlzuRYou3Wg6c/PhmTX6cOR+72NjivapoUYHwlQzV+bFHjKEz30fCFB01MHxvFR8uUg95Q7S3MDVTtJ0A4CtCwfc3EXwM5UNUjpFBMOUeza6R/Pud6A0To5h7hTEuilvp5eW5GJP6zs7CkX8/FrkBJiEmASFhGFAzoHZAeJMldrhDLP9+MWL7XgeIG761D+B+NmLeXCddmTv+/DkQ7rdzpUOjp/EQjWD8f4CSkpKSkpKSkpKSkpLSb+gfrZBQZBlzK+0AAAAASUVORK5CYII=" /> */}
          </div>
          <div className="info">
            <h3>NBA</h3>
            <small>New York City, New York 15 Minutes Ago</small>
          </div>
        </div>
        <span className="edit">
          <i className="uil uil-ellipsis-h" />
        </span>
      </div>
      <div className="photo">
        <img src="https://img.bleacherreport.net/img/images/photos/002/220/088/163969370_crop_exact.jpg?w=1200&h=1200&q=75" />
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
          Liked by <b>Robert Gordon</b> and <b>2,323 others</b>
        </p>
      </div>
      <div className="caption">
        <p>
          <b>nba</b> LeBron James dunk on Jason Terry.
        </p>
      </div>
      <div className="comments text-muted">View all 277 comments</div>
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

export default NBA;