describe("LucaSteel about page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/about").wait(1000);
  });

  it("should display a hero image", () => {
    cy.get("#aboutPageHeroImage").should("exist");
  });

  it("should include the title About US", () => {
    cy.get("h1").first().should("have.text", "ABOUT US:");
  });

  it("should include copy about the company", () => {
    cy.get("p")
      .first()
      .should(
        "have.text",
        "LucaSteel Welding and Fabrication is a welding shop based out of Wheat Ridge, Colorado. Lucas Onorato, the owner, and founder, has 5+ years of experience working with clients to build many projects varying in size and material. He started the shop with the goal to create one-of-a-kind products that fit the need of all and any clients. LucaSteel has the skills and experience to create any project of the highest quality possible.We pride ourselves on the ability to think out of the box and problem-solve to create solutions that are practical and look excellent.Get to know us better and check out the team below!"
      );
  });

  it("should include the title Meet the Team", () => {
    cy.get("h1").last().should("have.text", "MEET THE TEAM:");
  });

  it("should display team members", () => {
    cy.get("#teamProfileOrganizer").children().should("have.length", 2);
  });

  it("should display a team member's picture, name, title, and bio", () => {
    cy.get("#teamProfileOrganizer")
      .children()
      .first()
      .find("img")
      .should("be.visible");
    cy.get("#teamProfileOrganizer")
      .children()
      .first()
      .find("h2")
      .should("have.text", "Lucas Onorato");
    cy.get("#teamProfileOrganizer")
      .children()
      .first()
      .find("h3")
      .should("have.text", "Owner/Founder");
    cy.get("#teamProfileOrganizer")
      .children()
      .first()
      .find("p")
      .should(
        "have.text",
        "'If you can dream it, we can build it.' Starting as a kid learning to weld, Lucas has turned his hobby into a business where anything can be made. With a background of working with talented local artists, Lucas quickly excelled in welding sculptures and decorative furnishings. With a passion for creativity and an eye for detail, Lucas can find the solutions clients need while fitting a unique artistic style."
      );
  });
});
