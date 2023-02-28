import Button from '../components/Button';

interface LinkButtonProps {
  title: string;
  url: string;
}

function LinkButton(props: LinkButtonProps) {
  return (
    <Button
      onClick={() => {
        window.open(props.url, '_blank')?.focus();
      }}
      title={props.title}
    />
  );
}

export default LinkButton;
