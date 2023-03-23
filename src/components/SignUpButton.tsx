import Button from '@components/Button';

function SignUpButton() {
  return (
    <Button
      onClick={() => {
        window
          .open('https://competitioncorner.net/events/9736', '_blank')
          ?.focus();
      }}
      title="Sign Up Now"
    />
  );
}

export default SignUpButton;
