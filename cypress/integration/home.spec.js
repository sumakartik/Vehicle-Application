// describe("Welcome page", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });

//   it("header contains welcome to the vehicle dictionary", () => {
//     cy.findByRole("heading").should("contain", "Vehicle Dictionary");
//     cy.get("p").findByText("There are no recipes to list.").should("exist");
//   })

describe('Welcome Page', () => {
  it('Visits the Welcome Page', () => {
    cy.visit("/")
  })
})
