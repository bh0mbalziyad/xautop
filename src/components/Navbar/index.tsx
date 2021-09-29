import React, { useRef, useEffect } from 'react';
import './index.scss';
import { ReactComponent as HamburgerIcon } from '../../assets/images/hamburger.svg';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

function Navbar() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayToggle = () => {
    overlayRef.current?.classList.toggle('active');
    drawerRef.current?.classList.toggle('active');
    document.body.classList.toggle('sidebar-open');
  };

  // useEffect(() => {
  //   document.querySelectorAll('.nav--link-item a').forEach((anchor) => {
  //     anchor.addEventListener('click', (e) => {
  //       e.preventDefault();
  //       const href = anchor.getAttribute('href');
  //       if (href !== null)
  //         document.getElementById(href)?.scrollTo({ behavior: 'smooth' });
  //     });
  //   });
  // });

  const links = (isMobile: boolean = false) => (
    <ul className='nav--links'>
      <li className='nav--link-item'>
        <a
          onClick={isMobile ? overlayToggle : undefined}
          className='current'
          href='#top'
        >
          Home
        </a>
      </li>
      <li className='nav--link-item'>
        <a onClick={isMobile ? overlayToggle : undefined} href='#about'>
          About
        </a>
      </li>
      <li className='nav--link-item'>
        <a onClick={isMobile ? overlayToggle : undefined} href='#works'>
          Works
        </a>
      </li>
      <li className='nav--link-item'>
        <a onClick={isMobile ? overlayToggle : undefined} href='#contact'>
          Contact Me
        </a>
      </li>
    </ul>
  );

  return (
    <>
      <header id='home' className='header'>
        <div className='container nav-container'>
          <nav className='nav'>
            <span className='nav--logo__container'>
              <Logo className='nav--logo' />
            </span>
            {links()}
            <span
              className='nav--mobile-menu-toggle__container'
              onClick={overlayToggle}
            >
              <HamburgerIcon className='nav--mobile-menu-toggle' />
            </span>
          </nav>
        </div>
      </header>
      <div
        ref={overlayRef}
        onClick={overlayToggle}
        className='mobile--overlay'
      ></div>
      <div ref={drawerRef} className='mobile--drawer'>
        {links(true)}
      </div>
    </>
  );
}

export default Navbar;
