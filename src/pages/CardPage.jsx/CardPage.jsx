import Item from "../../Components/Item/Item"
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md'
import PurchaseForm from "../../Components/PurchaseForm/PurchaseForm"
import FilterBlock from "../../Components/FilterBlock/FilterBlock";
import { getCurrentItem, showDelateModal } from "../../store/sliceUsers";
import { useSelector, useDispatch } from 'react-redux';
export default function CardPage(props) {

  const dispatch = useDispatch()
  const orders = useSelector(state => state.items.orders);
  return (
    <div className='item-list'>
      {orders.length > 0 ? <>
        <FilterBlock />
        {orders.map(item => {
          return (
            <Item
              closeBtn={true} //пропси для кнопки видалення:
              onClickClose={() => {
                dispatch(getCurrentItem(item))
                dispatch(showDelateModal())
              }}
              textCloseBtn={<MdClose />}
              classNameCloseBtn={'close-btn'}


              state={props.state}
              key={item.id}

              item={item} />
          )
        })}
        <PurchaseForm />
        
      </> : <> <div className="empty-block">
        <img src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg" />
        <p>Упс! Кошик порожній</p>
        <NavLink className='back-btn' to="/">Повернутися до товарів</NavLink>
      </div>
      
      </>
      }

    </div>


  )
}

CardPage.propTypes = {
  orders: PropTypes.array
}