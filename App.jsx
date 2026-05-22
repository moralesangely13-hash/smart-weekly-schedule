import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  StickyNote,
  Image as ImageIcon,
  Droplets,
  Smile,
  CloudSun,
  X,
  Plus,
  Loader2,
  Trash2,
  Link as LinkIcon,
  Upload,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';

const SCHEDULE = [
  {
    day: 'Lunes',
    theme: 'Curso de Inglés',
    color: { bg: 'bg-[#fdf2f8]', border: 'border-[#fbcfe8]', text: 'text-pink-700', badge: 'bg-white text-pink-500', hover: 'hover:bg-pink-50' },
    tasks: [
      { id: 'l1', time: '8:30-10:00', title: 'Rutina mañana ☀️', type: 'routine' },
{ id: 'l2', time: '10:00-12:00', title: 'Diseñar clases de inglés 📚', type: 'work' },
{ id: 'l3', time: '12:00-1:00', title: 'Almuerzo 🍲', type: 'break' },
{ id: 'l4', time: '1:00-2:00', title: 'Recursos y Moodle 💻', type: 'work' },
{ id: 'l5', time: '2:00-3:00', title: 'Descanso ☁️', type: 'break' },
{ id: 'l6', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'l7', time: '6:00-7:00', title: 'Cena 🍽️', type: 'break' },
{ id: 'l8', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
{ id: 'l9', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Martes',
    theme: 'Publicidad y Redes',
    color: { bg: 'bg-[#f0fdf4]', border: 'border-[#bbf7d0]', text: 'text-green-700', badge: 'bg-white text-green-600', hover: 'hover:bg-green-50' },
    tasks: [
      { id: 'm1', time: '8:30-10:00', title: 'Rutina mañana ☀️', type: 'routine' },
{ id: 'm2', time: '10:00-12:00', title: 'Canva + Anuncios 🎨', type: 'work' },
{ id: 'm3', time: '12:00-1:00', title: 'Almuerzo 🍲', type: 'break' },
{ id: 'm4', time: '1:00-2:00', title: 'Branding y Redes 📱', type: 'work' },
{ id: 'm5', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'm6', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
{ id: 'm7', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Miércoles',
    theme: 'Trabajo Online',
    color: { bg: 'bg-[#eff6ff]', border: 'border-[#bfdbfe]', text: 'text-blue-700', badge: 'bg-white text-blue-500', hover: 'hover:bg-blue-50' },
    tasks: [
      { id: 'x1', time: '8:30-10:00', title: 'Rutina mañana ☀️', type: 'routine' },
{ id: 'x2', time: '10:00-11:00', title: 'Arreglar currículum 📄', type: 'work' },
{ id: 'x3', time: '11:00-12:00', title: 'Buscar trabajo online 🔎', type: 'work' },
{ id: 'x4', time: '1:00-2:00', title: 'Freelance/Plataformas 💼', type: 'work' },
{ id: 'x5', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'x6', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
{ id: 'x7', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Jueves',
    theme: 'Curso de Inglés',
    color: { bg: 'bg-[#fffbeb]', border: 'border-[#fde68a]', text: 'text-yellow-700', badge: 'bg-white text-yellow-600', hover: 'hover:bg-yellow-50' },
    tasks: [
      { id: 'j1', time: '10:00-12:00', title: 'Actividades y materiales 📝', type: 'work' },
{ id: 'j2', time: '1:00-2:00', title: 'Organizar Moodle 💻', type: 'work' },
{ id: 'j3', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'j4', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
{ id: 'j5', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Viernes',
    theme: 'Creatividad y Redes',
    color: { bg: 'bg-[#f5f3ff]', border: 'border-[#ddd6fe]', text: 'text-purple-700', badge: 'bg-white text-purple-500', hover: 'hover:bg-purple-50' },
    tasks: [
      { id: 'v1', time: '10:00-12:00', title: 'Diseños + Contenido 🎨', type: 'work' },
{ id: 'v2', time: '1:00-2:00', title: 'Branding/Organización 🗂️', type: 'work' },
{ id: 'v3', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'v4', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
{ id: 'v5', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Sábado',
    theme: 'Costura Presencial',
    color: { bg: 'bg-[#fff1f2]', border: 'border-[#fecdd3]', text: 'text-rose-700', badge: 'bg-white text-rose-500', hover: 'hover:bg-rose-50' },
    tasks: [
      { id: 's1', time: '10:00-1:00', title: 'Curso de costura presencial 🧵', type: 'creative' },
{ id: 's2', time: '4:00-6:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 's3', time: '7:00-8:00', title: 'Práctica ligera Costura 🪡', type: 'creative' },
{ id: 's4', time: '8:00-8:30', title: 'Ejercicio suave 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Domingo',
    theme: 'Reset y Descanso',
    color: { bg: 'bg-[#f8fafc]', border: 'border-[#e2e8f0]', text: 'text-slate-700', badge: 'bg-white text-slate-500', hover: 'hover:bg-slate-50' },
    tasks: [
      { id: 'd1', time: '10:00-11:00', title: 'Organizar cuarto 🧹', type: 'routine' },
{ id: 'd2', time: '11:00-12:00', title: 'Planear semana 📝', type: 'work' },
{ id: 'd3', time: '1:00-4:00', title: 'Videojuegos 🎮', type: 'play' },
{ id: 'd4', time: '6:00-7:00', title: 'Skincare largo 🧴', type: 'skincare' },
{ id: 'd5', time: '7:00-8:00', title: 'Ejercicio suave 🧘‍♀️', type: 'exercise' },
    ]
  }
];

const AVAILABLE_STICKERS = ['✨', '🌸', '💖', '🎀', '🧴', '🧘‍♀️', '🧵', '🎮', '💧', '📝', '☁️', '⭐', '🌙', '💻', '📚', '🦋', '🌷', '🍓', '🐱', '💄', '💋', '🪞'];
const QUOTES = [
  'One small step is still progress.',
  'You don’t have to do everything today.',
  'Go softly, but keep going.',
  'Your ideas deserve a place.',
  'Breathe. You are doing enough.',
  'Tiny progress still counts.',
  'Your pace is allowed to be gentle.'
];

const TIPS_BY_TYPE = {
  routine: [
    'Empieza con algo simple: toma agua, lávate la cara y ordena una sola cosa de tu espacio.',
    'Haz tu rutina sin correr. Primero cuerpo, luego mente, luego tareas.',
    'No necesitas una mañana perfecta; necesitas una mañana que te ayude a comenzar.'
  ],
  work: [
    'Elige una sola prioridad para este bloque y trabaja 25 minutos sin cambiar de tarea.',
    'Antes de empezar, escribe: “Hoy solo necesito avanzar en ___”. Eso baja la ansiedad.',
    'Cierra pestañas que no uses y deja visible solo lo necesario para esta tarea.'
  ],
  creative: [
    'Empieza con una referencia visual y crea una versión simple antes de querer perfeccionarla.',
    'Haz un mini avance: un boceto, una idea, una prueba o una captura. Eso ya cuenta.',
    'Guarda inspiración, pero no te quedes atrapada buscando ideas. Crea algo pequeño hoy.'
  ],
  exercise: [
    'Haz 5 minutos de estiramiento y 5 minutos de movimiento suave. No tiene que ser intenso.',
    'Enfócate en cuello, espalda y piernas si has estado mucho tiempo sentada.',
    'Pon música suave y muévete sin presión. El objetivo es activar tu cuerpo, no agotarte.'
  ],
  skincare: [
    'Mantén la rutina simple: limpieza, hidratación y protector solar si es de día.',
    'No mezcles muchos productos nuevos el mismo día. Observa cómo reacciona tu piel.',
    'Antes de aplicar productos, revisa si tu piel se siente seca, sensible, grasa o normal.'
  ],
  play: [
    'Disfruta este descanso sin culpa. También necesitas momentos para recargar energía.',
    'Pon un límite suave de tiempo para que el descanso no se convierta en evasión.',
    'Juega como recompensa, no como escape. Disfrútalo con calma.'
  ],
  break: [
    'Come o descansa lejos de la pantalla aunque sea unos minutos.',
    'Respira profundo antes de seguir. Tu cuerpo también necesita pausas reales.',
    'No llenes cada pausa con más tareas. Descansar también es parte del plan.'
  ]
};

export default function App() {
  const [activeTask, setActiveTask] = useState(null);

  const [taskState, setTaskState] = useState(() => {
    try {
      const saved = localStorage.getItem('planner_smart_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [waterGlasses, setWaterGlasses] = useState(() => {
    const saved = localStorage.getItem('planner_water');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [mood, setMood] = useState(() => {
    return localStorage.getItem('planner_mood') || null;
  });

  useEffect(() => {
    localStorage.setItem('planner_smart_tasks', JSON.stringify(taskState));
  }, [taskState]);

  useEffect(() => {
    localStorage.setItem('planner_water', waterGlasses.toString());
  }, [waterGlasses]);

  useEffect(() => {
    if (mood) localStorage.setItem('planner_mood', mood);
    else localStorage.removeItem('planner_mood');
  }, [mood]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Quicksand:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#fdfbf7] font-['Quicksand'] pb-20 relative"
      style={{ backgroundImage: 'radial-gradient(#f1e6d6 1px, transparent 1px)', backgroundSize: '20px 20px' }}
    >
      <div className="max-w-7xl mx-auto pt-6 px-6 flex flex-wrap justify-center sm:justify-end gap-4 mb-4">
        <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center gap-3 text-sm text-gray-500">
          <CloudSun size={16} className="text-amber-400" />
          <span>Buen clima para hoy</span>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center gap-2 text-sm text-gray-500">
          <Droplets size={16} className="text-blue-400" />
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <button
                key={i}
                onClick={() => setWaterGlasses(i)}
                className={`w-3 h-4 rounded-full transition-all ${waterGlasses >= i ? 'bg-blue-300 scale-110' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-gray-100 flex items-center gap-2 text-sm text-gray-500">
          <Smile size={16} className="text-pink-400" />
          <div className="flex gap-2">
            {['😴', '😌', '✨', '💖'].map(emoji => (
              <button
                key={emoji}
                onClick={() => setMood(emoji)}
                className={`hover:scale-125 transition-transform ${mood === emoji ? 'scale-125 opacity-100' : 'opacity-50'}`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mb-10 px-4">
        <h1 className="font-['Caveat'] text-6xl text-gray-800 mb-2 mt-4 tracking-tight">
          Mi Rutina Semanal
        </h1>
        <p className="text-gray-500 italic bg-white inline-block px-6 py-2 rounded-full shadow-sm border border-pink-50">
          Balanceada, realista y organizada 🌱
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SCHEDULE.map((dayData, idx) => (
          <div
            key={idx}
            className={`${dayData.color.bg} border-2 ${dayData.color.border} rounded-[2rem] p-6 shadow-sm transition-transform hover:-translate-y-1 duration-300`}
          >
            <div className="text-center mb-6">
              <h2 className={`font-['Caveat'] text-4xl ${dayData.color.text}`}>
                {dayData.day}
              </h2>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${dayData.color.badge} px-3 py-1 rounded-full shadow-sm mt-2 inline-block`}>
                {dayData.theme}
              </span>
            </div>

            <div className="space-y-2">
              {dayData.tasks.map((task) => (
                <button
                  key={task.id}
                  onClick={() => setActiveTask({ ...task, dayColor: dayData.color })}
                  className={`w-full group flex items-start justify-between text-left py-2.5 px-3 rounded-xl transition-all ${dayData.color.hover} hover:shadow-sm border border-transparent hover:border-black/5 relative overflow-hidden`}
                >
                  <span className={`font-bold ${dayData.color.text} w-24 text-xs mt-0.5 shrink-0`}>
                    {task.time}
                  </span>
                  <span className="text-sm text-gray-700 flex-1 pr-6">
                    {task.title}
                  </span>
                  <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <div className="bg-white rounded-full p-1 shadow-sm text-gray-400">
                      <Sparkles size={12} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        <WellnessPanel />
      </div>

      {activeTask && (
        <TaskModal
          task={activeTask}
          onClose={() => setActiveTask(null)}
          taskState={taskState}
          setTaskState={setTaskState}
        />
      )}
    </div>
  );
}

function WellnessPanel() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          setRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % QUOTES.length);
    }, 180000);

    return () => clearInterval(quoteTimer);
  }, []);

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');

  return (
    <div className="bg-[#fff7fb] border-2 border-pink-100 rounded-[2rem] p-5 shadow-sm flex flex-col gap-5 min-h-[360px]">
      <div className="bg-pink-50 border border-pink-100 rounded-[1.5rem] p-5 text-center shadow-sm relative overflow-hidden">
        <div className="absolute left-4 top-12 text-3xl opacity-70">🌹</div>
        <div className="absolute right-4 top-12 text-3xl opacity-70">🌹</div>

        <h3 className="font-bold text-pink-500 mb-3">🌹 Focus Timer</h3>

        <div className="font-bold text-5xl text-pink-500 mb-5 tracking-wider">
          {minutes}:{secs}
        </div>

        <div className="flex justify-center gap-2 flex-wrap">
          <button
            onClick={() => setRunning(true)}
            className="bg-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm hover:bg-pink-400 transition"
          >
            <Play size={13} /> Start
          </button>

          <button
            onClick={() => setRunning(false)}
            className="bg-white text-pink-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm hover:bg-pink-50 transition"
          >
            <Pause size={13} /> Pause
          </button>

          <button
            onClick={() => {
              setSeconds(25 * 60);
              setRunning(false);
            }}
            className="bg-white text-pink-500 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm hover:bg-pink-50 transition"
          >
            <RotateCcw size={13} /> Reset
          </button>
        </div>
      </div>

      <div className="bg-[#fffaf0] border border-yellow-100 rounded-[1.5rem] p-5 shadow-sm text-center">
        <h3 className="font-bold text-orange-400 mb-3">✨ Positive Reminder</h3>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-yellow-50 min-h-[120px] flex items-center justify-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            “{QUOTES[quoteIndex]}”
          </p>
        </div>

        <div className="flex justify-center gap-1 mt-3">
          {QUOTES.slice(0, 5).map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 rounded-full ${idx === quoteIndex % 5 ? 'bg-pink-400' : 'bg-pink-100'}`}
            />
          ))}
        </div>

        <div className="text-2xl mt-2">🎀</div>
      </div>
    </div>
  );
}

function TaskModal({ task, onClose, taskState, setTaskState }) {
  const [activeTab, setActiveTab] = useState('notes');
  const [loading, setLoading] = useState(false);
  const [currentTip, setCurrentTip] = useState(null);
  const [localNote, setLocalNote] = useState('');
  const [linkInput, setLinkInput] = useState('');
  const [draftStickers, setDraftStickers] = useState([]);
  const draftRef = useRef(null);

  const rawData = taskState[task.id] || {};

  const currentData = {
    notes: Array.isArray(rawData.notes) ? rawData.notes : [],
    images: Array.isArray(rawData.images) ? rawData.images : [],
    links: Array.isArray(rawData.links) ? rawData.links : []
  };

  const updateTaskData = (newData) => {
    setTaskState(prev => ({
      ...prev,
      [task.id]: { ...currentData, ...newData }
    }));
  };

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const updateStickerPosition = (scope, stickerId, x, y, noteId = null) => {
    if (scope === 'draft') {
      setDraftStickers(prev =>
        prev.map(sticker =>
          sticker.id === stickerId ? { ...sticker, x, y } : sticker
        )
      );
      return;
    }

    updateTaskData({
      notes: currentData.notes.map(note => {
        if (note.id !== noteId) return note;

        return {
          ...note,
          stickers: (note.stickers || []).map(sticker =>
            sticker.id === stickerId ? { ...sticker, x, y } : sticker
          )
        };
      })
    });
  };

  const startStickerDrag = (e, scope, stickerId, containerRef, noteId = null) => {
    e.preventDefault();
    e.stopPropagation();

    const move = (event) => {
      const point = event.touches ? event.touches[0] : event;
      const rect = containerRef.current.getBoundingClientRect();

      const x = clamp(((point.clientX - rect.left) / rect.width) * 100, 4, 96);
      const y = clamp(((point.clientY - rect.top) / rect.height) * 100, 8, 92);

      updateStickerPosition(scope, stickerId, x, y, noteId);
    };

    const stop = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', stop);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', stop);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', stop);
    window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('touchend', stop);
  };

  const addDraftSticker = (emoji) => {
    const newSticker = {
      id: Date.now().toString() + Math.random().toString(),
      emoji,
      x: 50,
      y: 50
    };

    setDraftStickers(prev => [...prev, newSticker]);
  };

  const deleteDraftSticker = (id) => {
    setDraftStickers(prev => prev.filter(sticker => sticker.id !== id));
  };

  const deleteSavedSticker = (noteId, stickerId) => {
    updateTaskData({
      notes: currentData.notes.map(note => {
        if (note.id !== noteId) return note;

        return {
          ...note,
          stickers: (note.stickers || []).filter(sticker => sticker.id !== stickerId)
        };
      })
    });
  };

  const handleAddNote = () => {
    if (!localNote.trim() && draftStickers.length === 0) return;

    const newNote = {
      id: Date.now().toString(),
      text: localNote,
      stickers: draftStickers,
      date: new Date().toLocaleString()
    };

    updateTaskData({ notes: [newNote, ...currentData.notes] });
    setLocalNote('');
    setDraftStickers([]);
  };

  const handleDeleteNote = (id) => {
    updateTaskData({ notes: currentData.notes.filter(note => note.id !== id) });
  };

  const compressImage = (file, maxWidth = 900, quality = 0.65) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.min(maxWidth / img.width, 1);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const compressedBase64 = canvas.toDataURL('image/jpeg', quality);

        resolve({
          id: Date.now().toString() + Math.random().toString(),
          url: compressedBase64,
          name: file.name,
          date: new Date().toLocaleString()
        });
      };

      img.onerror = reject;
      img.src = event.target.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const handleUploadImages = async (e) => {
  try {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length === 0) {
      alert('Por favor selecciona imágenes válidas.');
      return;
    }

    const convertedImages = await Promise.all(
      imageFiles.map(file => compressImage(file))
    );

    updateTaskData({
      images: [...currentData.images, ...convertedImages]
    });

    e.target.value = '';
  } catch (error) {
    console.error('Image upload error:', error);
    alert('No se pudo subir la imagen. Intenta con otra imagen.');
    e.target.value = '';
  }
};

  const handleDeleteImage = (id) => {
    updateTaskData({
      images: currentData.images.filter(img => img.id !== id)
    });
  };

  const handleAddLink = () => {
    if (!linkInput.trim()) return;

    let cleanUrl = linkInput.trim();

    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = `https://${cleanUrl}`;
    }

    const newLink = {
      id: Date.now().toString(),
      url: cleanUrl,
      title: cleanUrl.replace(/^https?:\/\//, '').slice(0, 50),
      date: new Date().toLocaleString()
    };

    updateTaskData({
      links: [newLink, ...currentData.links]
    });

    setLinkInput('');
  };

  const handleDeleteLink = (id) => {
    updateTaskData({
      links: currentData.links.filter(link => link.id !== id)
    });
  };

  const generateAITip = () => {
    setLoading(true);

    const list = TIPS_BY_TYPE[task.type] || [
      'Haz esta actividad con calma y sin exigirte perfección.',
      'Una cosa pequeña hecha hoy vale más que diez ideas sin empezar.',
      'Respira. Solo enfócate en el siguiente paso.'
    ];

    const randomTip = list[Math.floor(Math.random() * list.length)];

    setTimeout(() => {
      setCurrentTip(randomTip);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 flex justify-center items-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl overflow-hidden border border-gray-100 flex flex-col h-[92vh]">
        <div className={`${task.dayColor.bg} p-6 relative flex-shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/50 hover:bg-white rounded-full p-2 text-gray-500 transition-colors shadow-sm"
          >
            <X size={20} />
          </button>

          <div className="pr-12">
            <span className={`inline-block px-3 py-1 rounded-full bg-white/60 text-xs font-bold mb-3 ${task.dayColor.text} shadow-sm`}>
              {task.time}
            </span>
            <h3 className="font-['Caveat'] text-4xl text-gray-800 leading-tight">
              {task.title}
            </h3>
          </div>
        </div>

        <div className="flex border-b border-gray-100 px-2 flex-shrink-0 overflow-x-auto">
          <TabButton icon={<StickyNote size={15} />} label="Notas" active={activeTab === 'notes'} onClick={() => setActiveTab('notes')} />
          <TabButton icon={<ImageIcon size={15} />} label="Images" active={activeTab === 'images'} onClick={() => setActiveTab('images')} />
          <TabButton icon={<LinkIcon size={15} />} label="Links" active={activeTab === 'links'} onClick={() => setActiveTab('links')} />
          <TabButton icon={<Sparkles size={15} />} label="Asistente" active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} />
        </div>

        <div className="p-5 overflow-y-auto bg-[#fafafa]/50 flex-1 relative custom-scrollbar">

          {activeTab === 'notes' && (
            <div className="flex flex-col space-y-4 h-full">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3 flex-shrink-0">
                <div
                  ref={draftRef}
                  className="relative min-h-[130px] bg-[#fffafd] border border-pink-100 rounded-2xl p-3 overflow-hidden"
                >
                  <textarea
                    value={localNote}
                    onChange={(e) => setLocalNote(e.target.value)}
                    placeholder="Escribe tu nota visual..."
                    className="w-full h-20 text-sm text-gray-700 focus:outline-none resize-none bg-transparent relative z-0"
                  />

                  {draftStickers.map(sticker => (
                    <div
                      key={sticker.id}
                      onMouseDown={(e) => startStickerDrag(e, 'draft', sticker.id, draftRef)}
                      onTouchStart={(e) => startStickerDrag(e, 'draft', sticker.id, draftRef)}
                      className="absolute text-3xl cursor-move select-none group z-10"
                      style={{
                        left: `${sticker.x}%`,
                        top: `${sticker.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {sticker.emoji}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteDraftSticker(sticker.id);
                        }}
                        className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X size={10} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {AVAILABLE_STICKERS.map(emoji => (
                    <button
                      key={emoji}
                      onClick={() => addDraftSticker(emoji)}
                      className="text-2xl hover:scale-125 transition-transform p-1 rounded-lg hover:bg-pink-50"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleAddNote}
                  className="w-full mt-4 bg-pink-500 text-white px-4 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-pink-400 transition-colors shadow-sm"
                >
                  <Plus size={16} /> Guardar Nota
                </button>
              </div>

              <div className="flex-1 min-h-[360px] max-h-[520px] overflow-y-auto space-y-3 pb-4 custom-scrollbar">
                {currentData.notes.length === 0 ? (
                  <p className="text-center text-gray-400 text-sm italic py-10">
                    No hay notas en esta tarea aún.
                  </p>
                ) : (
                  currentData.notes.map(note => (
                    <SavedNoteCard
                      key={note.id}
                      note={note}
                      onDeleteNote={handleDeleteNote}
                      onDeleteSticker={deleteSavedSticker}
                      onDragSticker={startStickerDrag}
                    />
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'images' && (
            <div className="flex flex-col space-y-4 h-full">
  <label className="bg-pink-500 text-white px-4 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:bg-pink-400 transition flex-shrink-0">
  <Upload size={16} />
  Subir Imágenes
  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleUploadImages}
    className="hidden"
  />
</label>

              <div className="flex-1 overflow-y-auto pb-4">
                {currentData.images.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-gray-400 py-12 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">Sube imágenes desde tu dispositivo.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {currentData.images.map((img) => (
                      <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-sm aspect-square bg-gray-100 border border-gray-200">
                        <img
                          src={img.url}
                          alt={img.name || 'Imagen'}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => handleDeleteImage(img.id)}
                          className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'links' && (
            <div className="flex flex-col space-y-4 h-full">
              <div className="flex gap-2 flex-shrink-0">
                <input
                  type="text"
                  value={linkInput}
                  onChange={(e) => setLinkInput(e.target.value)}
                  placeholder="Pega un link..."
                  className="flex-1 text-sm bg-white border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-gray-400 shadow-sm"
                />
                <button
                  onClick={handleAddLink}
                  className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 hover:bg-pink-400 shadow-sm"
                >
                  <Plus size={16} /> Añadir
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {currentData.links.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-gray-400 py-12 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
                    <LinkIcon size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">Guarda links importantes aquí.</p>
                  </div>
                ) : (
                  currentData.links.map(link => (
                    <div key={link.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between gap-3 group">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-pink-500 underline break-all"
                      >
                        {link.title || link.url}
                      </a>

                      <button
                        onClick={() => handleDeleteLink(link.id)}
                        className="text-red-400 opacity-70 hover:opacity-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="flex flex-col h-full items-center justify-center text-center space-y-5">
              <div className="bg-pink-50 border border-pink-100 rounded-[2rem] p-6 w-full shadow-sm">
                <div className="text-4xl mb-3">✨</div>

                <h4 className="font-bold text-pink-500 mb-3">
                  Tip para este momento
                </h4>

                {loading ? (
                  <div className="flex flex-col items-center gap-3 text-gray-400 py-6">
                    <Loader2 size={24} className="animate-spin" />
                    <span className="text-sm italic">Generando un tip bonito...</span>
                  </div>
                ) : (
                  <p className="text-gray-700 text-sm leading-relaxed bg-white rounded-2xl p-5 shadow-sm border border-pink-50 min-h-[100px] flex items-center justify-center">
                    {currentTip || 'Haz click para recibir un tip útil para esta actividad.'}
                  </p>
                )}
              </div>

              <button
                onClick={generateAITip}
                disabled={loading}
                className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:bg-gray-700 transition flex items-center gap-2"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                Generar nuevo tip ✨
              </button>
            </div>
          )}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      ` }} />
    </div>
  );
}

function SavedNoteCard({ note, onDeleteNote, onDeleteSticker, onDragSticker }) {
  const noteRef = useRef(null);

  return (
    <div
      ref={noteRef}
      className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 relative group min-h-[180px] max-h-[320px] overflow-y-auto custom-scrollbar"
    >
      <p className="text-base text-gray-700 whitespace-pre-wrap pr-6 pb-10 relative z-0 leading-relaxed">
        {note.text}
      </p>

      {(note.stickers || []).map(sticker => (
        <div
          key={sticker.id}
          onMouseDown={(e) => onDragSticker(e, 'saved', sticker.id, noteRef, note.id)}
          onTouchStart={(e) => onDragSticker(e, 'saved', sticker.id, noteRef, note.id)}
          className="absolute text-3xl cursor-move select-none group/sticker z-10"
          style={{
            left: `${sticker.x}%`,
            top: `${sticker.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {sticker.emoji}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDeleteSticker(note.id, sticker.id);
            }}
            className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full p-1 opacity-0 group-hover/sticker:opacity-100 transition-opacity"
          >
            <X size={10} />
          </button>
        </div>
      ))}

      <span className="text-[10px] text-gray-400 mt-3 block absolute bottom-3 left-4">
        {note.date}
      </span>

      <button
        onClick={() => onDeleteNote(note.id)}
        className="absolute top-3 right-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity bg-red-50 p-1.5 rounded-full hover:bg-red-100 z-20"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}

function TabButton({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 px-2 text-[11px] sm:text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
        active ? 'border-gray-800 text-gray-800' : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200'
      }`}
    >
      {icon} <span>{label}</span>
    </button>
  );
}
