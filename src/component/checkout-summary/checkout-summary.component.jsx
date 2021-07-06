import React from 'react';
import './checkout-summary.style.scss';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import Modal from 'react-modal'
import AddNewAddress from '../address/address.component'
import { getAddressForUser } from '../../firebase/firebase.util';
import UserAddress from '../user-address/user-address.component';
import { connect } from 'react-redux';


Modal.setAppElement('#root');
class CheckoutSummary extends React.Component {

    constructor() {
        super();
        this.state = {
            modelOpen: false
        }
    }

    toggleModel = () => {
        this.setState({ modelOpen: !this.state.modelOpen })
    }

    render() {
        const { billingAddresses } = this.props;
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
                        <h2>SELECT A DELIVERY ADDRESS</h2>
                        <div className="user__address">
                            <div className="user__addresss__stored">
                                {
                                    billingAddresses.map(
                                        (item, i) => (
                                            <UserAddress key={i} {...item} />
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
                        <h2>ORDER SUMMARY</h2>

                        <div className="order__summary">
                            <span className='count' >Product Count: X</span>
                            <span className='date'>Expected Delivery Date: 25/July/2020</span>
                            <span className='price'>Total Price: $566</span>
                        </div>
                        <div className="order__payment">
                            <div className="test-details">
                                <span></span>
                            </div>
                            <CustomButton onClick={() => getAddressForUser('xLGJQH313zSJiKvEplhbPVu5s0b2')}
                                type='button'>PAY NOW</CustomButton>                        </div>
                    </div>
                </div>
            </div >

        );
    }
}

const mapStateToProps = state => ({
    billingAddresses: state.user.address
})

export default withRouter(connect(mapStateToProps)(CheckoutSummary));