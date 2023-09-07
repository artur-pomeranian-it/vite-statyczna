import './errorMessage.scss';

type Props = { message: string };

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="error-message">
      <h1>Something Went Wrong</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p>{message}</p>
    </div>
  );
}
