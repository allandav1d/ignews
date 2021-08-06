import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#04d361" />
      Allan David
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.SignInButton}>
      <FaGithub color="#eba417" />
      Sing In with GitHub
    </button>
  );
}