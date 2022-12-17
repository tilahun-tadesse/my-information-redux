export const Firstname = (firstname) => {
    return {
      type: "FIRSTNAME",
      payload:firstname,
    };
  };
  
  export const Lastname = (lastname) => {
    return {
      type: "LASTNAME",
      payload:lastname
    };
  };
  
  export const Gender = (gender) => {
    return {
      type: "GENDER",
      payload:gender
    };
  };

  export const Age = (age) => {
    return {
      type: "AGE",
      payload:age,
    };
  };
  export const Profesion = (profesion) => {
    return {
      type: "PROFESION",
      payload:profesion,
    };
  };

