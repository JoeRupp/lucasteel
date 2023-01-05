import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("mwkjkblv");
  if (state.succeeded) {
    return (
      <ContactContainer>
        <ContactDetails>
          <Header>Contact us for a quote:</Header>
          <EmailInfo
            onClick={() =>
              (window.location = "mailto:lucasteelandfabrication@gmail.com")
            }
          >
            lucasteelandfabrication@gmail.com
          </EmailInfo>
          <Info>(720) 329-9769</Info>
          <Info>Wheat Ridge, CO 80033</Info>
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
        <EmailInfo
          onClick={() =>
            (window.location = "mailto:lucasteelandfabrication@gmail.com")
          }
        >
          lucasteelandfabrication@gmail.com
        </EmailInfo>
        <Info>(720) 329-9769</Info>
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
              placeholder="(720) 329-9769"
            ></Input>
          </FormField>
        </FormOrganizer>
        <FormFieldMessage>
          <Label>Message</Label>
          <MessageArea
            id="message"
            name="message"
            type="text"
            rows="5"
            cols="65"
            placeholder="Tell us a little about what you are looking for here."
          />
        </FormFieldMessage>
        <p>* required field</p>
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

const Info = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
`;

const EmailInfo = styled(Link)`
  text-decoration: none;
  color: black;
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

const MessageArea = styled.textarea``;

const FormCompletionMessage = styled.div``;
