"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputText from "@atoms/forms/inputText";
import InputTextArea from "@atoms/forms/inputTextArea";
import SubmitButton from "@atoms/forms/submitButton";
import { toastError, toastSuccess } from "@helpers/toast";
import Contact from "@interfaces/contact";

const ContactFormBlock: React.FC = () => {
  const initialValues: Contact = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().matches(/^[0-9\s\-\+\(\)]*$/, "Invalid phone number"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (
    values: Contact,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        resetForm();
        toastSuccess("Message sent successfully!");
      } else {
        toastError("Something went wrong, please try again.");
      }
    } catch (error) {
      toastError("Something went wrong, please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
          <InputText
            id="firstName"
            label="First name"
            required
            error={errors.firstName && touched.firstName}
          />
          <InputText
            id="lastName"
            label="Last name"
            required
            error={errors.lastName && touched.lastName}
          />
          <InputText
            id="email"
            label="Email address"
            required
            error={errors.email && touched.email}
          />
          <InputText
            id="phone"
            label="Phone number"
            error={errors.phone && touched.phone}
          />
          <InputTextArea
            id="message"
            label="Message"
            className="md:col-span-2"
            required
            error={errors.message && touched.message}
          />
          <SubmitButton
            isSubmitting={isSubmitting}
            label="Send message"
            className="mt-4 justify-self-center md:col-span-2"
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactFormBlock;
