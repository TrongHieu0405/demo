import React, { Component } from 'react';
import vnTopo from './geo_data/mapvn1.json' ;
import hs from './geo_data/Hoangsa.json' ;
import ts from './geo_data/Truongsa.json' ;

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

const vietnam = [vnTopo, hs, ts];


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <div className="container">
            <div className="nav-wrapper">
                <a href="#" className="nav-brand" style={{textDecoration: "none"}}>
                    <i className="bi bi-brightness-alt-high" style={{fontSize: "30px", color: "green"}}> VietnamTrip</i>
                </a>
                <div className="nav-menu-wrapper">
                    <div className="navbar-menu-header">
                        <p className="navbar-menu-title">Menu</p>
                        <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                    </div>
                    <ul className="nav-menu">
                        <li><a href="#" data-toggle="navbar-submenu" data-target="#destination">Destinations <i
                                    className="ri-arrow-down-s-line"></i></a>
                            <div className="navbar-submenu-wrapper">
                                <div className="navbar-submenu-menu-wrapper" id="destination">
                                    <div className="navbar-submenu-header">
                                        <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                        <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                    </div>
                                    <ul className="navbar-submenu-menu">
                                        <li><a href="#" className="active"
                                                data-toggle="navbar-submenu-content navbar-submenu"
                                                data-target="#destination-north">Province North<i
                                                    className="ri-arrow-right-s-line"></i></a></li>
                                        <li><a href="#" data-toggle="navbar-submenu-content navbar-submenu"
                                                data-target="#destination-central">Province Centrel<i
                                                    className="ri-arrow-right-s-line"></i></a></li>
                                        <li><a href="#" data-toggle="navbar-submenu-content navbar-submenu"
                                                data-target="#destination-south">Province South<i
                                                    className="ri-arrow-right-s-line"></i></a></li>
                                    </ul>
                                </div>
                                <div className="navbar-submenu-content-wrapper active" id="destination-north">
                                    <div className="navbar-submenu-header">
                                        <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                        <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                    </div>
                                    <div className="navbar-submenu-content-title">List Of Provinces</div>
                                    <ul className="navbar-submenu-content">
                                        <li><a href="">Ha Noi</a></li>
                                        <li><a href="">Ha Giang</a></li>
                                        <li><a href="">Bac Can</a></li>
                                        <li><a href="">Cao Bang</a></li>
                                        <li><a href="">Tuyen Quang</a></li>
                                        <li><a href="">Lang Son</a></li>
                                        <li><a href="">Thai Nguyen</a></li>
                                        <li><a href="">Bac Giang</a></li>
                                        <li><a href="">Phu Tho</a></li>
                                        <li><a href="">Quang Ninh</a></li>
                                        <li><a href="">Lao Cai</a></li>
                                        <li><a href="">Đien Bien</a></li>
                                        <li><a href="">Yen Bai</a></li>
                                        <li><a href="">Lai Chau</a></li>
                                        <li><a href="">Hoa Binh</a></li>
                                        <li><a href="">Son La</a></li>
                                        <li><a href="">Bac Ninh</a></li>
                                        <li><a href="">Hai Duong</a></li>
                                        <li><a href="">Ha Nam</a></li>
                                        <li><a href="">Hai Phong</a></li>
                                        <li><a href="">Nam Dinh</a></li>
                                        <li><a href="">Hung Yen</a></li>
                                        <li><a href="">Thai Binh</a></li>
                                        <li><a href="">Ninh Binh</a></li>
                                        <li><a href="">Vinh Phuc</a></li>
                                    </ul>
                                </div>
                                <div className="navbar-submenu-content-wrapper" id="destination-central">
                                    <div className="navbar-submenu-header">
                                        <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                        <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                    </div>
                                    <div className="navbar-submenu-content-title">List Of Provinces</div>
                                    <ul className="navbar-submenu-content">
                                        <li><a href="">Nghe An</a></li>
                                        <li><a href="">Thanh Hoa</a></li>
                                        <li><a href="">Ha Tinh</a></li>
                                        <li><a href="">Quang Tri</a></li>
                                        <li><a href="">Quang Binh</a></li>
                                        <li><a href="">Thua Thien - Hue</a></li>
                                        <li><a href="">Khanh Hoa</a></li>
                                        <li><a href="">Binh Thuan</a></li>
                                        <li><a href="">Ninh Thuan</a></li>
                                        <li><a href="">Quang Nam</a></li>
                                        <li><a href="">Quang Ngai</a></li>
                                        <li><a href="">Da Nang</a></li>
                                        <li><a href="">Binh Dinh</a></li>
                                        <li><a href="">Phu Yen</a></li>
                                    </ul>
                                </div>
                                <div className="navbar-submenu-content-wrapper" id="destination-south">
                                    <div className="navbar-submenu-header">
                                        <a href="#" data-dismiss="navbar-submenu" className="navbar-submenu-back">Back</a>
                                        <a href="#" data-dismiss="navbar-menu" className="navbar-menu-close">&times;</a>
                                    </div>
                                    <div className="navbar-submenu-content-title">List Of Provinces</div>
                                    <ul className="navbar-submenu-content">
                                        <li><a href="">Ho Chi Minh</a></li>
                                        <li><a href="">Binh Duong</a></li>
                                        <li><a href="">Binh Phuoc</a></li>
                                        <li><a href="">Tay Ninh</a></li>
                                        <li><a href="">Dong Nai</a></li>
                                        <li><a href="">Ba Ria Vung Tau</a></li>
                                        <li><a href="">Long An</a></li>
                                        <li><a href="">Dong Thap</a></li>
                                        <li><a href="">An Giang</a></li>
                                        <li><a href="">Tien Giang</a></li>
                                        <li><a href="">Ben Tre</a></li>
                                        <li><a href="">Tra Vinh</a></li>
                                        <li><a href="">Vinh Long</a></li>
                                        <li><a href="">Kien Giang</a></li>
                                        <li><a href="">Hau Giang</a></li>
                                        <li><a href="">Bac Lieu</a></li>
                                        <li><a href="">Soc Trang</a></li>
                                        <li><a href="">Can Tho</a></li>
                                        <li><a href="">Ca Mau</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <button className="button-login">LOGIN</button>
                    </ul>
                </div>
                <a href="#" className="navbar-toggle">
                    <i className="ri-menu-line"></i>
                </a>
            </div>
        </div>
    </nav>
    <header>
        <div className="container">
            <div className="header-image">
                <img className="active" src="images/hero-bg-1.webp" alt="carousel" />
                <img src="images/hero-bg-2.webp" alt="carousel" />
                <img src="images/hero-bg-3.webp" alt="carousel" />
            </div>
            <div className="header-wrapper">
                <h2 className="header-title">Discover the world one adventure at a time</h2>
                <p className="header-description">Discover the world with tour. Explore new destinations and book your next
                    tour today.</p>
                <form className="header-form">
                    <input type="text" placeholder="Search for your adventure..." />
                    <button className="btn"><i className="ri-search-line"></i> Search</button>
                </form>
            </div>
            <div className="header-image-indicator">
                <a href="#" className="active"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
        </div>
    </header>
    <section>
        <div className="container">
          <div className="aside">           
             <div className="map" style={{ marginLeft: "500px"}}>
              <h2 className="destination-title">Map</h2>
               <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 2000,
        center: [105, 15] // coordinate of VietNam [long, lat]
      }}
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <ZoomableGroup center={[104, 17]}>
        {vietnam.map((geoUrl) => (
          <Geographies key={geoUrl} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#808080',
                      stroke: '#212529',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                    hover: {
                      fill: '#e6dfd9',
                      stroke: '#212529',
                      strokeWidth: 0.75,
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        ))}
      </ZoomableGroup>
    </ComposableMap>
    </div>
             </div>
        </div>
    </section>

 <section className="destination">
        <div className="container">
            <h2 className="destination-title">Top Destinations</h2>
            <div className="destination-wrapper">
                <a href="#" className="slider-arrow prev" data-slide="prev" data-target="#destination-list"><i
                        className="ri-arrow-left-s-line"></i></a>
                <a href="#" className="slider-arrow next" data-slide="next" data-target="#destination-list"><i
                        className="ri-arrow-right-s-line"></i></a>
                <div className="destination-list" id="destination-list">
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                            <a className="destinations-list-top-favourite">
                                <i className="ri-heart-3-line"></i>
                            </a>
                            <span className="destinations-list-top-tag">Popular</span>
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="destination">
        <div className="container">
            <h2 className="destination-title">Top Blogs</h2>
            <div className="destination-wrapper">
                <a href="#" className="slider-arrow prev" data-slide="prev" data-target="#destination-list"><i
                        className="ri-arrow-left-s-line"></i></a>
                <a href="#" className="slider-arrow next" data-slide="next" data-target="#destination-list"><i
                        className="ri-arrow-right-s-line"></i></a>
                <div className="destination-list" id="destination-list">
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                            <a className="destinations-list-top-favourite">
                                <i className="ri-heart-3-line"></i>
                            </a>
                            <span className="destinations-list-top-tag">Popular</span>
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="destination-list-top">
                            <img src="images/hero-bg-1.webp" />
                        </div>
                        <div className="destination-list-content">
                            <div className="destination-list-content-location">
                                <i className="ri-global-line"></i>
                                Marrakech, Morocco
                            </div>
                            <a className="destination-list-content-title" href="#">Explore the Magic of Marrakech</a>
                            <div className="destination-list-content-rating">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-half-fill"></i>
                            </div>
                            <div className="destination-list-content-price">
                                from <span>$123</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section className="testimonial">
        <div className="container">
            <h2 className="section-title">Join the Adventure, Read Our Reviews</h2>
            <div className="testimonial-wrapper">
                <div className="testimonial-list">
                    <div>
                        <img src="images/user-2.webp" className="testimonial-user-image" />
                        <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                            fantastic and showed us all the best sights. I highly recommend tour.”</p>
                        <div className="testimonial-user-name">Micheal</div>
                        <div className="testimonial-user-job">Teacher</div>
                    </div>
                    <div>
                        <img src="images/user-2.webp" className="testimonial-user-image" />
                        <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                            fantastic and showed us all the best sights. I highly recommend tour.”</p>
                        <div className="testimonial-user-name">Micheal</div>
                        <div className="testimonial-user-job">Teacher</div>
                    </div>
                    <div>
                        <img src="images/user-2.webp" className="testimonial-user-image" />
                        <p className="testimonial-content">"I had an amazing time on my tour with tour. The guide was
                            fantastic and showed us all the best sights. I highly recommend tour.”</p>
                        <div className="testimonial-user-name">Micheal</div>
                        <div className="testimonial-user-job">Teacher</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div className="container">
            <div className="footer-top">
                <a href="#" className="footer-logo"><img src="images/tour-logo.png" /></a>
                <div className="footer-social">
                    <a href="#"><i className="ri-facebook-fill"></i></a>
                    <a href="#"><i className="ri-instagram-fill"></i></a>
                    <a href="#"><i className="ri-twitter-fill"></i></a>
                    <a href="#"><i className="ri-linkedin-fill"></i></a>
                </div>
            </div>
            <div className="footer-links">
                <div>
                    <div className="footer-links-title">Company</div>
                    <ul className="footer-links-list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                        <li><a href="#">Privacy & Policy</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-links-title">Details</div>
                    <ul className="footer-links-list">
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact |Info</a></li>
                        <li><a href="#">Tour Details</a></li>
                    </ul>
                </div>
                <div>
                    <div className="footer-links-title">Price Details</div>
                    <ul className="footer-links-list">
                        <li><a href="#">Refund Info</a></li>
                        <li><a href="#">Travels</a></li>
                        <li><a href="#">Privacy & Policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © Tour. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

      </div>

    );
  }
}

export default App;

