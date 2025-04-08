import { NotificationContainer } from "./notification.styled";

interface NotificationProps {
    message: string;
}

const Notification = ({ message }: NotificationProps) => {
    return <NotificationContainer>{message}</NotificationContainer>;
};

export default Notification;
