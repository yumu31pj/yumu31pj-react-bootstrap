export type ValidationErrorType = keyof typeof ValidationErrorMessages;

const ValidationErrorMessages = {
  email: "Please enter a valid email address.",
  zip: "Please enter a valid zip code."
} as const;

const getValidationErrorMessage = (type: ValidationErrorType) => {
  return ValidationErrorMessages[type] || "";
}

export default getValidationErrorMessage;