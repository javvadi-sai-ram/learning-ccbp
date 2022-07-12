import './index.css'

const TabItem = props => {
  const {tabDetails, TabItemClicked, isTabItemSelected} = props
  const {displayText, tabId} = tabDetails

  const OnClickTabItem = () => {
    TabItemClicked(tabId)
  }
  const isActive = isTabItemSelected && 'tab-selected-highlight'

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActive}`}
        onClick={OnClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
