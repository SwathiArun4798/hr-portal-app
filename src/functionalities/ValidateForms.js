export const ValidateForms = (values) => {

    let errors = {};

    if(!values.empId){
        errors.empId = "Employee ID is required";
    }

    if(!values.name){
        errors.name = "Name is required";
    }

    if(!values.age){
        errors.age = "Age is required";
    }

    if(!values.gender){
        errors.gender = "Gender is required";
    }

    if(!values.emailId){
        errors.emailId = "Email ID is required";
    }else if(!/\S+@\S+\.\S+/.test(values.emailId)){
        errors.emailId = "Please enter a valid email address";
    }

    if(!values.phone){
        errors.phone = "Phone number is required";
    }

    if(!values.address){
        errors.address = "Address is required";
    }

    if(!values.role){
        errors.role = "Role is required";
    }

    if(!values.department){
        errors.department = "Department is required";
    }

    if(!values.password){
        errors.password = "Password is required";
    }

    if(!values.confirmPassword){
        errors.confirmPassword = "Confirm Password is required";
    }

    if(values.password !== values.confirmPassword){
        errors.confirmPassword = "Passwords do not match";
    }

    // if(!values.otp){
    //     errors.otp = "OTP is required";
    // }

    // if(values.otp.length !== 6){
    //     errors.otp = "OTP must be 6 digits";
    // }

    // if(values.otp !== 1234){
    //     errors.otp = "Invalid OTP";
    // }

    return errors;
}

