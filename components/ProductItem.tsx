import { memo, useState } from 'react';
import { AddProductToWishlistProps } from './AddProductToWishlist'
// import { AddProductToWishList } from './AddProductToWishList';
import dynamic from 'next/dynamic';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(mod => mod.AddProductToWishList)
}, {
    loading: () => <span>Carregando...</span>
})

interface ProductItemProps {
    product: {
        id: number;
        price: number;
        priceFormated: string;
        title: string;
    },
    onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
    const [isAddingToWishlist, setAddingToWishlist] = useState(false);
    return (
        <div>
            {product.title} - <strong>{product.priceFormated}</strong>
            <button onClick={() => setAddingToWishlist(true)}>Adicionar aos favoritos</button>
            {isAddingToWishlist && (
                <AddProductToWishlist
                    onAddToWishList={() => onAddToWishList(product.id)}
                    onRequestClose={() => setAddingToWishlist(false)}
                />
            )}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
})