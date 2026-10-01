"use client";

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowLeft, ShieldCheck } from "lucide-react";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/about", label: "من نحن" },
  { to: "/how-it-works", label: "كيف تعمل المنصة" },
  { to: "/faq", label: "الأسئلة الشائعة" },
  { to: "/contact", label: "تواصل معنا" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container-page flex h-20 items-center justify-between px-4 md:px-8">

        {/* أقصى اليمين: اللوغو والاسم والنص الفرعي */}
        <div className="flex items-center gap-3 shrink-0">
          <Link 
            to="/" 
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
          >
            <img 
              src="/kk.png" 
              alt="شعار منصة حماية المستهلك" 
              className="h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              // @ts-ignore
              fetchpriority="high"
            />
            
            <div className="flex flex-col border-r border-slate-200 pr-3">
              <span className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                منصة حماية المستهلك
              </span>
              <span className="text-[10px] md:text-xs text-slate-500 font-medium mt-0.5 leading-none">
                منصة مستقلة للشكاوى
              </span>
            </div>
          </Link>
        </div>

        {/* المنتصف: التابات واضحة وبارزة بأسود ورمادي داكن */}
        <nav aria-label="التنقل الرئيسي" className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3.5 py-2 rounded-lg text-xs lg:text-sm font-semibold text-slate-600 transition-all duration-200 hover:text-slate-950 hover:bg-slate-100 whitespace-nowrap"
              activeProps={{ 
                className: "text-slate-950 font-black bg-slate-100 shadow-inner" 
              }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* أقصى اليسار: زر تقديم الشكوى أو الموبايل */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              hash="complaint-form"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-2.5 text-xs lg:text-sm font-bold text-white shadow-sm transition-all duration-300 hover:bg-slate-800 hover:shadow-md active:scale-95"
            >
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <span>تقديم شكوى</span>
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          {/* زر الموبايل */}
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-slate-50 text-slate-900 md:hidden transition-colors hover:bg-slate-100"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {/* قائمة الموبايل المنسدلة */}
      <div 
        className={
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-200 bg-white px-4 " +
          (open ? "max-h-[400px] opacity-100 py-4" : "max-h-0 opacity-0 py-0")
        }
      >
        <div className="flex flex-col gap-1.5">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100 hover:text-slate-950"
              activeProps={{ className: "bg-slate-100 text-slate-950 font-black" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              <span>{n.label}</span>
            </Link>
          ))}

          <div className="pt-3 mt-2 border-t border-slate-200">
            <Link
              to="/"
              hash="complaint-form"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-slate-800"
            >
              <ShieldCheck className="h-4 w-4 text-amber-400" />
              <span>تقديم شكوى الآن</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}