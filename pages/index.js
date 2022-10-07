import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Pamela Landgrave</title>
                <meta
                    name='description'
                    content='Pamela Landgrave UX/UI Portfolio'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Pamela Landgrave</h1>

                <p className={styles.description}>
                    {"This is my portfolio and it's in progress."}
                </p>
            </main>
            <footer className={styles.footer}>
                <p>
                    {`Pamela Landgrave ${new Intl.DateTimeFormat(
                        'en-US'
                    ).format(new Date())}`}
                </p>
            </footer>
        </div>
    );
}
