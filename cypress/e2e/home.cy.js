describe("Auth", () => {
  it("should not see the endpoint /admin because i'm not log in", () => {
    cy.visit("/admin").then(($p) => {
      cy.visit("/api/auth/signin?callbackUrl=%2Fadmin");
    });
  });

  it("should register, sign out and check the protected endpoint /admin in the admin section", () => {
    cy.visit("/");
    cy.get('[data-test="admin"]').click();
    cy.get("form").within(($form) => {
      cy.get('input[name="username"]').type(""); //? On the ENV
      cy.get('input[name="email"]').type(""); //? On the ENV
      cy.get('input[name="password"]').type( //? On the ENV
        ""
      );
      cy.root().submit();
    });
    cy.contains(/Sign Out/i).should("be.visible");
    cy.get('[data-test="signout"]').click();
    cy.get("button[type=submit]").click();
    //? At this point i should see the login again, because i'm not login
    cy.visit("/admin");
  });

  it("should get an error if i lef a field emplty", () => {
    cy.visit("/");
    cy.get('[data-test="admin"]').click();
    cy.get("form").within(($form) => {
      cy.get('input[name="username"]').type(" ");
      cy.root().submit();
    });
  });
});
