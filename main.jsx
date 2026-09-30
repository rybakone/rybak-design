import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {HashRouter,useNavigate,useLocation} from 'react-router-dom';
import './styles.css';

const projects=[
 {id:'01',name:'NORTH / VISUAL IDENTITY',type:'Brand Identity',year:'2026',desc:'A modular identity system built around contrast, precision and movement.'},
 {id:'02',name:'MONO / DIGITAL EXPERIENCE',type:'Digital Design',year:'2026',desc:'A digital direction where typography becomes the interface.'},
 {id:'03',name:'FORM / SOCIAL SYSTEM',type:'Social Media',year:'2026',desc:'A flexible visual language for fast-moving content.'},
 {id:'04',name:'VECTOR / ART DIRECTION',type:'Art Direction',year:'2025',desc:'Campaign art direction balancing brutal geometry and editorial rhythm.'}
];

function Cursor(){
 const [p,setP]=useState({x:-100,y:-100});
 const [hover,setHover]=useState(false);
 useEffect(()=>{const m=e=>setP({x:e.clientX,y:e.clientY}); window.addEventListener('mousemove',m); return()=>window.removeEventListener('mousemove',m)},[]);
 useEffect(()=>{const on=()=>setHover(true),off=()=>setHover(false);document.querySelectorAll('a,button,.project').forEach(x=>{x.addEventListener('mouseenter',on);x.addEventListener('mouseleave',off)});return()=>{}},[]);
 return <div className={'cursor '+(hover?'cursor-hover':'')} style={{transform:`translate(${p.x}px,${p.y}px)`}}/>
}
function Nav(){
 const nav=useNavigate(); const loc=useLocation();
 const go=(p)=>nav(p);
 return <header className="nav">
  <button className="logo" onClick={()=>go('/')}>RYBAK<span>corp.</span></button>
  <nav><button onClick={()=>go('/work')}>WORK</button><button onClick={()=>go('/about')}>ABOUT</button><button onClick={()=>go('/services')}>SERVICES</button><button onClick={()=>go('/contact')}>CONTACT</button></nav>
  <button className="nav-cta" onClick={()=>go('/contact')}>START PROJECT <i>↗</i></button>
 </header>
}
function Reveal({children,className=''}){return <div className={'reveal '+className}>{children}</div>}
function Home(){
 const nav=useNavigate();
 return <main>
  <section className="hero">
   <div className="hero-grid"/>
   <div className="hero-meta"><span>GRAPHIC DESIGNER</span><span>VILNIUS / WORLDWIDE</span><span>© 2026</span></div>
   <div className="hero-title"><div>DESIGN</div><div className="indent">THAT <em>WORKS.</em></div></div>
   <div className="hero-bottom"><p>Арсений Рыбак — графический дизайнер.<br/>Создаю визуальные решения под ключ.</p><button className="circle-btn" onClick={()=>nav('/work')}>EXPLORE<br/>WORK ↓</button></div>
  </section>
  <section className="manifesto"><Reveal><span className="eyebrow">01 / MANIFESTO</span><h2>I DON'T JUST MAKE<br/>THINGS LOOK <i>GOOD.</i><br/>I MAKE THEM <strong>WORK.</strong></h2></Reveal></section>
  <section className="services-preview"><div className="section-head"><span>02 / SERVICES</span><button onClick={()=>nav('/services')}>VIEW ALL ↗</button></div>{['BRAND IDENTITY','GRAPHIC DESIGN','DIGITAL DESIGN','ART DIRECTION','SOCIAL MEDIA'].map((x,i)=><div className="service-row" key={x}><span>0{i+1}</span><h3>{x}</h3><b>↗</b></div>)}</section>
  <section className="work-preview"><div className="section-head"><span>03 / SELECTED WORK</span><button onClick={()=>nav('/work')}>ALL PROJECTS ↗</button></div><div className="project-grid">{projects.slice(0,3).map(p=><ProjectCard key={p.id} p={p} nav={nav}/>)}</div></section>
  <CTA nav={nav}/>
 </main>
}
function ProjectCard({p,nav}){return <article className="project" onClick={()=>nav('/work/'+p.id)}><div className="visual"><span>{p.id}</span><div className="visual-word">{p.name.split(' / ')[0]}</div></div><div className="project-info"><div><h3>{p.name}</h3><p>{p.type}</p></div><span>{p.year} ↗</span></div></article>}
function Work(){const nav=useNavigate();return <main className="page"><PageHero eyebrow="WORK / 2026" title={<>SELECTED<br/><i>WORK.</i></>}/><section className="work-list">{projects.map(p=><ProjectCard key={p.id} p={p} nav={nav}/>)}</section><CTA nav={nav}/></main>}
function Detail({id}){const p=projects.find(x=>x.id===id)||projects[0];const nav=useNavigate();return <main className="page detail"><PageHero eyebrow={`${p.id} / ${p.type}`} title={<>{p.name.split(' / ')[0]}<br/><i>CASE STUDY.</i></>}/><div className="detail-visual"><span>{p.id}</span><div>{p.name.split(' / ')[0]}</div></div><div className="case-grid"><div><span className="eyebrow">OVERVIEW</span><p>{p.desc}</p></div><div><span className="eyebrow">SCOPE</span><p>Strategy<br/>Visual identity<br/>Art direction<br/>Digital design</p></div></div><div className="case-block"><span className="eyebrow">THE IDEA</span><h2>CLARITY<br/>THROUGH<br/><i>CONTRAST.</i></h2></div><button className="back" onClick={()=>nav('/work')}>← BACK TO WORK</button></main>}
function PageHero({eyebrow,title}){return <section className="page-hero"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1></section>}
function About(){return <main className="page"><PageHero eyebrow="ABOUT / RYBAK corp." title={<>HELLO,<br/>I'M <i>ARSENIY.</i></>}/><section className="about-copy"><p className="lead">Графический дизайнер, который превращает идеи в визуальные системы. От первой концепции до финального результата — под ключ.</p><div className="about-cols"><div><span className="eyebrow">WHAT I DO</span><p>Graphic Design<br/>Branding<br/>Art Direction<br/>Digital Design<br/>Visual Identity<br/>Creative Direction</p></div><div><span className="eyebrow">PHILOSOPHY</span><p>Strategy before decoration.<br/>Design with a purpose.<br/>No template solutions.<br/>One creative direction.</p></div></div></section><CTA nav={useNavigate()}/></main>}
function Services(){return <main className="page"><PageHero eyebrow="SERVICES / WHAT I DO" title={<>DESIGN<br/><i>BUILT AROUND<br/>YOUR GOAL.</i></>}/><section className="service-detail">{['BRAND IDENTITY','GRAPHIC DESIGN','DIGITAL DESIGN','SOCIAL MEDIA','PRESENTATIONS','CREATIVE DIRECTION'].map((x,i)=><div className="service-big" key={x}><span>0{i+1}</span><div><h2>{x}</h2><p>Concept, visual system and polished execution — everything required to turn a direction into a consistent visual language.</p></div><b>↗</b></div>)}</section><CTA nav={useNavigate()}/></main>}
function Contact(){return <main className="page contact"><PageHero eyebrow="CONTACT / START A PROJECT" title={<>LET'S MAKE<br/><i>SOMETHING<br/>GREAT.</i></>}/><section className="contact-area"><div className="contact-info"><span className="eyebrow">DIRECT</span><a href="mailto:hello@rybak.corp">hello@rybak.corp ↗</a><a href="#">Telegram ↗</a><a href="#">Behance ↗</a><a href="#">Instagram ↗</a></div><form onSubmit={e=>{e.preventDefault();alert('Thank you. I’ll get back to you soon.')}}><input placeholder="NAME"/><input placeholder="EMAIL" type="email" required/><input placeholder="PROJECT TYPE"/><input placeholder="BUDGET"/><textarea placeholder="TELL ME ABOUT YOUR PROJECT"/><button type="submit">SEND REQUEST <span>↗</span></button></form></section></main>}
function CTA({nav}){return <section className="cta"><span className="eyebrow">HAVE A PROJECT?</span><h2>LET'S<br/><i>TALK.</i></h2><button onClick={()=>nav('/contact')}>START A PROJECT ↗</button></section>}
function App(){const loc=useLocation();let content;if(loc.pathname==='/')content=<Home/>;else if(loc.pathname==='/work')content=<Work/>;else if(loc.pathname.startsWith('/work/'))content=<Detail id={loc.pathname.split('/')[2]}/>;else if(loc.pathname==='/about')content=<About/>;else if(loc.pathname==='/services')content=<Services/>;else if(loc.pathname==='/contact')content=<Contact/>;else content=<Home/>;return <><Cursor/><Nav/>{content}<footer><div>RYBAK<span>corp.</span></div><div>DESIGNED BY ARSENIY RYBAK<br/>© 2026</div></footer></>}
createRoot(document.getElementById('root')).render(<HashRouter><App/></HashRouter>);
