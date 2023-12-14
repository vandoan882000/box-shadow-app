/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',

      'xl-max': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg-max': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md-max': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm-max': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    container: {
      padding: "2rem"
    },
    minHeight: {
      '36': '36px',
      '100%': '100%',
    },
    maxWidth: {
      '20': '20px',
      'auto': 'auto',
      '100%': '100%'
    },
    minWidth: {
      '20': '20px',
    },
    colors: {
      transparent: 'transparent',
      'primary': '#5353c5',
      'secondary': '#2dde98',
      'tertiary': '#f95476',
      'quaternary': '#ffc20e',
      'dark': '#0f0f36',
      'gray9': '#27262b',
      'gray8': '#3d3d47',
      'gray7': '#45434D',
      'gray6': '#75737c',
      'gray5': '#929099',
      'gray4': '#dbdade',
      'gray3': '#ecebee',
      'gray2': '#f0f0f2',
      'gray1': '#f7f6f9',
      'light': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#dfe0e1',
    },
    fontFamily: {
      sans: [
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      serif: [
        'Constantia',
        'Lucida Bright',
        'Lucidabright',
        'Lucida Serif',
        'Lucida',
        'DejaVu Serif',
        'Bitstream Vera Serif',
        'Liberation Serif',
        'Georgia',
        'serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    textColors: {
      transparent: 'transparent',
      'primary': '#5353c5',
      'secondary': '#2dde98',
      'tertiary': '#f95476',
      'quaternary': '#ffc20e',
      'dark': '#0f0f36',
      'gray9': '#27262b',
      'gray8': '#3d3d47',
      'gray7': '#45434D',
      'gray6': '#75737c',
      'gray5': '#929099',
      'gray4': '#dbdade',
      'gray3': '#ecebee',
      'gray2': '#f0f0f2',
      'gray1': '#f7f6f9',
      'light': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#dfe0e1',
    },

    backgroundColors: {
      transparent: 'transparent',
      'primary': '#5353c5',
      'secondary': '#2dde98',
      'tertiary': '#f95476',
      'quaternary': '#ffc20e',
      'dark': '#0f0f36',
      'gray9': '#27262b',
      'gray8': '#3d3d47',
      'gray7': '#45434D',
      'gray6': '#75737c',
      'gray5': '#929099',
      'gray4': '#dbdade',
      'gray3': '#ecebee',
      'gray2': '#f0f0f2',
      'gray1': '#f7f6f9',
      'light': '#ffffff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#dfe0e1',
    },
    fontSize: {
      '3': '3px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '42': '42px',
      '44': '44px',
      '46': '46px',
      '48': '48px',
      '50': '50px',
      '60': '60px',
      '70': '70px',
      '144': '144px',
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
      "10xl": "8rem"
    },
    aspectRatio: {
      '4/3': '4 / 3',
      '3/4': '3 / 4',
      '16/9': '16 / 9',
      '9/16': '9 / 16',
      '1/1': '1 / 1',
      '2/1': '2 / 1',
      '3/1': '3 / 1',
      '4/1': '4 / 1',
      '2/3': '2 / 3',
      '2.38': '2.38',
      '162/44': '162 / 44',
      '304/195': '304/195',
      '740/290': '740/290',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    backgroundPosition: {
      bottom: 'bottom',
      'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
      'top-4': 'center top 1rem',
      '0_1.06': '0 1.06em',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '7': '7px',
      '8': '8px',
      '9': '9px',
      '10': '10px',
      '11': '11px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '17': '17px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '27': '27px',
      '28': '28px',
      '29': '29px',
      '30': '30px',
      '31': '31px',
      '32': '32px',
      '33': '33px',
      '34': '34px',
      '35': '35px',
      '36': '36px',
      '37': '37px',
      '38': '38px',
      '39': '39px',
      '40': '40px',
      '41': '41px',
      '42': '42px',
      '43': '43px',
      '44': '44px',
      '45': '45px',
      '46': '46px',
      '47': '47px',
      '48': '48px',
      '49': '49px',
      '50': '50px',
      '52': '52px',
      '54': '54px',
      '55': '55px',
      '57': '57px',
      '58': '58px',
      '59': '59px',
      '60': '60px',
      '61': '61px',
      '64': '64px',
      '65': '65px',
      '66': '66px',
      '70': '70px',
      '80': '80px',
      '81': '81px',
      '84': '84px',
      '85': '85px',
      '90': '90px',
      '94': '94px',
      '96': '96px',
      '100': '100px',
      '110':'110px',
      '125': '125px',
      '150': '150px',
      '157': '157px',
      '190': '190px',
      '268': '268px',
      '416': '416px',
      '434': '434px',
      '5%': '5%',
      '20%': '20%',
      '50%': '50%',
      '100%' : '100%',
    },
    sizing : {
      auto: 'auto',
      px: '1px',
    },
    zIndex: {
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '100': '100',
      '999': '999',
      '9999': '9999',
    },
    height: {
      'fit': 'fit-content',
      '1/2': '50%',
      '4': '4px',
      '5' : '5px',
      '10': '10px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '22': '22px',
      '23': '23px',
      '24': '24px',
      '25': '25px',
      '26': '26px',
      '28' : '28px',
      '29': '29px',
      '30': '30px',
      '33': '33px',
      '34' : '34px',
      '35' : '35px',
      '36' : '36px',
      '39': '39px',
      '40' : '40px',
      '42': '42px',
      '44' : '44px',
      '45' : '45px',
      '46': '46px',
      '48' : '48px',
      '50' : '50px',
      '52' : '52px',
      '55': '55px',
      '56' : '56px',
      '60' : '60px',
      '64' : '64px',
      '65' : '65px',
      '66' : '66px',
      '68' : '68px',
      '70' : '70px',
      '72' : '72px',
      '74' : '74px',
      '75' : '75px',
      '76' : '76px',
      '80' : '80px',
      '82': '82px',
      '85' : '85px',
      '95' : '95px',
      '96': '96px',
      '113': '113px',
      '120': '120px',
      '253' : '253px',
      '275': '275px',
      '286': '286px',
      '289': '289px',
      '300': '300px',
      '370': '370px',
      '381': '381px',
      '434': '434px',
      '449': '449px',
      '500' : '500px',
      '1000': '1000px',
      '40%': '40%',
      '50%' : '50%',
      '100%' : '100%',
    },
    width: {
      'fit': 'fit-content',
      '1/2': '50%',
      '1': '1px',
      '2': '2px',
      '5': '5px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '15': '15px',
      '16': '16px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '22' : '22px',
      '23' : '23px',
      '26': '26px',
      '28' : '28px',
      '30': '30px',
      '33': '33px',
      '34' : '34px',
      '35' : '35px',
      '36' : '36px',
      '37' : '37px',
      '38' : '38px',
      '39' : '39px',
      '40' : '40px',
      '45' : '45px',
      '46': '46px',
      '50' : '50px',
      '52': '52px',
      '53': '53px',
      '55' : '55px',
      '56': '56px',
      '60' : '60px',
      '65' : '65px',
      '66' : '66px',
      '68' : '68px',
      '70' : '70px',
      '80': '80px',
      '96': '96px',
      '100': '100px',
      '107': '107px',
      '120' : '120px',
      '130': '130px',
      '150': '150px',
      '154': '154px',
      '156': '156px',
      '184': '184px',
      '198': '198px',
      '200': '200px',
      '250': '250px',
      '263' : '263px',
      '270': '270px',
      '278': '278px',
      '300': '300px',
      '340': '340px',
      '400': '400px',
      '800': '800px',
      '20%' : '20%',
      '25%' : '25%',
      '30%' : '30%',
      '33.3%' : '33.333333%',
      '35%': '35%',
      '40%' : '40%',
      '50%' : '50%',
      '60%' : '60%',
      '65%': '65%',
      '66.6%' : '66.66666%',
      '70%' : '70%',
      '75%': '75%',
      '80%' : '80%',
      '85%' : '85%',
      '90%': '90%',
      '95%': '95%',
      '100%' : '100%',
    },
    scale: {
      '30': '.3',
    },
    lineHeight: {
      'extra-loose': '2.5',
      '1': '1.5',
      '2': '1.2',
      '12': '3rem',
    },
    boxShadow: {
      none: 'none',
      '1':'4px 0px 14px rgba(39,38,43,0.09)',
      '2': '0px 6px 15px rgba(32,32,34,0.06)',
    },
    shadows: {
      default: '0 2px 4px 0 rgba(0, 0, 0, 0.10)',
      'md': '0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08)',
      'lg': '0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'outline': '0 0 0 3px rgba(52, 144, 220, 0.5)',
      'none': 'none',
    },

    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },

    leading: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      loose: 2,
    },

    tracking: {
      tight: '-0.05em',
      normal: '0',
      wide: '0.05em',
    },

    borderRadius: {
      none: '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '13': '13px',
      '14': '14px',
      '15': '15px',
      '18': '18px',
      '19': '19px',
      '20': '20px',
      '21': '21px',
      '22': '22px',
      '23': '23px',
      '25': '25px',
      '30': '30px',
      '34': '34px',
      '35': '35px',
      '40': '40px',
      '45': '45px',
      '50': '50px',
      '52': '52px',
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
      '1/2': '50%',
    },
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      outlineWidth: {
        0: '0px',
        5: '5px',
      },
      rotate: {
        '17': '17deg',
        '135': '135deg',
      },
      flexGrow: {
        '1': '1',
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
      },

      borderRadius: {
        '4xl': '2rem',
      },

      maxWidth: {
        'none': 'none',
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%",
        '270': '270px',
        '340': '340px',
        '400': '400px',
        '629': '629px',
        '800': '800px',
        '100%': '100%',
        'fit': 'fit-content',
      },
      maxHeight: {
        'none': 'none',
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "9/10": "90%",
        '270': '270px',
        '275': '275px',
        '340': '340px',
        '400': '400px',
        '440': '440px',
        '629': '629px',
        '800': '800px',
        '35vh': '35vh',
        '50vh': '50vh',
        '100%': '100%',
        'fit': 'fit-content',
      },
      translate: {
        double: "200%",
        triple: "300%",
        quad: "400%"
      },
      height: {
        "2px": "2px"
      },
      inset: {
        "24": "5rem", // not for real
        "1/2": "50%",
        full: "100%"
      },
      transitionProperty: {
        width: "width"
      }
    }

  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
    boxShadow: {
      xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
      sm: "0 1px 2px rgba(3,49,86,0.2)",
      md: "0 3px 9px rgba(0,0,0,.5)",
      lg: "0 5px 15px rgba(0,0,0,.5)",
      xl: "0 10px 20px rgba(0,0,0,.5)",
      "2xl": "0 20px 66px 0 rgba(34,48,73,.2)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
      none: "none"
    },
    backgroundColor: ["responsive", "hover", "focus", "checked", "even",'group-hover'],
    margin: ["responsive", "group-hover", "last"],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  // options: {
  //   prefix: '',
  //   important: false,
  //   separator: ':',
  // },
}