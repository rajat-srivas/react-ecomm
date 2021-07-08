import React from 'react';
import './checkout-summary.style.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import Modal from 'react-modal'
import AddNewAddress from '../address/address.component'
import { getAddressForUser } from '../../firebase/firebase.util';
import UserAddress from '../user-address/user-address.component';
import { connect } from 'react-redux';
import { SelectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selector';


Modal.setAppElement('#root');
class CheckoutSummary extends React.Component {

    constructor() {
        super();
        this.state = {
            modelOpen: false,
            selectedDeliveryAddress: 0
        }
    }

    toggleModel = () => {
        this.setState({ modelOpen: !this.state.modelOpen })
    }

    handleCheckboxChange = (id) => (e) => {
        this.setState({ selectedDeliveryAddress: id })
    }

    render() {
        const { billingAddresses, totalItems, totalPrice } = this.props;
        const customModalStyle = {
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '1200px'
            }
        }
        return (

            <div className="checkout-summary container">
                <div className="summary">
                    <div className="summary__address-selector">
                        <h2>SELECT A DELIVERY ADDRESS 🚀 </h2>
                        <div className="user__address">
                            <div className="user__addresss__stored">
                                {
                                    billingAddresses.map(
                                        (item) => (
                                            <UserAddress checked={
                                                item.id === this.state.selectedDeliveryAddress
                                            } handleChange={this.handleCheckboxChange} key={item.id} {...item} />
                                        )
                                    )
                                }
                            </div>
                            <div className="user__address__new">
                                <CustomButton inverted onClick={this.toggleModel}
                                    type='submit'>Add New Address</CustomButton>
                                <Modal isOpen={this.state.modelOpen} onRequestClose={this.toggleModel} style={customModalStyle}>
                                    <AddNewAddress handleClick={this.toggleModel} ></AddNewAddress>
                                </Modal>

                            </div>

                        </div>
                    </div>
                    <div className="order">
                        <h2>ORDER SUMMARY </h2>

                        <div className="order__summary">
                            <span className='count' >Items: {totalItems}</span>
                            <span className='price'>Total Price: ${totalPrice}</span>
                        </div>
                        <div className="order__payment">
                            <div className="test-details">
                                <span>Pay using the test card
                                    0000-0000-0000-0000</span>
                            </div>
                            <CustomButton onClick={() => getAddressForUser('xLGJQH313zSJiKvEplhbPVu5s0b2')}
                                type='button'>PAY NOW  💳 </CustomButton>                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

const mapStateToProps = state => ({
    billingAddresses: state.user.address,
    totalItems: SelectCartItemsCount(state),
    totalPrice: selectCartTotal(state)
})


export default withRouter(connect(mapStateToProps)(CheckoutSummary));