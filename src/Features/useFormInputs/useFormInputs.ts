import { useState } from 'react';

type EmptyObject = { [key: string]: string };

export const useFormInputs = <T extends EmptyObject>(): [
  Partial<T>,
  (changeEvent: React.ChangeEvent<HTMLInputElement>) => void,
] => {
  const [inputs, setInputs] = useState<Partial<T>>({});

  const handleInputChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = changeEvent.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return [inputs, handleInputChange];
};
