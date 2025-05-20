import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from './OptionSize';
import OptionColor from './OptionColor';

const ProductForm = ({colors, sizes, currentColor, currentSize, setCurrentColor, setCurrentSize, title, getPrice}) => {

    const handleSubmit = event => {
    event.preventDefault();
    
    console.log({
        title,
        price: getPrice(),
        color: currentColor,
        size:  currentSize
    });
    };

    return (
        <form onSubmit={handleSubmit}>
            <OptionSize 
                sizes={sizes}
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
            />
            <OptionColor 
                colors={colors}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />
        <Button type="submit" className={styles.button}>
            <span className="fa fa-shopping-cart" />
        </Button>
        </form>
    );
    };

    ProductForm.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number,
    })
  ).isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductForm;