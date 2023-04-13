import './index.scss'

export const DescNavigation = () => {
  return (
    <div className="desc-navigation">
      <div className="desc-navigation__item">
        <div className="desc-navigation__item__count">
          <h1>
            01/<small>05</small>{' '}
          </h1>
        </div>
        <div className="desc-navigation__item__pages">
          <div className="desc-navigation__item__count__arrow">
            <h2>
              <i className="fa-solid fa-chevron-left"></i>
            </h2>
            <h3>I</h3>
            <h2>
              <i className="fa-solid fa-chevron-right"></i>
            </h2>
          </div>
        </div>
      </div>
      <div className="underline"></div>
      <div className="desc-navigation__title">
        <span>Desc Navigation</span>
      </div>
    </div>
  )
}
