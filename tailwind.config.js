/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12,88%,59%)',
        brightRedLight: 'hsl(12,88%,69%)',
        brightRedSupLight: 'hsl(12,88%,95%)',
        darkGrayishBlue: 'hsl(227,12%,61%)',
        veryDarkBlue: 'hsl(233,12%,13%)',
        darkPaleRed: 'hsl(13,100%,96%)',
        red: '#F96167',
        cherryRedDark: '#990011FF',
        veryLightGray: 'hsl(0,0%,98%)',
        royalBlue: '#00539CFF',
        classicBlue: '#2F3C7E',
        neonBlue:'#00FFFF',
        lightBlue: '#ADD8E6',
        skyBlue: '#89ABE3FF',
        electricBlue: '#4831D4',
        cyberPunkBlue: '#6883BC',
        babyBlue: '#8AAAE5',
        darkBlue: '#00008b',
        peachDark: '#EEA47FFF',
        peachLight: '#FCEDDA',
        burntOrange: '#EE4E34',
        pink: '#FBEAEB',
        hotPink: '#FF69B4',
        bubbleGumPink: '#EA738DFF',
        charcoal: '#101820FF',
        yellow: '#FEE715FF',
        classicYellow: '#FCE77D',
        limeGreen: '#CCF381',
        lavendar: '#E2D1F9',
        teal: '#317773',
        offWhite: '#FCF6F5FF',
        mustard: '#E3B448',
        sage: '#CBD18F',
        forestGreen: '#CBD18F',
        fuschsia: '#EC449B',
        neonGreen: '#99F443',
        pastelOrange: '#FFA351FF',
        custard: '#EED971FF',
        raspberry: '#8A307F',
        blues: '#79A7D3',
        cherryRedBright: '#CC313D',
        coral: '#FC766AFF',
        spicedApple: '#783937FF',
        lightPurple: '#AA96DA',
        mint: '#C5FAD5',
        butter: '#FFFFD2',
        mossGreen: '#97BC62FF',
        islandGreen: '#2BAE66FF',
        verdantGreen: '#2C5F2DFF',
        beige: '#DDC3A5',
        indigo: '#1E2761',
        scarlet: '#B85042',
        darkGray: '#273444',
        gray: '#8492a6',
        lightGray: '#d3dce6',
      }
    },
  },
  plugins: []
};