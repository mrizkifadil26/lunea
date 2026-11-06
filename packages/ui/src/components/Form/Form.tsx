import type { FormHTMLAttributes, ReactNode } from 'react';
import './form.css';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children: ReactNode;
};

export function Form({ children, ...props }: FormProps) {
  return (
    <form className="form" {...props}>
      {children}
    </form>
  );
}

type FormHeaderProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function FormHeader({ title, description, children }: FormHeaderProps) {
  return (
    <header className="form-header">
      <h1>{title}</h1>

      {description && <p>{description}</p>}

      {children}
    </header>
  );
}

type FormFooterProps = {
  children: ReactNode;
};

export function FormFooter({ children }: FormFooterProps) {
  return <footer className="form-footer">{children}</footer>;
}
