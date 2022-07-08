import styles from "../../styles/Devs.module.css"
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
        <div key={dev.id}>
          <a className={styles.single}>
            <h3>{ dev.name }</h3>
          </a>
        </div>
      ))}
    </div>
  );
}
 
export default Devs;