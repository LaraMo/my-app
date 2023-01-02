/**
 * Theme
 */
export interface ThemeProps {
  theme: 'light' | 'dark' | 'christmas' | 'easter';
}
/**
 * Shared Text Style
 */
export interface SharedTextStyleProps {
  theme: 'light' | 'dark' | 'christmas' | 'easter';
  color?: string;
  size?: string;
  isBold?: string;
}
