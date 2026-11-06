import { ArrowRightIcon, FormHeader } from '@lunea/ui';

export function CompletionStep() {
  return (
    <div className="completion">
      <div className="success-icon">
        <CheckIcon />
      </div>

      <FormHeader
        title="You're all set!"
        description="Your account has been created
                    successfully. You can now sign in and
                    start using Nova."
      ></FormHeader>

      <a className="button button-primary" href="/login">
        Continue to sign in
        <ArrowRightIcon />
      </a>

      <a className="back-home" href="/">
        Back to home
      </a>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 14.5L11.5 19L21 9"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
