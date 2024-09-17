describe("formsubmission", () => {
  it("tests formsubmission", () => {
    cy.viewport(771, 729);
    cy.visit("http://localhost:3000/");
    cy.get("#\\:r1\\:").click();
    cy.get("#\\:r1\\:").type("marwan");
    cy.get("#\\:r3\\:").type("s@");
    cy.get("#\\:r3\\:").type("s@s.com");
    cy.get("button").click();
    cy.get("a").click();
  });
});
