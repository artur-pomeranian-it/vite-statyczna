import './authForm.scss';

interface Props extends React.PropsWithChildren {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function AuthForm(props: Props) {
  const { onSubmit, children } = props;
  return (
    <div className="auth-form-container">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}
