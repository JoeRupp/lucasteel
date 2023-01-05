import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactDetails>
        <Header>Contact us for a quote:</Header>
        <Info>lucasteelandfabrication@gmail.com</Info>
        <Info>(720) 329-9769</Info>
      </ContactDetails>
      <ContactForm>
        <FormOrganizer>
          <FormField>
            <Label>First Name:</Label>
            <Input type="text"></Input>
          </FormField>
          <FormField>
            <Label>Last Name:</Label>
            <Input type="text"></Input>
          </FormField>
        </FormOrganizer>
        <FormOrganizer>
          <FormField>
            <Label>Email:</Label>
            <Input type="email"></Input>
          </FormField>
          <FormField>
            <Label>Phone:</Label>
            <Input type="text"></Input>
          </FormField>
        </FormOrganizer>
        <FormFieldMessage>
          <Label>Message:</Label>
          <MessageArea type="text" rows="5" cols="65" />
        </FormFieldMessage>
        <Button name="Submit" />
      </ContactForm>
      <FormCompletionMessage>
        <Header>Form Submitted - Thank you!</Header>
        <Info>We'll get back to you as soon as we can.</Info>
      </FormCompletionMessage>
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

const FormOrganizer = styled.div`
  display: flex;
`;

const FormField = styled.div`
  margin: 25px 5% 0 0;
  width: 45%;
`;

const FormFieldMessage = styled.div`
  margin: 25px 5% 25px 0;
  width: 95%;
  display: flex;
  flex-direction: column;
`;

const ContactDetails = styled.div``;

const Info = styled.h2``;

const Header = styled.h1`
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 2rem;
  margin-top: 25px;
`;

const Input = styled.input`
  height: 1.5rem;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const MessageArea = styled.textarea``;

const FormCompletionMessage = styled.div`
  display: none;
`;
