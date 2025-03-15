import { tv } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

export const styles = tv({
  base: twMerge(
    'rounded-full size-16 text-2xl/loose text-black cursor-pointer font-semibold',
    'flex justify-center items-center'
  ),
  variants: {
    color: {
      white: 'bg-white hover:bg-gray-200',
      gray: 'bg-gray-200 hover:bg-gray-300 ',
    },
  },
  defaultVariants: {
    color: 'white',
  },
})
