import React from 'react';
import './index.scss';
import { ReactComponent as EmailIcon } from '../../assets/images/email.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/images/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../assets/images/telegram.svg';

export default function Footer() {
  return (
    <footer id='contact' className='footer'>
      <div className='container'>
        <h2 className='footer--header'>Get in touch!</h2>
        <ul className='footer--links'>
          <li className='footer--link-item'>
            <a
              href='mailto:zeebhombal@gmail.com'
              className='footer--link-item__logo-container'
            >
              <EmailIcon />
            </a>
          </li>
          <li className='footer--link-item'>
            <a
              href='https://www.linkedin.com/in/bhombalziyad/'
              target='_blank'
              rel='noreferrer'
              className='footer--link-item__logo-container'
            >
              <LinkedinIcon />
            </a>
          </li>
          <li className='footer--link-item'>
            <a
              href='https://instagram.com/bh0mbal'
              target='_blank'
              rel='noreferrer'
              className='footer--link-item__logo-container'
            >
              <InstagramIcon />
            </a>
          </li>
          <li className='footer--link-item'>
            <a
              href='https://t.me/bh0mbal'
              target='_blank'
              rel='noreferrer'
              className='footer--link-item__logo-container'
            >
              <TelegramIcon />
            </a>
          </li>
        </ul>
        <h2 className='footer--copyright-text'>© Ziyad Bhombal 2021</h2>
      </div>
    </footer>
  );
}
