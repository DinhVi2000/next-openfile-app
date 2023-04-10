import LoginForm from "@/components/form/LoginForm";
import SEO from "@/components/SEO";
import React, { Fragment } from "react";

const LoginPage = () => {
  return (
    <Fragment>
      <SEO title="Login" />
      <main>
        <LoginForm />
      </main>
    </Fragment>
  );
};

export default LoginPage;
