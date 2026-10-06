import { Bell, CalendarCheck2, CheckCircle2, Info, MessageCircle, ShieldCheck } from "lucide-react";
import Layout from "../../Components/Layout.jsx";

const notifications = [
  { icon: CalendarCheck2, title: "Booking confirmed", text: "Your AC Repair booking is confirmed for 18 Oct, 11:00 AM – 01:00 PM.", time: "10 min ago", unread: true },
  { icon: MessageCircle, title: "Provider update", text: "Aarav Services has been assigned to your upcoming AC Repair request.", time: "1 hour ago", unread: true },
  { icon: ShieldCheck, title: "Account protected", text: "Your FixMate account security settings are up to date.", time: "Yesterday", unread: false },
  { icon: CheckCircle2, title: "Service completed", text: "Your Plumbing service was marked completed. Thanks for using FixMate!", time: "2 days ago", unread: false },
  { icon: Info, title: "FixMate tip", text: "Add a clear problem description when booking so your professional arrives prepared.", time: "3 days ago", unread: false },
];

export default function Notifications() {
  return <Layout>
    <div className="fix-container fix-section">
      <div className="notifications-head">
        <div>
          <div className="fix-eyebrow">UPDATES</div>
          <h1 className="page-title">Notifications</h1>
          <p className="fix-muted">Booking updates, provider messages and important account alerts.</p>
        </div>
        <button className="fix-btn fix-btn-ghost">Mark all as read</button>
      </div>

      <div className="notifications-list">
        {notifications.map(({ icon: Icon, title, text, time, unread }) => <article className={`notification-card ${unread ? "unread" : ""}`} key={title}>
          <div className="notification-icon"><Icon size={19}/></div>
          <div className="notification-copy"><div className="notification-row"><strong>{title}</strong>{unread && <span className="notification-dot"/>}</div><p>{text}</p><small>{time}</small></div>
        </article>)}
      </div>

      <div className="fix-card notification-empty-note"><Bell size={18}/><span>You'll see booking confirmations, schedule changes and provider updates here.</span></div>
    </div>
  </Layout>;
}
