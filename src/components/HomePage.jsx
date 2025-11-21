import { useProducts } from "../hooks/useProducts"
import images from "../utils/images"
import LoadingAnimated from "../components/Loading";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const { products, loading } = useProducts();
    const navigate = useNavigate();

    if (loading) return <LoadingAnimated />;

    function cardProduct({ nameImages, title }) {
        return (
            <div
                className="group relative flex flex-col justify-between bg-white rounded-lg shadow-sm p-1 w-[250px]"
                onClick={() => navigate(`/product/${product.id}`)}
            >
                {/* products img */}
                <div className="relative flex items-center justify-center bg-white-100 rounded-md overflow-hidden">
                    <img
                        alt={[nameImages]}
                        src={images[nameImages]}
                        className="max-h-full max-w-full object-cover object-center group-hover:opacity-75 transition-all"
                    />
                </div>

                <div className="mt-4 flex items-center justify-start">
                    <h3 className="text-sm font-semibold text-[#3F4646] truncate">
                        {title}
                    </h3>
                </div>

                <div className="flex items-center justify-between text-xs text-[#797979]">
                    <div className="mt-1">
                        Explore Now
                    </div>
                    <div className="pr-2 cursor-pointer"
                        onClick={() => navigate(`/products-list`)}>
                        <img src={images["arrow-right.svg"]} alt="" className="h-3" />
                    </div>
                </div>
            </div>
        )
    }

    const newArrival = products
        .filter((p) => p.category.name === "Shoes")
        .slice(0, 4);

    return (
        <div className="mt-[65px]">

            <div>
                <img
                    className="object-contains" src={images["banner-1.svg"]} alt="banner top" />
            </div>

            <div className="flex justify-between mx-16 h-[356px] gap-2 mt-16">
                <div className="w-[600px]">
                    <img className="object-cover" src={images["high-conzines.svg"]} alt="high-conzines" />
                </div>

                <div className="w-[600px]">
                    <img className="object-cover" src={images["breezy-summer-style.svg"]} alt="brezy-summer-style" />
                </div>
            </div>

            <div className="mt-16 mx-16">
                <div className="flex justify-between items-center mb-6 border-l-4 border-[#8A33FD] pl-3">
                    <p className="text-[#3F4646] text-base text-xl font-semibold">New Arrival</p>
                </div>

                <div className="flex items-center">
                    <div className="px-3 cursor-pointer">
                        <img src={images["arrow-left.svg"]} alt="" />
                    </div>

                    {/* card products */}
                    <div className="grid grid-cols-4 p-2 gap-4">
                        {newArrival.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col justify-between bg-white rounded-lg shadow-sm p-1 w-[250px]"
                                onClick={() => navigate(`/product/${product.id}`)}
                            >
                                {/* products img */}
                                <div className="relative flex items-center justify-center bg-white-100 rounded-md overflow-hidden">
                                    <img
                                        alt={product.title}
                                        src={product.images[0]}
                                        className="max-h-full max-w-full object-cover object-center group-hover:opacity-75 transition-all"
                                    />
                                </div>

                                <div className="mt-4 flex items-center justify-start">
                                    <h3 className="text-sm font-semibold text-[#3F4646] truncate">
                                        {product.title.replace(/:/g, "").split(" ").slice(0, 2).join(" ")}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="px-3 cursor-pointer">
                        <img src={images["arrow-right.svg"]} alt="" />
                    </div>
                </div>

            </div>

            <div className="mt-16 mx-16">
                <div className="flex justify-between items-center mb-6 border-l-4 border-[#8A33FD] pl-3">
                    <p className="text-[#3F4646] text-xl font-semibold">Big Saving Zone</p>
                </div>

                <div className="grid gap-4">
                    {/* Row 1 → 3 kolom */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-[350px] overflow-hidden rounded-lg">
                            <img
                                src={images["hawaiian-shirts.svg"]}
                                alt="hawaiian-shirts"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="h-[350px] overflow-hidden rounded-lg">
                            <img
                                src={images["printed-shirt.svg"]}
                                alt="printed-shirt"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="h-[350px] overflow-hidden rounded-lg">
                            <img
                                src={images["cargo-joggers.svg"]}
                                alt="cargo-joggers"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 2 → 2 kolom */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-[350px] overflow-hidden rounded-lg">
                            <img
                                src={images["urban-shirts.svg"]}
                                alt="urban-shirts"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="h-[350px] overflow-hidden rounded-lg">
                            <img
                                src={images["oversized-shirts.svg"]}
                                alt="oversized-shirts"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <div className="mt-16 mx-16">
                <div className="flex justify-between">
                    <div>
                        <img src={images["we-made.svg"]} alt="" />
                    </div>
                    <div>
                        <img src={images["rectangle-13.svg"]} alt="" />
                    </div>
                </div>
            </div>

            <div className="mt-16 mx-16">
                <div className="flex justify-between items-center mb-6 border-l-4 border-[#8A33FD] pl-3">
                    <p className="text-[#3F4646] text-xl font-semibold">Categories For Men</p>
                </div>

                <div className=" flex justify-center gap-4">
                    {cardProduct({ nameImages: "shirts.svg", title: "Dress Shirts" })}
                    {cardProduct({ nameImages: "printed-t-shirts.svg", title: "Printed T Shirts" })}
                    {cardProduct({ nameImages: "plain-t-shirts.svg", title: "Plain T Shirts" })}
                    {cardProduct({ nameImages: "polo-t-shirts.svg", title: "Polo T Shirts" })}
                </div>
                <div className="flex justify-center gap-4 mt-5">
                    {cardProduct({ nameImages: "hoodie.svg", title: "Hoodie" })}
                    {cardProduct({ nameImages: "jeans.svg", title: "Jeans" })}
                    {cardProduct({ nameImages: "jogger.svg", title: "Jogger" })}
                    {cardProduct({ nameImages: "boxers.svg", title: "Boxers" })}
                </div>
            </div>

            <div className="mt-16 mx-16">
                <div className="flex justify-between items-center mb-6 border-l-4 border-[#8A33FD] pl-3">
                    <p className="text-[#3F4646] text-xl font-semibold">Categories For Women</p>
                </div>

                <div className="flex justify-center gap-4">
                    {cardProduct({ nameImages: "hoodie-woman.svg", title: "Hoodies & Sweetshirt" })}
                    {cardProduct({ nameImages: "coats-woman.svg", title: "Coats & Parkas" })}
                    {cardProduct({ nameImages: "tees-woman.svg", title: "Tees & T Shirts" })}
                    {cardProduct({ nameImages: "boxers-woman.svg", title: "Boxers" })}
                </div>
            </div>

            <div className="mt-16 mx-16">
                <div className="w-full bg-[#3C4242] rounded-2xl py-10 px-6 flex flex-col items-center">

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-white">Top Brands Deal</h2>
                    <p className="text-sm text-gray-300 mt-6">
                        Up To <span className="text-yellow-400 font-semibold">60%</span> off on brands
                    </p>

                    {/* Brand Logos */}
                    <div className="mt-10 grid grid-cols-5 gap-6">

                        {/* Card */}
                        <div className="w-[150px] h-[80px] rounded-xl flex items-center justify-center shadow">
                            <img src={images["nike.svg"]} alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="w-[150px] h-[80px] rounded-xl flex items-center justify-center shadow">
                            <img src={images["h&m.svg"]} alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="w-[150px] h-[80px] rounded-xl flex items-center justify-center shadow">
                            <img src={images["levis.svg"]} alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="w-[150px] h-[80px] rounded-xl flex items-center justify-center shadow">
                            <img src={images["polo.svg"]} alt="" className="w-full h-full object-contain" />
                        </div>

                        <div className="w-[150px] h-[80px] rounded-xl flex items-center justify-center shadow">
                            <img src={images["puma.svg"]} alt="" className="w-full h-full object-contain" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-16 mx-16 h-[420px]">
                <div>
                    <div className="flex justify-between items-center mb-6 border-l-4 border-[#8A33FD] pl-3">
                        <p className="text-[#3F4646] text-xl font-semibold">Feedback</p>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="grid grid-cols-3 gap-6">

                            {/* Card 1 */}
                            <div className="border border-[#BEBCBD] rounded-2xl p-6 shadow-sm bg-white">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                                        <img src={images["ronald.svg"]} alt="" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex gap-1 mt-1">
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star-half.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star-outline.svg"]} alt="" className="w-4 h-4" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mt-4">Floyd Miles</h3>

                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                                    sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="border border-[#BEBCBD] rounded-2xl p-6 shadow-sm bg-white">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                                        <img src={images["floyd.svg"]} alt="" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex gap-1 mt-1">
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mt-4">Ronald Richards</h3>

                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                                    Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="border border-[#BEBCBD] rounded-2xl p-6 shadow-sm bg-white">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-gray-100">
                                        <img src={images["savannah.svg"]} alt="" className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex gap-1 mt-1">
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star-outline.svg"]} alt="" className="w-4 h-4" />
                                        <img src={images["star-outline.svg"]} alt="" className="w-4 h-4" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mt-4">Savannah Nguyen</h3>

                                <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                                    sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage