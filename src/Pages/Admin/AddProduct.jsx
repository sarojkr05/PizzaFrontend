import Layout from "../../Layouts/Layout";
import Food from "../../assets/Images/food.svg";

function AddProduct() {
    return (
        <Layout>
            <section className="py-12">
                <div className="flex items-center justify-center px-5">
                    <div className="md:w-2/5">
                        <img src={Food}/>
                    </div>
                    <div className="max-w-md md:w-4/6 mx-auto mt-8 bg-white p-4">
                    <h2 className="mb-4 text-2xl font-semibold">
                        Add Product
                    </h2>

                    <form>
                        {/* Product Name */}
                        <div className="mb-4">
                            <label htmlFor="productName"
                                className="block text-sm font-medium text-gray-700">
                                Product Name <span className="text-red-500">*</span>
                            </label>
                            <input type="text"
                                name="productName"
                                required
                                minLength={5}
                                maxLength={30}
                                id="productName"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description"
                                className="block text-sm font-medium text-gray-700">
                                Description
                            </label>
                            <input type="text"
                                name="description"
                                required
                                minLength={5}
                                maxLength={60}
                                id="description"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <label htmlFor="price"
                                className="block text-sm font-medium text-gray-700">
                                Product Price
                            </label>
                            <input type="number"
                                name="price"
                                required
                                id="price"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        {/* Quantity */}
                        <div className="mb-4">
                            <label htmlFor="quantity"
                                className="block text-sm font-medium text-gray-700">
                                Quantity <span className="text-red-500">*</span>
                            </label>
                            <input type="number"
                                name="quantity"
                                required
                                id="quantity"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        {/* Category */}
                        <div className="mb-2">
                            <label htmlFor="category"
                                className="block text-sm font-medium text-gray-700">
                                Select Category
                            </label>
                            <select id="category"
                                name="category"
                                required
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm cursor-pointer">
                                <option value="veg">Vegetarian</option>
                                <option value="non-veg">Non-Vageterian</option>
                                <option value="drinks">Soft Drinks</option>
                                <option value="sides">Sides</option>
                            </select>
                        </div>

                        {/* Image */}
                        <div className="mb-4">
                            <label htmlFor="productImage"
                                className="block text-sm font-medium text-gray-700">
                                Product Image <span className="text-blue-500">(.jpg, .jpeg, .png)</span>
                            </label>
                            <input type="file"
                                name="productImage"
                                required
                                accept=".jpg, .jpeg, .png"
                                id="productImage"
                                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Add Product
                        </button>
                    </form>
                    </div>
                </div>
                
            </section>
        </Layout>
    );
}
export default AddProduct;