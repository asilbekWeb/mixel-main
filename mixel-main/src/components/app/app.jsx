import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Market from '../market/market'
import SalesB2B from '../salesB2B/salesB2B'
import Purchase from '../purchase/purchase'
import Payment from '../payment/payment'
import Warranty from '../warrantly/warranty'
import Pagenotfound from '../pages/pagenotfound'


import Monoblocks from '../monoblock/monoblock'
import Phone from '../phone/phone'
import Laptop from '../laptop/laptop'
import Accessories from '../accessories/accessories'
import Network from '../network/network'
import Office from '../office/office'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Market />}/>
            <Route path='/salesB2B' element={<SalesB2B />}/>
            <Route path='/purchase' element={<Purchase />}/>
            <Route path='/payment' element={<Payment />}/>
            <Route path='/warranty' element={<Warranty />}/>
            <Route path='/monoblocks' element={<Monoblocks />}/>
            <Route path='/phone' element={<Phone />}/>
            <Route path='/laptop' element={<Laptop />}/>
            <Route path='/accessories' element={<Accessories />}/>
            <Route path='/network' element={<Network />}/>
            <Route path='/office' element={<Office />}/>
            <Route path='*' element={<Pagenotfound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App