import { NavbarContrastContext } from 'context/NavbarContrastContext';
import { useContext } from 'react';

const socialLinks = [
  {
    href: "https://discord.gg/6dewW2j",
    iconPrefix: 'discord'
  },
  {
    href: "https://twitter.com/algohispano",
    iconPrefix: 'twitter'
  },
  {
    href: "https://www.youtube.com/c/AlgoHispano/videos",
    iconPrefix: 'twitch'
  },
  {
    href: "https://www.twitch.tv/algohispano",
    iconPrefix: 'youtube'
  },
];

function Social() {
  const {isNavbarContrast} = useContext(NavbarContrastContext);

  return (
    <div className="navbar__extra__social">
      {
        socialLinks.map(({ iconPrefix, href}) => (
          <a
            key={iconPrefix}
            href={href}
            className="navbar__extra__social__link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className={`fa-brands fa-${iconPrefix} ${isNavbarContrast && 'opposite-hover'}`} />
          </a>
        ))
      }
    </div>
  )
};

export default Social;
