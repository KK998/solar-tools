import {
  Button,
  Card,
  Label,
  Select,
  Spinner,
  TextInput,
} from "flowbite-react";
import React from "react";

export interface Field {
  name: string;
  label: string;
  type: "number" | "select" | "boolean";
  options?: string[];
}

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
        {formFields.map((field) =>
          field.type === "number" ? (
            <div key={field.name}>
              <div className="mb-2 block">
                <Label htmlFor={field.name} value={field.label} />
              </div>
              <TextInput
                id={field.name}
                name={field.name}
                type="number"
                required
              />
            </div>
          ) : (
            <div key={field.name}>
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
          )
        )}
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
