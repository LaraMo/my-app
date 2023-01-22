/**
 * Theme
 */
export interface ThemeProps {
  theme: 'light' | 'dark' | 'christmas' | 'easter';
}
/**
 * Shared Text Style
 */
export interface SharedTextStyleProps extends ThemeProps {
  color?: string;
  size?: string;
  isBold?: string;
}
