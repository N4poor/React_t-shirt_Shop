import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0])

 const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  const getPrice = () => {
  const selectedSize = props.sizes.find(size => size.name === currentSize);
  return props.basePrice + (selectedSize?.additionalPrice || 0);
};

const handleSubmit = event => {
  event.preventDefault();
  
  console.log({
    title: props.title,
    price: getPrice(),
    color: currentColor,
    size:  currentSize
  });
};

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <form onSubmit={handleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size =>(
                <li key={size.name}>
                  <button
                  type="button"
                  onClick= {() => setCurrentSize(size.name)}
                   className={clsx(currentSize === size.name && styles.active)}
                   >
                    {size.name}
                   </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => (
                <li key={color}>
                  <button
                    type="button"
                    onClick={() => setCurrentColor(color)}
                    className={clsx(prepareColorClassName(color), currentColor === color && styles.active)}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button type="submit" className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {

}

export default Product;