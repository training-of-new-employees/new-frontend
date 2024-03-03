import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'Arial', 'sans-serif'],
    },
    fontSize: {
      h1: ['40px', '150%'],
      h2: ['32px', '130%'],
      h3: ['24px', '130%'],
      h4: ['16px', '150%'],
      bodyMain: ['15px', '150%'],
      bodyMedium: ['14px', '130%'],
      bodySmall: ['12px', '130%'],
    },
    extend: {
      colors: {
        defaultBtn: '#53772F',
        pressedBtn: '#374629',
        hoveredBtn: '#668447',
        sidebarEnableBtn: '#E7FFCF',
        sidebarPressedBtn: '#BACDA8',
        sidebarHoveredBtn: '#F4FFE9',
        backgrnd: '#E9E9E9',
        fontColor: '#2F302E',
        addFontColor: '#7D7E7C',
        borderDisabledInput: '#D1D3CE',
        error: '#C63535',
        colorWhite: '#fff',
      },
      backgroundImage: {
        'icon-edit': 'url(./src/assets/icon/IconEdit.svg)',
        'admin-pic': 'url(./src/assets/Admin.svg)',
        'admin-image': 'url(./src/assets/AdminImage.svg)',
        whiteIconButton: "url('./src/assets/icon/Icon.svg')",
        greenIconButton: "url('./src/assets/icon/Icon-green.svg')",
        backIconButton: "url('./src/assets/icon/Back-Icon.svg')",
        'card-menu': "url('./src/images/UI/CardMenu.svg')",
        'logo-header': "url('./src/images/Landing/logo.svg')",
        'profile-avatar': "url('./src/images/UI/Profile-logo.svg')",
        'exit-icon': "url('./src/images/UI/exit-icon.svg')",
        'profile-exitbtn': "url('./src/images/UI/ProfileExitBtn.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
