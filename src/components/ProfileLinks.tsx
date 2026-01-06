import React from 'react';
import { ExternalLink, Briefcase, Linkedin, Github, Code } from 'lucide-react';

interface ProfileLinkProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ icon, text, href }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 transition-all duration-300 rounded-2xl bg-white dark:bg-neutral-800 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:translate-y-[-2px]"
    >
      <div className="flex items-center space-x-3">
        <div className="transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <span className="font-medium">{text}</span>
      </div>
      <div className="text-neutral-400 transform transition-transform duration-300 group-hover:translate-x-1">
        <ExternalLink size={18} />
      </div>
    </a>
  );
};

const ProfileLinks: React.FC = () => {
  return (
    <>
      <ProfileLink 
        icon={<Briefcase size={20} className="text-orange-500" />} 
        text="Portfolio Page"
        href="https://bharath2026.vercel.app/"
      />
      <ProfileLink 
        icon={<Linkedin size={20} className="text-[#0A66C2]" />} 
        text="LinkedIn Profile"
        href="https://www.linkedin.com/in/bharathk15/"
      />
      <ProfileLink 
        icon={<Github size={20} className="text-neutral-700 dark:text-white" />} 
        text="Github Profile"
        href="https://github.com/bharathkrishna15"
      />
      <ProfileLink 
        icon={<Code size={20} className="text-green-500" />} 
        text="LeetCode Profile"
        href="https://leetcode.com/u/bharath1522/"
      />
    </>
  );
};

export default ProfileLinks;
