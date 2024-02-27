import { useState } from 'react';
import { useSpring, animated, SpringValue } from '@react-spring/web';
import { Theme } from '@/theme';

interface CenterCircleProps {
  r: SpringValue<number>;
}

interface MaskedCircleProps {
  cx: SpringValue<number>;
  cy: SpringValue<number>;
}

enum ThemeType {
  Dark = 'dark',
  Light = 'light',
}

interface Props {
  dark: Theme;
  light: Theme;
  selectedTheme: Theme;
  setSelectedTheme: (theme: Theme) => void;
}

const AnimatedIcon = ({ dark, light, selectedTheme, setSelectedTheme }: Props) => {
  const [isDarkMode, setDarkMode] = useState(selectedTheme.themeName === ThemeType.Dark);

  const properties = {
    [ThemeType.Light]: {
      r: 9,
      transform: 'rotate(40deg)',
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    [ThemeType.Dark]: {
      r: 5,
      transform: 'rotate(90deg)',
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

  const { r, transform, cx, cy, opacity } = properties[isDarkMode ? ThemeType.Dark : ThemeType.Light];

  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig,
  });
  const centerCircleProps: CenterCircleProps = useSpring({ r, config: properties.springConfig });
  const maskedCircleProps: MaskedCircleProps = useSpring({
    cx,
    cy,
    config: properties.springConfig,
  });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? ThemeType.Light : ThemeType.Dark;
    setDarkMode((prev) => !prev);
    setSelectedTheme(newTheme === ThemeType.Dark ? dark : light);
  };

  return (
    <div style={{ marginTop: '0.5rem' }}>
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CBE4DE"
        onClick={toggleDarkMode}
        style={{
          cursor: 'pointer',
          ...svgContainerProps,
        }}
      >
        <mask id="myMask2">
          <rect x="0" y="0" width="100%" height="100%" fill="#CBE4DE" />
          <animated.circle
            cx={maskedCircleProps.cx}
            cy={maskedCircleProps.cy}
            r={9}
            fill="black"
          />
        </mask>

        <animated.circle
          cx="12"
          cy="12"
          r={centerCircleProps.r}
          fill="#CBE4DE"
          mask="url(#myMask2)"
        />
        <animated.g stroke="#CBE4DE" style={linesProps}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </div>
  );
};

export default AnimatedIcon;