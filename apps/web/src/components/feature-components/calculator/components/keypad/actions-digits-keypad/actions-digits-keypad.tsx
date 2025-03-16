import { ThemeChangeButton } from '../../button/theme-change-button/theme-change-button'
import { EnvChangeButton } from '../../button/env-change-button'
import { ModeButton } from '../../button/mode-button'

type Props = {
  mode: 'temperature' | 'operation'
}

export function ActionsDigitsKeypad({ mode = 'operation' }: Props) {
  return (
    <div className={'w-full h-full grid grid-cols-3 gap-4'}>
      <EnvChangeButton onChangeEnv={() => {}} />
      <ThemeChangeButton />

      <ModeButton
        onClick={() => {}}
        mode={mode}
      />
    </div>
  )
}
