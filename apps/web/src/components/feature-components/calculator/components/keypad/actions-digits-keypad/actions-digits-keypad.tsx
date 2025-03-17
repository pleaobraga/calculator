import { ThemeChangeButton } from '../../button/theme-change-button/theme-change-button'
import { EnvChangeButton } from '../../button/env-change-button'
import { ModeButton } from '../../button/mode-button'

type Props = {
  mode: 'temperature' | 'operation'
  onToggleMode: () => void
  toggleDakMode: () => void
  isDarkMode: boolean
}

export function ActionsDigitsKeypad({
  mode = 'operation',
  onToggleMode,
  toggleDakMode,
  isDarkMode,
}: Props) {
  return (
    <div className={'w-full h-full grid grid-cols-3 gap-4'}>
      <EnvChangeButton onChangeEnv={() => {}} />
      <ThemeChangeButton toggleDakMode={toggleDakMode} isDarkMode={isDarkMode} />

      <ModeButton
        onClick={onToggleMode}
        mode={mode}
      />
    </div>
  )
}
