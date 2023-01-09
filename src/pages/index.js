import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/styles.module.scss';

const Home = () => {
    return <div className={styles.container}>
            
            <Image src="/os-logo.png" alt="logo" height={400} width={400}/>
            <div className={styles.homeDiv}>Welcome to OpenSponsorships.  
            </div>
             <Link href="/profileForms" >
                    Sign Up Now.
            </Link>
    </div>
} 

export default Home;