import {
  Button,
  Card,
  Label,
  Select,
  Spinner,
  TextInput,
  ToggleSwitch,
} from "flowbite-react";
import React, { useCallback, useState } from "react";

export interface Field {
  name: string;
  label: string;
  type: "number" | "select" | "boolean";
  options?: string[];
}

const FormToggle = ({ field }: { field: Field }) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChecked = useCallback(() => setIsChecked((p) => !p), []);

  return (
    <>
      <input
        value={isChecked ? 1 : 0}
        type="hidden"
        id={field.name}
        name={field.name}
      />
      <ToggleSwitch
        checked={isChecked}
        label={field.label}
        onChange={toggleChecked}
      />
    </>
  );
};

const FormField = ({ field }: { field: Field }) => {
  switch (field.type) {
    case "select":
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={field.name} value={field.label} />
          </div>
          <Select id={field.name} name={field.name} required>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>
      );
    case "boolean":
      return (
        <div className="mb-2 block">
          <FormToggle field={field} />
        </div>
      );
    default:
      return (
        <div>
          <div className="mb-2 block">
            <Label htmlFor={field.name} value={field.label} />
          </div>
          <TextInput id={field.name} name={field.name} type="number" required />
        </div>
      );
  }
};

type FormProps = {
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formFields: Field[];
  isLoading: boolean;
};

const Form = ({ handleFormSubmit, formFields, isLoading }: FormProps) => {
  return (
    <Card className="flex-grow">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Vnesite podatke
      </h5>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col flex-grow gap-4"
      >
        {formFields.map((field: Field) => (
          <FormField key={field.name} field={field} />
        ))}
        <Button type="submit" className="mt-auto">
          {isLoading && (
            <Spinner
              size="sm"
              className="mr-1"
              aria-label="Izračuni se nalagajo..."
            />
          )}
          Izračunaj
        </Button>
      </form>
    </Card>
  );
};

export default Form;
