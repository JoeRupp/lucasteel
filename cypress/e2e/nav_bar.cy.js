describe("LucaSteel navigation bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("should be able to navigate to the work page", () => {
    cy.get("nav").find("#workNav").click();
    cy.url().should("include", "/work");
  });

  it("should be able to navigate to the shop page", () => {
    cy.get("nav")
      .find("#shopNav")
      .should(
        "have.attr",
        "href",
        "https://www.etsy.com/shop/LucaSteel?listing_id=1170224592&ref=simple-shop-header-name"
      );
  });

  it("should be able to navigate to the about page", () => {
    cy.get("nav").find("#aboutNav").click();
    cy.url().should("include", "/about");
  });

  it("should be able to navigate to the contact page", () => {
    cy.get("nav").find("#contactNav").click();
    cy.url().should("include", "/contact");
  });

  it("should include the LucaSteel logo that navigates to the home page when clicked", () => {
    cy.get("nav").find("#contactNav").click();
    cy.url().should("include", "/contact");
    cy.get("#lucaSteelLogo").click();
    cy.url().should("include", "");
    cy.get("h1").should("have.text", "WHAT WE OFFER:");
  });

  it("should redirect the visitor to a 404 error page if attempting to view a non-existent url address", () => {
    cy.visit("http://localhost:3000/troutfishing").wait(1000);
    cy.get("h1").should("have.text", "404");
  });
});
