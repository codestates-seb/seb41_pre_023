import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const SignupContainer = styled.div`
  padding-top: 74px; //header 50px + container 24px
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #f1f2f4;
  box-sizing: border-box;
  min-height: 100vh;
`;

const InfoContainer = styled.div`
  display: none; //flex
  margin-right: 48px;
  /* flex-direction: column; */
  /* width: 411px; */
  /* margin: 0px 48px 128px 0px; */
  @media (min-width: 817px) {
    display: block;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
  font-size: 27px;
  margin-bottom: 32px;
`;

const FirstInfo = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const Logo = styled.div`
  margin-right: 8px;
  vertical-align: bottom;
  margin-top: -5px;
`;

const SecondInfo = styled.div`
  color: hsl(210, 8%, 45%);
  font-size: 13px;
`;

const InfoLink = styled.a`
  color: hsl(206, 100%, 40%);
`;

const RightSignup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MobileHeadline = styled.div`
  margin-bottom: 24px;
  font-size: 19.8px;
  line-height: 25px;
  text-align: center;
  @media (min-width: 817px) {
    display: none;
  }
`;

const SignupBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const GoogleBtn = styled.button`
  width: 300px;
  padding: 10px;
  margin: 4px 0px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid hsl(210, 8%, 85%);
`;

const BtnText = styled.span`
  margin-left: 5px;
`;

const GithubBtn = styled(GoogleBtn)`
  background-color: #2f3338;
  color: white;
`;

const FacebookBtn = styled(GithubBtn)`
  background-color: #365499;
`;

const SignupFormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  padding: 24px;
  background-color: white;
  border-radius: 7px;
  box-shadow: rgb(0 0 0 / 5%) 0px 10px 24px, rgb(0 0 0 / 5%) 0px 20px 48px,
    rgb(0 0 0 / 10%) 0px 1px 4px;
  margin-bottom: 24px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const InputBox = styled.div`
  margin: 6px 0;
`;

const InputTitle = styled.label`
  padding: 0 2px;
  font-weight: bold;
`;

const TextInput = styled.input`
  width: 100%;
  margin-top: 5px;
  padding: 0.6em 0.7em;
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  font-family: inherit;
  position: relative;
  border-color: ${(props) => (props.error ? "#de4f54" : "")};
  &:focus {
    outline: none;
    border-color: ${(props) => (props.error ? "#de4f54" : "#6bbbf7")};
    border-width: 1px;
    box-shadow: ${(props) =>
      props.error
        ? "0 0 0 4px #f7e1e1, 0 0 0 4px #f7e1e1"
        : "0 0 0 4px #cce9fe, 0 0 0 4px #cce9fe"};
  }
`;

const Requisition = styled.p`
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 4px;
`;

const TestBox = styled.div`
  margin: 6px 0;
  padding: 8px 0px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: hsl(210, 8%, 95%);
  border-color: hsl(210, 8%, 90%);
  border-radius: 3px;
  border-width: 1px;
`;

const RecaptchaBox = styled.div`
  width: 164px;
  height: 144px;
`;

const AdBox = styled.div`
  display: flex;
  margin: 6px 0;
`;

const CheckBox = styled.input`
  margin-right: 4px;
  vertical-align: middle;
  border-radius: 3px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 1em;
  height: 1em;
  border: 1px solid hsl(210, 8%, 75%);
  outline: 0;
  background-color: white;
`;

const AdInfo = styled.label`
  line-height: 1rem;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  padding: 0 2px;
  color: hsl(210, 8%, 5%);
`;

const QuestionBox = styled.div`
  margin-left: 4px;
  margin-top: 2px;
`;

const QuestionMark = styled.a``;

const SignupBtn = styled.button`
  margin: 8px 0;
  background-color: hsl(206, 100%, 52%);
  color: white;
  border: 1px solid transparent;
  box-shadow: 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  font-size: 13px;
  padding: 0.8em;
  display: inline-block;
  font-weight: normal;
  position: relative;
  outline: none;
  line-height: calc(15 / 13);
  cursor: pointer;
  border-radius: 3px;
`;

const PolicyBox = styled.div`
  line-height: 1rem;
  text-align: left;
  color: hsl(210, 8%, 45%);
  font-size: 12px;
  margin-top: 32px;
`;

const RecheckBox = styled.div`
  padding: 16px;
  text-align: center;
  font-size: 13px;
`;

const SignupBox1 = styled.div`
  margin-top: 12px;
`;

const SignupLink = styled.a`
  font-size: 13px;
  color: hsl(206, 100%, 40%);
`;

const ErrorBox = styled.div`
  position: relative;
`;

const ErrorIcon = styled.div`
  position: absolute;
  right: 3%;
  top: 32.5%;
  pointer-events: none;
`;
const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
  padding: 2px;
  font-size: 12px;
`;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);
  console.log(register("email"));

  return (
    <SignupContainer>
      <InfoContainer>
        <Headline>Join the Stack Overflow community</Headline>
        <FirstInfo>
          <Logo>
            <svg width="26" height="26" class="svg-icon mtn2">
              <path
                opacity=".5"
                d="M4.2 4H22a2 2 0 012 2v11.8a3 3 0 002-2.8V5a3 3 0 00-3-3H7a3 3 0 00-2.8 2z"
                fill="#8EC4FA"
              ></path>
              <path
                d="M1 7c0-1.1.9-2 2-2h18a2 2 0 012 2v12a2 2 0 01-2 2h-2v5l-5-5H3a2 2 0 01-2-2V7zm10.6 11.3c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2c-.6 0-1.2.4-1.2 1.2 0 .7.5 1.1 1.2 1.2zm2.2-5.4l1-.9c.3-.4.4-.9.4-1.4 0-1-.3-1.7-1-2.2-.6-.5-1.4-.7-2.4-.7-.8 0-1.4.2-2 .5-.7.5-1 1.4-1 2.8h1.9v-.1c0-.4 0-.7.2-1 .2-.4.5-.6 1-.6s.8.1 1 .4a1.3 1.3 0 010 1.8l-.4.3-1.4 1.3c-.3.4-.4 1-.4 1.6 0 0 0 .2.2.2h1.5c.2 0 .2-.1.2-.2l.1-.7.5-.7.6-.4z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </Logo>
          Get unstuck - ask a question
        </FirstInfo>
        <FirstInfo>
          <Logo>
            <svg width="26" height="26" class="svg-icon mtn2">
              <path
                d="M12 .7a2 2 0 013 0l8.5 9.6a1 1 0 01-.7 1.7H4.2a1 1 0 01-.7-1.7L12 .7z"
                fill="hsl(206,100%,52%)"
              ></path>
              <path
                opacity=".5"
                d="M20.6 16H6.4l7.1 8 7-8zM15 25.3a2 2 0 01-3 0l-8.5-9.6a1 1 0 01.7-1.7h18.6a1 1 0 01.7 1.7L15 25.3z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </Logo>
          Unlock new privileges like voting and commenting
        </FirstInfo>
        <FirstInfo>
          <Logo>
            <svg width="26" height="26" class="svg-icon mtn2">
              <path
                d="M14.8 3a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8l8.2 8.2c.8.8 2 .8 2.8 0l10-10c.4-.4.6-.9.6-1.4V5a2 2 0 00-2-2h-8.2zm5.2 7a2 2 0 110-4 2 2 0 010 4z"
                fill="hsl(206,100%,52%)"
              ></path>
              <path
                opacity=".5"
                d="M13 0a2 2 0 00-1.4.6l-10 10a2 2 0 000 2.8c.1-.2.3-.6.6-.8l10-10a2 2 0 011.4-.6h9.6a2 2 0 00-2-2H13z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </Logo>
          Save your favorite tags, filters, and jobs
        </FirstInfo>
        <FirstInfo>
          <Logo>
            <svg width="26" height="26" class="svg-icon mtn2">
              <path
                d="M21 4V2H5v2H1v5c0 2 2 4 4 4v1c0 2.5 3 4 7 4v3H7s-1.2 2.3-1.2 3h14.4c0-.6-1.2-3-1.2-3h-5v-3c4 0 7-1.5 7-4v-1c2 0 4-2 4-4V4h-4zM5 11c-1 0-2-1-2-2V6h2v5zm11.5 2.7l-3.5-2-3.5 1.9L11 9.8 7.2 7.5h4.4L13 3.8l1.4 3.7h4L15.3 10l1.4 3.7h-.1zM23 9c0 1-1 2-2 2V6h2v3z"
                fill="hsl(206,100%,52%)"
              ></path>
            </svg>
          </Logo>
          Earn reputation and badges
        </FirstInfo>
        <SecondInfo>
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <InfoLink href="https://stackoverflow.com/teams?utm_source=so-owned&amp;utm_medium=product&amp;utm_campaign=free-50&amp;utm_content=public-sign-up">
            Get Stack Overflow for Teams free for up to 50 users
          </InfoLink>
        </SecondInfo>
      </InfoContainer>
      <RightSignup>
        <MobileHeadline>
          Create your Stack Overflow account. It’s free and only takes a minute.
        </MobileHeadline>
        <SignupBox>
          <GoogleBtn>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                fill="#4285F4"
              ></path>
              <path
                d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                fill="#34A853"
              ></path>
              <path
                d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                fill="#FBBC05"
              ></path>
              <path
                d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                fill="#EA4335"
              ></path>
            </svg>
            <BtnText>Sign up with Google</BtnText>
          </GoogleBtn>
          <GithubBtn>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
                fill="#fff"
              ></path>
            </svg>
            <BtnText>Log in with GitHub</BtnText>
          </GithubBtn>
          <FacebookBtn>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18">
              <path
                d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                fill="#fff"
              ></path>
            </svg>
            <BtnText>Log in with Facebook</BtnText>
          </FacebookBtn>
        </SignupBox>
        <SignupFormBox onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <InputTitle>Display name</InputTitle>
            <TextInput htmlFor="nickname" />
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="email">Email</InputTitle>
            <ErrorBox>
              <TextInput
                type="text"
                error={errors.email?.message === undefined ? "" : "error"}
                {...register("email", {
                  required: { value: true, message: "Email cannot be empty." },
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not a valid email address.",
                  },
                })}
              />
              {errors.email?.message === undefined ? null : (
                <ErrorIcon>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"
                      fill="red"
                    ></path>
                  </svg>
                </ErrorIcon>
              )}
            </ErrorBox>
            <ErrorText>{errors.email?.message}</ErrorText>
          </InputBox>
          <InputBox>
            <InputTitle htmlFor="password">Password</InputTitle>
            <ErrorBox>
              <TextInput
                type="password"
                error={errors.password?.message === undefined ? "" : "error"}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password cannot be empty.",
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-z]).{8,}/,
                    message:
                      "Please add one of the following things to make your password stronger: number & letters",
                  },
                })}
              />
              {errors.password?.message === undefined ? null : (
                <ErrorIcon>
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M9 17c-4.36 0-8-3.64-8-8 0-4.36 3.64-8 8-8 4.36 0 8 3.64 8 8 0 4.36-3.64 8-8 8ZM8 4v6h2V4H8Zm0 8v2h2v-2H8Z"
                      fill="red"
                    ></path>
                  </svg>
                </ErrorIcon>
              )}
            </ErrorBox>
            <ErrorText>{errors.password?.message}</ErrorText>
            <Requisition>
              Passwords must contain at least eight characters, including at
              least 1 letter and 1 number.
            </Requisition>
          </InputBox>
          <TestBox>
            <RecaptchaBox>
              <iframe
                title="reCAPTCHA"
                src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Lfmm70ZAAAAADvPzM6OhZ8Adi40-78E-aYfc1ZS&amp;co=aHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbTo0NDM.&amp;hl=en&amp;v=5qcenVbrhOy8zihcc2aHOWD4&amp;size=compact&amp;cb=3unij7lmwk0y"
                width="164"
                height="144"
                role="presentation"
                name="a-9911dfsh95jz"
                frameborder="0"
                scrolling="no"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
              ></iframe>
            </RecaptchaBox>
          </TestBox>
          <AdBox>
            <CheckBox type="checkbox" />
            <AdInfo>
              Opt-in to receive occasional product updates, user research
              invitations, company announcements, and digests.
            </AdInfo>
            <QuestionBox>
              <QuestionMark>
                <svg
                  aria-hidden="true"
                  class="svg-icon iconHelpSm"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                >
                  <path
                    d="M7 1C3.74 1 1 3.77 1 7c0 3.26 2.77 6 6 6 3.27 0 6-2.73 6-6s-2.73-6-6-6Zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08Zm.73-3.07-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 0 0-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 0 1 7.7 6.07c.15-.1.21-.21.3-.33.18-.2.28-.47.28-.74.01-.67-.53-1.14-1.18-1.14-.9 0-1.18.7-1.18 1.46H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 0 1 1.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01Z"
                    fill="rgb(106, 115, 124)"
                  ></path>
                </svg>
              </QuestionMark>
            </QuestionBox>
          </AdBox>
          <SignupBtn type="submit">Sign up</SignupBtn>
          <PolicyBox>
            By clicking “Sign up”, you agree to our{" "}
            <a href="https://stackoverflow.com/legal/terms-of-service/public">
              terms of service
            </a>
            ,{" "}
            <a href="https://stackoverflow.com/legal/privacy-policy">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="https://stackoverflow.com/legal/cookie-policy">
              cookie policy
            </a>
          </PolicyBox>
        </SignupFormBox>
        <RecheckBox>
          Alreday have an account? <SignupLink href="/login">Log in</SignupLink>
          <SignupBox1>
            Are you an employer?
            <SignupLink
              href="https://careers.stackoverflow.com/employer/login"
              name="talent"
            >
              {" "}
              Sign up on Talent
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <path
                  d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                  fill="#2e70b3"
                ></path>
              </svg>
            </SignupLink>
          </SignupBox1>
        </RecheckBox>
      </RightSignup>
    </SignupContainer>
  );
}
