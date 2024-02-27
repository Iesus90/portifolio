import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../store/languageActions';
import { Dispatch } from 'redux';
import { useSpring, animated } from '@react-spring/web';
import brazil from '../../shared/images/brazil.png';
import usa from '../../shared/images/usa.png';
import styles from './styles.module.css';

interface Props {
  language: string;
  changeLanguage: (language: string) => void;
}

const AnimatedFlags: React.FC<Props> = ({ language, changeLanguage }) => {
  const [flipped, setFlipped] = React.useState<boolean>(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const toggleLanguage = () => {
    setFlipped((state) => {
      const newState = !state;

      const newLanguage = newState ? 'en' : 'pt-br';
      if (newLanguage !== language) {
        changeLanguage(newLanguage);
      }

      return newState;
    });
  };

  return (
    <div onClick={toggleLanguage}>
      <animated.img
        src={usa}
        width={40}
        height={40}
        className={styles.c}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      />
      <animated.img
        src={brazil}
        width={40}
        height={40}
        className={styles.c}
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeLanguage: (language: string) => dispatch(changeLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedFlags);