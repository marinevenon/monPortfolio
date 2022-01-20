/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/hero2.JPG';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
//<p className="about__subheading">
                //Bonjour, je suis <span>Marine Venon</span>
             // </p>
export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              
              <h2 className="about__heading">Développeuse Web et Web Mobile</h2>
              <div className="about__info">
                <PText>
                Actuellement en formation à l'AFPA, je suis à la recherche d'un stage afin de valider mes compétences. Cette période a pour but de réaliser un dossier de validation de formation et donc mon entrée officielle dans la profession de Développeuse Web. Ce stage se déroule du 17 mai au 29 juillet 2022. <br />
                Je vous laisse découvrir mon parcous ci-dessous.
                  <br /> <br />
                  Au plaisir de pouvoir vous rencontrer,
                  <br />
                  <br />
                  Marine Venon
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Diplômes</h1>

              <AboutInfoItem
                title="2021 - 2022"
                items={['Formation développeuse web et web mobile','AFPA']}
              />
              <AboutInfoItem
                title="2020"
                items={['Dimplôme Etat Architecte Paysagiste','Gembloux agro-bio']}
              />
              <AboutInfoItem
                title="2019"
                items={['BTSA Aménagements Paysagers','La Mouillère Orléans']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Compétences</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT', 'Vue', 'Angular']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['MySQL', 'PHP', 'Wordpress','Symfony','Ajax']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'InDesign', 'Autocad']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2020"
                items={['Mars Petcare Food', 'Intérimaire']}
              />
              <AboutInfoItem
                title="2019"
                items={['Louis Benech Paysaiste','Architect paysagiste']}
              />
              <AboutInfoItem
                title="2016"
                items={['Paysagiste','Florasign (Allemagne)']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
