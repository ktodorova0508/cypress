import {
  navigateDemoblaze,
  getAndClickElement,
  getAndTypeValue,
} from "../page-objects/e2e-page-objects/common.page";
import {
  randomString,
  signPasswordId,
  signUp,
  signUpBtnsClass,
  signUpPosition,
  signUsernameId,
  successfulSignUpMsg,
} from "../page-objects/e2e-page-objects/sign-up.page";

const usernameCharacters = "abcdefghijklmnopqrstuvwxyz";
const passwordCharacters = "1234@abcd567";

describe("SignUpE2E", () => {
  beforeEach(() => {
    navigateDemoblaze();
  });

  it("can sign up a new user", () => {
    getAndClickElement({ getValue: signUpPosition, containsValue: signUp });

    getAndTypeValue(signUsernameId, randomString(usernameCharacters));

    getAndTypeValue(signPasswordId, randomString(passwordCharacters));

    getAndClickElement({ getValue: signUpBtnsClass, index: 1 });

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains(successfulSignUpMsg);
    });
  });
});
