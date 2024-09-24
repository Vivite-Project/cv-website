import HeroContainer from "@atoms/containers/heroContainer";
import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import {
  contactDescriptionConfig,
  contactTitleConfig,
} from "@configs/pages/contact.config";
import ContactForm from "@/components/organisms/forms/contactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <HeroContainer>
        <Title>{contactTitleConfig}</Title>
        <Text>{contactDescriptionConfig}</Text>
      </HeroContainer>
      <ContactForm />
    </div>
  );
};

export default Contact;
