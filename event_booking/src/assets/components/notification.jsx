import { useEffect, useState } from "react";

export default function Notification() {

    const [notifications, setNotifications] = useState(
        JSON.parse(localStorage.getItem("notifications")) || []
    );


    // Notifications load/update
    useEffect(() => {

        const loadNotifications = () => {

            const data =
                JSON.parse(
                    localStorage.getItem("notifications")
                ) || [];

            setNotifications(data);

        };

        window.addEventListener(
            "notificationChange",
            loadNotifications
        );

        return () => {
            window.removeEventListener(
                "notificationChange",
                loadNotifications
            );
        };

    }, []);


    return (

        <div className="min-h-screen bg-zinc-950 text-white pt-28 px-10">

            <div className="max-w-4xl mx-auto">

                <h1 className="text-4xl font-serif text-[#FAF8F6]">
                    Notifications
                </h1>

                <p className="text-zinc-500 mt-2 mb-8">
                    Stay updated with your bookings and activities.
                </p>


                {notifications.length === 0 ? (

                    <div className="border border-white/10 rounded-2xl p-10 text-center">

                        <p className="text-zinc-500">
                            No notifications yet.
                        </p>

                    </div>

                ) : (

                    <div className="space-y-4">

                        {notifications.map((notification) => (

                            <div
                                key={notification.id}
                                className="bg-zinc-900/60 border border-white/10 rounded-2xl p-5 flex gap-4"
                            >

                                {/* DOT */}

                                <div className="w-2.5 h-2.5 rounded-full bg-[#B65C7A] mt-2 shrink-0"></div>


                                {/* CONTENT */}

                                <div className="flex-1">

                                    <h2 className="text-lg text-[#FAF8F6] font-medium">
                                        {notification.title}
                                    </h2>

                                    <p className="text-sm text-zinc-400 mt-1">
                                        {notification.message}
                                    </p>


                                    {notification.bookingRef && (

                                        <p className="text-xs text-[#B65C7A] mt-3">
                                            Booking Reference:{" "}
                                            {notification.bookingRef}
                                        </p>

                                    )}

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );
}