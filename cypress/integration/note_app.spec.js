describe("Note app", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000");
  });
  it("front page can be opened", function() {
    cy.contains("Notes");
  });

  it("login form can be opened", function() {
    cy.contains("Login").click();
  });

  it("user can login", function() {
    cy.contains("Login").click();
    cy.get("#username").type("andesol");
    cy.get("#password").type("12345678");
    cy.get("#login-btn").click();

    cy.contains("Andreu logged in");
  });

  describe("when logged in", function() {
    beforeEach(function() {
      cy.contains("Login").click();
      cy.get("#username").type("andesol");
      cy.get("#password").type("12345678");
      cy.get("#login-btn").click();
    });

    it("a new note can be created", function() {
      cy.contains("New note").click();
      cy.get("#new-note-title").type("Title: a note created by cypress");
      cy.get("#new-note-content").type("Content: a note created by cypress");
      cy.get("#new-note-save").click();
      cy.contains("Title: a note created by cypress");
      cy.contains("Content: a note created by cypress");
    });
  });
});
