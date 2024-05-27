


import './Popular.css'
import { useContext } from "react"
import { Data } from "../App"
import { WomenItems } from './WomenItems'

export const Popular = ({itemsRef}) => {
const{data,setData}=useContext(Data)



  return (
  <>
  <div className="items"  ref={itemsRef}>
 <div className='heading'>  
 <h2>POPULAR IN WOMEN</h2>
 </div>
  <div className="women">
  {data.map(item=>(
    <WomenItems key={item.id} items={item}/>
  ))}
  </div>
  </div>
  </>
  )
}
