import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

interface Social {
  icon: JSX.Element;
  link: string;
}

const socials: Social[] = [
  {
    icon: <FaGithub className="icon w-6 h-6" />,
    link: "https://github.com/Curtinhas?tab=repositories",
  },
  {
    icon: <FaLinkedin className="icon w-6 h-6" />,
    link: "https://www.linkedin.com/in/carlos-curtinhas-686a882a9/",
  },
  {
    icon: <FaFacebook className="icon w-6 h-6" />,
    link: "https://www.facebook.com/carlos.curtinhas",
  },
];

export const Socials: React.FC = () => {
  return (
    <div className="flex items-center flex-wrap gap-4">
      {socials.map((social, i) => (
        <Button key={i} link={social.link} isIcon>
          <span className="place-items-center w-7 h-7 gap-6">
            {social.icon}
          </span>
        </Button>
      ))}
    </div>
  );
};

interface ButtonProps {
  link: string;
  isIcon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ link, isIcon, children }) => {
  if (isIcon) {
    return (
      <a href={link} className="button">
        {children}
      </a>
    );
  } else {
    return (
      <button className="button" onClick={() => window.open(link, "_blank")}>
        {children}
      </button>
    );
  }
};
