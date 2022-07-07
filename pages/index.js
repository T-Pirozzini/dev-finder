import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
        accusantium reiciendis? Suscipit facilis recusandae possimus
        reprehenderit nihil a vitae animi voluptatem aliquid, cum, velit
        repellendus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi,
        accusantium reiciendis? Suscipit facilis recusandae possimus
        reprehenderit nihil a vitae animi voluptatem aliquid, cum, velit
        repellendus.
      </p>
      <Link href="/devs">
        <a>See Dev Listing</a>
      </Link>
    </div>
  );
}
