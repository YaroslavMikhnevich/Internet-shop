import { NavLink } from "react-router-dom";
import Item from "../../Components/Item/Item"
import './Favorite.scss'
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md'
import FilterBlock from "../../Components/FilterBlock/FilterBlock";
import { showDeleteWishesModal, getCurrentItem, showOrderModal} from "../../store/sliceUsers";
import { useSelector, useDispatch } from 'react-redux';
export default function Favorite(props) {

const dispatch = useDispatch();

  const wishes = useSelector(state => state.items.wishes);
  const currentItem = useSelector(state => state.items.currentItem);


  return(
    <div className='item-list'>
    {wishes.length > 0 ?  <> 
      <FilterBlock />

    {wishes.map(item => {
            const serchBoolean = wishes.some((el) => {
                return el.id === currentItem.id
            })    
            return (
                <Item 
                key={item.id} 
                isWish={serchBoolean}

                closeBtn={true} //пропси для кнопки видалення:
                onClickClose={()=>{
                  dispatch(getCurrentItem(item))
                  dispatch(showDeleteWishesModal())
                }}
                textCloseBtn={<MdClose />}
                classNameCloseBtn={'close-btn'}

                addBtn={true} //пропси для кнопки додавання товару до корзини:
                onClick={()=>{
                  dispatch(getCurrentItem(item))
                  dispatch(showOrderModal())
                }}
                text={'Додати до кошика з списку бажань'}
                className={'card-btn'}
                

                addBtnWish={true}
                state={props.state}
                funcs={props.funcs}
                item={item}
                />
                )
    })} </> : <div className="empty-block">
      <img src="https://xl-static.rozetka.com.ua/assets/img/design/cabinet/cabinet-dummy-error.svg" />
      <p>Упс! Ваш список бажань пустий</p>

      <NavLink className='back-btn' to="/">Повернутися до товарів</NavLink>

    </div>
    
    }
    </div>
    )        
  }


  Favorite.propTypes = {
    wish: PropTypes.array
    }