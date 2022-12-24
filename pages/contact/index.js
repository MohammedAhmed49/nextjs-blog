import Head from "next/head";
import React from "react";
import ContactForm from "../../components/contact-form/contact-form";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact me</title>
      </Head>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
