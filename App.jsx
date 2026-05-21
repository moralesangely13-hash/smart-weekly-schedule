import React, { useState, useEffect } from 'react';
import { Sparkles, StickyNote, Image as ImageIcon, Droplets, Smile, CloudSun, X, Plus, Loader2, Check, Trash2 } from 'lucide-react';

// --- DATA: Rutina Original (Intacta) ---
const SCHEDULE = [
  {
    day: 'Lunes',
    theme: 'Curso de Inglés',
    color: { bg: 'bg-[#fdf2f8]', border: 'border-[#fbcfe8]', text: 'text-pink-700', badge: 'bg-white text-pink-500', hover: 'hover:bg-pink-50' },
    tasks: [
      { id: 'l1', time: '8:30-10:00', title: 'Rutina mañana', type: 'routine' },
      { id: 'l2', time: '10:00-12:00', title: 'Diseñar clases de inglés', type: 'work' },
      { id: 'l3', time: '12:00-1:00', title: 'Almuerzo', type: 'break' },
      { id: 'l4', time: '1:00-2:00', title: 'Recursos y Moodle', type: 'work' },
      { id: 'l5', time: '2:00-3:00', title: 'Descanso', type: 'break' },
      { id: 'l6', time: '3:00-5:00', title: 'Videojuegos 🎮', type: 'play' },
      { id: 'l7', time: '6:00-7:00', title: 'Cena', type: 'break' },
      { id: 'l8', time: '7:00-8:30', title: 'Costura 🧵', type: 'creative' },
      { id: 'l9', time: '8:30-9:00', title: 'Ejercicio 🧘‍♀️', type: 'exercise' },
    ]
  },
  {
    day: 'Martes',
    theme: 'Publicidad y Redes',
    color: { bg: 'bg-[#f0fdf4]', border: 'border-[#bbf7d0]', text: 'text-green-700', badge: 'bg-white text-green-600', hover: 'hover:bg-green-50' },
    tasks: [
      { id: 'm1', time: '8:30-10:00', title: 'Rutina mañana', type: 'routine' },
      { id: 'm2', time: '10:00-12:00', title: 'Canva + Anuncios', type: 'work' },
      { id: 'm3', time: '12:00-1:00', title: 'Almuerzo', type: 'break' },
      { id: 'm4', time: '1:00-2:00', title: 'Branding y Redes', type: 'work' },
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
      { id: 'x1', time: '8:30-10:00', title: 'Rutina mañana', type: 'routine' },
      { id: 'x2', time: '10:00-11:00', title: 'Arreglar currículum', type: 'work' },
      { id: 'x3', time: '11:00-12:00', title: 'Buscar trabajo online', type: 'work' },
      { id: 'x4', time: '1:00-2:00', title: 'Freelance/Plataformas', type: 'work' },
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
      { id: 'j1', time: '10:00-12:00', title: 'Actividades y materiales', type: 'work' },
      { id: 'j2', time: '1:00-2:00', title: 'Organizar Moodle', type: 'work' },
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
      { id: 'v1', time: '10:00-12:00', title: 'Diseños + Contenido', type: 'work' },
      { id: 'v2', time: '1:00-2:00', title: 'Branding/Organización', type: 'work' },
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
      { id: 's1', time: '10:00-1:00', title: 'Curso de costura presencial', type: 'creative' },
      { id: 's2', time: '4:00-6:00', title: 'Videojuegos 🎮', type: 'play' },
      { id: 's3', time: '7:00-8:00', title: 'Práctica ligera Costura', type: 'creative' },
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
      { id: 'd4', time: '6:00-7:00', title: 'Skincare largo ✨', type: 'skincare' },
      { id: 'd5', time: '7:00-8:00', title: 'Ejercicio suave 🧘‍♀️', type: 'exercise' },
    ]
  }
];

const AVAILABLE_STICKERS = ['✨', '🌸', '💖', '🎀', '🧘‍♀️', '🧵', '🎮', '💧', '📝', '☁️', '⭐', '🌙'];

export default function App() {
  const [activeTask, setActiveTask] = useState(null);

  // Inicializar estado centralizado de todas las tareas
  const [taskState, setTaskState] = useState(() => {
    const saved = localStorage.getItem('planner_smart_tasks');
    return saved ? JSON.parse(saved) : {};
  });
  
  const [waterGlasses, setWaterGlasses] = useState(() => {
    const saved = localStorage.getItem('planner_water');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [mood, setMood] = useState(() => {
    return localStorage.getItem('planner_mood') || null;
  });

  // Guardado automático global
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

  // Inyectar fuentes
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Quicksand:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7] font-['Quicksand'] pb-20 relative" 
         style={{ backgroundImage: 'radial-gradient(#f1e6d6 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      
      {/* Top Widgets Bar */}
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

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h1 className="font-['Caveat'] text-6xl text-gray-800 mb-2 mt-4 tracking-tight">Mi Rutina Semanal</h1>
        <p className="text-gray-500 italic bg-white inline-block px-6 py-2 rounded-full shadow-sm border border-pink-50">
          Balanceada, realista y organizada 🌱
        </p>
      </div>

      {/* Main Grid (INTACTO COMO SE PIDIÓ) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SCHEDULE.map((dayData, idx) => (
          <div key={idx} className={`${dayData.color.bg} border-2 ${dayData.color.border} rounded-[2rem] p-6 shadow-sm transition-transform hover:-translate-y-1 duration-300`}>
            <div className="text-center mb-6">
              <h2 className={`font-['Caveat'] text-4xl ${dayData.color.text}`}>{dayData.day}</h2>
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
                  <span className={`font-bold ${dayData.color.text} w-24 text-xs mt-0.5 shrink-0`}>{task.time}</span>
                  <span className="text-sm text-gray-700 flex-1 pr-6">{task.title}</span>
                  <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <div className="bg-white rounded-full p-1 shadow-sm text-gray-400"><Sparkles size={12} /></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
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

// --- MODAL COMPONENT (REFACTORED) ---
function TaskModal({ task, onClose, taskState, setTaskState }) {
  const [activeTab, setActiveTab] = useState('notes'); 
  const [loading, setLoading] = useState(false);
  
  // Inputs locales
  const [localNote, setLocalNote] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Estructura de datos segura por tarea
  const rawData = taskState[task.id] || {};
  const currentData = {
    notes: Array.isArray(rawData.notes) ? rawData.notes : [],
    images: Array.isArray(rawData.images) ? rawData.images : [],
    stickers: Array.isArray(rawData.stickers) ? rawData.stickers : [],
    aiTips: Array.isArray(rawData.aiTips) ? rawData.aiTips : []
  };

  // --- MÉTODOS DE ACTUALIZACIÓN ---
  const updateTaskData = (newData) => {
    setTaskState(prev => ({
      ...prev,
      [task.id]: { ...currentData, ...newData }
    }));
  };

  // 1. NOTES
  const handleAddNote = () => {
    if (!localNote.trim()) return;
    const newNote = { id: Date.now().toString(), text: localNote, date: new Date().toLocaleString() };
    updateTaskData({ notes: [newNote, ...currentData.notes] });
    setLocalNote('');
  };

  const handleDeleteNote = (id) => {
    updateTaskData({ notes: currentData.notes.filter(n => n.id !== id) });
  };

  // 2. IMAGES
  const handleAddImage = () => {
    if (!imageUrl.trim()) return;
    const newImage = { id: Date.now().toString(), url: imageUrl.trim() };
    updateTaskData({ images: [...currentData.images, newImage] });
    setImageUrl('');
  };

  const handleDeleteImage = (id) => {
    updateTaskData({ images: currentData.images.filter(img => img.id !== id) });
  };

  // 3. AI TIPS
  const generateAITip = async () => {
    setLoading(true);
    const apiKey = ""; 
    let promptText = `Dame un pequeño recordatorio de bienestar, motivación o tip útil para disfrutar mi bloque de "${task.title}". Corto, poético y dulce. Responde en español.`;

    const payload = {
      contents: [{ parts: [{ text: promptText }] }],
      systemInstruction: { parts: [{ text: "Responde de forma concisa, estética y con formato Markdown. Máximo 4 líneas." }] }
    };

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        const newTip = { id: Date.now().toString(), text, date: new Date().toLocaleDateString() };
        updateTaskData({ aiTips: [newTip, ...currentData.aiTips] });
      }
    } catch (e) {
      const errorTip = { id: Date.now().toString(), text: "Hubo un pequeño error de conexión. Respira profundo e intenta de nuevo. ✨" };
      updateTaskData({ aiTips: [errorTip, ...currentData.aiTips] });
    }
    setLoading(false);
  };

  const handleDeleteTip = (id) => {
    updateTaskData({ aiTips: currentData.aiTips.filter(t => t.id !== id) });
  };

  // 4. STICKERS (Drag and Drop)
  const handleAddSticker = (emoji) => {
    const newSticker = { id: Date.now().toString(), emoji, x: 50, y: 50 }; // Center by default
    updateTaskData({ stickers: [...currentData.stickers, newSticker] });
  };

  const handleDeleteSticker = (id) => {
    updateTaskData({ stickers: currentData.stickers.filter(s => s.id !== id) });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const stickerId = e.dataTransfer.getData('stickerId');
    if (!stickerId) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    updateTaskData({
      stickers: currentData.stickers.map(s => s.id === stickerId ? { ...s, x, y } : s)
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 flex justify-center items-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100 flex flex-col h-[85vh]">
        
        {/* Header Modal */}
        <div className={`${task.dayColor.bg} p-6 relative flex-shrink-0`}>
          <button onClick={onClose} className="absolute top-6 right-6 bg-white/50 hover:bg-white rounded-full p-2 text-gray-500 transition-colors shadow-sm">
            <X size={20} />
          </button>
          <div className="pr-12">
            <span className={`inline-block px-3 py-1 rounded-full bg-white/60 text-xs font-bold mb-3 ${task.dayColor.text} shadow-sm`}>
              {task.time}
            </span>
            <h3 className="font-['Caveat'] text-4xl text-gray-800 leading-tight">{task.title}</h3>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 px-2 flex-shrink-0 overflow-x-auto">
          <TabButton icon={<StickyNote size={15}/>} label="Notas" active={activeTab==='notes'} onClick={() => setActiveTab('notes')} />
          <TabButton icon={<ImageIcon size={15}/>} label="Inspo" active={activeTab==='inspo'} onClick={() => setActiveTab('inspo')} />
         <TabButton 
  icon={<Plus size={15}/>} 
  label="Links" 
  active={activeTab==='links'} 
  onClick={() => setActiveTab('links')} 
/>
          <TabButton icon={<Sparkles size={15}/>} label="Asistente" active={activeTab==='ai'} onClick={() => setActiveTab('ai')} />
        </div>

        {/* Content Area */}
        <div className="p-5 overflow-y-auto bg-[#fafafa]/50 flex-1 relative custom-scrollbar">
          
          {/* TAB: Notas */}
          {activeTab === 'notes' && (
            <div className="flex flex-col space-y-4 h-full">
              <div className="flex flex-col gap-2 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0">
                <textarea 
                  value={localNote}
                  onChange={(e) => setLocalNote(e.target.value)}
                  placeholder="Escribe algo importante..."
                  className="w-full h-20 text-sm text-gray-700 focus:outline-none resize-none bg-transparent"
                />
                <button 
                  onClick={handleAddNote}
                  className="self-end bg-gray-800 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 hover:bg-gray-700 transition-colors"
                >
                  <Plus size={14} /> Añadir Nota
                </button>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {currentData.notes.length === 0 ? (
                  <p className="text-center text-gray-400 text-sm italic py-10">No hay notas en esta tarea aún.</p>
                ) : (
                  currentData.notes.map(note => (
                    <div key={note.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 relative group">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap pr-6">{note.text}</p>
                      <span className="text-[10px] text-gray-400 mt-2 block">{note.date}</span>
                      <button 
                        onClick={() => handleDeleteNote(note.id)}
                        className="absolute top-3 right-3 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity bg-red-50 p-1.5 rounded-full hover:bg-red-100"
                        title="Delete Note"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB: Inspo (Images) */}
          {activeTab === 'inspo' && (
            <div className="flex flex-col space-y-4 h-full">
              <div className="flex gap-2 flex-shrink-0">
                <input 
                  type="text" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Pega el link de la imagen..."
                  className="flex-1 text-sm bg-white border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-gray-400 shadow-sm"
                />
                <button onClick={handleAddImage} className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 hover:bg-gray-700 shadow-sm">
                  <Plus size={16} /> Añadir
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pb-4">
                {currentData.images.length === 0 ? (
                  <div className="flex flex-col items-center justify-center text-gray-400 py-12 border-2 border-dashed border-gray-200 rounded-2xl bg-white">
                    <ImageIcon size={32} className="mb-2 opacity-50" />
                    <p className="text-sm">Agrega tu inspiración visual.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {currentData.images.map((img) => (
                      <div key={img.id} className="relative group rounded-xl overflow-hidden shadow-sm aspect-square bg-gray-100 border border-gray-200">
                        <img 
                          src={img.url} 
                          alt="Inspo" 
                          className="w-full h-full object-cover" 
                          onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80'} 
                        />
                        <button 
                          onClick={() => handleDeleteImage(img.id)} 
                          className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md"
                          title="Delete Image"
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

          {/* TAB: Stickers (Drag & Drop Canvas) */}
          {activeTab === 'stickers' && (
            <div className="flex flex-col h-full space-y-4">
              {/* Sticker Picker */}
              <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-2 justify-center flex-shrink-0">
                {AVAILABLE_STICKERS.map(emoji => (
                  <button 
                    key={emoji} 
                    onClick={() => handleAddSticker(emoji)}
                    className="text-2xl hover:scale-125 transition-transform p-1 hover:bg-gray-50 rounded-lg cursor-pointer"
                    title="Add Sticker"
                  >
                    {emoji}
                  </button>
                ))}
                <span className="w-full text-center text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-wider">
                  Toca uno para añadirlo
                </span>
              </div>

              {/* Canvas Area */}
              <div 
                className="flex-1 bg-white rounded-2xl border-2 border-dashed border-pink-200 relative overflow-hidden shadow-inner"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                {currentData.stickers.length === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-300 text-sm pointer-events-none text-center px-4">
                    Agrega stickers y arrástralos<br/>por este lienzo 🎨
                  </div>
                )}
                
                {currentData.stickers.map(sticker => (
                  <div
                    key={sticker.id}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData('stickerId', sticker.id)}
                    className="absolute cursor-move text-4xl group select-none transition-transform active:scale-95"
                    style={{ left: `${sticker.x}%`, top: `${sticker.y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    {sticker.emoji}
                    <button 
                      onClick={() => handleDeleteSticker(sticker.id)}
                      className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-500 scale-75"
                      title="Delete Sticker"
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: Asistente IA */}
          {activeTab === 'ai' && (
            <div className="flex flex-col h-full">
              <button 
                onClick={generateAITip} 
                disabled={loading}
                className="w-full py-3 mb-4 rounded-xl text-sm font-bold text-white shadow-sm bg-gray-800 hover:bg-gray-700 flex justify-center items-center gap-2 flex-shrink-0 disabled:opacity-70 transition-colors"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />}
                {loading ? 'Pensando...' : 'Generar Nuevo Tip ✨'}
              </button>

              <div className="flex-1 overflow-y-auto space-y-3 pb-4">
                {currentData.aiTips.length === 0 && !loading ? (
                  <p className="text-center text-gray-400 text-sm italic py-10">Pídele al asistente un tip para esta tarea.</p>
                ) : (
                  currentData.aiTips.map(tip => (
                    <div key={tip.id} className="bg-pink-50/50 p-4 rounded-2xl shadow-sm border border-pink-100 relative group text-sm text-gray-700 leading-relaxed">
                      {tip.text.split('**').map((chunk, i) => i % 2 === 1 ? <strong key={i} className="text-gray-900">{chunk}</strong> : chunk)}
                      <span className="text-[10px] text-pink-300 mt-2 block">{tip.date}</span>
                      
                      <button 
                        onClick={() => handleDeleteTip(tip.id)}
                        className="absolute top-2 right-2 text-pink-400 opacity-0 group-hover:opacity-100 bg-white p-1.5 rounded-full hover:bg-pink-100 transition-opacity shadow-sm"
                        title="Delete Tip"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}} />
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
