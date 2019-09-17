import React from 'react';
import PropTypes from 'prop-types';
import MyPhoto from '../../../../../assets/images/my-photo.jpg';


const about = (
    {
        date: {
            name, surname, age, city, interests, hobby, job,
            social: {fb, twitter, gMail, github, linkedIn}
        }
    }
) => {
    return (
        <div className="section-2" id="section-2">
            <div className="container">

                <div className="about">
                    <div className="about__photo">
                        <article className="about__photo__article">
                            <figure>
                                <h2>{name}</h2>
                                <p>I am a {job}</p>
                            </figure>
                            <img src={MyPhoto} alt="It's me :)"/>
                        </article>
                    </div>

                    <div className="about__info">
                        <div className="about__info__text">
                            <h2>{name} {surname} </h2>
                            <span>{job}</span>
                            <p>Age: {age}</p>
                            <p>City: {city}</p>
                            <p>Interests: {interests}</p>
                            <p>Hobby: {hobby}</p>
                            <p>About me: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos officiis quia
                                quis.
                                Eligendi facere necessitatibus nulla? Accusamus adipisci, aut deserunt ea fugit
                                ipsa,
                                mollitia nisi, officia quis quos recusandae suscipit.</p>
                        </div>

                        <div className="about__info__social">
                            <div className="about__info__social__item">
                                <a href={fb}>
                                    <i className="fab fa-facebook-f"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href={twitter}>
                                    <i className="fab fa-twitter"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href={`mailto: ${gMail}`}>
                                    <i className="fab fa-google-plus-g"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href={github}>
                                    <i className="fab fa-git-square"/>
                                </a>
                            </div>
                            <div className="about__info__social__item">
                                <a href={linkedIn}>
                                    <i className="fab fa-linkedin-in"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

about.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    age: PropTypes.number,
    city: PropTypes.string,
    interests: PropTypes.string,
    hobby: PropTypes.string,
    job: PropTypes.string,
    fb: PropTypes.string,
    twitter: PropTypes.string,
    gMail: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string
};


export default about;
