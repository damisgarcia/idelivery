/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        cinnabar: {
          '50': '#fff2f1',
          '100': '#ffe3e0',
          '200': '#ffccc7',
          '300': '#ffa79f',
          '400': '#ff7468',
          '500': '#fa4939',
          '600': '#ea3f30',
          '700': '#c32012',
          '800': '#a11e13',
          '900': '#852017',
          '950': '#490b06',
        },
        coolWhite: {
          '50': '#ffffff',
          '100': '#efefef',
          '200': '#dcdcdc',
          '300': '#bdbdbd',
          '400': '#989898',
          '500': '#7c7c7c',
          '600': '#656565',
          '700': '#525252',
          '800': '#464646',
          '900': '#3d3d3d',
          '950': '#292929',
        },
        neutral: '#0b0a0b',
        malachite: {
          '50': '#f0fdf0',
          '100': '#dbfddd',
          '200': '#b9f9bc',
          '300': '#82f38a',
          '400': '#45e351',
          '500': '#26e134',
          '600': '#11a81d',
          '700': '#11841a',
          '800': '#13681a',
          '900': '#125519',
          '950': '#042f09',
        },
        caution: '#e2a83b',
        danger: '#ba2417',
        info: '#246fba',
      },
    },
  },
  fontFamily: {
    primary: ['open-sans', 'sans-serif'],
  },
};
