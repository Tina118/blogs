import { FC } from 'react'

interface NotificationProps {
  alertMessage: string
}

/**
 * Notification
 * Component to dislay alert notification
 */
const Notification: FC<NotificationProps> = ({ alertMessage }) => {
  return (
    <div
      className="alert alert-danger"
      role="alert"
      style={{ margin: '20px 0px' }}
    >
      {alertMessage}
    </div>
  )
}

export default Notification
