import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactForm>
        <Header>Contact us for a quote:</Header>
        <Label>First Name</Label>
        <Input type="text"></Input>
        <Label>Last Name</Label>
        <Input type="text"></Input>
        <Label>Email</Label>
        <Input type="email"></Input>
        <Label>Phone</Label>
        <Input type="text"></Input>
        <Label>Message</Label>
        <MessageArea type="text" rows="5" cols="70" />
        <Button name="Submit" />
      </ContactForm>
      <ContactDetails>
        <Header>Contact Info:</Header>
        <Info>lucasteelandfabrication@gmail.com</Info>
        <Info>(720) 329-9769</Info>
      </ContactDetails>
    </ContactContainer>
  );
};

export default ContactPage;

const ContactContainer = styled.section`
  width: 100vw;
`;

const ContactForm = styled.form``;

const ContactDetails = styled.div``;

const Header = styled.h1``;

const Input = styled.input``;

const Label = styled.label``;

const MessageArea = styled.textarea``;

const Info = styled.h2``;
