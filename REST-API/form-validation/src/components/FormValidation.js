import React from "react";
//React library for form handling and validation
import { useForm } from "react-hook-form";

function FormValidation({ addStudent }) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors } //Stores validation error messages.
  } = useForm();  //useForm: Hook for Form Validation

  // Execute when form validation succeeds
  const onSubmit = (data) => {

    // Add entered name to student list
    addStudent(data.username);

    alert("Form Submitted Successfully");

    console.log(data);

    // Clear form fields
    reset();
  };

  return (
    <div className="container-box">
      <h2>Student Registration Form</h2>
    {/*Handles form submission after validation*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <br />

        <input
          type="text"
          placeholder="Enter Name"
          {...register("username", {
            required: "Name is required",
            minLength: {
              value: 5,
              message: "Minimum 5 characters required"
            }
          })}
        />

        <br />
        {errors.username &&
          <p className="error">
            {errors.username.message}
          </p>
        }

        <br />
        <label>Email:</label>
        <br />

        <input
          type="text"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Invalid Email Address"
            }
          })}
        />

        <br />
        {errors.email &&
           <p className="error">
            {errors.email.message}
          </p>
        }

        <br />
        <label>Age:</label>
        <br />

        <input
          type="number"
          placeholder="Enter Age"
          {...register("age", {
            required: "Age is required",
            min: {
              value: 18,
              message: "Age must be 18 or above"
            },
            max: {
              value: 60,
              message: "Age cannot exceed 60"
            }
          })}
        />

        <br />
        {errors.age &&
           <p className="error">
            {errors.age.message}
          </p>
        }

        <br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default FormValidation;

