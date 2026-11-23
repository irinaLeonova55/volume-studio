import { SlEnvolope, SlSocialLinkedin, SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';
import { type ComponentType } from 'react';

interface SocialItem {
  name: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  sizeClass: string;
}

const socialItems: SocialItem[] = [
  { name: 'Email', href: 'mailto:studio@example.com', icon: SlEnvolope, sizeClass: 'w-4 h-4 stroke-[1.25]' },
  { name: 'LinkedIn', href: '/', icon: SlSocialLinkedin, sizeClass: 'w-5 h-5' },
  { name: 'Instagram', href: '/', icon: SlSocialInstagram, sizeClass: 'w-4 h-4' },
  { name: 'Facebook', href: '/', icon: SlSocialFacebook, sizeClass: 'w-5 h-5' },
];

const Social = () => {
  return (
    <div className="flex justify-start gap-3 sm:gap-7 items-end">
      {socialItems.map(({ name, href, icon: Icon, sizeClass }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          className="text-[#6E6963] hover:text-[#F2EFE9] transition-colors duration-200"
        >
          <Icon className={sizeClass} />
        </a>
      ))}
    </div>
  );
};

export default Social;