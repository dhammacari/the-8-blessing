import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  Flame, 
  UserX, 
  Hand, 
  MessageCircleOff, 
  BookOpen, 
  Zap, 
  Eye, 
  CheckCircle2, 
  ChevronRight, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

const victories = [
  {
    id: 1,
    opponent: "พญามาร (Mara)",
    title: "ชัยชนะเหนือความกลัวและกิเลส",
    pali: "พาหุง สะหัสสะมะภินิมมิตะสาวุธันตัง...",
    story: "พญามารยกทัพมานับไม่ถ้วนเพื่อขัดขวางการตรัสรู้ พระพุทธเจ้าทรงใช้ 'บารมี' ที่สะสมมาเป็นอาวุธ จนทัพมารพ่ายแพ้ไป",
    lesson: "เมื่อเผชิญกับอุปสรรคใหญ่โต จงใช้ความดีและความนิ่งสยบความวุ่นวาย",
    icon: <ShieldAlert className="w-12 h-12 text-red-600" />,
    color: "from-red-50 to-orange-100",
    bgImage: "https://images.unsplash.com/photo-1590732488836-820836528994?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    opponent: "อาฬวกยักษ์ (Alavaka)",
    title: "ชัยชนะเหนือความโกรธและความดุร้าย",
    pali: "มาราติเรกะมะภิยุชฌิตะสัพพะรัตติง...",
    story: "อาฬวกยักษ์ผู้ดุร้ายขู่กรรโชกพระองค์ตลอดทั้งคืน แต่พระพุทธเจ้าทรงใช้ 'ความอดทน' และเมตตาจนยักษ์ยอมจำนน",
    lesson: "ความอดทนคือตบะอย่างยิ่งที่จะชนะคนโกรธ",
    icon: <Flame className="w-12 h-12 text-orange-600" />,
    color: "from-orange-50 to-yellow-100",
    bgImage: "https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    opponent: "ช้างนาฬาคิรี (Nalagiri)",
    title: "ชัยชนะเหนือความบ้าคลั่ง",
    pali: "นาฬาคิริง คะชะวะรัง อะติมัตตะภูตัง...",
    story: "ช้างตกมันที่ถูกมอมเหล้าวิ่งตรงเข้าทำร้าย แต่พระพุทธเจ้าทรงแผ่เมตตาจนช้างยอมสยบแทบพระบาท",
    lesson: "เมตตาธรรมค้ำจุนโลกและสยบความรุนแรงได้",
    icon: <UserX className="w-12 h-12 text-amber-600" />,
    color: "from-amber-50 to-yellow-200",
    bgImage: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    opponent: "องคุลิมาล (Angulimala)",
    title: "ชัยชนะเหนือความรุนแรง",
    pali: "อุกขิตตะขัคคะมะติหัตถะสุทารุณันตัง...",
    story: "จอมโจรผู้ไล่ล่าตัดนิ้วคน แต่พระพุทธเจ้าทรงใช้ 'อิทธิปาฏิหาริย์ทางใจ' เปลี่ยนใจโจรให้กลายเป็นพระอริยบุคคล",
    lesson: "ไม่มีใครสายเกินไปที่จะกลับตัวเป็นคนดี",
    icon: <Hand className="w-12 h-12 text-slate-600" />,
    color: "from-slate-100 to-gray-200",
    bgImage: "https://images.unsplash.com/photo-1518005020251-58296d8f8d71?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    opponent: "นางจิญจมาณวิกา (Cinca)",
    title: "ชัยชนะเหนือคำใส่ร้าย",
    pali: "กัตตะวานะ กัฏฐะมุทะรัง อิวะ คัพภินียา...",
    story: "หญิงที่รับจ้างมากล่าวหาพระพุทธเจ้ากลางที่ประชุม แต่พระองค์ทรงนิ่งสงบจนความจริงปรากฏออกมาเอง",
    lesson: "ความจริงเป็นสิ่งไม่ตาย และความนิ่งคือคำตอบที่ดีที่สุดต่อคำนินทา",
    icon: <MessageCircleOff className="w-12 h-12 text-pink-600" />,
    color: "from-pink-50 to-rose-100",
    bgImage: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    opponent: "สัจจกนิครนถ์ (Saccaka)",
    title: "ชัยชนะเหนือทิฐิและปัญญาโกง",
    pali: "สัจจัง วิหายะ มะติสัจจะกะวาทะเกตุง...",
    story: "นักปราชญ์ผู้เย่อหยิ่งท้าประลองปัญญา แต่ต้องยอมจำนนต่อ 'ประทีปแห่งธรรม' ที่สว่างไสวกว่า",
    lesson: "ความรู้ที่ปราศจากคุณธรรมคือทางตัน แต่ปัญญาที่แท้จริงคือทางสว่าง",
    icon: <BookOpen className="w-12 h-12 text-blue-600" />,
    color: "from-blue-50 to-cyan-100",
    bgImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 7,
    opponent: "นันโทปนันทนาคราช (Nandopananda)",
    title: "ชัยชนะเหนืออิทธิฤทธิ์",
    pali: "นันโทปะนันทะภุชะคัง วิพุธัง มะหิทธิง...",
    story: "พญานาคผู้มีฤทธิ์มากพยายามบดบังแสงสว่าง แต่พระพุทธเจ้าทรงให้นักมหาโมคคัลลานะกำราบด้วยฤทธิ์ที่เหนือกว่า",
    lesson: "อำนาจที่ยิ่งใหญ่ต้องมาพร้อมกับความถูกต้อง",
    icon: <Zap className="w-12 h-12 text-indigo-600" />,
    color: "from-indigo-50 to-purple-100",
    bgImage: "https://images.unsplash.com/photo-1501854140801-50d01674aa3e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 8,
    opponent: "พกาพรหม (Baka Brahma)",
    title: "ชัยชนะเหนืออวิชชา (ซ่อนแอบแห่งธรรม)",
    pali: "ทุคคาหะทิฏฐิภุชะเคนะ สุทัฏฐะหัตถัง...",
    story: "พรหมผู้หลงผิดว่าตนเป็นอมตะ ท้าพระพุทธเจ้าเล่นซ่อนแอบ พรหมซ่อนที่ไหนพระองค์ก็หาเจอ แต่พอพระองค์ซ่อนบนเศียรของพรหม พรหมกลับหาไม่พบ เพราะ 'ความยึดติด' บดบังดวงตา",
    lesson: "สิ่งที่อยู่ใกล้ที่สุดคือใจเรา แต่มักจะเป็นสิ่งที่หาเจอได้ยากที่สุดถ้ายังมีอวิชชา",
    icon: <Eye className="w-12 h-12 text-emerald-600" />,
    color: "from-emerald-50 to-green-100",
    bgImage: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=600"
  }
];

export default function App() {
  const [step, setStep] = useState(0); // 0: Intro, 1-8: Victories, 9: Anisamsa
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToStep = (s) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(s);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-slate-800 font-sans selection:bg-amber-200">
      <div className={`max-w-3xl mx-auto min-h-screen flex flex-col transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* Progress Nav (Desktop) */}
        {step > 0 && step <= 8 && (
          <div className="hidden md:flex justify-between px-8 pt-8">
            {victories.map((v) => (
              <div 
                key={v.id}
                onClick={() => goToStep(v.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all border-2 ${step === v.id ? 'bg-amber-600 border-amber-600 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-amber-300'}`}
              >
                {v.id}
              </div>
            ))}
          </div>
        )}

        <main className="flex-grow flex items-center justify-center p-6">
          {/* Intro Screen */}
          {step === 0 && (
            <div className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
              <div className="space-y-4">
                <h1 className="text-5xl font-black text-slate-900 tracking-tight font-serif italic">
                  พุทธชัยมงคล <span className="text-amber-600">๘</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
                  เรียนรู้ความหมายแห่งชัยชนะที่แท้จริง <br />
                  ผ่าน ๘ เรื่องราวการเผชิญหน้าของพระพุทธองค์
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://images.unsplash.com/photo-1542318238-43e1bee12f7f?auto=format&fit=crop&q=80&w=400" 
                  alt="Buddha Statue" 
                  className="relative w-56 h-56 object-cover rounded-full mx-auto border-8 border-white shadow-2xl transition-transform duration-500 group-hover:rotate-3"
                  onError={(e) => e.target.src = 'https://via.placeholder.com/400x400?text=Buddha+Victories'}
                />
              </div>
              <button 
                onClick={() => goToStep(1)}
                className="px-12 py-5 bg-slate-900 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all flex items-center justify-center mx-auto space-x-3 group"
              >
                <span>เริ่มการเดินทาง</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Victory Card */}
          {step >= 1 && step <= 8 && (
            <div className={`w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row min-h-[500px]`}>
              <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
                <img 
                  src={victories[step-1].bgImage} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-110"
                  alt={victories[step-1].opponent}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-2">
                      Victory {step}
                    </div>
                    <h2 className="text-3xl font-bold font-serif">{victories[step-1].opponent}</h2>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-slate-50 rounded-2xl">
                      {victories[step-1].icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{victories[step-1].title}</h3>
                  </div>
                  
                  <div className="bg-amber-50/50 p-4 rounded-xl border-l-4 border-amber-400">
                    <p className="font-serif italic text-amber-900 leading-relaxed text-lg">
                      "{victories[step-1].pali}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-tighter text-slate-400 mb-1">ตำนาน:</h4>
                      <p className="text-slate-700 leading-relaxed">{victories[step-1].story}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-tighter text-amber-500 mb-1">ข้อคิด:</h4>
                      <p className="text-amber-800 font-medium">{victories[step-1].lesson}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[1,2,3,4,5,6,7,8].map(i => (
                      <div key={i} className={`h-1.5 rounded-full transition-all ${i === step ? 'w-8 bg-amber-500' : 'w-2 bg-slate-200'}`}></div>
                    ))}
                  </div>
                  <button 
                    onClick={() => goToStep(step + 1)}
                    className="p-4 bg-amber-600 text-white rounded-2xl shadow-lg hover:bg-amber-700 transition-all hover:translate-x-1"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Anisamsa (Closing) */}
          {step === 9 && (
            <div className="w-full text-center space-y-8 animate-in fade-in duration-1000">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-amber-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <CheckCircle2 className="w-32 h-32 text-amber-600" />
                </div>
                
                <div className="relative z-10 space-y-8">
                  <div className="flex justify-center">
                    <div className="bg-amber-100 p-6 rounded-full">
                      <Sparkles className="w-16 h-16 text-amber-600" />
                    </div>
                  </div>
                  
                  <h2 className="text-4xl font-bold font-serif text-slate-900">อานิสสังสคาถา</h2>
                  
                  <div className="space-y-4 max-w-xl mx-auto">
                    <p className="text-2xl text-amber-800 font-serif italic leading-relaxed">
                      "เอตาปิ พุทธะชัยะมังคะละอัฏฐะคะถา <br />
                      โย วาจะโน ทินะทิเน สะระเต มะตันที..."
                    </p>
                    <div className="h-px bg-amber-200 w-24 mx-auto"></div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      ผู้ใดมีปัญญา ไม่เกียจคร้าน สวดหรือระลึกถึงชัยชนะ ๘ ประการของพระพุทธเจ้าเป็นประจำทุกวัน 
                      ผู้นั้นจะพ้นจากอุปสรรคอันตรายทั้งปวง และประสบแต่ความสุขสวัสดิมงคล
                    </p>
                  </div>

                  <button 
                    onClick={() => goToStep(0)}
                    className="flex items-center justify-center space-x-2 mx-auto text-slate-400 hover:text-amber-600 transition-colors font-medium"
                  >
                    <RotateCcw className="w-5 h-5" />
                    <span>เริ่มการเรียนรู้อีกครั้ง</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        <footer className="p-8 text-center text-slate-400 text-sm">
          สร้างสรรค์เพื่อส่งต่อปัญญาและชัยชนะแห่งธรรม
        </footer>
      </div>
    </div>
  );
}
