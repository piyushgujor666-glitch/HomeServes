import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, PhoneCall } from "lucide-react";
import logo from "../../assets/FIX.jpg";

export default function Footer() {
  return (
    <footer className="fix-footer">
      <div className="fix-container" style={{padding:"48px 0 28px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.5fr 1fr 1fr 1fr",gap:32}} className="footer-grid">
          <div>
            <Link to="/home" className="fix-logo" style={{color:"#fff"}}><img src={logo} alt="FixMate"/><span>FixMate</span></Link>
            <p style={{maxWidth:330,lineHeight:1.7,color:"#9db1aa",marginTop:16}}>Reliable home services with clear pricing, trusted professionals and a booking experience that stays simple.</p>
            <Link to="/services" className="fix-btn fix-btn-soft" style={{marginTop:14}}>Book a service <ArrowUpRight size={16}/></Link>
          </div>
          <div><strong style={{color:"#fff"}}>Explore</strong><div style={{display:"grid",gap:10,marginTop:15,color:"#9db1aa"}}><Link to="/home">Home</Link><Link to="/services">Services</Link><Link to="/bookings">Bookings</Link><Link to="/profile">Profile</Link></div></div>
          <div><strong style={{color:"#fff"}}>Popular services</strong><div style={{display:"grid",gap:10,marginTop:15,color:"#9db1aa"}}><span>Plumbing</span><span>AC Repair</span><span>Cleaning</span><span>Electrical</span></div></div>
          <div><strong style={{color:"#fff"}}>Need help?</strong><div style={{display:"grid",gap:12,marginTop:15,color:"#9db1aa"}}><span style={{display:"flex",gap:8,alignItems:"center"}}><PhoneCall size={16}/> +91 99980 91751</span><span style={{display:"flex",gap:8,alignItems:"center"}}><Mail size={16}/> support@fixmate.in</span><span>Mon–Sun · 24/7 support</span></div></div>
        </div>
        <div style={{marginTop:40,paddingTop:18,borderTop:"1px solid #28433b",display:"flex",justifyContent:"space-between",gap:15,flexWrap:"wrap",color:"#71877f",fontSize:13}}><span>© 2026 FixMate. All rights reserved.</span><span>Your Home. Our Care.</span></div>
      </div>
    </footer>
  );
}
