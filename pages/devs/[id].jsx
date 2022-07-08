export const getStaticPaths = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = r
  es.json()
}

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
}
 
export default Details;