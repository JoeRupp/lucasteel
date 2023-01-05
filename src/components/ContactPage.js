import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactDetails>
        <Header>Contact Info:</Header>
        <Info>lucasteelandfabrication@gmail.com</Info>
        <Info>(720) 329-9769</Info>
      </ContactDetails>
      <ContactForm>
        <Instructions>Contact us for a quote:</Instructions>
        <FormField>
          <Label>First Name:</Label>
          <Input type="text"></Input>
        </FormField>
        <FormField>
          <Label>Last Name:</Label>
          <Input type="text"></Input>
        </FormField>
        <FormField>
          <Label>Email:</Label>
          <Input type="email"></Input>
        </FormField>
        <FormField>
          <Label>Phone:</Label>
          <Input type="text"></Input>
        </FormField>
        <FormField>
          <Label>Message:</Label>
          <MessageArea type="text" rows="5" cols="70" />
        </FormField>
        <Button name="Submit" />
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;

const ContactContainer = styled.section`
  width: 100vw;
  margin-top: 10%;
  width: 80%;
  padding: 5% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ContactForm = styled.form``;

const FormField = styled.div``;

const ContactDetails = styled.div``;

const Header = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
`;

const Instructions = styled.h2``;

const Input = styled.input`
  height: 1.5rem;
`;

const Label = styled.label``;

const MessageArea = styled.textarea``;

const Info = styled.h2``;
