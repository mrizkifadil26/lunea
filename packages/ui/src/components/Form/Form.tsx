import type { FormHTMLAttributes, ReactNode } from 'react';

import {
  FormFeedback,
  FormFeedbackError,
  FormFeedbackInfo,
  FormFeedbackSuccess,
  FormFeedbackWarning,
  type FormFeedbackProps,
} from './FormFeedback';

import styles from './Form.module.css';

type FormHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

function FormHeader({
  title,
  description,
  children,
}: FormHeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>

      {description && <p>{description}</p>}

      {children}
    </header>
  );
}

type FormFooterProps = {
  children: ReactNode;
};

function FormFooter({ children }: FormFooterProps) {
  return (
    <footer className={styles.footer}>{children}</footer>
  );
}

export type FormProps =
  FormHTMLAttributes<HTMLFormElement> & {
    children: ReactNode;
  };

export type FormComponent = React.FC<FormProps> & {
  Header: typeof FormHeader;
  Footer: typeof FormFooter;

  Feedback: typeof FormFeedback;
  Error: typeof FormFeedbackError;
  Warning: typeof FormFeedbackWarning;
  Info: typeof FormFeedbackInfo;
  Success: typeof FormFeedbackSuccess;
};

export const Form = Object.assign(
  function Form({ children, ...props }: FormProps) {
    return (
      <form className={styles.form} {...props}>
        {children}
      </form>
    );
  },
  {
    Header: FormHeader,
    Footer: FormFooter,
    Feedback: FormFeedback,
    Error: FormFeedbackError,
    Warning: FormFeedbackWarning,
    Info: FormFeedbackInfo,
    Success: FormFeedbackSuccess,
  },
) satisfies FormComponent;

export namespace Form {
  export type Props = FormProps;
  export type HeaderProps = FormHeaderProps;
  export type FooterProps = FormFooterProps;
  export type FeedbackProps = FormFeedbackProps;
}
