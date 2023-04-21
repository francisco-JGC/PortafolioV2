import { MyInfo } from '../components/MyInfo'
import { Profile } from '../components/Profile'

import './index.scss'

export const HomePage = () => {
  return (
    <div className="home-page" id="start">
      <div className="home-page">
        <Profile />
        <div className="my-info-container">
          <MyInfo />
        </div>
      </div>
    </div>
  )
}
