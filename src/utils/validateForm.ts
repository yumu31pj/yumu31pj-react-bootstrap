import getValidationErrorMessage, { ValidationErrorType } from "./getValidationErrorMessage";

const validateForm = (value: string, type: ValidationErrorType) => {
  let isError = false;
  const errorMessage = getValidationErrorMessage(type)

  if (type == "email") {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(value)) {
      isError = true;
    }
  } else {
  }

  if (isError) {
    return errorMessage
  } else {
    return "";
  }
}

export default validateForm;