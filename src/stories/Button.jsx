import React from 'react';
import { Button as ReactButton } from 'reactstrap';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './button.scss';


const BUTTON_THEMES = {
  BLUE: 'blue',
  TURQUOISE: 'turquoise',
  GREEN: 'green',
  YELLOW: 'yellow',
  RED: 'red'
};

const BUTTON_TYPES = {
  FILLED: 'filled',
  UNFILLED: 'unfilled'
};

const BUTTON_SIZES = {
  LARGE: 'large',
  REGULAR: 'regular',
  SMALL: 'small'
};

export const CN = 'gf-button';

const Wrapper = ({
                   children,
                   isNavLink,
                   label,
                   link
                 }) => {
  if (isNavLink) {
    return (
      <p className={`${CN}-label__link`}>
        <ReactButton className={`${CN}-nav-link`} to={link}>{label}</ReactButton>
        <p className={`${CN}-label`}>
          {children}
        </p>
      </p>

    );
  }

  return (
    <p className={`${CN}-label`}>
      {children}
    </p>
  );
};

export const Button = ({
                        className,
                        theme = BUTTON_THEMES.BLUE,
                        label,
                        type,
                        size = BUTTON_SIZES.REGULAR,
                        isDisabled,
                        isHidden,
                        callback,
                        isNavLink,
                        isLink,
                        link,
                        isImg,
                        srcPath,
                        altText,
                        children
                      }) => (
  <Wrapper
    altText={altText}
    isImg={isImg}
    isNavLink={isNavLink}
    labe={label}
    link={link}
    srcPath={srcPath}
  >
    <ReactButton
      className={cx(CN, className, `${CN}--theme-${BUTTON_THEMES[theme]}`, !isLink && `${CN}--type-${BUTTON_SIZES[type]}`, `${CN}--size-${BUTTON_TYPES[size]}`, isDisabled && `${CN}--disabled`, isHidden && `${CN}--hidden`, isLink && `${CN}--link`)}
      onClick={callback}
      color={isLink && 'link'}
      style={{ borderRadius: '4px' }}
    >

      {children}
      {isImg && (
        <img
          alt={altText}
          className={`${CN}-img`}
          src={srcPath}
        />
      )}
    </ReactButton>
  </Wrapper>

);

Button.propTypes = {
  altText: PropTypes.string,
  callback: PropTypes.func,
  children: PropTypes.element,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  isImg: PropTypes.bool,
  isLink: PropTypes.bool,
  isNavLink: PropTypes.bool,
  label: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.oneOf(['LARGE', 'REGULAR', 'SMALL']),
  srcPath: PropTypes.string,
  theme: PropTypes.oneOf(['BLUE', 'TURQUOISE', 'GREEN', 'YELLOW', 'RED']),
  type: PropTypes.oneOf(['FILLED', 'UNFILLED', undefined])
};

export default Button;

