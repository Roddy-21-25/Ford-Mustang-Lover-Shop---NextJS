describe("Pagination", () => {
  it("Next Button Works", () => {
    cy.visit("/");
    cy.get("button[name=next]").click({ multiple: true });
  });
  it("Prev Button Works", () => {
    cy.visit("/");
    cy.get("button[name=next]").click({ multiple: true });
    cy.get("button[name=prev]").click({ multiple: true });
  });
});
