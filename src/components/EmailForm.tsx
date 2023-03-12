import type { FormEvent } from 'react';
import styles from './EmailForm.module.css';

function EmailForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form className={styles.form} method="post" onSubmit={handleSubmit}>
      <input
        name="email"
        type="text"
        placeholder="Enter your email for Viatu Newsletter"
        className={styles.input}
      />
      <button type="submit" className={styles.submit}>
        Subscribe
      </button>
    </form>
  );
}

export default EmailForm;
