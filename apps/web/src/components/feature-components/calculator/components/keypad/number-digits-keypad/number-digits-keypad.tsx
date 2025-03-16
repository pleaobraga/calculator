import { CalculatorButton } from "../../button/calculator-button"
import { DeleteButton } from "../../button/delete-button"

type Props = {
  onClickNumberKeys: (digit: string) => void
  onDeleteDigit: () => void
}

export function NumberDigitsKeypad({ onClickNumberKeys, onDeleteDigit }: Props) {
  return (
    <div className="w-full h-full bg-transparent grid grid-cols-3 gap-4">
      <CalculatorButton
        content="7"
        onClick={() => onClickNumberKeys('7')}
      />
      <CalculatorButton
        content="8"
        onClick={() => onClickNumberKeys('8')}
      />
      <CalculatorButton
        content="9"
        onClick={() => onClickNumberKeys('9')}
      />
      <CalculatorButton
        content="4"
        onClick={() => onClickNumberKeys('4')}
      />
      <CalculatorButton
        content="5"
        onClick={() => onClickNumberKeys('5')}
      />
      <CalculatorButton
        content="6"
        onClick={() => onClickNumberKeys('6')}
      />

      <CalculatorButton
        content="1"
        onClick={() => onClickNumberKeys('1')}
      />
      <CalculatorButton
        content="2"
        onClick={() => onClickNumberKeys('2')}
      />
      <CalculatorButton
        content="3"
        onClick={() => onClickNumberKeys('3')}
      />

      <CalculatorButton
        content="."
        onClick={() => console.log('T')}
      />

      <CalculatorButton
        content="0"
        onClick={() => onClickNumberKeys('0')}
      />

      <DeleteButton onClick={onDeleteDigit} />
    </div>
  )
}
