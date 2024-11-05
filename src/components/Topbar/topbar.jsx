import Logo from '../../assets/svgs/logo.svg'
import "../../styles/topbar.css"
import Searchbar from "../../utils/Searchbar/searchbar"
import Avatar from "../../utils/Avatar/avatar"

const Topbar = () => {
  return (
    <div className="topbar">
        <img src={Logo} alt="fixit logo" />

        <Searchbar />

        <Avatar />
    </div>
  )
}
export default Topbar