import {
  addToCartUrl,
  apiRequest,
  loginUrl,
  password,
  productIdUrl,
  userCookie,
  username,
  viewCartUrl,
} from "../page-objects/api-page-objects/requests.page";

describe("CartAPI", () => {
  it("can login and add items in cart", () => {
    apiRequest("POST", loginUrl, { username, password });

    cy.request(productIdUrl(1));
    apiRequest("POST", addToCartUrl, {
      id: "096d673a-e86a-f9c7-40fd-2f44d75a85b8",
      cookie: userCookie,
      prod_id: 1,
    });

    cy.request(productIdUrl(7));
    apiRequest("POST", addToCartUrl, {
      id: "f1d028a4-e264-860e-a7e2-a41181f4d65f",
      cookie: userCookie,
      prod_id: 7,
    });

    apiRequest("POST", viewCartUrl, { cookie: userCookie, flag: true }).should(
      ({ body }) => {
        expect(body.Items).to.have.length(2);
      }
    );
  });
});
