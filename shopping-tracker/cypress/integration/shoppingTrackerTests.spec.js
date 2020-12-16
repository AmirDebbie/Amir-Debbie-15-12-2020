describe("Shopping Tracker Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/list");
  });

  it("Tests the ability to add item to list", () => {
    const inputs = [
      {
        field: "name",
        errors: {
          id: "nameError",
        },
        value: "Computer",
      },
      {
        field: "store",
        errors: {
          id: "storeError",
        },
        value: "Bug",
      },
      {
        field: "priceInShekels",
        errors: {
          values: [
            {
              falseValue: "abc",
            },
            {
              falseValue: "123..3",
            },
            {
              falseValue: "123.3.",
            },
          ],
          id: "priceError",
        },
        value: "300.5",
      },
      {
        field: "deliveryDate",
        errors: {
          id: "deliveryDateError",
        },
        value: "2020-12-12",
      },
    ];

    cy.get(".itemListItem").should("have.length", 5);
    cy.get("#addItemButton").click();
    cy.get("#submitButton").click();
    inputs.forEach((input) => {
      cy.get(`#${input.errors.id} > .MuiIconButton-label > .MuiSvgIcon-root`);
      if (input.errors.values) {
        input.errors.values.forEach((error) => {
          cy.get(`#${input.field}`).type(error.falseValue);
          cy.get("#submitButton").click();
          cy.get(
            cy.get(
              `#${input.errors.id} > .MuiIconButton-label > .MuiSvgIcon-root`
            )
          );
          cy.get(`#${input.field}`).clear();
        });
      }
      cy.get(`#${input.field}`).type(input.value);
    });
    cy.get("#submitButton").click();
    cy.get(".itemListItem").should("have.length", 6);
  });

  it("Tests the ability to mark item as received", () => {
    cy.get(".itemListItem").should("have.length", 5);
  });
});
