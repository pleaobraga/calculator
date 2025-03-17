import { CalculatorButton } from '../calculator-button'

type Props = {
  onClick: () => void
}

export function CleanButton({ onClick }: Props) {
  return (
    <CalculatorButton
      className="text-pink-600 dark:text-pink-600"
      content="AC"
      onClick={onClick}
    />
  )
}
