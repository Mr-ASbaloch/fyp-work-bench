import { useState } from 'react';

const useFormState = () => {
  const [values, setValues] = useState({
    fullName: '',
    fatherName: '',
    birthdate: '',
    email: '',
    mobileNumber: '',
    otherMobileNumber: '',
    homeAddress: '',
    streetAddress: '',
    city: '',
    province: '',
    postalCode: '',
    tehsilAddress: '',
  });

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
};

export default useFormState;
