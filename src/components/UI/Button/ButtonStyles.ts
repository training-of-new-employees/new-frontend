type ButtonStylesIcon = {
  white: string;
  green: string;
  back: string;
  [key: string]: string;
};

type ButtonStylesVariant = {
  primary: string;
  emptyBorder: string;
  empty: string;
  [key: string]: string;
};

export const defaultStyles = `flex w-[260px] h-[52px] justify-center items-center gap-2 shrink-0 text-center cursor-pointer px-5 py-3 rounded-xl;
@include rubik16`;
export const iconStyles: ButtonStylesIcon = {
  white: `@apply bg-whiteIconButton bg-cover w-[13px] h-[13px]`,
  green: `@apply bg-greenIconButton w-[13px] h-[13px] opacity-80 bg-center mr-2`,
  back: `@apply bg-backIconButton w-6 h-6 bg-no-repeat bg-center p-1`,
};
export const buttonStyles: ButtonStylesVariant = {
  primary:
    'disabled:bg-borderDisabledInput disabled:border-borderDisabledInput disabled:color-addFontColor active:bg-pressedBtn active:border-pressedBtn bg-defaultBtn border-defaultBtn color-colorWhite hover:bg-hoveredBtn hover:border-hoveredBtn',
  emptyBorder:
    'disabled:color-addFontColor border-borderDisabledInput active:color-pressedBtn border-pressedBtn bg-colorWhite rounded-[12px] border-defaultBtn border-[2px] color-defaultBtn hover:border-hoveredBtn hover:color-hoveredBtn',
  empty:
    'border-none color-defaultBtn bg-transparent hover:color-hoveredBtn active:color-pressedBtn disabled:color-addFontColor',
};
