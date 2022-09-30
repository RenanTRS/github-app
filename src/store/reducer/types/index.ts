//Toggle theme
export interface themeState {
  theme: string
}
export interface StateValue {
  value: themeState
}

//Header
export interface RevealValue {
  reveal: number
}
export interface StateReveal {
  value: RevealValue
}

//User
export interface UserValue {
  user: string
}
export interface UserState {
  value: UserValue
}
