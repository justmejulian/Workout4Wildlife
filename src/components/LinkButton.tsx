import Button from '../components/Button';

interface LinkButtonProps {
  title: string;
  url: string;
}

function LinkButton({ title, url }: LinkButtonProps) {
  return (
    <Button
      onClick={() => {
        window.open(url, '_blank')?.focus();
      }}
      title={title}
    />
  );
}

export default LinkButton;
