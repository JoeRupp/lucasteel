import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useForm, ValidationError } from "@formspree/react";
import { COLORS } from "../constants";

const ContactPage: React.FC = () => {
  const [state, handleSubmit] = useForm("mwkjkblv");
  if (state.succeeded) {
    return (
      <ContactContainer>
        <ContactDetails>
          <Header>CONTACT US FOR A QUOTE:</Header>
          <EmailInfo
            id="emailLink"
            onClick={() =>
              (window.location.href =
                "mailto:lucasteelandfabrication@gmail.com")
            }
          >
            lucasteelandfabrication@gmail.com
          </EmailInfo>
          <Info>(720) 316-3344</Info>
          <Info>Wheat Ridge, CO 80033</Info>
        </ContactDetails>
        <FormCompletionMessage id="formCompletionMessage">
          <Header>Form Submitted - Thank you!</Header>
          <Info>We'll get back to you as soon as we can.</Info>
        </FormCompletionMessage>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <ContactDetails>
        <Header>CONTACT US FOR A QUOTE:</Header>
        <EmailInfo
          id="emailLink"
          onClick={() =>
            (window.location.href = "mailto:lucasteelandfabrication@gmail.com")
          }
        >
          lucasteelandfabrication@gmail.com
        </EmailInfo>
        <Info>(720) 316-3344</Info>
        <Info>Wheat Ridge, CO 80033</Info>
      </ContactDetails>
      <ContactForm onSubmit={handleSubmit}>
        <FormOrganizer>
          <FormField>
            <Label htmlFor="firstName">First Name*</Label>
            <Input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="John"
              required
            ></Input>
          </FormField>
          <FormField>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="Doe"
            ></Input>
          </FormField>
        </FormOrganizer>
        <FormOrganizer>
          <FormField>
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="john@email.com"
              required
            ></Input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormField>
          <FormField>
            <Label htmlFor="telephone">Phone</Label>
            <Input
              id="telephone"
              type="telephone"
              name="telephone"
              placeholder="(720) 316-3344"
            ></Input>
          </FormField>
        </FormOrganizer>
        <FormFieldMessage>
          <Label>Message</Label>
          <MessageArea
            id="message"
            name="message"
            placeholder="Tell us what you are looking for"
          />
        </FormFieldMessage>
        <p>* required field</p>
        <Button name="Submit" disabled={state.submitting} />
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactPage;

const ContactContainer = styled.section`
  width: 100vw;
  margin-top: 12%;
  width: 80%;
  padding: 5% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 900px) {
    margin-top: 20%;
    grid-template-columns: 1fr;
    gap: 1em;
  }
  @media (max-width: 560px) {
    margin-top: 30%;
  }
  @media (max-width: 400px) {
    margin-top: 35%;
  }
`;

const ContactForm = styled.form``;

const FormOrganizer = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormField = styled.div`
  margin: 25px 5% 0 0;
  width: 45%;
  @media (max-width: 600px) {
    width: 95%;
  }
`;

const FormFieldMessage = styled.div`
  margin: 25px 5% 25px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContactDetails = styled.div``;

const Info = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const EmailInfo = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${COLORS.black};
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

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

const MessageArea = styled.textarea`
  height: 5rem;
  width: 100%;
`;

const FormCompletionMessage = styled.div``;
