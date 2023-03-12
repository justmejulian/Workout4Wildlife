import Button from '@components/Button';

function SignUpButton() {
  return (
    <Button
      onClick={() => {
        console.log('Button Clicked');
      }}
      title="Sign Up Now"
    />
  );
}

export default SignUpButton;
