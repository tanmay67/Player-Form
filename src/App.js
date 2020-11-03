import './App.css';

function App() {
  return (
    <div>
      <div className="wrapper">
        <div className="upper-button-left">
          <p className="p">Profile</p>
        </div>
        <div className="upper-button-right" style={{ marginLeft: 100 }}>
          <p className="p">History </p>
        </div>
      </div>
      {/* menu button */}
      <div style={{ marginLeft: 1014, marginTop: 97 }}>
        <img
          alt="menu"
          src="img/icon-menu-hamburger.png"
          srcset="img/icon-menu-hamburger@2x.png 2x,
             img/icon-menu-hamburger@3x.png 3x"
          className="Icon-Menu-Hamburger"
        />
      </div>

      {/* image and name */}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ marginLeft: 570, marginTop: 13 }}>
          <img
            alt="player"
            src="img/icon-menu-hamburger.png"
            srcset="img/icon-menu-hamburger@2x.png 2x,
             img/icon-menu-hamburger@3x.png 3x"
            className="player-image"
          />
        </div>
        <div>
          <div style={{ marginLeft: 33, marginTop: 14 }}>
            <input
              className="input-name"
              type="text"
              style={{
                border: 0,
                outline: '0px',
              }}
              placeholder="first name"
            />
            <hr
              style={{
                width: 327,
                height: 1,
                backgroundColor: '#979797',
                margin: 0,
                padding: 0,
              }}
            />
          </div>
          <div style={{ marginLeft: 33 }}>
            <input
              className="input-name"
              type="text"
              style={{
                border: 0,
                outline: '0px',
              }}
              placeholder="Last name"
            />
            <hr
              style={{
                width: 327,
                height: 1,
                backgroundColor: '#979797',
                margin: 0,
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div style={{ marginTop: 30, marginLeft: 570 }}>
        <div className="contact">
          <p>Contact</p>
        </div>
        <div className="card">
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img alt="" src="img/icon-orange-map.svg" class="Icon-Orange-Map" />
            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Location
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="Los Angeles, CA"
              />
            </div>
          </div>
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              alt=""
              src="img/icon-orange-phone.png"
              srcset="img/icon-orange-phone@2x.png 2x,
             img/icon-orange-phone@3x.png 3x"
              className="Icon-Orange-Map"
            />

            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Phone
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="5647354678"
              />
            </div>
          </div>
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              alt=""
              src="img/icon-orange-mail.svg"
              class="Icon-Orange-Map"
            />
            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Email
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="timbreezy@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Details */}
      <div style={{ marginTop: 30, marginLeft: 570 }}>
        <div className="contact">
          <p>Details</p>
        </div>
        <div className="card-details">
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img alt="" src="img/icon-orange-map.svg" class="Icon-Orange-Map" />
            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Points
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="1,240"
              />
            </div>
          </div>
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              alt=""
              src="img/icon-orange-phone.png"
              srcset="img/icon-orange-phone@2x.png 2x,
             img/icon-orange-phone@3x.png 3x"
              className="Icon-Orange-Map"
            />

            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Level
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="pro"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Newest Results */}
      <div style={{ marginTop: 30, marginLeft: 570 }}>
        <div className="contact">
          <p>Newest Results</p>
        </div>
        <div className="card-details">
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img alt="" src="img/icon-orange-map.svg" class="Icon-Orange-Map" />
            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Points
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="+300"
              />
            </div>
          </div>
          <div
            className="card-element"
            style={{ display: 'flex', flexDirection: 'row' }}
          >
            <img
              alt=""
              src="img/icon-orange-phone.png"
              srcset="img/icon-orange-phone@2x.png 2x,
             img/icon-orange-phone@3x.png 3x"
              className="Icon-Orange-Map"
            />

            <div
              className="card-text-left"
              style={{ width: 256, height: 24, marginLeft: 14 }}
            >
              Placement
            </div>
            <div>
              <input
                className="input-card"
                type="text"
                style={{
                  border: 0,
                  outline: '0px',
                  backgroundColor: 'white',
                }}
                placeholder="2nd"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
