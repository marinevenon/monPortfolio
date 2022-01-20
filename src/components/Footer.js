import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Marine Venon</h1>
          <PText>
            Actuellement en formation développeuse web et web mobile, à travers
            ce site je souhaite montrer mon avancé dans le milieu de la
            programmation
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Liens importants"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'A propos',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projets',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Infos"
            links={[
              {
                title: '+33608911811',
                path: 'tel:+33608911811',
              },
              {
                title: 'm.venon45@gmail.com',
                path: 'mailto:m.venon45@gmail.com',
              },
              {
                title: 'St Denis de l Hotel, Centre, France',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Réseaux sociaux"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/marine-venon-99460a205/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/marinevenon',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/marinev_dev/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Marine Venon | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              MV
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
