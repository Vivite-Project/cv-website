import Contact from "@/interfaces/contact";

const TemplateContact: React.FC<Readonly<Contact>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => {
  return (
    <div>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Message:</strong>
        <br />
        {message}
      </p>
    </div>
  );
};

export default TemplateContact;
