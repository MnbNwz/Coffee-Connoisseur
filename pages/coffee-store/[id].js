import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import coffeeStoresData from '../../data/coffee-stores.json'
export function getStaticProps({ params }) {
  const propsParams = params;
  console.log("propsParams", propsParams)
  return {
    props: {
      coffeeStore: coffeeStoresData.find(coffeeStore => {
        return coffeeStore.id.toString() === propsParams.id //dynamic id
      })
    }
  }
}
export function getStaticPaths() {

  return {
    paths: [{ params: { id: "0" }, params: { id: "1" }, params: { id: "2" } }], fallback: true,
  }
}

const CoffeeStore = ({ coffeeStore }) => {

  console.log('props', coffeeStore)
  const routingVal = useRouter()

  if (routingVal.isFallback) {
    return <div> ....Loading</div>
  }

  const { name, imgUrl, websiteUrl, address, neighbourhood } = coffeeStore
  const pickingDynamicValue = routingVal.query.id
  return (
    <div>
      <Head>
        <title>{name}
        </title>
      </Head>
      <Link href="/">
        <a> <button>Home</button> </a>
      </Link>
      <p>
        {name}<br></br>
        {imgUrl}<br></br>
        {websiteUrl}<br></br>
        {address}<br></br>
        {neighbourhood}
      </p>
    </div>
  )
}

export default CoffeeStore