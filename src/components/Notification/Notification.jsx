import PropTypes from 'prop-types'; 
import { NotifTitle } from './Notification.styled';

export const Notification = ({ message }) => {
    return <NotifTitle>{message}</NotifTitle>    
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,    
}

export default Notification;