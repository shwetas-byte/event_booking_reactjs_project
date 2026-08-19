import { useState, useEffect } from "react";
import { RxPerson } from "react-icons/rx";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import myImg from '../image/evora.png'

export default function Setting() {
    const [activeTab, setActiveTab] = useState("profile");

    const [profile, setProfile] = useState({ name: "", email: "", phone: "" });
    const [passwords, setPasswords] = useState({ current: "", next: "", confirm: "" });
    const [notifPrefs, setNotifPrefs] = useState({
        bookingUpdates: true,
        promotions: false,
        reminders: true,
    });
    const [savedMsg, setSavedMsg] = useState("");

    useEffect(() => {
        const userdata = JSON.parse(localStorage.getItem("userdata")) || {};
        setProfile({
            name: userdata.name || "",
            email: userdata.email || "",
            phone: userdata.phone || "",
        });

        const savedPrefs = JSON.parse(localStorage.getItem("notifPrefs"));
        if (savedPrefs) setNotifPrefs(savedPrefs);
    }, []);

    function flashSaved(msg) {
        setSavedMsg(msg);
        setTimeout(() => setSavedMsg(""), 2500);
    }

    function handleProfileChange(e) {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    }

    function saveProfile(e) {
        e.preventDefault();
        const existing = JSON.parse(localStorage.getItem("userdata")) || {};
        const updated = { ...existing, ...profile };
        localStorage.setItem("userdata", JSON.stringify(updated));
        flashSaved("Profile updated");
    }

    function handlePasswordChange(e) {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    }

    function savePassword(e) {
        e.preventDefault();
        const userdata = JSON.parse(localStorage.getItem("userdata")) || {};

        if (!passwords.current || !passwords.next || !passwords.confirm) {
            alert("Please fill all password fields");
            return;
        }

        if (passwords.current.trim() !== (userdata.password || "").trim()) {
            alert("Current password is incorrect");
            return;
        }

        if (passwords.next.length < 6) {
            alert("New password must be at least 6 characters");
            return;
        }

        if (passwords.next !== passwords.confirm) {
            alert("New passwords do not match");
            return;
        }

        localStorage.setItem(
            "userdata",
            JSON.stringify({ ...userdata, password: passwords.next.trim() })
        );
        setPasswords({ current: "", next: "", confirm: "" });
        flashSaved("Password changed");
    }

    function toggleNotif(key) {
        const updated = { ...notifPrefs, [key]: !notifPrefs[key] };
        setNotifPrefs(updated);
        localStorage.setItem("notifPrefs", JSON.stringify(updated));
    }

    function handleDeleteAccount() {
        const confirmed = window.confirm(
            "This will permanently remove your account and log you out. Continue?"
        );
        if (!confirmed) return;

        localStorage.removeItem("userdata");
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("notifPrefs");
        window.dispatchEvent(new Event("authChange"));
        window.location.href = "/";
    }

    const tabs = [
        { id: "profile", label: "Profile" },
        { id: "security", label: "Security" },
        { id: "notifications", label: "Notifications" },
        { id: "danger", label: "Danger Zone" },
    ];

    return (
        <div className="min-h-screen w-full bg-zinc-950 pt-24 pb-16 px-6 md:px-16">

            {/* HEADER */}
            <div className="flex items-center gap-4 mb-10">
                <img className="w-[70px]" src={myImg} alt="Evora" />
                <div>
                    <h1 className="text-white text-3xl font-serif tracking-wider">Settings</h1>
                    <p className="text-gray-400 text-sm">Manage your account and preferences</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10">

                {/* LEFT TABS */}
                <div className="md:w-[220px] flex md:flex-col gap-2 overflow-x-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left px-4 py-2.5 rounded-lg whitespace-nowrap transition-all duration-200 ${
                                activeTab === tab.id
                                    ? "bg-[#8F3F5D] text-white"
                                    : "text-gray-400 hover:bg-zinc-900 hover:text-white"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 max-w-xl">

                    {savedMsg && (
                        <div className="mb-4 px-4 py-2 rounded-lg bg-[#8F3F5D]/20 border border-[#B65C7A] text-[#B65C7A] text-sm">
                            {savedMsg}
                        </div>
                    )}

                    {/* PROFILE TAB */}
                    {activeTab === "profile" && (
                        <form onSubmit={saveProfile} className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-white font-serif text-xl mb-5">Profile Information</h2>

                            <label className="text-white text-sm tracking-wider" htmlFor="name">Full Name</label>
                            <div className="relative mb-4">
                                <RxPerson className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="name"
                                    name="name"
                                    value={profile.name}
                                    onChange={handleProfileChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="Your full name"
                                />
                            </div>

                            <label className="text-white text-sm tracking-wider" htmlFor="email">Email Address</label>
                            <div className="relative mb-4">
                                <MdOutlineMail className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={profile.email}
                                    onChange={handleProfileChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <label className="text-white text-sm tracking-wider" htmlFor="phone">Phone Number</label>
                            <div className="relative mb-6">
                                <IoIosCall className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="phone"
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleProfileChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="Your phone number"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#8E2EA0] via-[#C53A87] to-[#F75270] px-6 py-2.5 rounded-full text-white font-semibold hover:opacity-95 transition-all duration-300"
                            >
                                Save Changes <FaArrowRight />
                            </button>
                        </form>
                    )}

                    {/* SECURITY TAB */}
                    {activeTab === "security" && (
                        <form onSubmit={savePassword} className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-white font-serif text-xl mb-5">Change Password</h2>

                            <label className="text-white text-sm tracking-wider" htmlFor="current">Current Password</label>
                            <div className="relative mb-4">
                                <MdLockOutline className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="current"
                                    name="current"
                                    type="password"
                                    value={passwords.current}
                                    onChange={handlePasswordChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="Enter current password"
                                />
                            </div>

                            <label className="text-white text-sm tracking-wider" htmlFor="next">New Password</label>
                            <div className="relative mb-4">
                                <MdLockOutline className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="next"
                                    name="next"
                                    type="password"
                                    value={passwords.next}
                                    onChange={handlePasswordChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="At least 6 characters"
                                />
                            </div>

                            <label className="text-white text-sm tracking-wider" htmlFor="confirm">Confirm New Password</label>
                            <div className="relative mb-6">
                                <MdLockOutline className="text-pink-400 text-lg absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    id="confirm"
                                    name="confirm"
                                    type="password"
                                    value={passwords.confirm}
                                    onChange={handlePasswordChange}
                                    className="bg-zinc-950 border border-[#B65C7A] rounded-[8px] pl-10 mt-1 w-full p-2 text-white placeholder:text-gray-500"
                                    placeholder="Re-enter new password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#8E2EA0] via-[#C53A87] to-[#F75270] px-6 py-2.5 rounded-full text-white font-semibold hover:opacity-95 transition-all duration-300"
                            >
                                Update Password <FaArrowRight />
                            </button>
                        </form>
                    )}

                    {/* NOTIFICATIONS TAB */}
                    {activeTab === "notifications" && (
                        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-6">
                            <h2 className="text-white font-serif text-xl mb-5">Notification Preferences</h2>

                            {[
                                { key: "bookingUpdates", label: "Booking updates", desc: "Changes to bookings you've made" },
                                { key: "reminders", label: "Event reminders", desc: "Reminders before an event starts" },
                                { key: "promotions", label: "Promotions", desc: "Offers and new event announcements" },
                            ].map((item) => (
                                <div
                                    key={item.key}
                                    className="flex items-center justify-between py-4 border-b border-white/10 last:border-b-0"
                                >
                                    <div>
                                        <p className="text-white">{item.label}</p>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>

                                    <button
                                        onClick={() => toggleNotif(item.key)}
                                        className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                                            notifPrefs[item.key] ? "bg-[#8F3F5D]" : "bg-zinc-700"
                                        }`}
                                    >
                                        <span
                                            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                                                notifPrefs[item.key] ? "left-6" : "left-0.5"
                                            }`}
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* DANGER ZONE TAB */}
                    {activeTab === "danger" && (
                        <div className="bg-zinc-900 border border-red-900/40 rounded-2xl p-6">
                            <h2 className="text-white font-serif text-xl mb-2">Danger Zone</h2>
                            <p className="text-gray-500 text-sm mb-5">
                                Deleting your account removes your data from this device and logs you out immediately. This cannot be undone.
                            </p>

                            <button
                                onClick={handleDeleteAccount}
                                className="px-6 py-2.5 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                Delete Account
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}