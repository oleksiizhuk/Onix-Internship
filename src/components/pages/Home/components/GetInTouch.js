import React from 'react';

const GetInTouch = () => {
  return (
    <div className="section-3" id="section-3">

      <div className="container">
        <div className="section-3__feedback">
          <div className="section-3__feedback__get-in">
            <div className="section-3__feedback__get-in__title">
              <h2>Get in Touch</h2>
              <span>In order to get in touch use the contact form below:</span>
            </div>
            <div className="section-3__feedback__get-in__form">
              <form action="#">
                <input type="text" placeholder="Name (Required)" />
                <input type="text" placeholder="Email (Required)" />
                <input type="text" placeholder="Subject" />
                <textarea
                  name="text"
                  id="textarea"
                  cols="30"
                  rows="10"
                  placeholder="Write your message here..."
                />
                <input type="submit" value="Send" className="submit" />
              </form>
            </div>
          </div>

          <div className="section-3__feedback__contact_info">
            <p className="section-3__feedback__contact_info__text">
              <span>Quisque Hendrerit:</span>
                            dapi- bus,
                            ornare nibh vitae,
                            viverra nibh. Fusce vitae aliquam tellus. Proin sit amet volutpat libero. Nulla sed nunc et
                            tortor
                            luctus faucibus morbi vitae.
            </p>
            <p className="section-3__feedback__contact_info__contact">
              <i className="fas fa-map-marker-alt" />
              <span>Elm St. 14/05 Lost City</span>
            </p>
            <p className="section-3__feedback__contact_info__contact">
              <i className="fas fa-phone" />
              <span>+ 3528 331 86 35</span>
            </p>
            <p className="section-3__feedback__contact_info__contact">
              <i className="fas fa-envelope" />
              <span>info@hexalcorp.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
