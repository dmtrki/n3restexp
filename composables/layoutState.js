export const useAppData = () => useState('appData', () => null)
export const useAppBarTitle = () => useState('appBarTitle', () => '')
export const useAppBarSubtitle = () => useState('appBarSubtitle', () => '')
export const useAppBarPrevious = () => useState('appBarPrevious', () => {})
export const useAppBarVisibility = () => useState('appBarVisibility', () => true)