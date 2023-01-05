import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mwkjkblv");
  if (state.succeeded) {
    console.log("yes?");

    return (
      <ContactContainer>
        <ContactDetails>
          <Header>Contact us for a quote:</Header>
          <Info>lucasteelandfabrication@gmail.com</Info>
          <Info>(720) 329-9769</Info>
        </ContactDetails>
        <FormCompletionMessage>
          <Header>Form Submitted - Thank you!</Header>
          <Info>We'll get back to you as soon as we can.</Info>
        </FormCompletionMessage>
      </ContactContainer>
    );
  }

  return (
    <ContactContainer>
      <ContactDetails>
        <Header>Contact us for a quote:</Header>
        <Info>lucasteelandfabrication@gmail.com</Info>
        <Info>(720) 329-9769</Info>
      </ContactDetails>
      <ContactForm onSubmit={handleSubmit}>
        <FormOrganizer>
          <FormField>
            <Label htmlFor="firstName">First Name:</Label>
            <Input id="lastName" type="text" name="lastName"></Input>
            <ValidationError
              prefix="First Name"
              field="firstName"
              errors={state.errors}
            />
          </FormField>
          <FormField>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input id="lastName" type="text" name="lastName"></Input>
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
          </FormField>
        </FormOrganizer>
        <FormOrganizer>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" type="email" name="email"></Input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </FormField>
          <FormField>
            <Label htmlFor="phone">Phone:</Label>
            <Input id="phone" type="text" name="phone"></Input>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </FormField>
        </FormOrganizer>
        <FormFieldMessage>
          <Label>Message:</Label>
          <MessageArea
            id="message"
            name="message"
            type="text"
            rows="5"
            cols="65"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </FormFieldMessage>
        {/* <button type="submit" disabled={state.submitting}>
          Submit
        </button> */}
        <Button name="Submit" type="submit" disabled={state.submitting} />
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

const FormCompletionMessage = styled.div``;
