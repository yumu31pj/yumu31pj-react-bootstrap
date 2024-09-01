
import { InputText, TextArea } from "../../components/ui/form";
import { FieldWrapper } from "../../components/ui/form/field-wrapper";
const Form = () => {

  const onSubmit = (e:any) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <FieldWrapper>
      <InputText 
        id={"title"}
        name={"title"}
        placeholder={"Input title"}
        labelText={"Input Title"}
        isRequired={true}
      />
      <TextArea
        id={"textarea"}
        name={"textarea"}
        placeholder={"Input some"}
        labelText={"Input some"}
        isRequired={true}
      />
    </FieldWrapper>
  )
}

export { Form };

