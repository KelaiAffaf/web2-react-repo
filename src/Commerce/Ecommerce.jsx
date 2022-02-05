import "./App.css";
import Cart from "./Card";
import Produit from "./Product";
import { data } from "./data";
import {useState} from 'react'
function App() {
    const [sold, setSold] = useState(2000);
    const [panier, setPanier] = useState(0);
    const Commander = (prix) => {
        setPanier(panier + prix);
    };
    const demander = ()=>{
        setSold(sold-panier)
    }
    return (
        <div className="App">
            <Cart mony={sold} dinero={panier}  demander={demander} />
            <div className="container">
                {
                    data.map((item, index) =>
                        <Produit key={index} apple={item.title} prix={item.price} Commander={Commander} />)
                }
            </div>
        </div>
    );
}

export default App;
