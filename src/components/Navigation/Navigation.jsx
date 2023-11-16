import PropTypes from 'prop-types';
import navigation from '@/data/navigation.json';

export const Navigation = ({
  className = '',
  isShow = false,
  onClose = null,
}) => {
  return (
    <ul className={`flex flex-col items-center gap-5 xl:flex-row ${className}`}>
      {navigation.map((el, index) => (
        <li key={index}>
          <p
            onClick={isShow ? onClose : null}
            className="text-center text-xl font-normal text-primary cursor-pointer xl:text-base hover:underline hover:text-contact"
          >
            {el}
          </p>
        </li>
      ))}
    </ul>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  isShow: PropTypes.bool,
  onClose: PropTypes.function || PropTypes.any,
};
