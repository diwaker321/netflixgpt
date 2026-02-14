import Header from "./Header"
import { useSelector } from "react-redux";

const Browse = ()=>{
    
  const storeItems = useSelector((store)=>store)
  console.log('storeItems: ', storeItems); 
    return(
        <>
        <div className="main-cont">
        <Header/>

        </div>

        <p>browser section here</p>
        </>
    )

}
export default Browse