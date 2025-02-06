describe("LucaSteel contact page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/contact").wait(1000);
  });

  it("should include contact information", () => {
    cy.get("h1").first().should("have.text", "CONTACT US FOR A QUOTE:");
    cy.get("#emailLink").should(
      "have.text",
      "lucasteelandfabrication@gmail.com"
    );
    cy.get("h2").should("have.text", "(720) 316-3344Wheat Ridge, CO 80033");
  });

  it("should include a form for the user to fill out", () => {
    cy.get("form").contains("First Name*");
    cy.get("form").contains("Last Name");
    cy.get("form").contains("Email*");
    cy.get("form").contains("Phone");
    cy.get("form").contains("Message");
    cy.get("form").contains("* required field");
    cy.get("form").find("button").should("have.text", "Submit");
  });

  it("should alert the user if there is missing or incorrect info", () => {
    cy.get("form").find("button").click();
    cy.get("#firstName")
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");

    cy.get("form").find("#firstName").type("Cypress");
    cy.get("form").find("button").click();
    cy.get("#email")
      .invoke("prop", "validationMessage")
      .should("equal", "Please fill out this field.");

    cy.get("form").find("#firstName").type("Cypress");
    cy.get("form").find("#email").type("notAnEmail");
    cy.get("form").find("button").click();
    cy.get("#email")
      .invoke("prop", "validationMessage")
      .should(
        "equal",
        "Please include an '@' in the email address. 'notAnEmail' is missing an '@'."
      );
  });

  it("should display a message thanking the user once the form is submitted", () => {
    cy.intercept("POST", "https://formspree.io/f/mwkjkblv", {
      next: "/thanks",
      ok: true,
    });
    cy.get("#firstName").type("Cypress");
    cy.get("#lastName").type("Test");
    cy.get("#email").type("Cypress@test.com");
    cy.get("#telephone").type("123-456-7890");
    cy.get("#message").type("This is a Cypress test - please disregard");
    cy.get("form").find("button").click().wait(1000);
    cy.get("#formCompletionMessage")
      .find("h1")
      .should("have.text", "Form Submitted - Thank you!");
    cy.get("#formCompletionMessage")
      .find("h2")
      .should("have.text", "We'll get back to you as soon as we can.");
  });
});
