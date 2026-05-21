import { memo } from 'react'
import '../css/PortraitAvatar.css'

export const PortraitAvatar = memo(function PortraitAvatar() {
  return (
    <div className="portrait-card" aria-hidden="true">
      <div className="portrait-face">
        <span className="hair" />
        <span className="face" />
        <span className="blush left" />
        <span className="blush right" />
      </div>
    </div>
  )
})
