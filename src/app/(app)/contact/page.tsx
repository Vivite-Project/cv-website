import PageHeaderContainer from "@/components/atoms/containers/PageHeaderContainer";
import Text from "@atoms/typos/text";
import Title from "@atoms/typos/title";
import {
  contactDescriptionConfig,
  contactTitleConfig,
} from "@configs/pages/contact.config";
import ContactForm from "@organisms/forms/contactForm";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <ContactForm />
    </div>
  );
};

export default Contact;
