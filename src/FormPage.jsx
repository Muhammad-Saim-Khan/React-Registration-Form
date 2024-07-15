import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { FaChevronCircleRight } from "react-icons/fa";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const FormPage = ({ setFormData }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    password: "",
    organizationName: "",
    organizationSize: "",
    industry: "",
    termsAccepted: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z]+$/.test(formValues.firstName)) {
      newErrors.firstName = "First name should contain only letters.";
    }
    if (!/^[a-zA-Z]+$/.test(formValues.lastName)) {
      newErrors.lastName = "Last name should contain only letters.";
    }
    if (!/\S+@\S+\.\S+/.test(formValues.workEmail)) {
      newErrors.workEmail = "Invalid email address.";
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(formValues.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and contain both letters and numbers.";
    }
    if (formValues.organizationName.trim() === "") {
      newErrors.organizationName = "Organization name cannot be empty.";
    }
    if (formValues.organizationSize === "") {
      newErrors.organizationSize = "Please select an organization size.";
    }
    if (formValues.industry === "") {
      newErrors.industry = "Please select an industry.";
    }
    if (!formValues.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setFormData(formValues);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <p>
        Try <span>Sign</span> free for 14 days
      </p>
      <p className="abdullah">
        Already have a Formstack account? &nbsp;
        <a className="abc" href="">
          Start your trial in app
          <FaChevronCircleRight />
        </a>
      </p>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <main className="form-fields">
            <div className="flex">
              <div className="name">
                <label htmlFor="firstName">FIRST NAME</label>
                <br />
                <br />
                <input
                  className="one"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Saim"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="error">{errors.firstName}</p>
                )}
              </div>
              <div className="name">
                <label htmlFor="lastName">LAST NAME</label>
                <br />
                <br />
                <input
                  className="one"
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Khan"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
            </div>
            <br />
            <div>
              <label htmlFor="workEmail">WORK EMAIL</label>
              <br />
              <br />
              <input
                className="two"
                type="email"
                name="workEmail"
                id="workEmail"
                placeholder="saimkhan@gmail.com"
                value={formValues.workEmail}
                onChange={handleChange}
              />
              {errors.workEmail && <p className="error">{errors.workEmail}</p>}
            </div>
            <br />
            <div>
              <label htmlFor="password">PASSWORD</label>
              <br />
              <br />
              <div className="input-container">
                <input
                  className="two"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <div
                  onClick={togglePasswordVisibility}
                  className="toggle-button"
                >
                  {showPassword ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </div>
              </div>
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <br />
            <div>
              <label htmlFor="organizationName">ORGANIZATION NAME</label>
              <br />
              <br />
              <input
                className="two"
                type="text"
                name="organizationName"
                id="organizationName"
                placeholder="ABC Organization"
                value={formValues.organizationName}
                onChange={handleChange}
              />
              {errors.organizationName && (
                <p className="error">{errors.organizationName}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="organizationSize">ORGANIZATION SIZE</label>
              <br />
              <br />
              <select
                className="three"
                name="organizationSize"
                id="organizationSize"
                value={formValues.organizationSize}
                onChange={handleChange}
              >
                <option hidden>--Select--</option>
                <option value="1-10">1-10</option>
                <option value="10-50">10-50</option>
                <option value="100-500">100-500</option>
                <option value="1000-5000">1000-5000</option>
                <option value="5000-10000">5000-10000</option>
              </select>
              {errors.organizationSize && (
                <p className="error">{errors.organizationSize}</p>
              )}
            </div>
            <br />
            <div>
              <label htmlFor="industry">INDUSTRY</label>
              <br />
              <br />
              <select
                className="three"
                name="industry"
                id="industry"
                value={formValues.industry}
                onChange={handleChange}
              >
                <option hidden>--Select--</option>
                <option value="Construction">Construction</option>
                <option value="Automobiles">Automobiles</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Pharmaceutical">Pharmaceutical</option>
                <option value="Textile industry">Textile industry</option>
              </select>
              {errors.industry && <p className="error">{errors.industry}</p>}
            </div>
          </main>
          <br />
          <p className="fs-18px text-left opacity-0_8">
            Formstack has updated our terms of service effective January 4 2024.
            <br />
            We encourage you to read the document in its entirety.
          </p>
          <br />
          <br />
          <div className="saim">
            <input
              className="fs-18px opacity-0_9"
              type="checkbox"
              name="termsAccepted"
              checked={formValues.termsAccepted}
              onChange={handleChange}
            />
            <p className="fs-18px text-left opacity-1">
              I understand and agree to the &nbsp;
              <a className="underline abc" href="">
                Formstack Privacy Policy,&nbsp;
              </a>
              <a className="underline abc" href="">
                Software&nbsp;
              </a>
              <a className="underline abc" href="">
                Service Agreement&nbsp;
              </a>
              <br />
              and &nbsp;
              <a className="underline abc" href="Acceptable Use Policy">
                Acceptable Use Policy.
              </a>
            </p>
            {errors.termsAccepted && (
              <p className="error">{errors.termsAccepted}</p>
            )}
          </div>
          <br />
          <br />
          <button className="fs-18px w-700" type="submit">
            Start Free Trial
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default FormPage;
