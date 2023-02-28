import Button from '../components/Button';

function SignUpButton() {
  return (
    <Button
      onClick={() => {
        console.log('Button Clicked');
      }}
      title="SIGN UP NOW"
    />
  );
}

export default SignUpButton;
