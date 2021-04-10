const validate = (values) => {
    const errors = {};

    if (!values.issuerCode) {
        errors.issuerCode =  "Please Issuer Code can't be empty"
    }
    if (!values.issuerName) {
        errors.issuerName = "Please Issuer Name can't be empty";
    }
    if (!values.cbnCode) {
        errors.cbnCode = "Please CBN code can't be empty";
    }
    if (!values.issuerPostCard) {
        errors.issuerPostCard = "Please Issuer Post Card can't be empty";
    }
    if (!values.issuerIdNum) {
        errors.issuerIdNum = "Please Issuer ID Number can't be empty";
    }
    return errors;
};

export default validate;