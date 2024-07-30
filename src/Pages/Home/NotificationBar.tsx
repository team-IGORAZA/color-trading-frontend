import { IoMdNotificationsOutline } from "react-icons/io";

export default function NotificationBar() {
  return (
    <section className="w-full bg-gradient h-16 p-2 flex items-center justify-end rounded-b-2xl px-4">
        <IoMdNotificationsOutline className="text-white text-3xl"/>
    </section>
  )
}
