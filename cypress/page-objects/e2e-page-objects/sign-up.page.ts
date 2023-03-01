export const signUpPosition = "[data-target]";
export const signUp = "Sign up";
export const signUsernameId = "#sign-username";
export const signPasswordId = "#sign-password";
export const signUpBtnsClass = ".btn-primary";
export const successfulSignUpMsg = "Sign up successful.";
export const usernameCharacters = "abcdefghijklmnopqrstuvwxyz";
export const passwordCharacters = "1234@abcd567";

export function randomString(chars: string, length = 6) {
  let result = "";
  const charactersLength = chars.length;
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
