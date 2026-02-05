'use client';
import { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';

// TYPEWRITER COMPONENT
function Typewriter({ 
  strings = [], 
  typingSpeed = 75, 
  deletingSpeed = 50, 
  delayBetweenStrings = 2000,
  cursorColor = '#38bdf8'
}) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const typingTimeoutRef = useRef(null);
  const cursorTimeoutRef = useRef(null);

  // Cursor blinking effect
  useEffect(() => {
    cursorTimeoutRef.current = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimeoutRef.current);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentString = strings[stringIndex] || '';
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayText === currentString) {
      // Finished typing, wait before deleting
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenStrings);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next string
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % strings.length);
    } else {
      // Typing or deleting
      typingTimeoutRef.current = setTimeout(() => {
        setDisplayText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return currentString.slice(0, prev.length + 1);
          }
        });
      }, speed);
    }

    return () => clearTimeout(typingTimeoutRef.current);
  }, [displayText, stringIndex, isDeleting, strings, typingSpeed, deletingSpeed, delayBetweenStrings]);

  return (
    <span>
      {displayText}
      <span style={{
        color: cursorColor,
        opacity: cursorVisible ? 1 : 0,
        transition: 'opacity 0.1s',
        marginLeft: '2px'
      }}>
        |
      </span>
    </span>
  );
}

const TechIcons = {
  'Python': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="url(#python-gradient)"/>
      <defs>
        <linearGradient id="python-gradient" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#3776ab"/>
          <stop offset="100%" stopColor="#ffd343"/>
        </linearGradient>
      </defs>
    </svg>
  ),
  'JavaScript': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#f7df1e">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
    </svg>
  ),
  'React': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#61dafb">
      <path d="M12 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8.5-1.5c0-1.77-2.76-3.22-6.5-3.67-.48-2.37-1.41-4.17-2.5-4.17s-2.02 1.8-2.5 4.17c-3.74.45-6.5 1.9-6.5 3.67s2.76 3.22 6.5 3.67c.48 2.37 1.41 4.17 2.5 4.17s2.02-1.8 2.5-4.17c3.74-.45 6.5-1.9 6.5-3.67zM11.5 5c.38 0 1.21 1.66 1.63 4-.53-.08-1.07-.13-1.63-.13-.56 0-1.1.05-1.63.13.42-2.34 1.25-4 1.63-4zm-6 7c0-.55 1.35-1.6 3.5-2.16-.13.68-.2 1.39-.2 2.16s.07 1.48.2 2.16c-2.15-.56-3.5-1.61-3.5-2.16zm1.63 4c-.42-2.34-1.25-4-1.63-4 .38 0 1.21-1.66 1.63-4 .53.08 1.07.13 1.63.13.56 0 1.1-.05 1.63-.13-.42 2.34-1.25 4-1.63 4-.53-.08-1.07-.13-1.63-.13-.56 0-1.1.05-1.63.13zm6.87 3c-.38 0-1.21-1.66-1.63-4 .53.08 1.07.13 1.63.13.56 0 1.1-.05 1.63-.13-.42 2.34-1.25 4-1.63 4zm6-7c0 .55-1.35 1.6-3.5 2.16.13-.68.2-1.39.2-2.16s-.07-1.48-.2-2.16c2.15.56 3.5 1.61 3.5 2.16z"/>
    </svg>
  ),
  'Node.js': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.47c0 .66-.68 1.31-1.77.76l-2.05-1.18c-.08-.05-.13-.14-.13-.23V7.71c0-.09.05-.18.13-.23l7.44-4.29c.08-.05.18-.05.26 0l7.44 4.29c.08.05.13.14.13.23v8.58c0 .09-.05.18-.13.23l-7.44 4.29c-.08.05-.18.05-.26 0l-1.91-1.13c-.06-.03-.12-.05-.19-.03-.5.16-.6.19-1.08.31-.12.03-.31.08.07.23l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2zM14.16 9.1c-2.02 0-2.45.93-2.45 1.71 0 .12.1.22.22.22h.93c.11 0 .2-.08.21-.19.15-.99.59-1.49 1.09-1.49.82 0 1.17.37 1.17.99 0 .45-.18.78-.95 1.01-.64.19-1.54.43-1.54 1.53v.06c0 .12.1.22.22.22h.91c.12 0 .22-.1.22-.22v-.04c0-.43.05-.65 1.04-.93.58-.17 1.37-.43 1.37-1.61 0-1.09-.91-1.71-2.44-1.71z"/>
    </svg>
  ),
  'TypeScript': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#3178c6">
      <path d="M0 12v12h24V0H0zm19.341-.956c.61.152 1.074.423 1.501.865.221.236.549.666.575.77.008.03-1.036.73-1.668 1.123-.023.015-.115-.084-.217-.236-.31-.45-.633-.644-1.128-.678-.728-.05-1.196.331-1.192.967a.88.88 0 00.102.45c.16.331.458.53 1.39.934 1.719.74 2.454 1.227 2.911 1.92.51.773.625 2.008.278 2.926-.38.998-1.325 1.676-2.655 1.9-.411.073-1.386.062-1.828-.018-.964-.172-1.878-.648-2.442-1.273-.221-.244-.651-.88-.625-.925.011-.016.11-.077.22-.141.108-.061.511-.294.892-.515l.69-.4.145.214c.202.308.643.731.91.872.766.404 1.817.347 2.335-.118a.883.883 0 00.313-.72c0-.278-.035-.4-.18-.61-.186-.266-.567-.49-1.649-.96-1.238-.533-1.771-.864-2.259-1.39a3.165 3.165 0 01-.659-1.2c-.091-.339-.114-1.189-.042-1.531.255-1.197 1.158-2.03 2.461-2.278.423-.08 1.406-.05 1.821.053zm-5.634 1.002l.008.983H10.59v8.876H8.38v-8.876H5.258v-.964c0-.534.011-.98.026-.99.012-.016 1.913-.024 4.217-.02l4.195.012z"/>
    </svg>
  ),
  'MongoDB': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#47A248">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  ),
  'Docker': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.03-1.01.087-.239-1.232-.894-2.184-2.016-2.832l-.34-.193-.234.348c-.37.526-.592 1.184-.642 1.9-.065.82.21 1.577.803 2.22-.448.26-1.333.648-2.517.648h-16.67c-.572 0-1.042.467-1.042 1.043 0 .956.284 1.89.852 2.783.554.868 1.349 1.48 2.365 1.827 1.6.545 3.342.817 5.174.817 1.027 0 2.055-.105 3.053-.315.959-.201 1.885-.52 2.751-.951 1.628-.812 2.99-2.045 3.937-3.562.918.016 2.03-.206 2.718-.98.297-.334.53-.735.692-1.195l.078-.268z"/>
    </svg>
  ),
  'Git': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#F05032">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.605-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  ),
  'Tailwind': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  'Express.js': () => (
    <div className="text-white font-bold text-2xl">Ex</div>
  ),
  'SQL': () => (
    <div className="text-cyan-400 font-bold text-2xl">SQL</div>
  ),
  'Data Science': () => (
    <div className="text-purple-400 font-bold text-xl">DS</div>
  ),
  'Computer Vision': () => (
    <div className="text-indigo-300 font-bold text-lg">CV</div>
  ),
  'NLP': () => (
    <div className="text-emerald-300 font-bold text-lg">NLP</div>
  ),
  'Deep Learning': () => (
    <div className="text-fuchsia-300 font-bold text-lg">DL</div>
  ),
  'AI': () => (
    <div className="text-pink-400 font-bold text-xl">AI</div>
  ),
  'DevOps': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="1.6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a7.98 7.98 0 00.1-2 7.98 7.98 0 00-.1-2l2.1-1.6-2-3.4-2.5 1a8.1 8.1 0 00-3.4-2l-.4-2.7h-4l-.4 2.7a8.1 8.1 0 00-3.4 2l-2.5-1-2 3.4 2.1 1.6a7.98 7.98 0 00-.1 2 7.98 7.98 0 00.1 2l-2.1 1.6 2 3.4 2.5-1a8.1 8.1 0 003.4 2l.4 2.7h4l.4-2.7a8.1 8.1 0 003.4-2l2.5 1 2-3.4-2.1-1.6z" />
    </svg>
  ),
  'SQL': () => (
    <div className="text-cyan-400 font-bold text-2xl">SQL</div>
  ),
  'FastAPI': () => (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" stroke="#14b8a6" strokeWidth="2" />
      <text x="24" y="28" textAnchor="middle" fontSize="9" fill="#5eead4" fontWeight="700">API</text>
    </svg>
  ),
  'Firebase': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FFCA28">
      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.03a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
    </svg>
  ),
  'Postman': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 11.847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 01-.067-.032.06.06 0 01.01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 01-.085-.039.072.072 0 01.013-.093zm-3.646 6.058a.076.076 0 01-.069-.083.077.077 0 01.022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 000-.337l-1.135-1.138c-.093-.094-.102-.23-.02-.338l.717-.717 1.77 1.77-.332.76zM8.5 18.777l5.258-1.128a.558.558 0 00.347-.215l3.238-3.238c.26-.26.693-.26.953 0a.674.674 0 010 .952L13.238 20.2c-.094.094-.215.156-.347.173l-5.934.923a.613.613 0 01-.693-.465.613.613 0 01.236-.679z"/>
    </svg>
  ),
  'n8n': () => (
    <div className="text-orange-400 font-bold text-lg">n8n</div>
  ),
  'MLOps': () => (
    <div className="text-sky-400 font-bold text-sm">MLOps</div>
  ),
  'Tailwind CSS': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#06B6D4">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
    </svg>
  ),
  'ML/AI': () => (
    <div className="text-pink-400 font-bold text-xl">AI</div>
  ),
  'REST API': () => (
    <div className="text-green-400 font-bold text-lg">API</div>
  ),
  'FastAPI': () => (
    <div className="text-teal-400 font-bold text-xl">⚡</div>
  ),
  'Firebase': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FFCA28">
      <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14.03a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/>
    </svg>
  ),
  'Postman': () => (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FF6C37">
      <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 00-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 11.847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 01-.067-.032.06.06 0 01.01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 01-.085-.039.072.072 0 01.013-.093zm-3.646 6.058a.076.076 0 01-.069-.083.077.077 0 01.022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 000-.337l-1.135-1.138c-.093-.094-.102-.23-.02-.338l.717-.717 1.77 1.77-.332.76zM8.5 18.777l5.258-1.128a.558.558 0 00.347-.215l3.238-3.238c.26-.26.693-.26.953 0a.674.674 0 010 .952L13.238 20.2c-.094.094-.215.156-.347.173l-5.934.923a.613.613 0 01-.693-.465.613.613 0 01.236-.679z"/>
    </svg>
  ),
};

const MainSkills = [
  'Data Science',
  'Computer Vision',
  'NLP',
  'Deep Learning',
  'AI',
  'DevOps',
  'MLOps',
  'Python',
  'JavaScript',
  'FastAPI',
  'SQL',
  'MongoDB',
  'Firebase',
  'Postman',
  'n8n',
  'Tailwind CSS'
];

// Physics-based Bubble Component using Matter.js with Soft-Body Deformation
function PhysicsBubbleContainer({ containerRef }) {
  const sceneRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const runnerRef = useRef(null);
  const renderRef = useRef(null);
  const bodiesRef = useRef({});
  const ballRefsRef = useRef([]);
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const [ballRadius, setBallRadius] = useState(45); // Increased for better icon fit
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      setContainerSize({ width, height });
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerSize.width || containerRef.current.clientWidth;
    const height = containerSize.height || containerRef.current.clientHeight;
    if (width === 0 || height === 0) return;

    const minSide = Math.min(width, height);
    const autoRadius = Math.floor(minSide / (Math.sqrt(MainSkills.length) * 2.2));
    const radius = Math.min(45, Math.max(18, autoRadius));
    setBallRadius((prev) => (prev === radius ? prev : radius));

    // Matter.js modules
    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner, Events, Body } = Matter;

    // Create engine with ZERO gravity - billiard table physics
    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;

    // Rock solid ball physics - high precision
    engine.positionIterations = 12;
    engine.velocityIterations = 12;
    engine.constraintIterations = 6;

    engineRef.current = engine;

    // Create canvas for rendering
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.cursor = 'grab';
    canvas.style.pointerEvents = 'auto';
    containerRef.current.appendChild(canvas);
    canvasRef.current = canvas;

    // Create render (not visible, used for physics only)
    const render = Render.create({
      element: containerRef.current,
      canvas: canvas,
      engine: engine,
      options: {
        width,
        height,
        background: 'transparent',
        wireframes: false,
        showAngleIndicator: false,
      }
    });
    renderRef.current = render;

    // Ball physics - rock solid bouncy balls with high restitution
    const wallOptions = { 
      isStatic: true, 
      render: { visible: false },
      restitution: 0.98,
      friction: 0,
      frictionStatic: 0,
      density: 0.001
    };

    // Create ABSOLUTE boundary walls - THICK and IMMOVABLE
    const walls = [
      Bodies.rectangle(width / 2, -50, width + 200, 100, { ...wallOptions, label: 'topWall' }),
      Bodies.rectangle(width / 2, height + 50, width + 200, 100, { ...wallOptions, label: 'bottomWall' }),
      Bodies.rectangle(width + 50, height / 2, 100, height + 200, { ...wallOptions, label: 'rightWall' }),
      Bodies.rectangle(-50, height / 2, 100, height + 200, { ...wallOptions, label: 'leftWall' })
    ];

    World.add(engine.world, walls);

    // Create rock solid balls for main skills
    const balls = MainSkills.map((skill, index) => {
      // Safe spawn area with padding
      const padding = radius + 16;
      const safeWidth = Math.max(1, width - padding * 2);
      const safeHeight = Math.max(1, height - padding * 2);
      
      const x = Math.random() * safeWidth + padding;
      const y = Math.random() * safeHeight + padding;

      const body = Bodies.circle(x, y, radius, {
        restitution: 0.98,
        friction: 0,
        frictionAir: 0.002,
        density: 0.03,
        render: { visible: false },
        label: skill
      });

      // Initial velocity for movement
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4
      });

      bodiesRef.current[skill] = body;
      return { body, index };
    });

    World.add(engine.world, balls.map(b => b.body));

    // Mouse control
    const mouse = Mouse.create(canvas);
    mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
    mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false }
      }
    });

    World.add(engine.world, mouseConstraint);

    // Run physics engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);
    runnerRef.current = runner;

    // ABSOLUTE boundary constraint - prevents any ball escape with buffer
    Events.on(engine, 'beforeUpdate', () => {
      // First, check ball-to-ball collisions and separate overlapping balls
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const body1 = balls[i].body;
          const body2 = balls[j].body;
          
          const dx = body2.position.x - body1.position.x;
          const dy = body2.position.y - body1.position.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = radius * 2 + 4; // Billiard-tight buffer
          
          // If balls are overlapping or too close, separate them
          if (distance < minDistance && distance > 0) {
            const overlap = minDistance - distance;
            const nx = dx / distance;
            const ny = dy / distance;
            const correction = overlap / 2;

            Body.setPosition(body1, {
              x: body1.position.x - nx * correction,
              y: body1.position.y - ny * correction
            });
            Body.setPosition(body2, {
              x: body2.position.x + nx * correction,
              y: body2.position.y + ny * correction
            });

            Body.setVelocity(body1, { x: body1.velocity.x * 0.97, y: body1.velocity.y * 0.97 });
            Body.setVelocity(body2, { x: body2.velocity.x * 0.97, y: body2.velocity.y * 0.97 });
          }
        }
      }
      
      // Then, enforce boundary constraints with proper clamping
      balls.forEach(({ body }) => {
        const margin = radius; // Keep bubble boundary inside container
        
        // Hard clamp to prevent any escape or touching boundaries
        if (body.position.x - margin < 0) {
          body.position.x = margin;
          body.velocity.x = Math.max(0, body.velocity.x);
        }
        if (body.position.x + margin > width) {
          body.position.x = width - margin;
          body.velocity.x = Math.min(0, body.velocity.x);
        }
        if (body.position.y - margin < 0) {
          body.position.y = margin;
          body.velocity.y = Math.max(0, body.velocity.y);
        }
        if (body.position.y + margin > height) {
          body.position.y = height - margin;
          body.velocity.y = Math.min(0, body.velocity.y);
        }
      });
    });

    // Sync loop to update React ball positions
    let animationFrameId;
    const updateLoop = () => {
      balls.forEach(({ body, index }) => {
        if (ballRefsRef.current[index]) {
          const ballEl = ballRefsRef.current[index];
          ballEl.style.transform = `translate(${body.position.x - radius}px, ${body.position.y - radius}px)`;
        }
      });
      animationFrameId = requestAnimationFrame(updateLoop);
    };
    updateLoop();

    // Mouse interaction for hovering
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let hovered = null;
      balls.forEach(({ body }) => {
        const dx = mouseX - body.position.x;
        const dy = mouseY - body.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < radius) {
          hovered = body.label;
          canvas.style.cursor = 'pointer';
        }
      });

      if (!hovered) {
        canvas.style.cursor = 'grab';
      }
      setHoveredBubble(hovered);
    };

    const handleMouseLeave = () => {
      setHoveredBubble(null);
      canvas.style.cursor = 'grab';
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleCanvasResize = () => {
      if (!renderRef.current || !containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;
      
      const render = renderRef.current;
      if (render.canvas) {
        render.canvas.width = newWidth;
        render.canvas.height = newHeight;
      }
    };

    window.addEventListener('resize', handleCanvasResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleCanvasResize);
      Render.stop(render);
      Runner.stop(runner);
      cancelAnimationFrame(animationFrameId);
      World.clear(engine.world);
      Engine.clear(engine);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (render.canvas && render.canvas.parentNode) {
        render.canvas.parentNode.removeChild(render.canvas);
      }
    };
  }, [containerRef, containerSize.width, containerSize.height]);

  const isCompact = containerSize.width > 0 && containerSize.width < 768;
  const iconScale = ballRadius / 45;

  return (
    <>
      {MainSkills.map((skill, index) => (
        <div
          key={skill}
          ref={el => ballRefsRef.current[index] = el}
          className="absolute pointer-events-none"
          style={{
            width: `${ballRadius * 2}px`,
            height: `${ballRadius * 2}px`,
            willChange: 'transform'
          }}
        >
          <div 
            className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-150 ${
              hoveredBubble === skill 
                ? 'shadow-2xl shadow-blue-500/60 scale-110' 
                : 'shadow-lg shadow-blue-500/30'
            }`}
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(96, 165, 250, 0.3), rgba(59, 130, 246, 0.1))',
              border: hoveredBubble === skill ? '2px solid rgba(96, 165, 250, 0.8)' : '2px solid rgba(96, 165, 250, 0.4)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div
              className="pointer-events-none"
              style={{ transform: `scale(${iconScale})`, transformOrigin: 'center' }}
            >
              {TechIcons[skill]()}
            </div>
          </div>
          {(hoveredBubble === skill || isCompact) && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-50">
              <span className="text-xs font-medium text-blue-300 bg-slate-900/90 px-3 py-1 rounded-full border border-blue-400/30 backdrop-blur-sm">
                {skill}
              </span>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default function Page() {
  const [pfpHovered, setPfpHovered] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const currentSectionRef = useRef('home');
  const techStackContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Determine current section by checking scroll position within section bounds
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      let activeSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            activeSection = sectionId;
            break;
          }
        }
      }

      // Ensure contact section is active when near the bottom
      const pageBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (pageBottom >= docHeight - 8) {
        activeSection = 'contact';
      }

      setCurrentSection(activeSection);
      currentSectionRef.current = activeSection;
    };
    
    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const currentIndex = sections.indexOf(currentSectionRef.current);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full">
      <section id="home" className="mx-auto max-w-7xl px-6 md:px-20 pt-28 md:pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid gap-10 md:grid-cols-2 items-center w-full">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="text-blue-400">Muhammad Ahmed</span>
            </h1>
            <p className="mt-4 text-2xl md:text-3xl font-light text-gray-300 font-display">
              <Typewriter 
                strings={[
                  'Full-Stack AI Engineer',
                  'Machine Learning Engineer',
                  'Data Scientist',
                  'Backend Engineer',
                  'Frontend Engineer',
                  'MLOps Engineer',
                  'Database Administrator',
                  'DevOps Engineer',
                  'AI Solutions Architect',
                  'Software Engineer',
                  'Big Data Engineer',
                  'Computer Vision Engineer',
                  'NLP Specialist',
                  'Systems Architect'
                ]}
                typingSpeed={30}
                deletingSpeed={50}
                delayBetweenStrings={2000}
                cursorColor="#38bdf8"
              />
            </p>
            <p className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed">
              Bridging the gap between intelligent systems and elegant user experiences. I architect scalable full-stack solutions powered by machine learning, transforming complex data into intuitive, production-ready applications that drive real-world impact.
            </p>
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block rounded-full bg-blue-500 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-blue-600 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-300 ${pfpHovered ? 'blur-2xl scale-110' : ''}`} />
              <div 
                onMouseEnter={() => setPfpHovered(true)}
                onMouseLeave={() => setPfpHovered(false)}
                className={`relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${pfpHovered ? 'border-blue-400/50 shadow-lg shadow-blue-500/20' : ''}`}
              >
                <div className={`absolute inset-0 rounded-full whirlpool-effect transition-opacity duration-500 ${pfpHovered ? 'opacity-100' : 'opacity-70'}`} />
                <img 
                  src="/images/profile.jpg" 
                  alt="Muhammad Ahmed" 
                  className="w-full h-full object-cover rounded-full"
                  width="256"
                  height="256"
                  loading="eager"
                  decoding="async"
                  fetchpriority="high"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About <span className="text-blue-400">Me</span>
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              I'm a software engineer specializing in the intersection of artificial intelligence and modern web development. With a BS in Data Science from KFUEIT, based in Pakistan, I craft end-to-end solutions that leverage machine learning algorithms, real-time data processing, and cutting-edge frontend technologies.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From designing neural networks to building responsive React interfaces, I bring a holistic approach to software development. My work spans predictive analytics, computer vision applications, RESTful microservices, and cloud-native architectures—all unified by a commitment to clean code, scalability, and measurable business outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#skills" className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">Data Science</span>
              </a>
              <a href="#skills" className="rounded-2xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-purple-400 group-hover:text-purple-300">ML Engineering</span>
              </a>
              <a href="#skills" className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300">Full-Stack Dev</span>
              </a>
              <a href="#skills" className="rounded-2xl border border-green-500/30 bg-green-500/10 px-5 py-3 hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-green-400 group-hover:text-green-300">API Development</span>
              </a>
              <a href="#skills" className="rounded-2xl border border-pink-500/30 bg-pink-500/10 px-5 py-3 hover:bg-pink-500/20 hover:border-pink-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-pink-400 group-hover:text-pink-300">Deep Learning</span>
              </a>
              <a href="#skills" className="rounded-2xl border border-orange-500/30 bg-orange-500/10 px-5 py-3 hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-pointer group">
                <span className="text-sm font-medium text-orange-400 group-hover:text-orange-300">Cloud Architecture</span>
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400">developer.js</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-gray-500"><span className="text-purple-400">class</span> <span className="text-blue-400">SoftwareEngineer</span> {'{'}</div>
              <div className="ml-4 text-gray-400"><span className="text-purple-400">constructor</span>() {'{'}</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.name = <span className="text-green-400">"Muhammad Ahmed"</span>;</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.role = <span className="text-green-400">"AI Architect & Full-Stack Developer"</span>;</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.location = <span className="text-green-400">"Gulshan-e-Ravi, RYK, Punjab, Pakistan"</span>;</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.experience = <span className="text-orange-400">3</span>; <span className="text-gray-600">// years</span></div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.passion = <span className="text-pink-400">Infinity</span>;</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.skills = {'{'}</div>
              <div className="ml-12 text-gray-500">backend: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"FastAPI"</span>, <span className="text-green-400">"Express.js"</span>],</div>
              <div className="ml-12 text-gray-500">frontend: [<span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"Tailwind"</span>, <span className="text-green-400">"Next.js"</span>],</div>
              <div className="ml-12 text-gray-500">ai: [<span className="text-green-400">"TensorFlow"</span>, <span className="text-green-400">"PyTorch"</span>, <span className="text-green-400">"Scikit-learn"</span>, <span className="text-green-400">"OpenCV"</span>],</div>
              <div className="ml-12 text-gray-500">databases: [<span className="text-green-400">"MongoDB"</span>, <span className="text-green-400">"PostgreSQL"</span>, <span className="text-green-400">"Redis"</span>, <span className="text-green-400">"Firebase"</span>],</div>
              <div className="ml-12 text-gray-500">devOps: [<span className="text-green-400">"Docker"</span>, <span className="text-green-400">"Git"</span>, <span className="text-green-400">"CI/CD"</span>, <span className="text-green-400">"AWS"</span>],</div>
              <div className="ml-12 text-gray-500">tools: [<span className="text-green-400">"VS Code"</span>, <span className="text-green-400">"Jupyter"</span>, <span className="text-green-400">"Postman"</span>, <span className="text-green-400">"Figma"</span>]</div>
              <div className="ml-8 text-gray-500">{'}'};</div>
              <div className="ml-8 text-gray-500"><span className="text-cyan-400">this</span>.currentFocus = [</div>
              <div className="ml-12 text-gray-500"><span className="text-green-400">"Large Language Models"</span>,</div>
              <div className="ml-12 text-gray-500"><span className="text-green-400">"Microservices Architecture"</span>,</div>
              <div className="ml-12 text-gray-500"><span className="text-green-400">"Real-time Data Processing"</span></div>
              <div className="ml-8 text-gray-500">];</div>
              <div className="ml-4 text-gray-400">{'}'}</div>
              <div className="ml-4 text-gray-400"></div>
              <div className="ml-4 text-gray-400"><span className="text-purple-400">async</span> <span className="text-yellow-400">buildSolutions</span>() {'{'}</div>
              <div className="ml-8 text-gray-500"><span className="text-purple-400">const</span> ideas = <span className="text-purple-400">await</span> <span className="text-cyan-400">this</span>.<span className="text-yellow-400">brainstorm</span>();</div>
              <div className="ml-8 text-gray-500"><span className="text-purple-400">const</span> code = <span className="text-cyan-400">this</span>.<span className="text-yellow-400">implement</span>(ideas);</div>
              <div className="ml-8 text-gray-500"><span className="text-purple-400">return</span> <span className="text-cyan-400">this</span>.<span className="text-yellow-400">deploy</span>(code).<span className="text-yellow-400">withImpact</span>();</div>
              <div className="ml-4 text-gray-400">{'}'}</div>
              <div className="ml-4 text-gray-400"></div>
              <div className="ml-4 text-gray-400"><span className="text-yellow-400">getMotivation</span>() {'{'}</div>
              <div className="ml-8 text-gray-500"><span className="text-purple-400">return</span> <span className="text-green-400">"Turning complex problems into elegant solutions"</span>;</div>
              <div className="ml-4 text-gray-400">{'}'}</div>
              <div className="text-gray-500">{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-blue-400">Core Technologies</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Main Tech Stack</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            My primary toolkit for building powerful, modern applications from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:auto-rows-[600px]">
          {/* Left Side - Main Tech Stack with Matter.js Physics */}
          <div
            ref={techStackContainerRef}
            className="order-1 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl p-4 sm:p-6 md:p-8 relative overflow-hidden h-[620px] sm:h-[700px] md:h-full"
          >
            <PhysicsBubbleContainer containerRef={techStackContainerRef} />
          </div>

          {/* Right Side - Skills Block */}
          <div className="order-2 flex flex-col h-full">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl overflow-hidden flex-1 flex flex-col">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400">skills.config.ts</span>
              <div className="ml-auto text-xs text-gray-500">40+ technologies</div>
            </div>
            <div className="p-6 max-h-[580px] overflow-y-auto custom-scrollbar">
              
              {/* Backend & Databases */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                  <p className="text-xs uppercase tracking-widest text-green-400 font-semibold">Backend & Databases</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Node.js', 'FastAPI', 'Express.js', 'REST API', 'MongoDB', 'PostgreSQL', 'SQL', 'SQLite', 'Redis'].map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-lg bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-500/20 px-3 py-2 text-xs font-medium text-gray-200 hover:border-green-400/60 hover:bg-green-500/20 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend & UI */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Frontend & UI</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'JavaScript', 'React Native', 'Tailwind CSS', 'HTML5', 'CSS3', 'Expo', 'Vite'].map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/20 px-3 py-2 text-xs font-medium text-gray-200 hover:border-blue-400/60 hover:bg-blue-500/20 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </span>
                  ))}
                </div>
              </div>

              {/* AI & Machine Learning */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
                  <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold">AI & Machine Learning</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'NLP', 'Deep Learning', 'Data Science', 'Pandas', 'NumPy'].map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-lg bg-gradient-to-br from-purple-900/20 to-purple-800/10 border border-purple-500/20 px-3 py-2 text-xs font-medium text-gray-200 hover:border-purple-400/60 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-4 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
                  <p className="text-xs uppercase tracking-widest text-orange-400 font-semibold">DevOps & Tools</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Git/GitHub', 'CI/CD', 'Firebase', 'Postman', 'n8n', 'AWS', 'Vercel'].map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-lg bg-gradient-to-br from-orange-900/20 to-orange-800/10 border border-orange-500/20 px-3 py-2 text-xs font-medium text-gray-200 hover:border-orange-400/60 hover:bg-orange-500/20 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 md:px-20 py-20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-blue-400">Selected Work</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tighter">Projects</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A mix of product launches, interactive websites, and visual experiments designed to
            elevate digital presence.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Nebula Studio',
              type: 'Brand Experience',
              color: 'from-blue-600 to-cyan-400',
            },
            {
              title: 'Orbit Commerce',
              type: 'E-commerce Platform',
              color: 'from-purple-600 to-blue-500',
            },
            {
              title: 'Lumen Labs',
              type: 'Product Showcase',
              color: 'from-cyan-500 to-blue-600',
            },
          ].map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-blue-500/30 transition-all"
            >
              <div className={`h-48 rounded-2xl bg-gradient-to-br ${project.color} opacity-80`} />
              <h3 className="mt-6 text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-400">{project.type}</p>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                Motion-driven landing experiences, immersive product visuals, and refined UI systems.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 md:px-20 py-12">
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/80 via-[#1a1030]/80 to-slate-950/90 p-6 md:p-8 backdrop-blur-xl overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
          </div>

          <div className="relative grid gap-8 md:gap-12 md:grid-cols-[1fr_1.2fr]">
            {/* Left Side - Get in Touch */}
            <div className="flex flex-col justify-start">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create something amazing together.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Email</p>
                  <a href="mailto:ahmednuman3044@gmail.com" className="text-white hover:text-blue-400 transition-colors text-sm">
                    ahmednuman3044@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Location</p>
                  <p className="text-gray-300 text-sm">Gulshan-e-Ravi, RYK, Punjab, Pakistan</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">Social</p>
                  <div className="flex flex-col gap-3">
                    <a href="https://github.com/4hmed-n" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-gray-400">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-3">contact.exe</span>
              </div>

              <form className="p-4 md:p-6 space-y-4">
                <div className="flex items-center gap-2 text-purple-200 text-xs">
                  <p className="uppercase tracking-[0.2em]">Send a message</p>
                </div>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Name</span>
                  <input
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                    placeholder="Your name"
                    type="text"
                    name="name"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Email</span>
                  <input
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300"
                    placeholder="Your email"
                    type="email"
                    name="email"
                  />
                </label>

                <label className="space-y-2 block">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Message</span>
                  <textarea
                    className="w-full border-b border-white/20 bg-transparent py-1.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-300 resize-none"
                    placeholder="Your message"
                    rows="2"
                    name="message"
                  />
                </label>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/60 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section mt-4">
        <div className="mx-auto max-w-7xl px-6 md:px-20 py-12 border-t border-white/10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold tracking-tight mb-3">Muhammad Ahmed</h3>
              <p className="text-sm text-gray-400">BS Data Science, KFUEIT</p>
              <p className="text-sm text-gray-400 mt-2">Gulshan-e-Ravi, RYK, Punjab, Pakistan</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
                <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Navigation</h4>
              <div className="flex flex-col gap-2">
                <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                <a href="/resume.pdf" className="text-sm text-gray-400 hover:text-white transition-colors">Resume</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/4hmed-n" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="mailto:ahmednuman3044@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors">Email</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              © 2026 Muhammad Ahmed. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Next Section Arrow - Fixed at bottom middle */}
      {currentSection !== 'contact' && (
        <button
          onClick={scrollToNextSection}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white hover:text-sky-400 transition-colors duration-300"
        >
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/50 text-blue-300 hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </div>
  );
}