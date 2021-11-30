import React from 'react'

const ClipboardSVG = ({ size, classname }) => {
  return (
    <div className="svg-container">
      <svg className={classname} width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path className="color" opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M11.75 10C11.3358 10 11 10.3358 11 10.75C11 11.1642 11.3358 11.5 11.75 11.5H20.25C20.6642 11.5 21 11.1642 21 10.75C21 10.3358 20.6642 10 20.25 10H11.75ZM11.75 14C11.3358 14 11 14.3358 11 14.75C11 15.1642 11.3358 15.5 11.75 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75C21 14.3358 20.6642 14 20.25 14H11.75ZM10.875 18.75C10.875 18.3358 11.2108 18 11.625 18H14.5C14.9142 18 15.25 18.3358 15.25 18.75C15.25 19.1642 14.9142 19.5 14.5 19.5H11.625C11.2108 19.5 10.875 19.1642 10.875 18.75ZM17.75 19.5C18.1642 19.5 18.5 19.1642 18.5 18.75C18.5 18.3358 18.1642 18 17.75 18C17.3358 18 17 18.3358 17 18.75C17 19.1642 17.3358 19.5 17.75 19.5Z" />
        <path className="color" fillRule="evenodd" clipRule="evenodd" d="M12 1C11.0335 1 10.25 1.7835 10.25 2.75V3.25H8C6.48122 3.25 5.25 4.48122 5.25 6V18C5.25 18.4142 5.58579 18.75 6 18.75C6.41421 18.75 6.75 18.4142 6.75 18V6C6.75 5.30964 7.30964 4.75 8 4.75H10.25V5.5C10.25 6.4665 11.0335 7.25 12 7.25H20C20.9665 7.25 21.75 6.4665 21.75 5.5V4.75H24C24.6904 4.75 25.25 5.30964 25.25 6V28.25C25.25 28.9404 24.6904 29.5 24 29.5H8C7.30964 29.5 6.75 28.9404 6.75 28.25V23.5C6.75 23.0858 6.41421 22.75 6 22.75C5.58579 22.75 5.25 23.0858 5.25 23.5V28.25C5.25 29.7688 6.48122 31 8 31H24C25.5188 31 26.75 29.7688 26.75 28.25V6C26.75 4.48122 25.5188 3.25 24 3.25H21.75V2.75C21.75 1.7835 20.9665 1 20 1H12ZM11.75 2.75C11.75 2.61193 11.8619 2.5 12 2.5H20C20.1381 2.5 20.25 2.61193 20.25 2.75V5.5C20.25 5.63807 20.1381 5.75 20 5.75H12C11.8619 5.75 11.75 5.63807 11.75 5.5V2.75ZM6.75 20.75C6.75 21.1642 6.41421 21.5 6 21.5C5.58579 21.5 5.25 21.1642 5.25 20.75C5.25 20.3358 5.58579 20 6 20C6.41421 20 6.75 20.3358 6.75 20.75ZM22.5303 23.5303C22.8232 23.2374 22.8232 22.7626 22.5303 22.4697C22.2374 22.1768 21.7626 22.1768 21.4697 22.4697L19.4044 24.5349L18.416 23.876C18.0714 23.6462 17.6057 23.7393 17.376 24.084C17.1462 24.4286 17.2393 24.8943 17.584 25.124L19.084 26.124C19.3814 26.3223 19.7775 26.2831 20.0303 26.0303L22.5303 23.5303Z" />
      </svg>
    </div>

  )
}

ClipboardSVG.defaultProps = {
  size: "32",
  classname: null
}
export default ClipboardSVG
