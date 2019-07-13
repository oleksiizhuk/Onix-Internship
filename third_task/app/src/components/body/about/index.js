import React from 'react';
import MyPhoto from '../../../images/my-photo.jpg';
import PropTypes from 'prop-types';


function about(props) {


    const prop = this.props;
    console.log(prop);

    return (
        <div className="section-2" id="section-2">
            <div className="container">

                <div className="about">
                    <div className="about__photo">
                        <article className="about__photo__article">
                            <figure>
                                <h2>Oleksii</h2>
                                <p>I am a frontend web developer</p>
                            </figure>
                            <img src={MyPhoto} alt="It's me :)"/>
                        </article>
                    </div>

                    <div className="about__info">
                        <div className="about__info__text">
                            <h2>Oleksii Zhuk</h2>
                            <span>frontend web developer</span>
                            <p>interests: </p>
                            <p>еуые</p>
                        </div>

                        <div className="about__info__social">
                            <div className="about__info__social__item">
                                <a href="https://www.facebook.com/profile.php?id=100007163145347">
                                    <i className="fab fa-facebook-f"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href="https://twitter.com/Oleksii82814989">
                                    <i className="fab fa-twitter"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href="mailto:oleksiizhuk.att@gmail.com">
                                    <i className="fab fa-google-plus-g"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href="https://github.com/oleksiizhuk">
                                    <i className="fab fa-git-square"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%B6%D1%83%D0%BA-317a92162/">
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default about;
