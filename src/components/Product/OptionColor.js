import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import clsx from 'clsx';

const OptionColor = ({colors, currentColor, setCurrentColor}) => {

    const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

    return(
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {colors.map(color => (
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
    );
};

OptionColor.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;