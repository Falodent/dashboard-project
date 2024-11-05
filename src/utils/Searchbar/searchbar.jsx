import Icon from '../../assets/svgs/search.svg'
import "./searchbar.css"

const Searchbar = () => {
  return (
    <div className='searchbar'>
        <img src={Icon} alt="search-icon" />
        <input name="search" placeholder="Search or type any command"/>
    </div>
  )
}
export default Searchbar