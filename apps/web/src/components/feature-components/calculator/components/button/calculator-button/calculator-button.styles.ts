import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const styles = tv({
  base: twMerge(
    'rounded-full size-16 text-2xl/loose text-black cursor-pointer font-semibold',
    'flex justify-center items-center select-none',
    'hover:opacity-90 active:opacity-80',
    'dark:text-white'
  ),
  variants: {
    color: {
      white: twMerge(
        'bg-transparent hover:bg-gray-200 active:bg-gray-100',
        'dark:hover:bg-gray-500'
      ),
      gray: twMerge(
        'bg-gray-200 hover:bg-gray-300 active:bg-gray-200',
        'dark:bg-gray-700 dark:active:dark:bg-gray-700 dark:hover:bg-gray-600'
      ),
    },
    disabled: {
      true: 'opacity-10',
    },
  },
  defaultVariants: {
    color: 'white',
  },
})
