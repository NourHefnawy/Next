import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css';
import { IoMenu } from "react-icons/io5";
const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/v.connect.jpg"
                                alt="logo"
                                width={150}
                                height={200}
                            />
                        </Link>
                        <div className={styles.menu}>
                            <IoMenu />
                        </div>
                    </div>
                    <div className={styles.navlinks}>
                        <Link className={styles.navlink} href="/">Home</Link>
                        <Link className={styles.navlink} href="/articles">Articles</Link>
                        <Link className={styles.navlink} href="/About">About</Link>
                        <Link className={styles.navlink} href="/Help">Help</Link>
                    </div>
                </nav>
                <div className={styles.right}>
                    <Link className={styles.btn} href="/login">Login</Link>
                    <Link className={styles.btnr} href="/register">Register</Link>
                </div>
            </header>
        </div >
    );
};

export default Header;
