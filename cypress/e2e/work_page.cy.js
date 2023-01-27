describe("LucaSteel work page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/work").wait(1000);
  });

  it("should include a list of projects", () => {
    cy.get("#workContainer").children().should("have.length", 7);
  });

  it("should include a previews of each project", () => {
    cy.get("#workContainer")
      .children()
      .first()
      .find("img")
      .should("be.visible");
    cy.get("#workContainer")
      .children()
      .first()
      .find("h1")
      .should("have.text", "Specialty and Custom Furniture");
    cy.get("#workContainer")
      .children()
      .first()
      .find("p")
      .should(
        "have.text",
        "Furniture in a home is always an eye-catcher. We can build furniture that is integrated or a movable unit that can be used for whatever you see fit. We work with clients to design their dream and make it a reality. We can fit any space and any aesthetic."
      );
  });

  it("should open up a more detailed individual project page when a project is clicked that includes a hero image, title, info, and pictures", () => {
    cy.get("#workContainer").children().first().click();
    cy.url().should("include", "/project/1");

    cy.get("img").should(
      "have.attr",
      "src",
      "/static/media/furniture_8.7a1537a3879ec14992b1.jpg"
    );
    cy.get("h1").should("have.text", "Specialty and Custom Furniture");
    cy.get("p")
      .first()
      .should(
        "have.text",
        "Furniture in a home is always an eye-catcher. We can build furniture that is integrated or a movable unit that can be used for whatever you see fit. We work with clients to design their dream and make it a reality. We can fit any space and any aesthetic."
      );
    cy.get("#pictureOrganizer").children().should("have.length", 9);
  });

  it("should project pictures that open up a modal of an enlarged image when click", () => {
    cy.get("#workContainer").children().first().click();
    cy.url().should("include", "/project/1");
    cy.get("#pictureOrganizer").children().first().click();
    cy.get("#imageModal").should("be.visible").click();
    cy.get("#imageModal").should("not.exist");
  });
});
