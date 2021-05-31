import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { removeProduct } from './store/actionCreator';
import { Props } from './types';
export const Product:React.FC<Props>=({product,removeProduct})=>{
    const dispatch:Dispatch<any>=useDispatch()
}