import { useDispatch } from 'react-redux';
import { ProductCard } from '../../common/components/ProductCard';
import * as ProductList from '../../common/models';
import { cartSlice } from '../cart/cartSlice';

export const Menu = () => {
    const dispatch = useDispatch();
    return <div className="Menu">
        {
            Object.values(ProductList)
                .map(product =>
                    <ProductCard key={product.name} product={product} onSelect={() =>
                        dispatch(cartSlice.actions.addProduct(product))} />)
        }
    </div>
}