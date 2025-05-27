import React from 'react';
import { Mail, Github, Instagram } from 'lucide-react';

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, label }) => (
  <a 
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="group p-3 transition-all duration-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
  >
    <div className="transform transition-transform duration-300 group-hover:scale-125">
      {icon}
    </div>
  </a>
);

const SocialIcons: React.FC = () => (
  <>
    <SocialIcon 
      icon={<Mail size={24} className="text-neutral-700 dark:text-neutral-300" />} 
      href="mailto:bk22042005@gmail.com" 
      label="Email"
    />
    <SocialIcon 
      icon={<Github size={24} className="text-neutral-700 dark:text-neutral-300" />} 
      href="https://github.com/bharathkrishna15" 
      label="GitHub"
    />
    <SocialIcon 
      icon={<Instagram size={24} className="text-neutral-700 dark:text-neutral-300" />} 
      href="https://instagram.com/ak__bharath" 
      label="Instagram"
    />
  </>
);

export default SocialIcons;
