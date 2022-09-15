import { createPortal } from "react-dom";
import { useUI } from "../../utils/useUI"

function NotificationPopup() {
    const { notificationStatus, notificationMessage } = useUI();
    return (
        <section className="fixed bg-[#00000088] backdrop-blur-sm
        text-white top-[14%] left-[50%] translate-x-[-50%] p-6 rounded-md z-[1200] w-80 xs:w-60 ">
            {<p
                className={`text-3xl xs:text-2xl ${notificationStatus ? `text-lime-500 ` : 'text-pink-500'}`}>
                {notificationStatus ? ' It\'s ok!' : 'Oh no!'}
            </p>}
            <p className="text-2xl xs:text-xl">{notificationMessage}</p>
        </section >
    )
}

export default function RenderedNotificationPopup() {
    return (
        <>
            {createPortal(<NotificationPopup />, document.getElementById('notificationContainer') as HTMLElement)}
        </>
    )
}
