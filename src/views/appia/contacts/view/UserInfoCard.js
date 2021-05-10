// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'
import {
  Card,
  CardBody,
  Row,
  Col,
  CardText,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap'

const UserInfoCard = ({ selectedContact }) => {
  // ** render user img
  console.log("selected", selectedContact.id)

  const renderUserImg = () => {
    if (selectedContact !== null && selectedContact.avatar) {
      return <img src={selectedContact.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={`${selectedContact.name}`}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
  }

  return (
    <Card>
      <CardBody>
        <Row className='my-2'>
          <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
            <div className='d-flex align-items-center justify-content-center'>
              {renderUserImg()}
            </div>
          </Col>
          <Col md='7' xs='12'>
            <hr />
            <div className='user-info mt-2'>
              <CardText>
                <strong>Full Name</strong> : {selectedContact !== null ? `${selectedContact.name}` : 'Appia Admin'}
              </CardText>
              <CardText>
                <strong>Email</strong> : {selectedContact !== null ? selectedContact.email : 'appia.admin@appiawave.com'}
              </CardText>
              <CardText>
                <strong>Date Sent</strong> : {selectedContact !== null ? selectedContact.created_at : 'appia.admin@appiawave.com'}
              </CardText>
            </div>
            <hr />
            <h5 className='mb-0'>
              SUBJECT: {selectedContact !== null ? selectedContact.subject : 'Active'}
            </h5>
            <br />
            <CardText className='text-capitalize mb-0'>
              {selectedContact !== null ? selectedContact.message : 'Admin'}
            </CardText>
          </Col>
        </Row>
      </CardBody>
    </Card>

    //     <Card>
    //       <CardBody>
    //         <Row>
    //           <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
    //             <div className='user-avatar-section'>
    //               <div className='d-flex justify-content-start'>
    //                 {renderUserImg()}
    //                 <div className='d-flex flex-column ml-1'>
    //                   <div className='user-info mt-2'>
    //                     <h4 className='mb-0'>{selectedContact !== null ? `${selectedContact.name}` : 'Appia Admin'}</h4>
    //                     <CardText tag='span'>
    //                       {selectedContact !== null ? selectedContact.email : 'appia.admin@appiawave.com'}
    //                     </CardText>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className='d-flex align-items-center user-total-numbers'>
    //               <div className='d-flex align-items-center mr-2'>
    //                 <div className='color-box bg-light-primary'>
    //                   <DollarSign className='text-primary' />
    //                 </div>
    //                 <div className='ml-1'>
    //                   <h5 className='mb-0'>23.3k</h5>
    //                   <small>Monthly Sales</small>
    //                 </div>
    //               </div>
    //               <div className='d-flex align-items-center'>
    //                 <div className='color-box bg-light-success'>
    //                   <TrendingUp className='text-success' />
    //                 </div>
    //                 <div className='ml-1'>
    //                   <h5 className='mb-0'>$99.87K</h5>
    //                   <small>Annual Profit</small>
    //                 </div>
    //               </div>
    //             </div>
    //           </Col>
    //           <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
    //             <div className='user-info-wrapper'>
    //               <div className='d-flex flex-wrap align-items-center'>
    //                 <div className='user-info-title'>
    //                   <User className='mr-1' size={14} />
    //                   <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
    //                     ID
    //                   </CardText>
    //                 </div>
    //                 <CardText className='mb-0'>
    //                   {selectedContact !== null ? selectedContact.id : ''}
    //                 </CardText>
    //               </div>
    //               <div className='d-flex flex-wrap align-items-center my-50'>
    //                 <div className='user-info-title'>
    //                   <Check className='mr-1' size={14} />
    //                   <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
    //                     Subject
    //                   </CardText>
    //                 </div>
    //                 <CardText className='text-capitalize mb-0'>
    //                   {selectedContact !== null ? selectedContact.subject : 'Active'}
    //                 </CardText>
    //               </div>
    //               <div className='d-flex flex-wrap align-items-center my-50'>
    //                 <div className='user-info-title'>
    //                   <Star className='mr-1' size={14} />
    //                   <CardText tag='span' className='user-info-title text-capitalize font-weight-bold mb-0'>
    //                     Message
    //                   </CardText>
    //                 </div>
    //                 <CardText className='text-capitalize mb-0'>
    //                   {selectedContact !== null ? selectedContact.message : 'Admin'}
    //                 </CardText>
    //               </div>
    //               {/* <div className='d-flex flex-wrap align-items-center'>
    //                 <div className='user-info-title'>
    //                   <Phone className='mr-1' size={14} />
    //                   <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
    //                     Contact
    //                   </CardText>
    //                 </div>
    //                 <CardText className='mb-0'>{selectedContact !== null ? selectedContact.phone : '(123) 456-7890'}</CardText>
    //               </div> */}
    //             </div>
    //           </Col>
    //         </Row>
    //       </CardBody>
    //     </Card>
  )
}

export default UserInfoCard


// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// import classnames from 'classnames'
// import { Star, ShoppingCart, DollarSign, Heart, Share2, Facebook, Twitter, Youtube, Instagram } from 'react-feather'
// import {
//   Row,
//   Col,
//   CardText,
//   Button,
//   UncontrolledButtonDropdown,
//   DropdownToggle,
//   DropdownItem,
//   DropdownMenu
// } from 'reactstrap'

// const Product = props => {
//   const { data, deleteWishlistItem, dispatch, addToWishlist, getProduct, productId, addToCart } = props

//   const [selectedColor, setSelectedColor] = useState('primary')

//   const renderColorOptions = () => {
//     return data.colorOptions.map(color => {
//       return (
//         <li
//           key={color}
//           className={classnames('d-inline-block', {
//             selected: selectedColor === color
//           })}
//           onClick={() => setSelectedColor(color)}
//         >
//           <div className={`color-option b-${color}`}>
//             <div className={`filloption bg-${color}`}></div>
//           </div>
//         </li>
//       )
//     })
//   }

//   const handleWishlist = val => {
//     if (val) {
//       dispatch(deleteWishlistItem(productId))
//     } else {
//       dispatch(addToWishlist(productId))
//     }
//     dispatch(getProduct(productId))
//   }

//   const handleCartBtn = (id, val) => {
//     if (val === false) {
//       dispatch(addToCart(id))
//     }
//     dispatch(getProduct(productId))
//   }

//   const CartBtnTag = data.isInCart ? Link : 'button'

//   return (
//     <Row className='my-2'>
//       <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
//         <div className='d-flex align-items-center justify-content-center'>
//           <img className='img-fluid product-img' src={data.image} alt={data.name} />
//         </div>
//       </Col>
//       <Col md='7' xs='12'>
//         <h4>{data.name}</h4>
//         <CardText tag='span' className='item-company'>
//           By
//           <a className='company-name' href='/' onClick={e => e.preventDefault()}>
//             {data.brand}
//           </a>
//         </CardText>
//         <div className='ecommerce-details-price d-flex flex-wrap mt-1'>
//           <h4 className='item-price mr-1'>${data.price}</h4>
//           <ul className='unstyled-list list-inline'>
//             {new Array(5).fill().map((listItem, index) => {
//               return (
//                 <li key={index} className='ratings-list-item mr-25'>
//                   <Star
//                     className={classnames({
//                       'filled-star': index + 1 <= data.rating,
//                       'unfilled-star': index + 1 > data.rating
//                     })}
//                   />
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//         <CardText>
//           Available -<span className='text-success ml-25'>In stock</span>
//         </CardText>
//         <CardText>{data.description}</CardText>
//         <ul className='product-features list-unstyled'>
//           {data.hasFreeShipping ? (
//             <li>
//               <ShoppingCart size={19} />
//               <span>Free Shipping</span>
//             </li>
//           ) : null}
//           <li>
//             <DollarSign size={19} />
//             <span>EMI options available</span>
//           </li>
//         </ul>
//         <hr />
//         <div className='product-color-options'>
//           <h6>Colors</h6>
//           <ul className='list-unstyled mb-0'>{renderColorOptions()}</ul>
//         </div>
//         <hr />
//         <div className='d-flex flex-column flex-sm-row pt-1'>
//           <Button
//             tag={CartBtnTag}
//             className='btn-cart mr-0 mr-sm-1 mb-1 mb-sm-0'
//             color='primary'
//             onClick={() => handleCartBtn(data.id, data.isInCart)}
//             /*eslint-disable */
//             {...(data.isInCart
//               ? {
//                   to: '/apps/ecommerce/checkout'
//                 }
//               : {})}
//             /*eslint-enable */
//           >
//             <ShoppingCart className='mr-50' size={14} />
//             {data.isInCart ? 'View in cart' : 'Move to cart'}
//           </Button>
//           <Button
//             className='btn-wishlist mr-0 mr-sm-1 mb-1 mb-sm-0'
//             color='secondary'
//             outline
//             onClick={() => handleWishlist(data.isInWishlist)}
//           >
//             <Heart
//               size={14}
//               className={classnames('mr-50', {
//                 'text-danger': data.isInWishlist
//               })}
//             />
//             <span>Wishlist</span>
//           </Button>
//           <UncontrolledButtonDropdown className='dropdown-icon-wrapper btn-share'>
//             <DropdownToggle className='btn-icon hide-arrow' color='secondary' caret outline>
//               <Share2 size={14} />
//             </DropdownToggle>
//             <DropdownMenu right>
//               <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
//                 <Facebook size={14} />
//               </DropdownItem>
//               <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
//                 <Twitter size={14} />
//               </DropdownItem>
//               <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
//                 <Youtube size={14} />
//               </DropdownItem>
//               <DropdownItem tag='a' href='/' onClick={e => e.preventDefault()}>
//                 <Instagram size={14} />
//               </DropdownItem>
//             </DropdownMenu>
//           </UncontrolledButtonDropdown>
//         </div>
//       </Col>
//     </Row>
//   )
// }

// export default Product
