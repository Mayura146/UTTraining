import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { Props } from './types';
export const Product:React.FC<Props>=({product,removeProduct})=>{
    const dispatch:Dispatch<any>=useDispatch()
    return(
        <div></div>
    )
}