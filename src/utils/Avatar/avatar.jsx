import Person from "../../assets/svgs/avatar.svg"
import Bell from "../../assets/svgs/bell.svg"
import Plus from '../../assets/svgs/plus.svg'
import "./avatar.css"

const Avatar = () => {
  return (
    <div className="avatar">
        <div className="notification">
            <img src={Bell} alt="" />
            
            <button className="not-btn">
                <img src={Plus} alt="" />
                <p>Add Listing</p>
            </button>
        </div>

        <img src={Person} alt="" />
    </div>
  )
}
export default Avatar