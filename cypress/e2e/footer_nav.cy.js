describe("LucaSteel footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000").wait(1000);
  });

  it("should be able to navigate to the work page", () => {
    cy.get("footer").contains("Work").click();
    cy.url().should("include", "/work");
  });

  it("should be able to navigate to the shop page", () => {
    cy.get("footer")
      .contains("Shop")
      .should(
        "have.attr",
        "href",
        "https://www.etsy.com/shop/LucaSteel?listing_id=1170224592&ref=simple-shop-header-name"
      );
  });

  it("should be able to navigate to the about page", () => {
    cy.get("footer").contains("About").click();
    cy.url().should("include", "/about");
  });

  it("should be able to navigate to the contact page", () => {
    cy.get("footer").contains("Contact").click();
    cy.url().should("include", "/contact");
  });

  it("should be able to navigate to the home page", () => {
    cy.get("footer").contains("Contact").click();
    cy.get("footer").contains("Home").click();
    cy.url().should("include", "");
  });

  it("should be able to navigate to the LucaSteel Facebook", () => {
    cy.get("#facebookIcon").should(
      "have.attr",
      "href",
      "https://www.facebook.com/LucaSteelandFabrication/"
    );
  });

  it("should be able to navigate to the LucaSteel Instagram", () => {
    cy.get("#instagramIcon").should(
      "have.attr",
      "href",
      "https://www.instagram.com/lucas_steel_/"
    );
  });

  it("should include updated copyright info", () => {
    cy.get("footer")
      .find("p")
      .contains(
        "Copyright © 2023 LucaSteel Welding & Fabrication All Rights Reserved."
      );
  });
});
