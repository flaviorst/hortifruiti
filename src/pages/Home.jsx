import React, {useState} from 'react'
import Header from '../components/Header'
import Content from '../components/Content'

import { sumCartItem } from '../mock/cartMock'

const Home = props => {

    const [cart, setCart] = useState(sumCartItem())

    return (
        <div>
            <Header setCart={setCart} cart={cart} />
            <Content setCart={setCart} cart={cart} />
        </div>
    )
}

export default Home