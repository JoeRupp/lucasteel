describe("LucaSteel home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("should include a hero image", () => {
    cy.get("#homePageHeroImage").should("be.visible");
  });

  it("should include the title What we Offer", () => {
    cy.get("h1").should("have.text", "WHAT WE OFFER:");
  });

  it("should include a list fo services provided with a title, image, and info", () => {
    cy.get("#expandableOrganizer")
      .find("h3")
      .first()
      .should("have.text", "Custom Projects");
    cy.get("#expandableOrganizer")
      .find("p")
      .last()
      .should(
        "have.text",
        "We use CAD to be able to show customers what a project will look like before construction. As well as the ability to design parts in-house and produce those parts."
      );
    cy.get("#expandableOrganizer").children().eq(3).find("img").should("exist");
  });

  it("should include a Get a Quote button at the bottom that navigates to the contact page", () => {
    cy.get("#linkButton").should("have.text", "Get a Quote").click();
    cy.url().should("include", "/contact");
  });
});
