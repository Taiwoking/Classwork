import { useContext } from "react"

const Box = ({ packageType, price, annualPrice }) => {
 const { isRed } = useContext(RedContext)

 return (
  <div
   style={{ height: 200, width: 200, backgroundColor: 'aqua', margin: 30 }}
  >
   <h2>{packageType}</h2>
   <h1>{isRed === true ? price : annualPrice}</h1>
  </div>
 )
}

export default Box