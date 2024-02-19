import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { LuMails } from 'react-icons/lu'
import {
  SocialLinksContainer,
  SocialLinksItem,
  SocialLinksList
} from './style'
const SocialLinks: React.FC = () => {
  return (
    <SocialLinksContainer className="d-flex flex-column align-items-center text-light">
      <h3>Social Media</h3>
      <SocialLinksList className="d-flex justify-content-center gap-3 p-0">
        <SocialLinksItem>
          <a
            href="https://github.com/Kameha1011"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="linkIcon" />
          </a>
        </SocialLinksItem>
        <SocialLinksItem>
          <a
            href="https://www.linkedin.com/in/omar-flores2001/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkIcon" />
          </a>
        </SocialLinksItem>
        <SocialLinksItem>
          <a href="mailto:omrflrs2001@hotmail.com">
            <LuMails className="linkIcon" />
          </a>
        </SocialLinksItem>
      </SocialLinksList>
    </SocialLinksContainer>
  )
}

export default SocialLinks
