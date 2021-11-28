import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingBlock = () => {
  return (
    <ContentLoader
      className="pizza-block"
      title="загрузка..."
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f9f9f9"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="295" rx="6" ry="6" width="280" height="20" />
      <rect x="-2" y="335" rx="6" ry="6" width="280" height="69" />
      <rect x="2" y="421" rx="6" ry="6" width="100" height="30" />
      <rect x="126" y="414" rx="18" ry="18" width="148" height="44" />
    </ContentLoader>
  )
}

export default LoadingBlock
