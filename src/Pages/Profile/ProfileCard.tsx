import { FaRegStar, FaUserEdit } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export default function ProfileCard() {
    return (
        <main className="mt-3">
            <section className="flex justify-center mx-auto">
                <div style={{ background: "linear-gradient(90deg, #1F1C2C 0%, #928DAB 100%)" }}
                    className="w-full  flex space-x-8  p-4 h-72 rounded-[50px]">
                    {/* ?image section  */}
                    <div>
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" className="h-40 lg:h-44 rounded-lg" alt="Profile Pic" />
                        <button className="px-6 py-2 bg-white text-black w-44 mt-3 font-bold">VIP 0</button>
                    </div>
                    {/* ? image section close */}
                    {/* !name section opens */}
                    <div className="w-full">
                        <div className="flex items-center gap-4">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white">Johon Doe</h3>
                            {/* edit icon */}
                            <FaUserEdit className="text-2xl text-white" />
                        </div>
                        <button
                            style={{ background: "linear-gradient(90deg, #FFE259 0%, #FFA751 100%)" }}
                            className="py-2 mt-4 px-6 rounded-full text-black font-bold">UID: 123456578</button>
                        <p className="mt-4 font-bold text-white">Last Login 2024 August 1</p>
                        {/* icons */}
                        <div className="mt-4 flex gap-4">
                            <IoMdDownload className="text-2xl text-white" />
                            <FaRegMessage className="text-2xl text-white" />
                            <FaRegStar className="text-2xl text-white" />
                        </div>

                    </div>

                </div>
            </section>
        </main>
    )
}
