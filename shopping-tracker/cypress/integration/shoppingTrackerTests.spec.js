describe("Shopping Tracker Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/list");
  });

  it("Test not found route and redirect", () => {
    cy.visit("http://localhost:3000/list/received");
    cy.get("#notFound");
    cy.visit("http://localhost:3000/sdsad");
    cy.get("#notFound");
    cy.visit("http://localhost:3000/lis");
    cy.get("#notFound");
    cy.visit("http://localhost:3000/");
    cy.url().should("equal", "http://localhost:3000/list");
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
        field: "priceInUSD",
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
      cy.get(`#${input.errors.id}`);
      if (input.errors.values) {
        input.errors.values.forEach((error) => {
          cy.get(`#${input.field}`).type(error.falseValue);
          cy.get("#submitButton").click();
          cy.get(`#${input.errors.id}`);
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
    cy.get("#storesButton").click();
    cy.get("#ebay").contains("1");
    cy.get("#itemsButton").click();
    cy.get("#receiveButton0").click();
    cy.get("#storesButton").click();
    cy.get("#ebay").should("not.exist");
    cy.get("#itemsButton").click();
    cy.get(".itemListItem").should("have.length", 4);
    cy.get("#receiveButton0").click();
    cy.get(".itemListItem").should("have.length", 3);
    cy.get("#openMenu").click();
    cy.get("#receivedItems").click();
    cy.get(".receivedListItem").should("have.length", 2);
    cy.get("#storesButton").click();
    cy.get("#ebay").contains("1");
  });

  it("Tests search bar", () => {
    cy.get(".itemListItem").should("have.length", 5);
    cy.get("#searchBar").type("Amazon");
    cy.get(".itemListItem").should("have.length", 3);
    cy.get("#searchBar").clear().type("one");
    cy.get(".itemListItem").should("have.length", 3);
    cy.get("#searchBar").type("p");
    cy.get(".itemListItem").should("have.length", 1);
  });
});
