
type Props = {
  toggler: (online: boolean) => void
  online: boolean
}

export const OnlineStatusToggler: React.FC<Props> = ({ toggler, online }) => {

  return (
    <button
    onClick={() => toggler(online)}
    >
      Online toggler lifting state up
    </button>
  )
}