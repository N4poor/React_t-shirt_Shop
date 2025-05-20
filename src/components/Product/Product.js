import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from './ProductImage';
import ProductForm from './ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)

 

  const price = useMemo (() => {
  const selectedSize = props.sizes.find(size => size.name === currentSize);
  return props.basePrice + (selectedSize?.additionalPrice || 0);
}, [currentSize, props.sizes, props.basePrice]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
          <ProductForm
            colors={props.colors}
            sizes={props.sizes}
            currentColor={currentColor}
            currentSize={currentSize}
            setCurrentColor={setCurrentColor}
            setCurrentSize={setCurrentSize}
            title={props.title}
            price={price}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  basePrice: PropTypes.number.isRequired,
};

export default Product;