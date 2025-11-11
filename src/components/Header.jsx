import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Produk</Link>
                </li>
                <li>
                    <Link to="/cart">Keranjang</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
