import { useState, useEffect, useRef } from "react";
import { Sunrise, Sun, Waves, Crown, Search, User, Leaf, MapPin, CreditCard, Smartphone, Landmark, Lock, ShieldCheck, FileText, Printer, Save, Building2, Zap, BarChart3, CalendarDays, CheckCircle2, Ban, Bird, Trash2, Flame, Camera, Anchor, Info, Mail, ClipboardList, TrendingUp, Download } from 'lucide-react';
const IconMap = ({name, size=18, color, style, className}) => { const M = {sunrise:Sunrise,sun:Sun,waves:Waves,crown:Crown,search:Search,user:User,leaf:Leaf,mappin:MapPin,creditcard:CreditCard,smartphone:Smartphone,landmark:Landmark,lock:Lock,shieldcheck:ShieldCheck,filetext:FileText,printer:Printer,save:Save,building2:Building2,zap:Zap,barchart3:BarChart3,calendardays:CalendarDays,checkcircle2:CheckCircle2,ban:Ban,bird:Bird,trash2:Trash2,flame:Flame,camera:Camera,anchor:Anchor,info:Info,mail:Mail,clipboardlist:ClipboardList,trendingup:TrendingUp,download:Download}; const I=M[name]; return I?<I size={size} color={color} style={style} className={className}/>:null; };

/* ══ GLOBAL STYLES ══════════════════════════════════════ */
const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --ol:#373c1e; --om:#4d5429; --os:#6b7235; --op:#e8ebda; --og:#f4f5ee;
      --st:#1a1a18; --pb:#5a5a52; --ms:#9a9a8e; --bd:#ddddd0; --bdd:rgba(55,60,30,0.15);
      --wh:#fafaf6; --sf:#ffffff; --cr:#f9f8f2;
      --gn:#2d6a4f; --gnb:#eaf4ee; --gnbd:#a8d5b5;
      --rd:#9b2226; --rdb:#fdf0f0; --rdbd:#f0b8b8;
      --am:#7c5c00; --amb:#fdf8e8; --ambd:#e8d480;
      --rx:8px; --rs:12px; --rm:18px; --rl:24px;
      --ss:0 1px 4px rgba(55,60,30,0.08),0 1px 2px rgba(55,60,30,0.04);
      --sm:0 4px 16px rgba(55,60,30,0.1),0 2px 6px rgba(55,60,30,0.05);
      --sl:0 12px 40px rgba(55,60,30,0.14),0 4px 12px rgba(55,60,30,0.06);
      --sx:0 24px 64px rgba(55,60,30,0.18);
      --fd:'Cormorant Garamond',Georgia,serif;
      --fb:'Outfit',system-ui,sans-serif;
      --fm:'JetBrains Mono',monospace;
    }
    html{scroll-behavior:smooth;-webkit-tap-highlight-color:transparent}
    body{font-family:var(--fb);background:var(--wh);color:var(--st);-webkit-font-smoothing:antialiased}
    input,select,button,textarea{font-family:var(--fb)}
    button{cursor:pointer}
    @keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes scaleIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}
    @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes scan{0%{transform:translateY(-100px)}100%{transform:translateY(100px)}}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
    @keyframes slideIn{from{transform:translateX(100%)}to{transform:translateX(0)}}
    @keyframes imgFade{from{opacity:0;transform:scale(1.03)}to{opacity:1;transform:scale(1)}}
    @keyframes kenBurns{from{transform:scale(1)}to{transform:scale(1.08)}}
    .fu{animation:fadeUp 0.5s cubic-bezier(.22,1,.36,1) forwards}
    .fi{animation:fadeIn 0.3s ease forwards}
    .si{animation:scaleIn 0.35s cubic-bezier(.22,1,.36,1) forwards}
    ::-webkit-scrollbar{width:4px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:var(--bd);border-radius:2px}
    @media print{
      nav,.no-print{display:none!important}
      body{background:#fff!important}
      *{box-shadow:none!important}
    }
  `}</style>
);

/* ══ IMAGE DATA ══════════════════════════════════════════ */
const IMGS = {
  aerial: "/aerial.jpg",
  harbor: "/harbor.jpg",
  trail:  "/trail.jpg",
  fort:   "/fort.jpg",
  beach:  "/harbor.jpg",
};
const ParallaxImg = ({src, alt, height=400, speed=0.4, style={}, imgStyle={}}) => {
  const wRef = useRef(null);
  const iRef = useRef(null);
  useEffect(() => {
    const wrap = wRef.current;
    const img = iRef.current;
    if (!wrap || !img) return;
    const extra = Math.round(height * 0.55);
    img.style.height = `${height + extra}px`;
    img.style.marginTop = `-${extra / 2}px`;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight;
        const pct = (vh - rect.top) / (vh + rect.height);
        const offset = (pct - 0.5) * extra * speed * 2;
        img.style.transform = `translate3d(0,${offset.toFixed(1)}px,0) scale(1.05)`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, {passive: true});
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [height, speed]);
  return (
    <div ref={wRef} style={{overflow:"hidden", height, ...style}}>
      <img ref={iRef} src={src} alt={alt} style={{width:"100%", objectFit:"cover", display:"block", willChange:"transform", transition:"transform 0.1s linear", ...imgStyle}}/>
    </div>
  );
};

/* ══ HELPERS ═════════════════════════════════════════════ */
const TD = new Date(); TD.setHours(0,0,0,0);
const iso = d => d.toISOString().split("T")[0];
const getAge = (dob, visit) => {
  const d = new Date(dob), v = new Date(visit);
  let a = v.getFullYear() - d.getFullYear();
  if (v < new Date(v.getFullYear(), d.getMonth(), d.getDate())) a--;
  return a;
};
const getPrice = (dob, visit) => {
  if (!dob || !visit) return null;
  const a = getAge(dob, visit);
  if (a <= 5) return 0; if (a <= 17) return 1.5; if (a <= 64) return 3; return 1.5;
};
const fmtLong = d => new Date(d+"T12:00:00").toLocaleDateString("pt-PT",{day:"numeric",month:"long",year:"numeric"});
const fmtShort = d => new Date(d+"T12:00:00").toLocaleDateString("pt-PT",{day:"numeric",month:"short",year:"numeric"});
const MONTHS = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const WDAYS = ["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
const SLOTS = [
  {id:"morning",label:"Período da Manhã",hours:"08h00–13h00",icon:"sunrise",cap:320,max:550},
  {id:"afternoon",label:"Período da Tarde",hours:"13h00–18h00",icon:"sun",cap:185,max:550},
  {id:"fullday",label:"Dia Completo",hours:"08h00–18h00",icon:"waves",cap:45,max:550},
];
const COUNTRIES = ["Portugal","Espanha","França","Alemanha","Reino Unido","Itália","Países Baixos","Bélgica","Brasil","Estados Unidos","Canadá","Austrália","Outro"];
const DEMO_ACCOUNTS = [
  {role:"admin",label:"Administrador ICNF",email:"admin@icnf.pt",pass:"admin2026",color:"#b8960c"},
  {role:"operator",label:"Operador de Campo",email:"operador@icnf.pt",pass:"oper2026",color:"#2d6a4f"},
  {role:"user",label:"Turista (Demo)",email:"demo@turista.pt",pass:"turista2026",color:"#373c1e"},
];
const MOCK_BOOKS = [
  {ref:"BLG-2026-001041",name:"Ana Silva",slot:"Manhã",pax:3,total:"7,50 €",ok:true},
  {ref:"BLG-2026-001040",name:"João Costa",slot:"Dia",pax:2,total:"6,00 €",ok:true},
  {ref:"BLG-2026-001039",name:"Maria Santos",slot:"Tarde",pax:5,total:"12,00 €",ok:true},
  {ref:"BLG-2026-001038",name:"P. Ferreira",slot:"Manhã",pax:1,total:"3,00 €",ok:false},
  {ref:"BLG-2026-001037",name:"Luísa Pinto",slot:"Dia",pax:4,total:"10,50 €",ok:true},
];
const MOCK_VISITORS = [
  {name:"Ana Silva",age:34,country:"Portugal",token:"BLG-2026-001041-P1",status:"valid"},
  {name:"Rui Silva",age:38,country:"Portugal",token:"BLG-2026-001041-P2",status:"used"},
  {name:"Sofia Silva",age:8,country:"Portugal",token:"BLG-2026-001041-P3",status:"valid"},
  {name:"Thomas Müller",age:45,country:"Alemanha",token:"BLG-2026-001040-P1",status:"valid"},
  {name:"Laura García",age:29,country:"Espanha",token:"BLG-2026-001040-P2",status:"valid"},
];

/* ══ QR CODE ═════════════════════════════════════════════ */
const QR = ({ value, size = 100, light = false }) => {
  const C = 21, cell = size / C;
  const h = [...value].reduce((a, c) => a + c.charCodeAt(0), 0);
  const g = Array.from({length:C}, (_,r) => Array.from({length:C}, (_,c) => {
    if (r<7&&c<7) return r===0||r===6||c===0||c===6||(r>=2&&r<=4&&c>=2&&c<=4);
    if (r<7&&c>C-8) return r===0||r===6||c===C-1||c===C-7||(r>=2&&r<=4&&c>=C-5&&c<=C-3);
    if (r>C-8&&c<7) return r===C-1||r===C-7||c===0||c===6||(r>=C-5&&r<=C-3&&c>=2&&c<=4);
    return ((h*(r*C+c+1)*2654435761)%7919)%2===0;
  }));
  const fg = light ? "#ffffff" : "#373c1e", bg = light ? "rgba(255,255,255,0.06)" : "#ffffff";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{display:"block",borderRadius:6}}>
      <rect width={size} height={size} fill={bg} rx="6"/>
      {g.map((row,r) => row.map((on,c) => on
        ? <rect key={`${r}-${c}`} x={c*cell} y={r*cell} width={cell} height={cell} fill={fg}/>
        : null
      ))}
    </svg>
  );
};

/* ══ PRIMITIVES ══════════════════════════════════════════ */
const Logo = ({ light, onClick }) => (
  <button onClick={onClick} style={{background:"none",border:"none",cursor:"pointer",display:"flex",alignItems:"center",gap:10,padding:0,flexShrink:0}}>
    <div style={{width:36,height:36,background:light?"rgba(255,255,255,0.12)":"var(--ol)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",border:light?"1px solid rgba(255,255,255,0.2)":"none",flexShrink:0}}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={light?"#fff":"#c8d48a"} strokeWidth="1.6"/>
        <path d="M12 3C12 3 8 8 8 12s4 9 4 9" stroke={light?"rgba(255,255,255,0.5)":"#8a9a45"} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M12 3C12 3 16 8 16 12s-4 9-4 9" stroke={light?"rgba(255,255,255,0.5)":"#8a9a45"} strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M3 12h18" stroke={light?"rgba(255,255,255,0.4)":"#8a9a45"} strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    </div>
    <div>
      <div style={{fontFamily:"var(--fd)",fontWeight:700,fontSize:17,color:light?"#fff":"var(--ol)",lineHeight:1,letterSpacing:"-0.01em"}}>
        Berlengas<span style={{color:light?"rgba(255,255,255,0.5)":"var(--os)"}}>Pass</span>
      </div>
      <div style={{fontSize:9,fontWeight:500,letterSpacing:"0.1em",textTransform:"uppercase",color:light?"rgba(255,255,255,0.35)":"var(--ms)",marginTop:2}}>ICNF · Portal Oficial</div>
    </div>
  </button>
);

const Btn = ({ children, onClick, disabled, loading, variant="primary", size="md", full=false, style={} }) => {
  const sz = {sm:{p:"9px 16px",fs:12},md:{p:"12px 22px",fs:14},lg:{p:"14px 26px",fs:15},xl:{p:"16px 34px",fs:16}};
  const vs = {
    primary:{bg:"var(--ol)",color:"#fff",border:"none",sh:"0 4px 14px rgba(55,60,30,0.3)"},
    secondary:{bg:"transparent",color:"var(--ol)",border:"1.5px solid var(--bdd)",sh:"none"},
    white:{bg:"#fff",color:"var(--ol)",border:"none",sh:"0 4px 20px rgba(0,0,0,0.1)"},
    ghost:{bg:"var(--og)",color:"var(--ol)",border:"1px solid var(--bd)",sh:"none"},
  };
  const v = vs[variant] || vs.primary;
  const isDisabled = disabled || loading;
  return (
    <button onClick={isDisabled ? undefined : onClick} style={{
      padding:sz[size].p, fontSize:sz[size].fs, fontWeight:600, fontFamily:"var(--fb)",
      background:isDisabled?"var(--bd)":v.bg, color:isDisabled?"var(--ms)":v.color,
      border:v.border, borderRadius:"var(--rs)", cursor:isDisabled?"not-allowed":"pointer",
      boxShadow:isDisabled?"none":v.sh, transition:"all 0.18s cubic-bezier(.22,1,.36,1)",
      display:"inline-flex", alignItems:"center", justifyContent:"center", gap:7,
      letterSpacing:"-0.01em", opacity:isDisabled?0.6:1, width:full?"100%":"auto",
      userSelect:"none", ...style,
    }}
    onMouseEnter={e=>{if(!isDisabled){e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.filter="brightness(1.05)";}}}
    onMouseLeave={e=>{if(!isDisabled){e.currentTarget.style.transform="none";e.currentTarget.style.filter="none";}}}>
      {loading && <div style={{width:14,height:14,border:"2px solid rgba(255,255,255,0.25)",borderTopColor:"currentColor",borderRadius:"50%",animation:"spin 0.7s linear infinite"}}/>}
      {children}
    </button>
  );
};

const Card = ({ children, style={}, hover=false, pad="20px" }) => (
  <div style={{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:"var(--rm)",padding:pad,boxShadow:"var(--ss)",transition:hover?"all 0.2s ease":"none",...style}}
    onMouseEnter={e=>{if(hover){e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="var(--sm)";}}}
    onMouseLeave={e=>{if(hover){e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="var(--ss)";}}}
  >{children}</div>
);

const Inp = ({ label, helper, error, icon, ...p }) => {
  const [f, setF] = useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:5}}>
      {label && <label style={{fontSize:12,fontWeight:600,color:"var(--pb)",letterSpacing:"0.02em"}}>{label}</label>}
      <div style={{position:"relative"}}>
        {icon && <div style={{position:"absolute",left:11,top:"50%",transform:"translateY(-50%)",pointerEvents:"none",color:"var(--ms)",display:"flex"}}>{icon}</div>}
        <input {...p} onFocus={e=>{setF(true);p.onFocus?.(e);}} onBlur={e=>{setF(false);p.onBlur?.(e);}}
          style={{width:"100%",padding:icon?"11px 12px 11px 36px":"11px 12px",border:`1.5px solid ${error?"var(--rd)":f?"var(--om)":"var(--bd)"}`,borderRadius:"var(--rx)",fontSize:14,color:"var(--st)",background:"#fff",outline:"none",transition:"all 0.15s",boxShadow:f?"0 0 0 3px rgba(55,60,30,0.07)":"none",...p.style}}/>
      </div>
      {(error||helper) && <div style={{fontSize:11,color:error?"var(--rd)":"var(--ms)"}}>{error||helper}</div>}
    </div>
  );
};

const Sel = ({ label, children, value, onChange }) => {
  const [f, setF] = useState(false);
  return (
    <div style={{display:"flex",flexDirection:"column",gap:5}}>
      {label && <label style={{fontSize:12,fontWeight:600,color:"var(--pb)",letterSpacing:"0.02em"}}>{label}</label>}
      <div style={{position:"relative"}}>
        <select value={value} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)}
          style={{width:"100%",padding:"11px 32px 11px 12px",border:`1.5px solid ${f?"var(--om)":"var(--bd)"}`,borderRadius:"var(--rx)",fontSize:14,color:"var(--st)",background:"#fff",outline:"none",appearance:"none",cursor:"pointer",boxShadow:f?"0 0 0 3px rgba(55,60,30,0.07)":"none",transition:"all 0.15s"}}>
          {children}
        </select>
        <svg style={{position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="var(--ms)" strokeWidth="2" strokeLinecap="round"/></svg>
      </div>
    </div>
  );
};

const Chip = ({ ok, label }) => {
  const v = ok
    ? {bg:"var(--gnb)",c:"var(--gn)",b:"var(--gnbd)"}
    : {bg:"var(--rdb)",c:"var(--rd)",b:"var(--rdbd)"};
  return <span style={{display:"inline-flex",alignItems:"center",padding:"3px 9px",borderRadius:6,fontSize:11,fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",background:v.bg,color:v.c,border:`1px solid ${v.b}`}}>{label}</span>;
};

const OChip = ({ label }) => (
  <span style={{display:"inline-flex",alignItems:"center",padding:"3px 9px",borderRadius:6,fontSize:11,fontWeight:700,letterSpacing:"0.05em",textTransform:"uppercase",background:"var(--op)",color:"var(--ol)",border:"1px solid rgba(55,60,30,0.2)"}}>{label}</span>
);

const SLbl = ({ children, style={} }) => (
  <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--ms)",...style}}>{children}</div>
);

const Hr = ({ style={} }) => <div style={{height:1,background:"var(--bd)",...style}}/>;

/* ══ DOB FIELD ═══════════════════════════════════════════ */
const DOB = ({ value, onChange }) => {
  const parts = value ? value.split("-") : ["","",""];
  const [yr, setYr] = useState(parts[0]);
  const [mo, setMo] = useState(parts[1]);
  const [dy, setDy] = useState(parts[2]);
  const cy = new Date().getFullYear();
  const years = Array.from({length:110}, (_,i) => String(cy-i));
  const emit = (y,m,d) => { if(y&&m&&d) onChange(`${y}-${m}-${d}`); else onChange(""); };
  const ss = {width:"100%",padding:"11px 26px 11px 10px",border:"1.5px solid var(--bd)",borderRadius:"var(--rx)",fontSize:14,background:"#fff",outline:"none",appearance:"none",cursor:"pointer",color:"var(--st)"};
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1.7fr 1.3fr",gap:8}}>
      {[
        {val:dy,set:v=>{setDy(v);emit(yr,mo,v);},ph:"Dia",opts:Array.from({length:31},(_,i)=>String(i+1).padStart(2,"0")),labels:Array.from({length:31},(_,i)=>String(i+1))},
        {val:mo,set:v=>{setMo(v);emit(yr,v,dy);},ph:"Mês",opts:MONTHS.map((_,i)=>String(i+1).padStart(2,"0")),labels:MONTHS},
        {val:yr,set:v=>{setYr(v);emit(v,mo,dy);},ph:"Ano",opts:years,labels:years},
      ].map((f,fi) => (
        <div key={fi} style={{position:"relative"}}>
          <select value={f.val} onChange={e=>f.set(e.target.value)} style={ss}
            onFocus={e=>{e.target.style.borderColor="var(--om)";e.target.style.boxShadow="0 0 0 3px rgba(55,60,30,0.07)";}}
            onBlur={e=>{e.target.style.borderColor="var(--bd)";e.target.style.boxShadow="none";}}>
            <option value="">{f.ph}</option>
            {f.opts.map((o,oi) => <option key={o} value={o}>{f.labels[oi]}</option>)}
          </select>
          <svg style={{position:"absolute",right:6,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} width="10" height="10" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="var(--ms)" strokeWidth="2" strokeLinecap="round"/></svg>
        </div>
      ))}
    </div>
  );
};

/* ══ CALENDAR ════════════════════════════════════════════ */
const Cal = ({ selected, onChange }) => {
  const [yr, setYr] = useState(TD.getFullYear());
  const [mo, setMo] = useState(TD.getMonth());
  const first = new Date(yr,mo,1), last = new Date(yr,mo+1,0);
  const sdow = (first.getDay()+6)%7;
  const cells = Math.ceil((sdow+last.getDate())/7)*7;
  const prev = () => mo===0 ? (setMo(11),setYr(y=>y-1)) : setMo(m=>m-1);
  const next = () => mo===11 ? (setMo(0),setYr(y=>y+1)) : setMo(m=>m+1);
  return (
    <Card pad="0" style={{overflow:"hidden"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"13px 15px",borderBottom:"1px solid var(--bd)"}}>
        <button onClick={prev} style={{width:30,height:30,border:"1.5px solid var(--bd)",borderRadius:8,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
          onMouseEnter={e=>e.currentTarget.style.borderColor="var(--om)"} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--bd)"}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="var(--ol)" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        <span style={{fontFamily:"var(--fd)",fontWeight:600,fontSize:16,color:"var(--st)"}}>{MONTHS[mo]} {yr}</span>
        <button onClick={next} style={{width:30,height:30,border:"1.5px solid var(--bd)",borderRadius:8,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}
          onMouseEnter={e=>e.currentTarget.style.borderColor="var(--om)"} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--bd)"}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="var(--ol)" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",padding:"10px 12px 4px"}}>
        {WDAYS.map(d => <div key={d} style={{textAlign:"center",fontSize:9,fontWeight:700,color:"var(--ms)",letterSpacing:"0.06em"}}>{d}</div>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",padding:"4px 12px 12px",gap:2}}>
        {Array.from({length:cells}, (_,i) => {
          const n = i-sdow+1;
          if (n<1||n>last.getDate()) return <div key={i}/>;
          const d = new Date(yr,mo,n), isoD = iso(d);
          const past = d<TD, isToday = isoD===iso(TD), sel = isoD===selected, wknd = d.getDay()===0||d.getDay()===6;
          return (
            <button key={i} disabled={past} onClick={()=>onChange(isoD)} style={{
              padding:"8px 2px", borderRadius:8, border:"none",
              background:sel?"var(--ol)":isToday?"var(--op)":"transparent",
              color:sel?"#fff":past?"#ccc":isToday?"var(--ol)":wknd?"var(--ms)":"var(--st)",
              fontSize:13, fontWeight:sel?700:isToday?600:400,
              cursor:past?"default":"pointer", outline:"none", transition:"all 0.1s",
            }}
            onMouseEnter={e=>{if(!past&&!sel)e.currentTarget.style.background="var(--og)";}}
            onMouseLeave={e=>{if(!past&&!sel)e.currentTarget.style.background="transparent";}}>
              {n}
            </button>
          );
        })}
      </div>
      {selected && (
        <div style={{padding:"10px 14px 12px",borderTop:"1px solid var(--bd)",display:"flex",alignItems:"center",gap:7}}>
          <div style={{width:5,height:5,borderRadius:"50%",background:"var(--om)",flexShrink:0}}/>
          <span style={{fontSize:12,color:"var(--pb)"}}>Seleccionado: <strong style={{color:"var(--ol)"}}>{fmtLong(selected)}</strong></span>
        </div>
      )}
    </Card>
  );
};

/* ══ NAV ══════════════════════════════════════════════════ */
const Nav = ({ nav, user, onLogin, onLogout, dark=false, scrolled=false }) => {
  const [open, setOpen] = useState(false);
  const isLight = dark && !scrolled;
  return (
    <>
      <nav style={{position:"sticky",top:0,zIndex:400,background:isLight?"transparent":"rgba(250,250,246,0.95)",borderBottom:isLight?"none":"1px solid var(--bd)",backdropFilter:scrolled?"blur(20px)":"none",boxShadow:scrolled?"0 1px 0 var(--bd),0 4px 16px rgba(55,60,30,0.05)":"none",transition:"all 0.3s ease"}}>
        <div style={{maxWidth:760,margin:"0 auto",padding:"0 16px",height:56,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Logo light={isLight} onClick={()=>nav("landing")}/>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            {user ? (
              <button onClick={onLogout} style={{display:"flex",alignItems:"center",gap:7,background:isLight?"rgba(255,255,255,0.1)":"var(--og)",border:isLight?"1px solid rgba(255,255,255,0.15)":"1px solid var(--bd)",borderRadius:10,padding:"6px 12px",cursor:"pointer"}}>
                <div style={{width:22,height:22,borderRadius:"50%",background:"var(--ol)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,color:"#fff"}}>{user.name[0].toUpperCase()}</div>
                <span style={{fontSize:12,fontWeight:600,color:isLight?"#fff":"var(--ol)"}}>{user.name.split(" ")[0]}</span>
              </button>
            ) : (
              <button onClick={onLogin} style={{padding:"8px 14px",background:isLight?"rgba(255,255,255,0.12)":"var(--og)",color:isLight?"#fff":"var(--ol)",border:isLight?"1px solid rgba(255,255,255,0.18)":"1px solid var(--bd)",borderRadius:"var(--rx)",fontSize:13,fontWeight:600,cursor:"pointer"}}>Entrar</button>
            )}
            <button onClick={()=>setOpen(o=>!o)} style={{width:36,height:36,background:isLight?"rgba(255,255,255,0.1)":"var(--og)",border:isLight?"1px solid rgba(255,255,255,0.15)":"1px solid var(--bd)",borderRadius:9,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
              {open
                ? <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke={isLight?"#fff":"var(--ol)"} strokeWidth="2.2" strokeLinecap="round"/></svg>
                : <svg width="14" height="11" fill="none" viewBox="0 0 16 14"><path d="M0 1.5h16M0 7h16M0 12.5h16" stroke={isLight?"#fff":"var(--ol)"} strokeWidth="1.8" strokeLinecap="round"/></svg>}
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div style={{position:"fixed",inset:0,zIndex:399,background:"rgba(26,26,24,0.5)",backdropFilter:"blur(6px)"}} onClick={()=>setOpen(false)}>
          <div onClick={e=>e.stopPropagation()} style={{position:"absolute",top:0,right:0,bottom:0,width:Math.min(300,window.innerWidth-32),background:"var(--sf)",boxShadow:"-20px 0 60px rgba(55,60,30,0.2)",display:"flex",flexDirection:"column",animation:"slideIn 0.25s ease",padding:20}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:28}}>
              <Logo onClick={()=>{nav("landing");setOpen(false);}}/>
              <button onClick={()=>setOpen(false)} style={{width:30,height:30,border:"1px solid var(--bd)",borderRadius:8,background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="var(--pb)" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            {[{label:"Emitir BerlengasPass",key:"booking",prime:true},{label:"Perguntas Frequentes",key:"faq"},{label:"Termos e Condições",key:"terms"}].map(item => (
              <button key={item.key} onClick={()=>{nav(item.key);setOpen(false);}} style={{width:"100%",textAlign:"left",padding:"14px 0",background:"none",border:"none",borderBottom:"1px solid var(--bd)",cursor:"pointer",fontFamily:"var(--fb)",fontSize:item.prime?16:14,fontWeight:item.prime?700:400,color:item.prime?"var(--ol)":"var(--st)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {item.label}
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
            ))}
            <div style={{marginTop:"auto",paddingTop:20}}>
              <Hr style={{marginBottom:14}}/>
              {[{label:"Portal do Operador",key:"operator"},{label:"Painel de Gestão",key:"dashboard"}].map(item => (
                <button key={item.key} onClick={()=>{nav(item.key);setOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:"11px 0",background:"none",border:"none",cursor:"pointer",fontSize:12,color:"var(--ms)",fontFamily:"var(--fb)"}}>{item.label}</button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ══ PHOTO GALLERY (hero slider) ════════════════════════ */
const HeroSlider = ({ onBook }) => {
  const [idx, setIdx] = useState(0);
  const slides = [
    {img:IMGS.aerial, caption:"Vista aérea da Ilha da Berlenga", pos:"center 40%"},
    {img:IMGS.beach, caption:"Praia da Berlenga — águas cristalinas", pos:"center 60%"},
    {img:IMGS.fort, caption:"Forte de São João Baptista ao pôr do sol", pos:"center 45%"},
    {img:IMGS.trail, caption:"Trilhos naturais pela ilha", pos:"center 55%"},
    {img:IMGS.harbor, caption:"Porto e enseada da Berlenga", pos:"center 60%"},
  ];
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1)%slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{position:"relative",width:"100%",height:"100%",overflow:"hidden"}}>
      {slides.map((s,i) => (
        <div key={i} style={{position:"absolute",inset:0,transition:"opacity 1.2s ease",opacity:i===idx?1:0}}>
          <img src={s.img} alt={s.caption} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:s.pos,animation:i===idx?"kenBurns 6s ease forwards":"none"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(20,24,10,0.3) 0%, rgba(20,24,10,0.55) 60%, rgba(20,24,10,0.75) 100%)"}}/>
        </div>
      ))}
      {/* Dots */}
      <div style={{position:"absolute",bottom:90,left:"50%",transform:"translateX(-50%)",display:"flex",gap:6,zIndex:2}}>
        {slides.map((_,i) => (
          <button key={i} onClick={()=>setIdx(i)} style={{width:i===idx?20:6,height:6,borderRadius:3,background:i===idx?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.35)",border:"none",cursor:"pointer",transition:"all 0.3s ease",padding:0}}/>
        ))}
      </div>
      {/* Caption */}
      <div style={{position:"absolute",bottom:60,left:0,right:0,textAlign:"center",zIndex:2}}>
        <span style={{fontSize:10,color:"rgba(255,255,255,0.45)",letterSpacing:"0.06em"}}>{slides[idx].caption}</span>
      </div>
    </div>
  );
};

/* ══ LOGIN MODAL ═════════════════════════════════════════ */
const LoginModal = ({ onClose, onLogin }) => {
  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [err, setErr] = useState("");

  const doLogin = async () => {
    if (!email||!pass) { setErr("Preencha todos os campos"); return; }
    setLoading(true); setErr("");
    await new Promise(r=>setTimeout(r,700));
    const demo = DEMO_ACCOUNTS.find(a=>a.email===email&&a.pass===pass);
    if (demo) { onLogin({name:demo.label,email:demo.email,role:demo.role}); return; }
    onLogin({name:email.split("@")[0], email, role:"user"});
  };
  const doRegister = async () => {
    if (!name||!email||!pass) { setErr("Preencha todos os campos"); return; }
    setLoading(true); setErr("");
    await new Promise(r=>setTimeout(r,900));
    onLogin({name, email, role:"user"});
  };
  const doGoogle = async () => {
    setLoading(true);
    await new Promise(r=>setTimeout(r,700));
    onLogin({name:"Utilizador Google", email:"user@gmail.com", role:"user", google:true});
  };
  const doDemo = async (acc) => {
    setLoading(true);
    await new Promise(r=>setTimeout(r,400));
    onLogin({name:acc.label, email:acc.email, role:acc.role});
  };

  return (
    <div style={{position:"fixed",inset:0,zIndex:500,background:"rgba(26,26,24,0.65)",backdropFilter:"blur(8px)",display:"flex",alignItems:"flex-end",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="si" style={{width:"100%",maxWidth:480,background:"var(--sf)",borderRadius:"var(--rl) var(--rl) 0 0",padding:"24px 20px 36px",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 -20px 60px rgba(55,60,30,0.2)"}}>
        <div style={{width:40,height:4,background:"var(--bd)",borderRadius:2,margin:"0 auto 22px"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18}}>
          <h2 style={{fontFamily:"var(--fd)",fontSize:24,fontWeight:700,color:"var(--st)"}}>{tab==="login"?"Iniciar Sessão":"Criar Conta"}</h2>
          <button onClick={onClose} style={{width:30,height:30,border:"1px solid var(--bd)",borderRadius:8,background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="var(--pb)" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div style={{display:"flex",background:"var(--og)",borderRadius:"var(--rx)",padding:3,marginBottom:18,gap:3}}>
          {[["login","Entrar"],["register","Registar"]].map(([k,l]) => (
            <button key={k} onClick={()=>{setTab(k);setErr("");}} style={{flex:1,padding:"9px",border:"none",borderRadius:7,background:tab===k?"#fff":"transparent",color:tab===k?"var(--ol)":"var(--ms)",fontSize:13,fontWeight:tab===k?600:400,cursor:"pointer",fontFamily:"var(--fb)",transition:"all 0.15s",boxShadow:tab===k?"var(--ss)":"none"}}>{l}</button>
          ))}
        </div>
        <button onClick={doGoogle} disabled={loading} style={{width:"100%",padding:"12px",border:"1.5px solid var(--bd)",borderRadius:"var(--rx)",background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontFamily:"var(--fb)",fontSize:14,fontWeight:500,color:"var(--st)",marginBottom:14,transition:"all 0.15s"}}
          onMouseEnter={e=>e.currentTarget.style.borderColor="var(--om)"} onMouseLeave={e=>e.currentTarget.style.borderColor="var(--bd)"}>
          <svg width="17" height="17" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continuar com Google
        </button>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
          <Hr style={{flex:1}}/><span style={{fontSize:11,color:"var(--ms)",whiteSpace:"nowrap"}}>ou com email</span><Hr style={{flex:1}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          {tab==="register" && <Inp label="Nome completo" type="text" placeholder="João Silva" value={name} onChange={e=>setName(e.target.value)}/>}
          <Inp label="Email" type="email" placeholder="email@exemplo.com" value={email} onChange={e=>setEmail(e.target.value)}/>
          <Inp label="Palavra-passe" type="password" placeholder="••••••••" value={pass} onChange={e=>setPass(e.target.value)}/>
          {err && <div style={{fontSize:12,color:"var(--rd)",background:"var(--rdb)",padding:"9px 12px",borderRadius:8,border:"1px solid var(--rdbd)"}}>{err}</div>}
          <Btn full variant="primary" size="lg" loading={loading} onClick={tab==="login"?doLogin:doRegister}>
            {tab==="login"?"Iniciar Sessão":"Criar Conta"}
          </Btn>
        </div>
        <div style={{marginTop:18,borderTop:"1px solid var(--bd)",paddingTop:14}}>
          <button onClick={()=>setDemoOpen(o=>!o)} style={{width:"100%",padding:"10px 14px",background:"var(--amb)",border:"1px solid var(--ambd)",borderRadius:"var(--rx)",cursor:"pointer",fontFamily:"var(--fb)",fontSize:12,fontWeight:600,color:"var(--am)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span>Demonstração MVP — Credenciais de Teste</span>
            <svg style={{transform:demoOpen?"rotate(180deg)":"none",transition:"transform 0.2s"}} width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
          {demoOpen && (
            <div className="fi" style={{marginTop:8,display:"flex",flexDirection:"column",gap:6}}>
              {DEMO_ACCOUNTS.map(acc => (
                <button key={acc.role} onClick={()=>doDemo(acc)} disabled={loading} style={{padding:"12px 14px",background:"#fff",border:`1.5px solid ${acc.color}22`,borderRadius:10,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center",fontFamily:"var(--fb)",transition:"all 0.15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="var(--og)"} onMouseLeave={e=>e.currentTarget.style.background="#fff"}>
                  <div style={{textAlign:"left"}}>
                    <div style={{fontSize:13,fontWeight:600,color:"var(--st)"}}>{acc.label}</div>
                    <div style={{fontSize:11,color:"var(--ms)",fontFamily:"var(--fm)",marginTop:2}}>{acc.email} · {acc.pass}</div>
                  </div>
                  <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="var(--ms)" strokeWidth="1.8" strokeLinecap="round"/></svg>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ══ PAYMENT MODAL ═══════════════════════════════════════ */
const PayModal = ({ total, onSuccess, onClose }) => {
  const [method, setMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [cardNum, setCardNum] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");
  const fmtCard = v => v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();
  const fmtExp = v => v.replace(/\D/g,"").slice(0,4).replace(/^(\d{2})(\d)/,"$1/$2");

  const methods = [
    {id:"card",icon:"creditcard",label:"Cartão Débito/Crédito"},
    {id:"mbway",icon:"smartphone",label:"MB WAY"},
    {id:"multibanco",icon:"landmark",label:"Multibanco"},
    {id:"paypal",icon:"creditcard",label:"PayPal"},
    {id:"applepay",icon:"creditcard",label:"Apple Pay"},
    {id:"googlepay",icon:"smartphone",label:"Google Pay"},
    {id:"sepa",icon:"building2",label:"Transferência SEPA"},
  ];

  const doPay = async () => {
    setLoading(true);
    await new Promise(r=>setTimeout(r,1600));
    onSuccess();
  };

  return (
    <div style={{position:"fixed",inset:0,zIndex:500,background:"rgba(26,26,24,0.65)",backdropFilter:"blur(8px)",display:"flex",alignItems:"flex-end",justifyContent:"center"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="si" style={{width:"100%",maxWidth:480,background:"var(--sf)",borderRadius:"var(--rl) var(--rl) 0 0",maxHeight:"90vh",overflowY:"auto",boxShadow:"0 -20px 60px rgba(55,60,30,0.25)"}}>
        <div style={{padding:"20px 20px 0"}}>
          <div style={{width:40,height:4,background:"var(--bd)",borderRadius:2,margin:"0 auto 18px"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
            <div>
              <h2 style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,color:"var(--st)"}}>Pagamento</h2>
              <div style={{fontSize:12,color:"var(--ms)",marginTop:2}}>Total: <strong style={{color:"var(--ol)",fontFamily:"var(--fd)",fontSize:16}}>{total.toFixed(2).replace(".",",")} €</strong></div>
            </div>
            <button onClick={onClose} style={{width:30,height:30,border:"1px solid var(--bd)",borderRadius:8,background:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="var(--pb)" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <SLbl style={{marginBottom:10}}>Método de Pagamento</SLbl>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7,marginBottom:16}}>
            {methods.map(m => (
              <button key={m.id} onClick={()=>setMethod(m.id)} style={{padding:"10px 12px",border:`1.5px solid ${method===m.id?"var(--ol)":"var(--bd)"}`,borderRadius:"var(--rx)",background:method===m.id?"var(--og)":"#fff",cursor:"pointer",display:"flex",alignItems:"center",gap:8,transition:"all 0.12s",fontFamily:"var(--fb)"}}>
                <IconMap name={m.icon} size={16}/>
                <span style={{fontSize:11,fontWeight:method===m.id?600:400,color:method===m.id?"var(--ol)":"var(--pb)",textAlign:"left",lineHeight:1.3}}>{m.label}</span>
              </button>
            ))}
          </div>
          {method==="card" && (
            <div style={{display:"flex",flexDirection:"column",gap:11,marginBottom:16}}>
              <Inp label="Nome no Cartão" type="text" placeholder="JOÃO SILVA" value={cardName} onChange={e=>setCardName(e.target.value.toUpperCase())}/>
              <Inp label="Número do Cartão" type="text" placeholder="0000 0000 0000 0000" value={cardNum} onChange={e=>setCardNum(fmtCard(e.target.value))} maxLength={19}/>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <Inp label="Validade" type="text" placeholder="MM/AA" value={expiry} onChange={e=>setExpiry(fmtExp(e.target.value))} maxLength={5}/>
                <Inp label="CVV" type="text" placeholder="123" value={cvv} onChange={e=>setCvv(e.target.value.replace(/\D/g,"").slice(0,4))}/>
              </div>
            </div>
          )}
          {method==="mbway" && (
            <div style={{marginBottom:16}}>
              <Inp label="Número de Telemóvel" type="tel" placeholder="+351 912 000 000"/>
              <div style={{fontSize:11,color:"var(--ms)",marginTop:6}}>Irá receber uma notificação MB WAY para confirmar.</div>
            </div>
          )}
          {method==="multibanco" && (
            <div style={{background:"var(--og)",border:"1px solid var(--bd)",borderRadius:"var(--rx)",padding:"13px",marginBottom:16}}>
              {[["Entidade","21234"],["Referência","123 456 789"],["Montante",`${total.toFixed(2).replace(".",",")} €`],["Validade","72 horas"]].map(([l,v]) => (
                <div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:13,padding:"5px 0",borderBottom:"1px solid var(--bd)"}}>
                  <span style={{color:"var(--ms)"}}>{l}</span>
                  <span style={{fontFamily:"var(--fm)",fontWeight:500,color:"var(--st)"}}>{v}</span>
                </div>
              ))}
            </div>
          )}
          {(method==="applepay"||method==="googlepay") && (
            <div style={{background:"var(--og)",border:"1px solid var(--bd)",borderRadius:"var(--rx)",padding:"16px",textAlign:"center",marginBottom:16}}>
              <div style={{marginBottom:7}}><IconMap name={method==="applepay"?"creditcard":"smartphone"} size={28}/></div>
              <div style={{fontSize:13,color:"var(--pb)"}}>Redirecionamento para {method==="applepay"?"Apple Pay":"Google Pay"}</div>
            </div>
          )}
          {method==="paypal" && (
            <div style={{background:"#003087",borderRadius:"var(--rx)",padding:"13px",textAlign:"center",marginBottom:16}}>
              <div style={{color:"#fff",fontSize:13,fontWeight:500}}>Redirecionamento para PayPal</div>
            </div>
          )}
          {method==="sepa" && (
            <div style={{marginBottom:16,display:"flex",flexDirection:"column",gap:10}}>
              <Inp label="IBAN" type="text" placeholder="PT50 0002 0123 1234 5678 9015 4"/>
              <Inp label="Nome do Titular" type="text" placeholder="João Silva"/>
            </div>
          )}
          <Btn full variant="primary" size="lg" loading={loading} onClick={doPay} style={{marginBottom:14}}>
            {!loading && <><Lock size={16} style={{marginRight:6,verticalAlign:"middle"}}/> Pagar {total.toFixed(2).replace(".",",")} €</>}
          </Btn>
          <div style={{textAlign:"center",fontSize:10,color:"var(--ms)",lineHeight:1.8,paddingBottom:20}}>
            Stripe · Apple Pay · MB WAY · PayPal · SSL 256-bit · PCI DSS · RGPD
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══ RECEIPT MODAL ═══════════════════════════════════════ */
const Receipt = ({ booking, onClose, onSave }) => {
  const ref = useRef();
  const doPrint = () => {
    const w = window.open("","_blank");
    w.document.write(`<html><head><title>BerlengasPass ${booking.ref}</title><style>*{box-sizing:border-box;margin:0;padding:0;font-family:Georgia,serif}body{max-width:420px;margin:0 auto;padding:20px}</style></head><body>${ref.current.innerHTML}</body></html>`);
    w.document.close(); w.print();
  };
  return (
    <div style={{position:"fixed",inset:0,zIndex:600,background:"rgba(26,26,24,0.75)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:16,overflowY:"auto"}} onClick={onClose}>
      <div onClick={e=>e.stopPropagation()} className="si" style={{width:"100%",maxWidth:420,background:"#fff",borderRadius:"var(--rl)",overflow:"hidden",boxShadow:"var(--sx)"}}>
        <div style={{padding:"13px 15px",borderBottom:"1px solid var(--bd)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--og)"}}>
          <span style={{fontSize:13,fontWeight:600,color:"var(--ol)",display:"flex",alignItems:"center",gap:5}}><FileText size={14}/> Recibo de Passagem</span>
          <div style={{display:"flex",gap:7}}>
            <button onClick={doPrint} style={{padding:"7px 12px",background:"var(--ol)",color:"#fff",border:"none",borderRadius:7,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",display:"flex",alignItems:"center",gap:5}}><Printer size={12}/> Imprimir</button>
            <button onClick={onSave} style={{padding:"7px 12px",background:"#fff",color:"var(--ol)",border:"1px solid var(--bdd)",borderRadius:7,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",display:"flex",alignItems:"center",gap:5}}><Save size={12}/> Guardar</button>
            <button onClick={onClose} style={{width:28,height:28,border:"1px solid var(--bd)",borderRadius:7,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="var(--pb)" strokeWidth="2" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
        <div ref={ref} style={{overflowY:"auto",maxHeight:"76vh"}}>
          <div style={{background:"var(--ol)",padding:"22px 18px",textAlign:"center"}}>
            <div style={{fontFamily:"var(--fd)",fontSize:20,fontWeight:700,color:"#fff"}}>BerlengasPass</div>
            <div style={{fontSize:9,color:"rgba(255,255,255,0.45)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:2}}>ICNF · Reserva Natural da Berlenga</div>
            <div style={{marginTop:12,display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,0.1)",padding:"5px 13px",borderRadius:18,border:"1px solid rgba(255,255,255,0.15)"}}>
              <div style={{width:5,height:5,borderRadius:"50%",background:"#6ddb8e"}}/>
              <span style={{fontSize:10,color:"rgba(255,255,255,0.8)",fontWeight:600}}>PAGAMENTO CONFIRMADO</span>
            </div>
          </div>
          <div style={{padding:"14px 16px",borderBottom:"1px solid var(--bd)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
              <div>
                <div style={{fontSize:9,color:"var(--ms)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3}}>Referência</div>
                <div style={{fontFamily:"var(--fm)",fontSize:13,fontWeight:500,color:"var(--ol)"}}>{booking.ref}</div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:9,color:"var(--ms)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3}}>Total pago</div>
                <div style={{fontFamily:"var(--fd)",fontSize:20,fontWeight:700,color:"var(--ol)"}}>{booking.total.toFixed(2).replace(".",",")} €</div>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {[["Data",fmtShort(booking.date)],["Período",booking.slot?.label],["Visitantes",`${booking.pax.length} pessoa(s)`],["Emitido",new Date().toLocaleDateString("pt-PT")]].map(([l,v]) => (
                <div key={l} style={{background:"var(--cr)",borderRadius:7,padding:"8px 10px"}}>
                  <div style={{fontSize:9,color:"var(--ms)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:2}}>{l}</div>
                  <div style={{fontSize:12,fontWeight:600,color:"var(--st)"}}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          {booking.pax.map((p,i) => (
            <div key={i} style={{padding:"14px 16px",borderBottom:"1px solid var(--bd)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:12}}>
                <div>
                  <div style={{fontSize:9,color:"var(--ms)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:3}}>Passagem {i+1}/{booking.pax.length}</div>
                  <div style={{fontWeight:700,fontSize:14,color:"var(--st)"}}>{p.name}</div>
                  <div style={{fontFamily:"var(--fm)",fontSize:10,color:"var(--ms)",marginTop:1}}>{p.token}</div>
                  <div style={{marginTop:5,fontSize:11,color:"var(--pb)"}}>{p.age} anos · {p.price===0?<span style={{color:"var(--gn)",fontWeight:600}}>Isento</span>:<span style={{color:"var(--ol)",fontWeight:600}}>{p.price?.toFixed(2).replace(".",",")} €</span>}</div>
                </div>
                <div style={{background:"#fff",padding:5,borderRadius:9,border:"1px solid var(--bd)",flexShrink:0}}>
                  <QR value={p.token} size={78}/>
                </div>
              </div>
              <div style={{background:"var(--og)",borderRadius:7,padding:"7px 10px",display:"flex",alignItems:"center",gap:6}}>
                <svg width="11" height="11" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="var(--os)" strokeWidth="1.8"/><path d="M12 8v4l2 2" stroke="var(--os)" strokeWidth="1.8" strokeLinecap="round"/></svg>
                <span style={{fontSize:10,color:"var(--om)"}}>{booking.slot?.hours} · {fmtLong(booking.date)}</span>
              </div>
            </div>
          ))}
          <div style={{padding:"13px 16px",textAlign:"center"}}>
            <div style={{fontSize:10,color:"var(--ms)",lineHeight:1.8}}>
              Mostre este recibo e QR Code ao entrar na ilha.<br/>
              berlengaspass.pt/cancelar/{booking.ref}<br/>
              Cancelamento gratuito até 24h antes da visita.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══ LANDING ═════════════════════════════════════════════ */
const Landing = ({ nav, user, onLogin, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h);
  }, []);

  const features = [
    {img:IMGS.fort, icon:"landmark", t:"Forte de São João Baptista", d:"Edificado no século XVII, o forte é símbolo da história portuguesa nesta ilha remota no Atlântico."},
    {img:IMGS.trail, icon:"leaf", t:"Trilhos e Natureza", d:"Percursos pedestres únicos entre a flora endémica e colónias de aves marinhas protegidas."},
    {img:IMGS.beach, icon:"anchor", t:"Praias Escondidas", d:"Águas cristalinas e areais vírgenes acessíveis apenas a pé, num ambiente de absoluta tranquilidade."},
  ];

  return (
    <div style={{minHeight:"100vh",background:"var(--wh)"}}>
      <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout} dark scrolled={scrolled}/>

      {/* HERO — full viewport with photo slider */}
      <div style={{height:"100svh",minHeight:500,maxHeight:900,position:"relative",marginTop:-56,overflow:"hidden"}}>
        <HeroSlider onBook={()=>nav("booking")}/>
        {/* Content overlay */}
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 20px",textAlign:"center",zIndex:2,paddingTop:56}}>
          <div className="fu" style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,255,255,0.08)",backdropFilter:"blur(16px)",padding:"6px 14px",borderRadius:20,border:"1px solid rgba(255,255,255,0.14)",marginBottom:20}}>
            <div style={{width:5,height:5,borderRadius:"50%",background:"#8ddb7e",animation:"pulse 2s ease infinite",flexShrink:0}}/>
            <span style={{fontSize:9,fontWeight:600,color:"rgba(255,255,255,0.75)",letterSpacing:"0.1em",textTransform:"uppercase"}}>Instituto da Conservação da Natureza e das Florestas</span>
          </div>
          <h1 className="fu" style={{fontFamily:"var(--fd)",fontSize:"clamp(40px,9vw,70px)",fontWeight:700,color:"#fff",margin:"0 0 12px",lineHeight:1.06,letterSpacing:"-0.025em",animationDelay:"0.06s",textShadow:"0 2px 20px rgba(0,0,0,0.3)"}}>
            Visite a Ilha<br/><span style={{color:"#c8d48a"}}>da Berlenga</span>
          </h1>
          <p className="fu" style={{fontSize:"clamp(14px,3vw,17px)",color:"rgba(255,255,255,0.7)",margin:"0 0 28px",lineHeight:1.7,maxWidth:460,animationDelay:"0.12s"}}>
            Passe digital oficial obrigatório para acesso à Reserva Natural. Emita o seu BerlengasPass em menos de 2 minutos.
          </p>
          <div className="fu" style={{display:"flex",gap:10,flexWrap:"wrap",justifyContent:"center",animationDelay:"0.18s"}}>
            <Btn variant="white" size="xl" onClick={()=>nav("booking")}>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="var(--ol)" strokeWidth="2" strokeLinecap="round"/></svg>
              Emitir BerlengasPass
            </Btn>
            <button onClick={()=>document.getElementById("about")?.scrollIntoView({behavior:"smooth"})} style={{padding:"14px 22px",background:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.9)",border:"1.5px solid rgba(255,255,255,0.2)",borderRadius:"var(--rs)",fontSize:14,fontWeight:500,cursor:"pointer",backdropFilter:"blur(8px)"}}>Saber mais ↓</button>
          </div>
          <div className="fu" style={{display:"flex",gap:20,marginTop:28,flexWrap:"wrap",justifyContent:"center",animationDelay:"0.22s"}}>
            {[["lock","Pagamento seguro"],["zap","QR Code imediato"],["landmark","Portal oficial ICNF"],["barchart3","Registo legal RGPD"]].map(([e,t]) => (
              <div key={t} style={{display:"flex",alignItems:"center",gap:6}}>
                <IconMap name={e} size={13} color="rgba(255,255,255,0.7)"/>
                <span style={{fontSize:11,color:"rgba(255,255,255,0.45)",fontWeight:500}}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div style={{position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",zIndex:3,animation:"pulse 2s ease infinite"}}>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8" strokeLinecap="round"/></svg>
        </div>
      </div>

      {/* PHOTO FEATURE CARDS */}
      <div id="about" style={{padding:"64px 16px",background:"var(--wh)"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <SLbl style={{textAlign:"center",marginBottom:10}}>A Ilha</SLbl>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,5vw,42px)",fontWeight:700,color:"var(--st)",textAlign:"center",margin:"0 0 10px",letterSpacing:"-0.02em"}}>Uma jóia no Atlântico</h2>
          <p style={{textAlign:"center",color:"var(--pb)",fontSize:14,lineHeight:1.75,maxWidth:440,margin:"0 auto 40px"}}>A Berlenga é um ecossistema único classificado Reserva da Biosfera pela UNESCO. Cada visita deve ser reservada com antecedência.</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:14}}>
            {features.map((f,i) => (
              <div key={i} style={{borderRadius:"var(--rm)",overflow:"hidden",boxShadow:"var(--ss)",transition:"all 0.25s ease",cursor:"default",background:"#fff"}}
                onMouseEnter={e=>e.currentTarget.style.transform="translateY(-4px) scale(1.01)"}
                onMouseLeave={e=>e.currentTarget.style.transform="none"}>
                <div style={{height:200,overflow:"hidden",position:"relative"}}>
                  <ParallaxImg src={f.img} alt={f.t} height={200} speed={0.35} style={{position:"absolute",inset:0,height:"100%"}}/>
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,24,10,0.7) 0%,rgba(20,24,10,0.15) 45%,transparent 100%)"}}/>
                  <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"14px 14px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:7}}>
                      <IconMap name={f.icon} size={16} color="rgba(255,255,255,0.7)"/>
                      <h3 style={{fontFamily:"var(--fd)",fontSize:15,fontWeight:600,color:"#fff",margin:0,textShadow:"0 1px 8px rgba(0,0,0,0.4)"}}>{f.t}</h3>
                    </div>
                  </div>
                </div>
                <div style={{padding:"12px 14px"}}>
                  <p style={{fontSize:12,color:"var(--pb)",lineHeight:1.65,margin:0}}>{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{padding:"64px 16px",background:"var(--cr)"}}>
        <div style={{maxWidth:680,margin:"0 auto"}}>
          <SLbl style={{textAlign:"center",marginBottom:10}}>Processo</SLbl>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,5vw,40px)",fontWeight:700,color:"var(--st)",textAlign:"center",margin:"0 0 40px",letterSpacing:"-0.02em"}}>Como funciona</h2>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:12}}>
            {[{n:"01",e:"calendardays",t:"Escolha a data",d:"Seleccione o dia e período. Disponibilidade em tempo real."},
              {n:"02",e:"user",t:"Dados dos visitantes",d:"Identificação de cada membro. Até 10 por reserva."},
              {n:"03",e:"checkcircle2",t:"Receba o QR Code",d:"Passe digital enviado imediatamente após pagamento."}].map((s,i) => (
              <Card key={i} hover pad="20px" style={{textAlign:"center"}}>
                <div style={{fontSize:9,fontWeight:800,letterSpacing:"0.1em",color:"#fff",background:"var(--ol)",display:"inline-flex",padding:"3px 8px",borderRadius:5,marginBottom:12}}>{s.n}</div>
                <div style={{marginBottom:10,display:"flex",justifyContent:"center"}}><IconMap name={s.e} size={30}/></div>
                <h3 style={{fontFamily:"var(--fd)",fontSize:15,fontWeight:600,color:"var(--st)",marginBottom:6}}>{s.t}</h3>
                <p style={{fontSize:12,color:"var(--pb)",lineHeight:1.65}}>{s.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AERIAL PHOTO + CAPACITY */}
      <div style={{padding:"64px 16px",background:"var(--wh)"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{borderRadius:"var(--rl)",overflow:"hidden",boxShadow:"var(--sl)",position:"relative",marginBottom:20}}>
            <ParallaxImg src={IMGS.aerial} alt="Vista aérea da Berlenga" height={240} speed={0.3}/>
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to right,rgba(20,24,10,0.7) 0%,rgba(20,24,10,0.2) 60%)"}}/>
            <div style={{position:"absolute",inset:0,padding:"28px 28px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <div style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,7vw,56px)",fontWeight:700,color:"#fff",lineHeight:1.1}}>550</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,0.75)",marginTop:4}}>visitantes em simultâneo · limite diário</div>
              <div style={{marginTop:12}}><OChip label="Reserva obrigatória"/></div>
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:10}}>
            {[["ban","Proibido acampar"],["bird","Não perturbar fauna"],["trash2","Leve o lixo consigo"],["flame","Proibido fogueiras"],["camera","Respeite as áreas"],["anchor","Siga os guardas"]].map(([e,t]) => (
              <div key={t} style={{display:"flex",alignItems:"center",gap:10,padding:"13px 14px",background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:"var(--rs)"}}>
                <IconMap name={e} size={18}/>
                <span style={{fontSize:12,color:"var(--st)",fontWeight:500}}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRICING */}
      <div style={{padding:"64px 16px",background:"var(--cr)"}}>
        <div style={{maxWidth:480,margin:"0 auto"}}>
          <SLbl style={{textAlign:"center",marginBottom:10}}>Tarifário</SLbl>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(26px,5vw,36px)",fontWeight:700,color:"var(--st)",textAlign:"center",margin:"0 0 30px",letterSpacing:"-0.02em"}}>Preço por visitante</h2>
          <Card pad="0" style={{overflow:"hidden"}}>
            {[{r:"0 – 5 anos",p:"Isento",n:"Sem passe necessário",c:"var(--gn)",hl:false},
              {r:"6 – 17 anos",p:"1,50 €",n:"Tarifa jovem",c:"var(--om)",hl:false},
              {r:"18 – 64 anos",p:"3,00 €",n:"Tarifa standard",c:"var(--st)",hl:true},
              {r:"65 ou mais",p:"1,50 €",n:"Tarifa sénior",c:"var(--om)",hl:false}].map((r,i,arr) => (
              <div key={r.r}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 18px",gap:10,borderLeft:r.hl?"3px solid var(--ol)":"3px solid transparent",background:r.hl?"var(--og)":"transparent"}}>
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:7}}>
                      <span style={{fontWeight:600,fontSize:13,color:"var(--st)"}}>{r.r}</span>
                      {r.hl && <span style={{fontSize:8,fontWeight:700,color:"var(--ol)",background:"var(--op)",padding:"2px 7px",borderRadius:4,letterSpacing:"0.06em",textTransform:"uppercase"}}>Mais comum</span>}
                    </div>
                    <div style={{fontSize:11,color:"var(--ms)",marginTop:2}}>{r.n}</div>
                  </div>
                  <div style={{fontFamily:"var(--fd)",fontSize:20,fontWeight:700,color:r.c,flexShrink:0}}>{r.p}</div>
                </div>
                {i<arr.length-1 && <Hr/>}
              </div>
            ))}
          </Card>
          <p style={{textAlign:"center",fontSize:11,color:"var(--ms)",marginTop:10}}>Cancelamento gratuito até 24 horas antes da visita.</p>
        </div>
      </div>

      {/* CTA PHOTO */}
      <div style={{position:"relative",overflow:"hidden"}}>
        <ParallaxImg src={IMGS.fort} alt="Forte de São João Baptista" height={420} speed={0.35}/>
        <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(20,24,10,0.85) 0%,rgba(20,24,10,0.4) 50%,rgba(20,24,10,0.2) 100%)"}}/>
        <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"40px 20px",textAlign:"center"}}>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(28px,6vw,48px)",fontWeight:700,color:"#fff",margin:"0 0 12px",letterSpacing:"-0.025em",textShadow:"0 2px 20px rgba(0,0,0,0.3)"}}>Pronto para visitar?</h2>
          <p style={{fontSize:14,color:"rgba(255,255,255,0.65)",margin:"0 0 24px",lineHeight:1.7}}>Menos de 2 minutos. Acesso imediato ao passe digital.</p>
          <Btn variant="white" size="xl" onClick={()=>nav("booking")}>Emitir BerlengasPass →</Btn>
        </div>
      </div>

      <footer style={{background:"#0f1108",padding:"28px 16px 20px"}}>
        <div style={{maxWidth:700,margin:"0 auto"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:10}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <Logo light onClick={()=>nav("landing")}/>
            </div>
            <div style={{display:"flex",gap:14}}>
              {["Privacidade","FAQ","Termos"].map(l => (
                <span key={l} style={{color:"rgba(255,255,255,0.3)",fontSize:11,cursor:"pointer",transition:"color 0.15s"}}
                  onMouseEnter={e=>e.currentTarget.style.color="rgba(255,255,255,0.6)"}
                  onMouseLeave={e=>e.currentTarget.style.color="rgba(255,255,255,0.3)"}
                  onClick={()=>nav(l==="FAQ"?"faq":"terms")}>{l}</span>
              ))}
            </div>
          </div>
          <div style={{marginTop:14,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.06)",textAlign:"center"}}>
            <span style={{color:"rgba(255,255,255,0.15)",fontSize:10}}>© 2026 BerlengasPass · Instituto da Conservação da Natureza e das Florestas</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ══ BOOKING ═════════════════════════════════════════════ */
const Booking = ({ nav, user, onLogin, onLogout, onConfirm }) => {
  const [step, setStep] = useState(1);
  const [selDate, setDate] = useState("");
  const [selSlot, setSlot] = useState(null);
  const [pax, setPax] = useState([{name:"",id:"",dob:""}]);
  const [email, setEmail] = useState(user?.email || "");
  const [sendEmail, setSendEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Portugal");
  const [showPay, setShowPay] = useState(false);
  const [processing, setProcessing] = useState(false);

  const slotObj = SLOTS.find(s => s.id === selSlot);
  const getP = p => selDate && p.dob ? getPrice(p.dob, selDate) : null;
  const total = pax.reduce((s,p) => s + (getP(p) || 0), 0);
  const canStep1 = selDate && selSlot;
  const canStep2 = pax.every(p => p.name.trim() && p.id.trim() && p.dob) && email.trim();
  const LABELS = ["Data e Hora","Visitantes","Resumo"];

  const pBadge = p => {
    const pr = getP(p);
    if (pr === null) return null;
    if (pr === 0) return <Chip ok label="Isento"/>;
    return <span style={{fontFamily:"var(--fd)",fontSize:14,fontWeight:700,color:"var(--ol)"}}>{pr.toFixed(2).replace(".",",")} €</span>;
  };

  const handlePaySuccess = () => {
    setShowPay(false);
    setProcessing(true);
    setTimeout(() => {
      const ref = "BLG-2026-" + String(Math.floor(Math.random()*900000)+100000);
      onConfirm({
        ref, date:selDate, slot:slotObj,
        contact:{email,phone,country}, sendEmail,
        pax:pax.map((p,i) => ({...p, token:`${ref}-P${i+1}`, price:getPrice(p.dob,selDate), age:getAge(p.dob,selDate)})),
        total,
      });
    }, 800);
  };

  return (
    <div style={{minHeight:"100vh",background:"var(--wh)"}}>
      <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout}/>
      <div style={{background:"var(--sf)",borderBottom:"1px solid var(--bd)",padding:"13px 16px"}}>
        <div style={{maxWidth:580,margin:"0 auto"}}>
          <div style={{fontSize:11,color:"var(--ms)",marginBottom:11,display:"flex",gap:4,alignItems:"center"}}>
            <span style={{color:"var(--om)",cursor:"pointer",fontWeight:500}} onClick={()=>nav("landing")}>Início</span>
            <svg width="9" height="9" fill="none" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke="var(--ms)" strokeWidth="2" strokeLinecap="round"/></svg>
            <span>Nova Passagem</span>
          </div>
          <div style={{display:"flex",alignItems:"center"}}>
            {LABELS.map((lbl,i) => (
              <div key={lbl} style={{display:"flex",alignItems:"center",flex:i<LABELS.length-1?1:"none"}}>
                <div style={{display:"flex",alignItems:"center",gap:6,cursor:i<step-1?"pointer":"default",flexShrink:0}} onClick={()=>i<step-1&&setStep(i+1)}>
                  <div style={{width:23,height:23,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:700,flexShrink:0,transition:"all 0.2s",
                    background:step>i+1?"var(--ol)":step===i+1?"var(--ol)":"#fff",
                    color:step>=i+1?"#fff":"var(--ms)",
                    border:step>=i+1?"none":"1.5px solid var(--bd)",
                    boxShadow:step===i+1?"0 0 0 3px rgba(55,60,30,0.1)":"none"}}>
                    {step>i+1?<svg width="9" height="9" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>:i+1}
                  </div>
                  <span style={{fontSize:11,fontWeight:step===i+1?600:400,color:step===i+1?"var(--st)":step>i+1?"var(--om)":"var(--ms)",whiteSpace:"nowrap",display:Math.abs(i-(step-1))<=1?"inline":"none"}}>{lbl}</span>
                </div>
                {i<LABELS.length-1 && <div style={{flex:1,height:1,background:step>i+1?"var(--om)":"var(--bd)",margin:"0 7px",transition:"background 0.3s"}}/>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{maxWidth:580,margin:"0 auto",padding:"22px 16px 80px"}}>
        {processing && (
          <div style={{textAlign:"center",padding:60}}>
            <div style={{width:40,height:40,background:"var(--ol)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
              <Anchor size={20} color="#fff"/>
            </div>
            <div style={{width:48,height:48,border:"3px solid var(--op)",borderTopColor:"var(--ol)",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 16px"}}/>
            <div style={{fontFamily:"var(--fd)",fontSize:18,color:"var(--st)"}}>A processar reserva…</div>
            <div style={{fontSize:12,color:"var(--ms)",marginTop:6}}>Por favor aguarde</div>
          </div>
        )}

        {/* STEP 1 */}
        {!processing && step===1 && (
          <div className="fu">
            <h2 style={{fontFamily:"var(--fd)",fontSize:25,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"}}>Data e período</h2>
            <p style={{fontSize:13,color:"var(--pb)",margin:"0 0 22px",lineHeight:1.6}}>Seleccione o dia e o período de visita pretendido.</p>
            <Cal selected={selDate} onChange={v=>{setDate(v);setSlot(null);}}/>
            {selDate && (
              <div style={{marginTop:18}} className="fi">
                <SLbl style={{marginBottom:11}}>Períodos disponíveis — {fmtShort(selDate)}</SLbl>
                <div style={{display:"flex",flexDirection:"column",gap:8}}>
                  {SLOTS.map(s => {
                    const sel = selSlot===s.id;
                    const pct = Math.round((s.cap/s.max)*100);
                    return (
                      <button key={s.id} onClick={()=>setSlot(s.id)} style={{padding:"15px",borderRadius:"var(--rm)",textAlign:"left",border:`2px solid ${sel?"var(--ol)":"var(--bd)"}`,background:sel?"var(--og)":"#fff",cursor:"pointer",fontFamily:"var(--fb)",transition:"all 0.15s",boxShadow:sel?"0 0 0 3px rgba(55,60,30,0.08)":"var(--ss)",display:"flex",alignItems:"center",gap:12}}>
                        <span style={{flexShrink:0}}><IconMap name={s.icon} size={22}/></span>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontWeight:600,fontSize:13,color:sel?"var(--ol)":"var(--st)",marginBottom:1}}>{s.label}</div>
                          <div style={{fontSize:11,color:"var(--pb)"}}>{s.hours}</div>
                          <div style={{marginTop:6,height:3,background:"var(--bd)",borderRadius:2,overflow:"hidden"}}>
                            <div style={{width:`${pct}%`,height:"100%",background:pct>85?"var(--rd)":pct>65?"var(--am)":"var(--om)",borderRadius:2}}/>
                          </div>
                          <div style={{fontSize:10,color:"var(--ms)",marginTop:3}}>{s.cap}/{s.max} reservados · {100-pct}% disponível</div>
                        </div>
                        {sel && <div style={{width:20,height:20,borderRadius:"50%",background:"var(--ol)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="9" height="9" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg></div>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            <div style={{marginTop:22}}>
              <Btn full variant="primary" size="lg" disabled={!canStep1} onClick={()=>setStep(2)}>
                Continuar — Dados dos visitantes →
              </Btn>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {!processing && step===2 && (
          <div className="fu">
            <h2 style={{fontFamily:"var(--fd)",fontSize:25,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"}}>Dados dos visitantes</h2>
            <p style={{fontSize:13,color:"var(--pb)",margin:"0 0 16px",lineHeight:1.6}}>Identificação de cada membro. Máximo 10 visitantes.</p>
            <div style={{display:"inline-flex",alignItems:"center",gap:9,background:"var(--op)",border:"1px solid rgba(55,60,30,0.15)",borderRadius:11,padding:"8px 13px",marginBottom:18}}>
              <IconMap name={slotObj?.icon} size={14}/>
              <span style={{fontSize:12,fontWeight:600,color:"var(--ol)"}}>{fmtShort(selDate)}</span>
              <span style={{fontSize:11,color:"var(--om)"}}>·</span>
              <span style={{fontSize:12,color:"var(--om)"}}>{slotObj?.label}</span>
            </div>
            {pax.map((p,i) => (
              <Card key={i} style={{marginBottom:10,padding:"17px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:13}}>
                  <div style={{display:"flex",alignItems:"center",gap:9}}>
                    <div style={{width:26,height:26,borderRadius:"50%",background:"var(--op)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,color:"var(--ol)"}}>{i+1}</div>
                    <span style={{fontWeight:600,fontSize:13,color:"var(--st)"}}>Visitante {i+1}</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    {pBadge(p)}
                    {i>0 && <button onClick={()=>setPax(pax.filter((_,j)=>j!==i))} style={{width:24,height:24,border:"1px solid var(--bd)",borderRadius:7,background:"#fff",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}}
                      onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--rd)";e.currentTarget.style.background="var(--rdb)";}}
                      onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bd)";e.currentTarget.style.background="#fff";}}>
                      <svg width="9" height="9" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="var(--rd)" strokeWidth="2.2" strokeLinecap="round"/></svg>
                    </button>}
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:11}}>
                  <Inp label="Nome completo" type="text" placeholder="Nome conforme identificação" value={p.name} onChange={e=>setPax(pax.map((x,j)=>j===i?{...x,name:e.target.value}:x))}/>
                  <Inp label="Nº de identificação" type="text" placeholder="BI / Passaporte / Cartão Cidadão" value={p.id} onChange={e=>setPax(pax.map((x,j)=>j===i?{...x,id:e.target.value}:x))}/>
                  <div>
                    <label style={{fontSize:12,fontWeight:600,color:"var(--pb)",letterSpacing:"0.02em",display:"block",marginBottom:7}}>Data de nascimento</label>
                    <DOB value={p.dob} onChange={v=>setPax(pax.map((x,j)=>j===i?{...x,dob:v}:x))}/>
                  </div>
                </div>
              </Card>
            ))}
            {pax.length < 10 && (
              <button onClick={()=>setPax([...pax,{name:"",id:"",dob:""}])} style={{width:"100%",padding:"12px",border:"1.5px dashed var(--bd)",borderRadius:"var(--rm)",background:"transparent",color:"var(--ms)",cursor:"pointer",fontSize:13,fontWeight:500,fontFamily:"var(--fb)",marginBottom:16,transition:"all 0.15s",display:"flex",alignItems:"center",justifyContent:"center",gap:7}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--om)";e.currentTarget.style.color="var(--ol)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--bd)";e.currentTarget.style.color="var(--ms)";}}>
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Adicionar visitante
              </button>
            )}
            <Card style={{padding:"17px",marginBottom:12}}>
              <h3 style={{fontSize:14,fontWeight:600,color:"var(--st)",marginBottom:13}}>Contacto para confirmação</h3>
              <div style={{display:"flex",flexDirection:"column",gap:11}}>
                <Inp label="Correio electrónico *" type="email" placeholder="email@exemplo.com" value={email} onChange={e=>setEmail(e.target.value)}/>
                <label style={{display:"flex",alignItems:"flex-start",gap:10,cursor:"pointer",userSelect:"none"}}>
                  <div style={{position:"relative",flexShrink:0,marginTop:1}}>
                    <input type="checkbox" checked={sendEmail} onChange={e=>setSendEmail(e.target.checked)} style={{position:"absolute",opacity:0,width:17,height:17,cursor:"pointer"}}/>
                    <div style={{width:17,height:17,borderRadius:5,border:`1.5px solid ${sendEmail?"var(--ol)":"var(--bd)"}`,background:sendEmail?"var(--ol)":"#fff",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.15s"}}>
                      {sendEmail && <svg width="9" height="9" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/></svg>}
                    </div>
                  </div>
                  <div>
                    <div style={{fontSize:13,fontWeight:500,color:"var(--st)"}}>Receber passe por email</div>
                    <div style={{fontSize:11,color:"var(--ms)",marginTop:1}}>QR Code e recibo enviados para o endereço indicado</div>
                  </div>
                </label>
                <Inp label="Telefone (opcional)" type="tel" placeholder="+351 912 000 000" value={phone} onChange={e=>setPhone(e.target.value)}/>
                <Sel label="País de residência" value={country} onChange={e=>setCountry(e.target.value)}>
                  {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                </Sel>
              </div>
            </Card>
            <div style={{background:"var(--op)",border:"1px solid rgba(55,60,30,0.15)",borderRadius:"var(--rm)",padding:"13px 16px",marginBottom:12,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><div style={{fontWeight:600,fontSize:13,color:"var(--ol)"}}>Total estimado</div><div style={{fontSize:11,color:"var(--om)",marginTop:1}}>{pax.length} visitante(s)</div></div>
              <div style={{fontFamily:"var(--fd)",fontSize:26,fontWeight:700,color:"var(--ol)",letterSpacing:"-0.02em"}}>{total.toFixed(2).replace(".",",")} €</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:10}}>
              <Btn variant="secondary" onClick={()=>setStep(1)}>‹ Voltar</Btn>
              <Btn full variant="primary" disabled={!canStep2} onClick={()=>setStep(3)}>Rever reserva →</Btn>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {!processing && step===3 && (
          <div className="fu">
            <h2 style={{fontFamily:"var(--fd)",fontSize:25,fontWeight:700,margin:"0 0 4px",letterSpacing:"-0.02em"}}>Revisão da reserva</h2>
            <p style={{fontSize:13,color:"var(--pb)",margin:"0 0 20px",lineHeight:1.6}}>Confirme todos os dados antes do pagamento.</p>
            <Card pad="0" style={{overflow:"hidden",marginBottom:9}}>
              <div style={{padding:"9px 15px",background:"var(--cr)",borderBottom:"1px solid var(--bd)"}}><SLbl>Visita</SLbl></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                {[["Data",fmtShort(selDate)],["Período",slotObj?.label]].map((item,i) => (
                  <div key={i} style={{padding:"13px 15px",borderRight:i===0?"1px solid var(--bd)":"none"}}>
                    <div style={{fontSize:10,color:"var(--ms)",marginBottom:2}}>{item[0]}</div>
                    <div style={{fontSize:13,fontWeight:600,color:"var(--st)"}}>{item[1]}</div>
                  </div>
                ))}
              </div>
            </Card>
            <Card pad="0" style={{overflow:"hidden",marginBottom:9}}>
              <div style={{padding:"9px 15px",background:"var(--cr)",borderBottom:"1px solid var(--bd)"}}><SLbl>Visitantes ({pax.length})</SLbl></div>
              {pax.map((p,i) => (
                <div key={i}>
                  <div style={{padding:"11px 15px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <div><div style={{fontWeight:600,fontSize:13}}>{p.name}</div><div style={{fontSize:10,color:"var(--ms)",marginTop:1,fontFamily:"var(--fm)"}}>{p.id}</div></div>
                    <div style={{fontFamily:"var(--fd)",fontWeight:700,fontSize:14,color:"var(--ol)",flexShrink:0,marginLeft:10}}>
                      {getP(p)===0?<Chip ok label="Isento"/>:`${getP(p)?.toFixed(2).replace(".",",")} €`}
                    </div>
                  </div>
                  {i<pax.length-1 && <Hr/>}
                </div>
              ))}
            </Card>
            <Card pad="0" style={{overflow:"hidden",marginBottom:12}}>
              <div style={{padding:"9px 15px",background:"var(--cr)",borderBottom:"1px solid var(--bd)"}}><SLbl>Contacto</SLbl></div>
              <div style={{padding:"11px 15px",display:"grid",gap:6}}>
                {[["Email",email],["Telefone",phone||"—"],["País",country],["Receber por email",sendEmail?"✓ Sim":"Não"]].map(([l,v]) => (
                  <div key={l} style={{display:"flex",justifyContent:"space-between",fontSize:12}}>
                    <span style={{color:"var(--ms)"}}>{l}</span>
                    <span style={{fontWeight:500,color:"var(--st)"}}>{v}</span>
                  </div>
                ))}
              </div>
            </Card>
            <div style={{background:"var(--op)",border:"1px solid rgba(55,60,30,0.18)",borderRadius:"var(--rm)",padding:"15px 17px",marginBottom:9,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div><div style={{fontWeight:700,fontSize:14,color:"var(--ol)"}}>Total a pagar</div><div style={{fontSize:11,color:"var(--om)",marginTop:1}}>{pax.length} visitante(s)</div></div>
              <div style={{fontFamily:"var(--fd)",fontSize:28,fontWeight:800,color:"var(--ol)",letterSpacing:"-0.025em"}}>{total.toFixed(2).replace(".",",")} €</div>
            </div>
            <div style={{background:"var(--amb)",border:"1px solid var(--ambd)",borderRadius:"var(--rx)",padding:"11px 13px",fontSize:12,color:"var(--am)",lineHeight:1.65,marginBottom:12,display:"flex",gap:7}}>
              <span style={{flexShrink:0}}><Info size={14}/></span>Cancelamento gratuito até 24h antes. Após esse prazo sem reembolso.
            </div>
            <div style={{background:"var(--og)",border:"1px solid var(--bd)",borderRadius:"var(--rx)",padding:"11px 13px",fontSize:11,color:"var(--pb)",lineHeight:1.7,marginBottom:16}}>
              <ShieldCheck size={14} style={{marginRight:5,verticalAlign:"middle"}}/> <strong>RGPD:</strong> Os seus dados são recolhidos para controlo legal de acesso e estatísticas. Não serão partilhados com terceiros.
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,marginBottom:14}}>
              <User size={12} color="var(--om)"/>
              <span style={{fontSize:11,color:"var(--ms)"}}> Junta-se a mais de 38.000 visitantes esta temporada</span>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:10,marginBottom:9}}>
              <Btn variant="secondary" onClick={()=>setStep(2)}>‹ Voltar</Btn>
              <Btn full variant="primary" size="lg" onClick={()=>setShowPay(true)}>
                <Lock size={16} style={{marginRight:6,verticalAlign:"middle"}}/> Pagar {total.toFixed(2).replace(".",",")} €
              </Btn>
            </div>
            <div style={{textAlign:"center",fontSize:10,color:"var(--ms)",lineHeight:1.7}}>Stripe · Apple Pay · MB WAY · PayPal · Multibanco · SSL</div>
          </div>
        )}
      </div>
      {showPay && <PayModal total={total} onSuccess={handlePaySuccess} onClose={()=>setShowPay(false)}/>}
    </div>
  );
};

/* ══ CONFIRMATION ════════════════════════════════════════ */
const Confirmation = ({ booking, nav, user, onLogin, onLogout }) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [saved, setSaved] = useState(false);
  const handleSave = () => { setSaved(true); setTimeout(()=>setSaved(false),2500); };
  const handlePrint = () => window.print();
  return (
    <div style={{minHeight:"100vh",background:"var(--wh)"}}>
      <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout}/>
      <div style={{maxWidth:540,margin:"0 auto",padding:"34px 16px 80px"}}>
        {/* TICKET-STYLE CONFIRMATION */}
        <div className="fu" style={{background:"#fff",borderRadius:18,overflow:"hidden",boxShadow:"0 12px 48px rgba(55,60,30,0.12)",marginBottom:16,position:"relative"}}>
          {/* Ticket header */}
          <div style={{background:"linear-gradient(135deg,var(--ol) 0%,#2a3112 50%,#1a1f0a 100%)",padding:"26px 22px 22px",position:"relative",overflow:"hidden"}}>
            {/* Subtle pattern overlay */}
            <div style={{position:"absolute",inset:0,opacity:0.04,backgroundImage:"radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)",backgroundSize:"60px 60px"}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:36,height:36,background:"rgba(255,255,255,0.12)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(255,255,255,0.15)",flexShrink:0}}>
                    <Anchor size={18} color="rgba(255,255,255,0.85)"/>
                  </div>
                  <div>
                    <div style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,color:"#fff",letterSpacing:"-0.01em"}}>BerlengasPass</div>
                    <div style={{fontSize:8,color:"rgba(255,255,255,0.35)",letterSpacing:"0.12em",textTransform:"uppercase",marginTop:1}}>ICNF · Reserva Natural das Berlengas</div>
                    <div style={{fontSize:7,color:"rgba(255,255,255,0.25)",letterSpacing:"0.1em",textTransform:"uppercase",marginTop:2}}>PASSE DE VISITANTE</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:6,background:"rgba(109,219,142,0.15)",padding:"5px 11px",borderRadius:14,border:"1px solid rgba(109,219,142,0.25)"}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"#6ddb8e",animation:"pulse 2s ease infinite"}}/>
                  <span style={{fontSize:9,color:"#6ddb8e",fontWeight:700,letterSpacing:"0.06em"}}>CONFIRMADO</span>
                </div>
              </div>
              <div style={{marginTop:18,display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
                <div>
                  <div style={{fontSize:8,color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",marginBottom:3}}>REFERÊNCIA</div>
                  <div style={{fontFamily:"var(--fm)",fontWeight:600,color:"#fff",fontSize:14,letterSpacing:"0.05em"}}>{booking.ref}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:8,color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",marginBottom:3}}>TOTAL PAGO</div>
                  <div style={{fontFamily:"var(--fd)",fontSize:28,fontWeight:800,color:"#fff",letterSpacing:"-0.02em",lineHeight:1}}>{booking.total.toFixed(2).replace(".",",")} €</div>
                </div>
              </div>
            </div>
          </div>
          {/* Perforation */}
          <div style={{position:"relative",height:20,background:"#fff"}}>
            <div style={{position:"absolute",top:-10,left:-10,width:20,height:20,borderRadius:"50%",background:"var(--wh)"}}/>
            <div style={{position:"absolute",top:-10,right:-10,width:20,height:20,borderRadius:"50%",background:"var(--wh)"}}/>
            {[1,2,3,4,5,6,7].map(n => (
              <div key={n} style={{position:"absolute",top:6,left:`${n*12.5}%`,width:6,height:6,borderRadius:"50%",background:"var(--bd)",opacity:0.4}}/>
            ))}
            <div style={{position:"absolute",top:9,left:20,right:20,borderTop:"2px dashed var(--bd)"}}/>
          </div>
          {/* Ticket body */}
          <div style={{padding:"4px 22px 22px",position:"relative"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:18}}>
              {[["Data",fmtShort(booking.date)],["Período",booking.slot?.label],["Visitantes",`${booking.pax.length} pessoa(s)`],["Email",booking.contact.email]].map(([l,v],i) => (
                <div key={i}>
                  <div style={{fontSize:9,color:"var(--ms)",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:3,fontWeight:600}}>{l}</div>
                  <div style={{fontSize:13,fontWeight:600,color:"var(--st)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{v}</div>
                </div>
              ))}
            </div>
            {/* Validity bar */}
            <div style={{background:"var(--gnb)",border:"1px solid var(--gnbd)",borderRadius:"var(--rx)",padding:"9px 13px",marginBottom:16,display:"flex",alignItems:"center",gap:8}}>
              <CheckCircle2 size={14} color="var(--gn)"/>
              <span style={{fontSize:12,fontWeight:600,color:"var(--gn)"}}>Válido para: {fmtLong(booking.date)} · {booking.slot?.hours}</span>
            </div>
            <div style={{textAlign:"center",padding:"12px 0 8px",borderTop:"1px solid var(--bd)"}}>
              <div style={{background:"#fff",borderRadius:14,padding:14,display:"inline-block",border:"1px solid var(--bd)",boxShadow:"0 2px 8px rgba(55,60,30,0.06)"}}>
                <QR value={booking.pax[0]?.token || booking.ref} size={130}/>
              </div>
              <div style={{fontFamily:"var(--fm)",fontSize:10,color:"var(--ms)",marginTop:8,letterSpacing:"0.04em"}}>{booking.pax[0]?.token}</div>
              <div style={{fontSize:12,color:"var(--pb)",marginTop:4,fontWeight:600}}>Apresente este QR Code ao embarcar</div>
            </div>
            {/* Watermark */}
            <div style={{position:"absolute",bottom:16,right:16,transform:"rotate(-12deg)",opacity:0.06,pointerEvents:"none"}}>
              <div style={{fontFamily:"var(--fd)",fontSize:36,fontWeight:800,color:"var(--ol)",letterSpacing:"-0.02em"}}>VERIFICADO</div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="no-print" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:8,marginBottom:14}}>
          <Btn full variant="ghost" onClick={()=>setShowReceipt(true)} style={{gap:5,fontSize:12}}>
            <FileText size={13}/>
            Recibo
          </Btn>
          <Btn full variant="secondary" onClick={handleSave} style={{gap:5,fontSize:12}}>
            {saved ? "✓ Guardado!" : <><Smartphone size={13}/>Wallet</>}
          </Btn>
          <Btn full variant="ghost" onClick={handlePrint} style={{gap:5,fontSize:12}}>
            <Printer size={13}/>
            Imprimir
          </Btn>
        </div>

        {/* Trust strip */}
        <div className="no-print" style={{display:"flex",justifyContent:"center",alignItems:"center",gap:16,flexWrap:"wrap",padding:"10px 0 18px"}}>
          {[["landmark","ICNF"],["shieldcheck","Documento oficial"],["lock","SSL 256-bit"],["filetext","RGPD"]].map(([e,t]) => (
            <div key={t} style={{display:"flex",alignItems:"center",gap:4}}>
              <IconMap name={e} size={11} color="var(--ms)"/>
              <span style={{fontSize:10,color:"var(--ms)",fontWeight:500}}>{t}</span>
            </div>
          ))}
        </div>

        <SLbl style={{marginBottom:10}}>Passagens individuais ({booking.pax.length})</SLbl>
        {booking.pax.map((p,i) => (
          <Card key={i} style={{marginBottom:7,padding:0,overflow:"hidden",cursor:"pointer",borderLeft:"3px solid var(--ol)"}} hover onClick={()=>setExpanded(expanded===i?null:i)}>
            <div style={{padding:"13px 14px",display:"flex",alignItems:"center",gap:11}}>
              <div style={{flexShrink:0,background:"#fff",borderRadius:7,padding:4,border:"1px solid var(--bd)"}}>
                <QR value={p.token} size={50}/>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:"flex",alignItems:"center",gap:7,marginBottom:2}}>
                  <span style={{fontWeight:600,fontSize:13,color:"var(--st)"}}>{p.name}</span>
                  <span style={{fontSize:10,color:"var(--ms)",fontWeight:500}}>({i+1}/{booking.pax.length})</span>
                </div>
                <div style={{fontFamily:"var(--fm)",fontSize:10,color:"var(--ms)"}}>{p.token}</div>
                <div style={{marginTop:4,display:"flex",alignItems:"center",gap:6}}>
                  {p.price===0?<Chip ok label="Isento"/>:<OChip label={`${p.price?.toFixed(2).replace(".",",")} €`}/>}
                  <Chip ok label="Válido"/>
                </div>
              </div>
              <svg style={{flexShrink:0,transition:"transform 0.2s",transform:expanded===i?"rotate(180deg)":"none"}} width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="var(--ms)" strokeWidth="1.8" strokeLinecap="round"/></svg>
            </div>
            {expanded===i && (
              <div className="fi" style={{borderTop:"1px solid var(--bd)",padding:"18px",textAlign:"center",background:"var(--cr)"}}>
                <div style={{background:"#fff",borderRadius:12,padding:12,display:"inline-block",boxShadow:"var(--sm)"}}>
                  <QR value={p.token} size={150}/>
                </div>
                <div style={{fontFamily:"var(--fm)",fontSize:11,color:"var(--ol)",marginTop:9,fontWeight:500}}>{p.token}</div>
                <div style={{fontSize:12,color:"var(--pb)",marginTop:3}}>{p.name} · {p.age} anos</div>
                <div style={{fontSize:11,color:"var(--ms)",marginTop:4}}>{booking.slot?.label} · {fmtLong(booking.date)}</div>
                <button onClick={e=>{e.stopPropagation();handleSave();}} style={{marginTop:11,padding:"8px 18px",background:"var(--ol)",color:"#fff",border:"none",borderRadius:"var(--rx)",cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"var(--fb)",display:"inline-flex",alignItems:"center",gap:5}}>
                  <Smartphone size={11} color="#fff"/>
                  Guardar na Wallet
                </button>
              </div>
            )}
          </Card>
        ))}

        {booking.sendEmail && (
          <div style={{background:"var(--op)",border:"1px solid rgba(55,60,30,0.15)",borderRadius:"var(--rx)",padding:"11px 13px",marginTop:12,marginBottom:9,display:"flex",gap:9}}>
            <span style={{flexShrink:0}}><Mail size={14}/></span>
            <div style={{fontSize:12,color:"var(--ol)",lineHeight:1.65}}>QR Codes e recibo enviados para <strong>{booking.contact.email}</strong>. Verifique também o spam.</div>
          </div>
        )}
        <div style={{background:"var(--amb)",border:"1px solid var(--ambd)",borderRadius:"var(--rx)",padding:"11px 13px",fontSize:12,color:"var(--am)",lineHeight:1.65,marginBottom:22}}>
          Cancelamento gratuito até 24h antes: berlengaspass.pt/cancelar/{booking.ref}
        </div>
        <Btn full variant="primary" size="lg" onClick={()=>nav("landing")}>Voltar ao início</Btn>
      </div>
      {showReceipt && <Receipt booking={booking} onClose={()=>setShowReceipt(false)} onSave={handleSave}/>}
      {saved && (
        <div className="fi" style={{position:"fixed",bottom:24,left:"50%",transform:"translateX(-50%)",background:"var(--st)",color:"#fff",padding:"11px 18px",borderRadius:13,fontSize:13,fontWeight:600,boxShadow:"var(--sl)",zIndex:999,display:"flex",alignItems:"center",gap:7,whiteSpace:"nowrap"}}>
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#8ddb7e" strokeWidth="2.5" strokeLinecap="round"/></svg>
          Passagem guardada no dispositivo!
        </div>
      )}
    </div>
  );
};

/* ══ FAQ ══════════════════════════════════════════════════ */
const FAQ = ({ nav, user, onLogin, onLogout }) => {
  const [open, setOpen] = useState(null);
  const items = [
    {q:"É necessário imprimir a passagem?",a:"Não. O QR Code no dispositivo móvel é suficiente. Recomendamos guardar o email antes de embarcar."},
    {q:"Posso alterar a data após a compra?",a:"Não. Cancele a reserva (até 24h antes) e efectue nova emissão no portal."},
    {q:"O que acontece se o barco não sair?",a:"Cancelamento por condições meteorológicas: reembolso integral automático em 5 dias úteis."},
    {q:"Crianças precisam de passagem?",a:"Até 5 anos não necessitam. A partir dos 6 anos é obrigatória, com tarifa reduzida de 1,50€."},
    {q:"Qual o prazo para cancelar?",a:"Cancelamento gratuito até 24 horas antes da visita."},
    {q:"Quantas pessoas por reserva?",a:"Até 10 visitantes. Para grupos maiores, efectue reservas múltiplas."},
    {q:"Os dados são registados?",a:"Sim. Para cumprimento legal e estatísticas, os dados são registados pelo ICNF em conformidade com o RGPD."},
  ];
  return (
    <div style={{minHeight:"100vh",background:"var(--wh)"}}>
      <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout}/>
      <div style={{maxWidth:620,margin:"0 auto",padding:"40px 16px 80px"}}>
        <button onClick={()=>nav("landing")} style={{background:"none",border:"none",cursor:"pointer",color:"var(--om)",fontSize:12,padding:0,fontFamily:"var(--fb)",marginBottom:22,display:"flex",alignItems:"center",gap:5,fontWeight:500}}>
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>Início
        </button>
        <SLbl style={{marginBottom:8}}>Apoio</SLbl>
        <h1 style={{fontFamily:"var(--fd)",fontSize:32,fontWeight:700,margin:"0 0 28px",letterSpacing:"-0.025em"}}>Perguntas Frequentes</h1>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {items.map((item,i) => (
            <div key={i} style={{background:"#fff",border:"1px solid var(--bd)",borderRadius:"var(--rm)",overflow:"hidden",boxShadow:open===i?"var(--sm)":"var(--ss)",transition:"box-shadow 0.15s"}}>
              <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",textAlign:"left",padding:"15px 17px",background:"none",border:"none",cursor:"pointer",fontFamily:"var(--fb)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
                <span style={{fontWeight:600,fontSize:14,color:"var(--st)",lineHeight:1.4}}>{item.q}</span>
                <svg style={{flexShrink:0,transition:"transform 0.2s",transform:open===i?"rotate(180deg)":"none"}} width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="var(--ms)" strokeWidth="1.8" strokeLinecap="round"/></svg>
              </button>
              {open===i && <div className="fi" style={{padding:"0 17px 15px",fontSize:13,color:"var(--pb)",lineHeight:1.75,borderTop:"1px solid var(--bd)",paddingTop:12}}>{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ══ OPERATOR ════════════════════════════════════════════ */
const Operator = ({ nav, user, onLogin, onLogout }) => {
  const [tab, setTab] = useState("scanner");
  const [scan, setScan] = useState("");
  const [res, setRes] = useState(null);
  const doScan = () => {
    const found = MOCK_VISITORS.find(p=>p.token===scan.trim()||scan.trim()==="demo");
    setRes(found ? {ok:found.status!=="used",p:found,msg:found.status==="used"?"Passagem já utilizada":"Passagem válida"} : {ok:false,msg:"Passagem não encontrada"});
    setScan("");
  };
  return (
    <div style={{minHeight:"100vh",background:"#08100c",color:"#e8ede0",fontFamily:"var(--fb)"}}>
      <nav style={{borderBottom:"1px solid rgba(255,255,255,0.06)",background:"#050d07"}}>
        <div style={{maxWidth:860,margin:"0 auto",padding:"0 16px",height:50,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <Logo light onClick={()=>nav("landing")}/>
          <div style={{display:"flex",alignItems:"center",gap:9}}>
            <Chip ok label="Online"/>
            {user && <span style={{fontSize:10,color:"rgba(255,255,255,0.3)"}}>{user.email}</span>}
            <button onClick={()=>nav("landing")} style={{padding:"5px 11px",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.5)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:7,cursor:"pointer",fontSize:11,fontFamily:"var(--fb)"}}>Sair</button>
          </div>
        </div>
      </nav>
      <div style={{borderBottom:"1px solid rgba(255,255,255,0.06)",overflowX:"auto"}}>
        <div style={{maxWidth:860,margin:"0 auto",padding:"0 16px",display:"flex"}}>
          {[["scanner","Validação QR"],["list","Lista Diária"],["logs","Registo"],["stats","Estatísticas"]].map(([id,lb]) => (
            <button key={id} onClick={()=>setTab(id)} style={{background:"none",border:"none",borderBottom:`2px solid ${tab===id?"#a8c870":"transparent"}`,padding:"12px 14px",cursor:"pointer",fontSize:12,fontFamily:"var(--fb)",fontWeight:tab===id?600:400,color:tab===id?"#e8ede0":"rgba(255,255,255,0.3)",transition:"all 0.15s",whiteSpace:"nowrap"}}>{lb}</button>
          ))}
        </div>
      </div>
      <div style={{maxWidth:860,margin:"0 auto",padding:"22px 16px 80px"}}>
        {tab==="scanner" && (
          <div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,margin:"0 0 4px"}}>Validação de Passagens</h2>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"0 0 20px"}}>{new Date().toLocaleDateString("pt-PT",{day:"numeric",month:"long",year:"numeric"})}</p>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"var(--rl)",padding:"26px 18px",textAlign:"center",marginBottom:12}}>
              <div style={{width:170,height:170,margin:"0 auto 18px",borderRadius:"var(--rm)",background:"rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(rgba(0,0,0,0) 44%,rgba(168,200,112,0.12) 50%,rgba(0,0,0,0) 56%)",animation:"scan 2s ease-in-out infinite"}}/>
                {[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([v,h]) => (
                  <div key={v+h} style={{position:"absolute",[v]:9,[h]:9,width:18,height:18,[`border${v[0].toUpperCase()+v.slice(1)}`]:"2px solid #a8c870",[`border${h[0].toUpperCase()+h.slice(1)}`]:"2px solid #a8c870",borderRadius:v==="top"&&h==="left"?"3px 0 0 0":v==="top"&&h==="right"?"0 3px 0 0":v==="bottom"&&h==="left"?"0 0 0 3px":"0 0 3px 0"}}/>
                ))}
                <QR value="SCAN" size={56} light/>
              </div>
              <p style={{color:"rgba(255,255,255,0.25)",fontSize:11,marginBottom:14,lineHeight:1.6}}>Câmara activa na versão de produção<br/>Simulação: insira token abaixo</p>
              <div style={{display:"flex",gap:8,maxWidth:340,margin:"0 auto"}}>
                <input value={scan} onChange={e=>setScan(e.target.value)} onKeyDown={e=>e.key==="Enter"&&doScan()} placeholder='Token ou "demo"' style={{flex:1,padding:"10px 12px",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"var(--rx)",background:"rgba(255,255,255,0.06)",color:"#e8ede0",fontSize:13,outline:"none",fontFamily:"var(--fb)"}}/>
                <button onClick={doScan} style={{padding:"10px 16px",background:"#a8c870",color:"#08100c",border:"none",borderRadius:"var(--rx)",cursor:"pointer",fontSize:13,fontWeight:700,fontFamily:"var(--fb)"}}>Validar</button>
              </div>
            </div>
            {res && (
              <div className="fi" style={{borderRadius:"var(--rm)",padding:"22px",border:`1px solid ${res.ok?"rgba(168,200,112,0.2)":"rgba(200,80,80,0.2)"}`,background:res.ok?"rgba(168,200,112,0.05)":"rgba(200,80,80,0.05)",textAlign:"center"}}>
                <div style={{width:46,height:46,borderRadius:"50%",background:res.ok?"rgba(168,200,112,0.12)":"rgba(200,80,80,0.12)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 11px"}}>
                  {res.ok?<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#a8c870" strokeWidth="2.5" strokeLinecap="round"/></svg>:<svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="#e05050" strokeWidth="2.5" strokeLinecap="round"/></svg>}
                </div>
                <div style={{fontSize:17,fontWeight:700,color:res.ok?"#a8c870":"#e05050",marginBottom:6}}>{res.msg}</div>
                {res.p && <div style={{color:"rgba(255,255,255,0.5)",fontSize:13}}><div style={{fontWeight:600,color:"#e8ede0",fontSize:14,marginBottom:3}}>{res.p.name}</div><div>{res.p.age} anos · {res.p.country}</div></div>}
                <button onClick={()=>setRes(null)} style={{marginTop:13,background:"rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.5)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"var(--rx)",padding:"7px 16px",cursor:"pointer",fontSize:12,fontFamily:"var(--fb)"}}>Nova validação</button>
              </div>
            )}
          </div>
        )}
        {tab==="list" && (
          <div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:18,gap:10,flexWrap:"wrap"}}>
              <div><h2 style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,margin:"0 0 2px"}}>Lista Diária</h2><p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:0}}>{MOCK_VISITORS.length} visitantes</p></div>
              <button style={{background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.6)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"var(--rx)",padding:"7px 12px",cursor:"pointer",fontSize:11,fontFamily:"var(--fb)",display:"flex",alignItems:"center",gap:5}}><Download size={11}/> Exportar PDF</button>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {MOCK_VISITORS.map((p,i) => (
                <div key={i} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"var(--rm)",padding:"11px 13px",display:"flex",alignItems:"center",gap:11}}>
                  <div style={{flexShrink:0}}><QR value={p.token} size={40} light/></div>
                  <div style={{flex:1,minWidth:0}}>
                    <div style={{fontWeight:600,fontSize:13,color:"#e8ede0"}}>{p.name}</div>
                    <div style={{fontSize:10,color:"rgba(255,255,255,0.25)",marginTop:1,fontFamily:"var(--fm)"}}>{p.token}</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.3)",marginTop:1}}>{p.age} anos · {p.country}</div>
                  </div>
                  <Chip ok={p.status==="valid"} label={p.status==="valid"?"Válido":"Usado"}/>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab==="logs" && (
          <div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,margin:"0 0 18px"}}>Registo de Validações</h2>
            <div style={{display:"flex",flexDirection:"column",gap:5}}>
              {[{t:"09:14",r:"valid",name:"Ana Silva",op:"J.Silva"},{t:"09:12",r:"used",name:"Rui Silva",op:"J.Silva"},{t:"08:58",r:"not_found",name:"—",op:"M.Ops"},{t:"08:45",r:"valid",name:"T. Müller",op:"J.Silva"},{t:"08:31",r:"valid",name:"L. García",op:"M.Ops"}].map((l,i) => {
                const col = l.r==="valid"?"#a8c870":l.r==="used"?"#e8c840":"#e05050";
                const msg = l.r==="valid"?"Válido":l.r==="used"?"Já utilizado":"Não encontrado";
                return (
                  <div key={i} style={{display:"flex",alignItems:"center",gap:9,padding:"10px 12px",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:"var(--rx)"}}>
                    <div style={{width:6,height:6,borderRadius:"50%",background:col,flexShrink:0}}/>
                    <span style={{fontFamily:"var(--fm)",color:"rgba(255,255,255,0.25)",fontSize:11,width:42,flexShrink:0}}>{l.t}</span>
                    <span style={{flex:1,fontSize:12,fontWeight:500,color:"#e8ede0"}}>{msg}</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,0.4)"}}>{l.name}</span>
                    <span style={{fontSize:10,color:"rgba(255,255,255,0.2)",flexShrink:0}}>{l.op}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {tab==="stats" && (
          <div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:22,fontWeight:700,margin:"0 0 3px"}}>Estatísticas de Visitantes</h2>
            <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",margin:"0 0 22px"}}>Base de dados · cumprimento legal RGPD</p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:9,marginBottom:18}}>
              {[["Total Visitantes 2026","38.541","+12% vs 2025"],["Países Representados","47","vs 41 em 2025"],["Visitantes Hoje","550","100% capacidade"],["QR Validados Hoje","548","99.6% taxa"]].map(([l,v,d]) => (
                <div key={l} style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"var(--rm)",padding:"14px"}}>
                  <div style={{fontSize:9,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:7}}>{l}</div>
                  <div style={{fontFamily:"var(--fd)",fontSize:24,fontWeight:700,color:"#e8ede0",letterSpacing:"-0.02em"}}>{v}</div>
                  <div style={{fontSize:10,color:"#a8c870",marginTop:3,fontWeight:600}}>{d}</div>
                </div>
              ))}
            </div>
            <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"var(--rm)",padding:"14px",marginBottom:12}}>
              <div style={{fontSize:12,fontWeight:600,color:"rgba(255,255,255,0.5)",marginBottom:11}}>Distribuição por País (top 5)</div>
              {[["Portugal",38],["Alemanha",22],["Espanha",18],["Reino Unido",12],["França",10]].map(([c,p]) => (
                <div key={c} style={{marginBottom:9}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:12,marginBottom:3}}>
                    <span style={{color:"rgba(255,255,255,0.7)"}}>{c}</span>
                    <span style={{color:"rgba(255,255,255,0.4)"}}>{p}%</span>
                  </div>
                  <div style={{height:4,background:"rgba(255,255,255,0.06)",borderRadius:2,overflow:"hidden"}}>
                    <div style={{width:`${p}%`,height:"100%",background:"#a8c870",borderRadius:2}}/>
                  </div>
                </div>
              ))}
            </div>
            <div style={{background:"rgba(168,200,112,0.06)",border:"1px solid rgba(168,200,112,0.15)",borderRadius:"var(--rx)",padding:"11px 13px",fontSize:11,color:"rgba(168,200,112,0.7)",lineHeight:1.7}}>
              <BarChart3 size={13} style={{marginRight:5,verticalAlign:"middle"}}/> Dados armazenados em conformidade com o RGPD e a legislação portuguesa. Registos mantidos por 5 anos para fins estatísticos e legais. Acesso restrito ao ICNF.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ══ DASHBOARD ═══════════════════════════════════════════ */
const Dashboard = ({ nav, user, onLogin, onLogout }) => {
  const kpis = [
    {l:"Passagens Emitidas",v:"12.847",d:"+342 esta semana",up:true},
    {l:"Receita Total",v:"38.541 €",d:"+2.100 € esta semana",up:true},
    {l:"Visitantes 2026",v:"38.541",d:"temporada em curso",up:true},
    {l:"Taxa Cancelamentos",v:"1,2%",d:"−0,3pp vs. 2025",up:false},
  ];
  const caps = [{l:"Período da Manhã",u:320},{l:"Período da Tarde",u:185},{l:"Dia Completo",u:45}];
  return (
    <div style={{minHeight:"100vh",background:"var(--wh)"}}>
      <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout}/>
      <div style={{maxWidth:860,margin:"0 auto",padding:"26px 16px 80px"}}>
        <div style={{marginBottom:22,display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:10}}>
          <div>
            <SLbl style={{marginBottom:6}}>Administração</SLbl>
            <h1 style={{fontFamily:"var(--fd)",fontSize:28,fontWeight:700,margin:"0 0 3px",letterSpacing:"-0.02em"}}>Painel de Gestão</h1>
            <p style={{fontSize:13,color:"var(--pb)",margin:0}}>Temporada 2026 · Reserva Natural da Berlenga</p>
          </div>
          <Btn variant="ghost" size="sm" onClick={()=>nav("operator")}>Portal Operador →</Btn>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:9,marginBottom:12}}>
          {kpis.map(k => (
            <Card key={k.l} pad="17px">
              <SLbl style={{marginBottom:7}}>{k.l}</SLbl>
              <div style={{fontFamily:"var(--fd)",fontSize:23,fontWeight:800,color:"var(--st)",letterSpacing:"-0.02em",lineHeight:1.1,marginBottom:5}}>{k.v}</div>
              <div style={{fontSize:11,fontWeight:600,color:k.up?"var(--gn)":"var(--rd)"}}>{k.up?"↑":"↓"} {k.d}</div>
            </Card>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:10,marginBottom:10}}>
          <Card pad="18px">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
              <div><div style={{fontSize:13,fontWeight:700,color:"var(--st)",marginBottom:1}}>Ocupação — hoje</div><div style={{fontSize:11,color:"var(--ms)"}}>{new Date().toLocaleDateString("pt-PT",{day:"numeric",month:"short"})}</div></div>
              <Chip ok label="Aberto"/>
            </div>
            {caps.map(c => { const pct=Math.round((c.u/550)*100); return(
              <div key={c.l} style={{marginBottom:11}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4,fontSize:12}}>
                  <span style={{fontWeight:500,color:"var(--st)"}}>{c.l}</span>
                  <span style={{color:"var(--ms)"}}><strong style={{color:"var(--st)"}}>{c.u}</strong>/550 <span style={{fontWeight:700,color:pct>80?"var(--rd)":"var(--gn)",marginLeft:3}}>{pct}%</span></span>
                </div>
                <div style={{height:4,background:"var(--bd)",borderRadius:2,overflow:"hidden"}}>
                  <div style={{width:`${pct}%`,height:"100%",background:pct>80?"var(--rd)":pct>60?"var(--am)":"var(--ol)",borderRadius:2,transition:"width 0.4s"}}/>
                </div>
              </div>
            );})}
          </Card>
          <Card pad="18px">
            <div style={{fontSize:13,fontWeight:700,color:"var(--st)",marginBottom:2}}>Reservas — 14 dias</div>
            <div style={{fontSize:11,color:"var(--ms)",marginBottom:15}}>Evolução diária</div>
            <div style={{display:"flex",alignItems:"flex-end",gap:3,height:70}}>
              {[42,58,35,71,90,64,55,82,76,48,93,67,88,72].map((v,i) => (
                <div key={i} style={{flex:1,background:i===13?"var(--ol)":"var(--op)",borderRadius:"3px 3px 0 0",height:`${v}%`,minWidth:0,cursor:"pointer",transition:"all 0.15s"}}
                  onMouseEnter={e=>e.currentTarget.style.background="var(--ol)"}
                  onMouseLeave={e=>{if(i!==13)e.currentTarget.style.background="var(--op)";}}/>
              ))}
            </div>
          </Card>
        </div>
        <Card pad="0" style={{overflow:"hidden"}}>
          <div style={{padding:"13px 16px",borderBottom:"1px solid var(--bd)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:13,fontWeight:700,color:"var(--st)"}}>Reservas recentes</div>
            <span style={{fontSize:11,color:"var(--ms)"}}>5 de 12.847</span>
          </div>
          <div style={{overflowX:"auto"}}>
            <table style={{width:"100%",borderCollapse:"collapse",minWidth:460}}>
              <thead><tr style={{background:"var(--cr)"}}>
                {["Referência","Nome","Período","Vis.","Total","Estado"].map(h => <th key={h} style={{padding:"8px 13px",textAlign:"left",fontSize:9,fontWeight:700,color:"var(--ms)",letterSpacing:"0.08em",textTransform:"uppercase",whiteSpace:"nowrap"}}>{h}</th>)}
              </tr></thead>
              <tbody>
                {MOCK_BOOKS.map((b,i) => (
                  <tr key={i} style={{borderTop:"1px solid var(--bd)",transition:"background 0.1s"}}
                    onMouseEnter={e=>e.currentTarget.style.background="var(--cr)"}
                    onMouseLeave={e=>e.currentTarget.style.background=""}>
                    <td style={{padding:"10px 13px",fontFamily:"var(--fm)",fontSize:11,color:"var(--om)",fontWeight:500,whiteSpace:"nowrap"}}>{b.ref}</td>
                    <td style={{padding:"10px 13px",fontSize:13,fontWeight:500,color:"var(--st)",whiteSpace:"nowrap"}}>{b.name}</td>
                    <td style={{padding:"10px 13px",fontSize:12,color:"var(--pb)",whiteSpace:"nowrap"}}>{b.slot}</td>
                    <td style={{padding:"10px 13px",fontSize:12,color:"var(--pb)",textAlign:"center"}}>{b.pax}</td>
                    <td style={{padding:"10px 13px",fontSize:13,fontWeight:700,color:"var(--st)",fontFamily:"var(--fd)"}}>{b.total}</td>
                    <td style={{padding:"10px 13px"}}><Chip ok={b.ok} label={b.ok?"Confirmado":"Cancelado"}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

/* ══ TERMS ═══════════════════════════════════════════════ */
const Terms = ({ nav, user, onLogin, onLogout }) => (
  <div style={{minHeight:"100vh",background:"var(--wh)"}}>
    <Nav nav={nav} user={user} onLogin={onLogin} onLogout={onLogout}/>
    <div style={{maxWidth:620,margin:"0 auto",padding:"40px 16px 80px"}}>
      <button onClick={()=>nav("landing")} style={{background:"none",border:"none",cursor:"pointer",color:"var(--om)",fontSize:12,padding:0,fontFamily:"var(--fb)",marginBottom:22,display:"flex",alignItems:"center",gap:5,fontWeight:500}}>
        <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>Início
      </button>
      <SLbl style={{marginBottom:8}}>Legal</SLbl>
      <h1 style={{fontFamily:"var(--fd)",fontSize:32,fontWeight:700,margin:"0 0 28px",letterSpacing:"-0.025em"}}>Termos e Condições</h1>
      {[
        {t:"1. Âmbito",d:"O BerlengasPass é o sistema oficial de emissão de passes de visitante para a Reserva Natural das Berlengas, gerido pelo Instituto da Conservação da Natureza e das Florestas (ICNF)."},
        {t:"2. Obrigatoriedade",d:"O passe é obrigatório para todos os visitantes com idade igual ou superior a 6 anos que pretendam aceder à ilha da Berlenga."},
        {t:"3. Tarifário",d:"Os valores aplicados são: Crianças (0–5 anos) — isento; Jovens (6–17 anos) — 1,50 €; Adultos (18–64 anos) — 3,00 €; Seniores (65+ anos) — 1,50 €."},
        {t:"4. Cancelamento",d:"O cancelamento é gratuito até 24 horas antes da data de visita. Após esse prazo, não será efectuado reembolso."},
        {t:"5. Condições meteorológicas",d:"Em caso de cancelamento por condições meteorológicas adversas, o reembolso integral será processado automaticamente no prazo de 5 dias úteis."},
        {t:"6. Dados pessoais",d:"Os dados pessoais são recolhidos para controlo legal de acesso e fins estatísticos, em conformidade com o Regulamento Geral de Protecção de Dados (RGPD). Os dados não serão partilhados com terceiros."},
        {t:"7. Responsabilidade",d:"O visitante compromete-se a respeitar todas as normas da Reserva Natural, incluindo proibições de acampar, fazer fogueiras e perturbar a fauna e flora."},
      ].map((s,i) => (
        <div key={i} style={{marginBottom:20}}>
          <h3 style={{fontSize:15,fontWeight:700,color:"var(--st)",marginBottom:6}}>{s.t}</h3>
          <p style={{fontSize:13,color:"var(--pb)",lineHeight:1.75}}>{s.d}</p>
        </div>
      ))}
      <Hr style={{margin:"30px 0"}}/>
      <p style={{fontSize:11,color:"var(--ms)",lineHeight:1.7,textAlign:"center"}}>Última actualização: Março 2026 · BerlengasPass · ICNF</p>
    </div>
  </div>
);

/* ══ ROOT APP ════════════════════════════════════════════ */
export default function App() {
  const [view, setView] = useState("landing");
  const [booking, setBooking] = useState(null);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const nav = v => { setView(v); window.scrollTo(0,0); };
  const handleLogin = u => { setUser(u); setShowLogin(false); };
  const handleLogout = () => setUser(null);
  const handleConfirm = b => { setBooking(b); nav("confirmation"); };

  const common = { nav, user, onLogin:()=>setShowLogin(true), onLogout:handleLogout };

  return (
    <>
      <G/>
      <div key={view} className="fi">
        {view==="landing" && <Landing {...common}/>}
        {view==="booking" && <Booking {...common} onConfirm={handleConfirm}/>}
        {view==="confirmation" && booking && <Confirmation {...common} booking={booking}/>}
        {view==="faq" && <FAQ {...common}/>}
        {view==="operator" && <Operator {...common}/>}
        {view==="dashboard" && <Dashboard {...common}/>}
        {view==="terms" && <Terms {...common}/>}
      </div>
      {showLogin && <LoginModal onClose={()=>setShowLogin(false)} onLogin={handleLogin}/>}
    </>
  );
}
