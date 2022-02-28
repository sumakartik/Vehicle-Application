describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("header contains top bar with a message that says welcome", () => {
    cy.findByRole("banner").should("contain", "Welcome");
    cy.findByText("Welcome to the Vehicle Dictionary").should("exist");
  });

  it("contains a search bar", () => {
    cy.findByRole("textbox").click();
  });
  
  it("search bar asks you to search by VIN", () => {
    cy.findByText("PLEASE SEARCH A VIN TO LEARN VEHICLE SPECS").should("exist");
  })

});
