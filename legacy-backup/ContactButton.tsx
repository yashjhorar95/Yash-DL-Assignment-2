import React from 'react';
import { PORTFOLIO_CONTENT } from '../content';

interface ContactButtonProps {
  className?: string;
  label?: string;
  onClick?: () => void;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  label = 'Contact Me',
  onClick,
  href,
}) => {
  const targetHref =
    href ||
    (PORTFOLIO_CONTENT.personal.contactEmail
      ? `mailto:${PORTFOLIO_CONTENT.personal.contactEmail}`
      : '#contact');

  return (
    <a
      href={targetHref}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 contact-btn px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400 ${className}`}
      aria-label={label}
    >
      {label}
    </a>
  );
};

export default ContactButton;
