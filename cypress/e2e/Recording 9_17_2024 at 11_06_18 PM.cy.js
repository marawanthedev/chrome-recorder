describe("Recording 9/17/2024 at 11:06:18 PM", () => {
  it("tests Recording 9/17/2024 at 11:06:18 PM", () => {
    cy.viewport(771, 729);
    cy.visit("http://localhost:3000/");
    cy.get("#\\:r1\\:").dblclick();
    cy.get("#\\:r1\\:").type("marwan");
    cy.get("#\\:r3\\:").type("s>");
    cy.get("#\\:r3\\:").type("s2");
    cy.get("#\\:r3\\:").type("s2@");
    cy.get("#\\:r3\\:").type("s2@s.com");
    cy.get("a").click();
    cy.get("a").click();
  });
});
