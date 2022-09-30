import { useSelector } from 'react-redux'

export const useGetPositionY = () => {
  const show = useSelector((state: any) => state.show.value.reveal)

  return show
}
