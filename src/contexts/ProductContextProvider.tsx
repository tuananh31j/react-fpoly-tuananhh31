// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// interface Ipro {
//     id: number;
//     name: string;
// }
// export const ProductContext = createContext({} as any);

// const ProductContextProvider = ({ children }: { children: React.ReactNode }) => {
//     const [products, setProducts] = useState<Ipro[]>([]);
//     useEffect(() => {
//         (async () => {
//             const { data } = await axios.get<Ipro[]>('http://localhost:3000/products');
//             setProducts(data);
//         })();
//     }, []);
//     const handleDelete = (id: number | string) => {
//         setProducts((prev) => prev.filter((item) => item.id !== id));
//     };

//     return (
//         <ProductContext.Provider value={{ products, setProducts, handleDelete }}>{children}</ProductContext.Provider>
//     );
// };

// export default ProductContextProvider;
