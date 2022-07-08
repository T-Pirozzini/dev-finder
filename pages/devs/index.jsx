import styles from "../../styles/Devs.module.css"
import Link from "next/link"

export const getStaticProps = async () => {

  const res = await fetch('http://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { devs: data }
  }
}

const Devs = ({ devs }) => {
  return (
    <div>
      <h1>All Devs</h1>
      {devs.map(dev => (
        <Link href={'/devs/' + dev.id} key={dev.id}>
          <a className={styles.single}>
            <h3>{ dev.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Devs;