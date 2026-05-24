import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledCard } from './StyledCard';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faMobile } from '@fortawesome/free-solid-svg-icons';

const contactLinks = [
  {
    href: 'tel:686637099',
    icon: faMobile,
    label: 'Call Carlos Pinedo',
  },
  {
    href: 'mailto:cpinedocsb@gmail.com',
    icon: faInbox,
    label: 'Email Carlos Pinedo',
  },
  {
    href: 'https://www.linkedin.com/in/carlos-pinedo-b661a7130/',
    icon: faLinkedin,
    label: 'LinkedIn profile',
    isExternal: true,
  },
  {
    href: 'https://www.github.com/carlosnumber9',
    icon: faGithub,
    label: 'GitHub profile',
    isExternal: true,
  },
];

export const PresentationCard: React.FC = () => (
  <StyledCard aria-label="Contact methods" role="navigation">
    {contactLinks.map(({ href, icon, label, isExternal }) => (
      <a
        aria-label={label}
        className="contact-link"
        href={href}
        key={href}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}
        title={label}
      >
        <FontAwesomeIcon icon={icon} className="contact-icon" />
      </a>
    ))}
  </StyledCard>
);
