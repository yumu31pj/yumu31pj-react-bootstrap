import { useCallback } from "react";

// Make the hook generic by accepting any submit function and related state
const useSubmitForm = (
  submitFunction: (data: any) => Promise<void>, // API submission function
  isPosting: boolean,
  hasError: boolean,
  errorMessage: string
) => {

  // Define handleSubmit to use the generic submitFunction
  const handleSubmit = useCallback(
    async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); // Prevent default form submission

      const formData = new FormData(event.currentTarget); // Get form data
      const dataObject = Object.fromEntries(formData.entries()); // Convert form data to object

      try {
        await submitFunction(dataObject); // Use the provided submit function
        window.location.reload(); // Reload the page on success
      } catch (error) {
        hasError = true;
        console.error("Submission error:", error); // Handle error if needed
      }
    },
    [submitFunction,] // Dependencies
  );

  return { handleSubmit, isPosting, hasError, errorMessage };
};

export default useSubmitForm;
