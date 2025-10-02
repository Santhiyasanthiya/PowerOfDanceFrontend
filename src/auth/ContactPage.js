import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./ContactPage.css";

// ✅ Validation Schema
const validationSchema = Yup.object({
  studentName: Yup.string().required("Student Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  location: Yup.string().required("Location is required"),
  purpose: Yup.string().required("Please select a purpose"),
  subject: Yup.string().required("Subject is required"),
});

const ContactPage = () => {


    useEffect(() => {
    const body = document.querySelector("#root");
    if (body) {
      body.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="pd_contact_page">
      <div className="pd_contact_container">
        <h2 className="pd_contact_title">Contact Us</h2>

        <Formik
          initialValues={{
            studentName: "",
            email: "",
            phone: "",
            location: "",
            purpose: "",
            subject: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await fetch(
                "https://pd-dance-backend.vercel.app/register",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                }
              );

              const data = await response.json();
              alert(data.message || "Form submitted successfully ✅");
              resetForm();
            } catch (error) {
              alert("❌ Something went wrong: " + error.message);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="pd_contact_form">
              {/* Student Name */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Student Name</label>
                <Field
                  type="text"
                  name="studentName"
                  placeholder="Enter your name"
                  className="pd_contact_input"
                />
                <ErrorMessage
                  name="studentName"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Email */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Email Id</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="pd_contact_input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Phone */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Phone Number</label>
                <Field
                  type="tel"
                  name="phone"
                  placeholder="10 digit number"
                  className="pd_contact_input"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Location */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Location</label>
                <Field
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  className="pd_contact_input"
                />
                <ErrorMessage
                  name="location"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Purpose */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Purpose of Visit</label>
                <Field as="select" name="purpose" className="pd_contact_input">
                  <option value="">-- Select Purpose --</option>
                  <option value="Dance">Dance</option>
                  <option value="Zumba">Zumba</option>
                  <option value="Drawing">Drawing</option>
                  <option value="Karate">Karate</option>
                </Field>
                <ErrorMessage
                  name="purpose"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Subject */}
              <div className="pd_contact_group">
                <label className="pd_contact_label">Subject</label>
                <Field
                  as="textarea"
                  name="subject"
                  rows="4"
                  placeholder="Enter subject details"
                  className="pd_contact_textarea"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="pd_contact_error"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="pd_contact_btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactPage;
