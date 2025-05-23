import {FC, memo} from 'react'
import cl from './MyActiveIcon.module.css'
import { ImgProps } from '../../../../types/types';



const MyCartIcon:FC<ImgProps> = memo(({isModal}) => {
  const rootClases = isModal ? cl.active_icon : '';
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className={rootClases} fillRule="evenodd" clipRule="evenodd" d="M5.7 1.4C5.88885 1.14819 6.18524 1 6.5 1H18.5C18.8148 1 19.1111 1.14819 19.3 1.4L22.3 5.4C22.4298 5.5731 22.5 5.78363 22.5 6V20C22.5 20.7957 22.1839 21.5587 21.6213 22.1213C21.0587 22.6839 20.2957 23 19.5 23H5.5C4.70435 23 3.94129 22.6839 3.37868 22.1213C2.81607 21.5587 2.5 20.7957 2.5 20V6C2.5 5.78363 2.57018 5.5731 2.7 5.4L5.7 1.4ZM7 3L4.5 6.33333V20C4.5 20.2652 4.60536 20.5196 4.79289 20.7071C4.98043 20.8946 5.23478 21 5.5 21H19.5C19.7652 21 20.0196 20.8946 20.2071 20.7071C20.3946 20.5196 20.5 20.2652 20.5 20V6.33333L18 3H7Z" fill="#686870"/>
    <path className={rootClases} fillRule="evenodd" clipRule="evenodd" d="M2.5 6C2.5 5.44772 2.94772 5 3.5 5H21.5C22.0523 5 22.5 5.44772 22.5 6C22.5 6.55228 22.0523 7 21.5 7H3.5C2.94772 7 2.5 6.55228 2.5 6Z" fill="#686870"/>
    <path className={rootClases} fillRule="evenodd" clipRule="evenodd" d="M8.5 9C9.05228 9 9.5 9.44772 9.5 10C9.5 10.7956 9.81607 11.5587 10.3787 12.1213C10.9413 12.6839 11.7044 13 12.5 13C13.2956 13 14.0587 12.6839 14.6213 12.1213C15.1839 11.5587 15.5 10.7956 15.5 10C15.5 9.44772 15.9477 9 16.5 9C17.0523 9 17.5 9.44772 17.5 10C17.5 11.3261 16.9732 12.5979 16.0355 13.5355C15.0979 14.4732 13.8261 15 12.5 15C11.1739 15 9.90215 14.4732 8.96447 13.5355C8.02678 12.5979 7.5 11.3261 7.5 10C7.5 9.44772 7.94772 9 8.5 9Z" fill="#686870"/>
</svg>

  )
})

export default MyCartIcon
