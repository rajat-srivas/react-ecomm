import React from 'react';
import './profile.style.scss';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selector';

class Profile extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { currentUser } = this.props;
        console.log(`${currentUser.displayName.split(' ')[0]}`);
        return (
            <div className="profile container ">
                <div className="profile__side-menu">
                    <div className="info">
                        <span className='info__item' >Hello, {currentUser.displayName.split(' ')[0]} 🙋‍♂️</span>
                        <span className="info__item">MY ORDERS  🛍</span>
                        <span className="info__item">MY ADDRESSES  📬</span>
                        <span className="info__item">MY WISHLIST  🧞‍♂️</span>
                        <span className="info__item">CONTACT SUPPORT</span>
                        <span className="info__item">SIGN OUT</span>
                    </div>
                </div>
                <div className="profile__content">
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
}
);

export default connect(mapStateToProps)(Profile);