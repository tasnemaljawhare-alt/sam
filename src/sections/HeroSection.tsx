"use client";

import { ArrowLeft, ShieldCheck } from "lucide-react";

interface HeroProps {
  onPrimaryClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroProps) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-slate-950 text-white flex items-center dir-rtl text-right">
      
      {/* 1. صورة الخلفية كاملة وواضحة جداً */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: `url('/aa.jpeg')` }}
      />

      {/* 2. تدرج داكن لتوضيح النصوص */}
      <div className="absolute inset-0 bg-gradient-to-l from-slate-950/90 via-slate-950/60 to-transparent md:w-2/3" />

      {/* 3. المحتوى الرئيسي */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              
              {/* شارة رسمية */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-slate-950/80 px-4 py-1.5 text-xs font-black text-amber-300 backdrop-blur-md shadow-lg">
                <ShieldCheck className="h-4 w-4 text-amber-400" />
                <span>منصة مستقلة لتوثيق الشكاوى — دولة الإمارات</span>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className="mt-6 tracking-tight text-white [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
                <span className="block text-3xl font-black sm:text-5xl lg:text-5xl/tight">
                 منصة حماية المستهلك
                </span>
                <span className="mt-2 block text-2xl font-extrabold sm:text-3xl lg:text-4xl text-amber-400 [text-shadow:_0_2px_8px_rgba(0,0,0,0.9)]">
                  حماية حقوق المستهلك وتوثيق البلاغات
                </span>
              </h1>

              {/* النص التعريفي */}
              <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium [text-shadow:_0_1px_4px_rgba(0,0,0,0.9)] bg-slate-950/40 p-3.5 rounded-xl backdrop-blur-[2px] max-w-xl border-r-4 border-amber-500">
                منصة مستقلة وغير تابعة لأي جهة حكومية متخصصة في توثيق الشكاوى والبلاغات ضد الشركات والمؤسسات الخاصة في دولة الإمارات بطريقة منظمة، مع إصدار ملف توثيق ورقم مرجعي للمتابعة.
              </p>

              {/* الأزرار */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#complaint-form"
                  onClick={onPrimaryClick}
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white hover:bg-amber-100 px-8 py-3.5 text-base font-bold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>تقديم طلب توثيق شكوى</span>
                  <ArrowLeft className="h-5 w-5 shrink-0" />
                </a>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-slate-900/80 hover:bg-slate-900 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md shadow-lg transition-all duration-300"
                >
                  دليل الإجراءات
                </a>
              </div>

              {/* الإحصائيات */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/20 pt-6 max-w-xl bg-slate-950/50 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div>
                  <div className="text-2xl font-black text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">100%</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">خدمة مجانية</div>
                </div>
                <div className="border-r border-white/20 pr-4">
                  <div className="text-2xl font-black text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">24 ساعة</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">سرعة المراجعة</div>
                </div>
                <div className="border-r border-white/20 pr-4">
                  <div className="text-2xl font-black text-white [text-shadow:_0_1px_4px_rgba(0,0,0,0.8)]">رقم مرجعي</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">لكل معاملة</div>
                </div>
              </div>

            </div>
          </div>

          {/* الجهة اليسرى فارغة لإظهار الصورة */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>
    </section>
  );
}