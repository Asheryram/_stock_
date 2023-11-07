import {products} from '../static.js'
export default function ItemInfo() {
  return (
    <>
    <div className="grid grid-cols-1">

    {
      products.map((prdt,idx) =>(
    <div key={idx}className="flex justify-between items-center p-4 bg-white space-x-4 rounded-lg shadow-md bg-slate-400/20 my-4">
      <h2 className="text-xl font-semibold inline mr-4">{prdt.productname}</h2>
      <p className="flex font-bold text-xl text-blue-400 "> <p className='mr-2'>GH</p> {prdt.price}</p>
    </div>

      ))
    }

    </div>
    
    </>
  )
  }