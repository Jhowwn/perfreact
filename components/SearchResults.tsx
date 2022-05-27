import { List, ListRowRenderer } from 'react-virtualized'
import { ProductItem } from "./ProductItem";

interface SearchResultProps {
    totalPrice: number;
    results: Array<{
        id: number;
        price: number;
        priceFormated: string;
        title: string;
    }>
    onAddToWishList: (id: number) => void;
}

export function SearchResult({ totalPrice, results, onAddToWishList }: SearchResultProps) {
    const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
        return (
            <div key={key} style={style}>
                <ProductItem
                    product={results[index]}
                    onAddToWishList={onAddToWishList}
                />
            </div>
        )
    }
    return (
        <div>
            <h1>{totalPrice}</h1>
            <List //Componente desataulizado gerando erro devido a versões diferentes do react
                height={300}
                rowHeight={30}
                width={900}
                overscanRowCount={5}
                rowCount={results.length}
                rowRenderer={rowRenderer}
            />

        </div>
    )
}

/*
* 1. Criar uma nova versão do componente
* 2. Compar com a vesão anterior
* 3. Se houverem alterações, vai atualizar o que alterou
*/

/*
* 1. Pure functions components
* 2. Reender too often
* 3. Re-renders with same props
* 4. Medium to big size
*/

/*
* 1. Calculos pesados
* 2. Igualdade Referencial (quando a gente repassa aquela informação para um componente filho )
*/