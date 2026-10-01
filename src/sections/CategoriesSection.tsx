import {
  Smartphone,
  ShoppingCart,
  Building2,
  Plane,
  CreditCard,
  Wrench,
  Truck,
  Users,
  LucideIcon,
} from "lucide-react";

export interface CategoryItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const categories: CategoryItem[] = [
  { icon: Smartphone, title: "شكاوى الاتصالات والإنترنت", desc: "عقود الهواتف، مشاكل التغطية، ورسوم الخدمات المضافة بدون إذن." },
  { icon: ShoppingCart, title: "التسوق الإلكتروني والمتاجر", desc: "المتاجر الإلكترونية، التأخر في التوصيل، وسياسات الإرجاع المضللة." },
  { icon: Building2, title: "العقارات والوساطة التجارية", desc: "خلافات شركات إدارة العقارات، الرسوم الإدارية، وعقود الوساطة." },
  { icon: Plane, title: "السفر والحجوزات السياحية", desc: "إلغاء وتأخير الرحلات، مشكلات حجوزات الفنادق، والشركات السياحية." },
  { icon: CreditCard, title: "البنوك والخدمات المالية", desc: "الرسوم المجحفة، المعاملات غير المصرح بها، والخدمات المصرفية." },
  { icon: Wrench, title: "الصيانة والخدمات المنزلية", desc: "عقود الصيانة، الأجهزة الكهربائية، والخدمات الفنية غير المطابقة." },
  { icon: Truck, title: "تطبيقات التوصيل والنقل", desc: "تطبيقات التوصيل الذكية، طلبات الطعام، وخدمات النقل الخاص." },
  { icon: Users, title: "خدمات القطاع الخاص الأخرى", desc: "الشكاوى العامة ضد الشركات والمراكز التجارية الخاصة بالدولة." },
];

export function CategoriesSection() {
  return (
    <section className="relative bg-slate-50 py-16 md:py-24 text-slate-900 border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* العنوان والوصف الرئيسي */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-md bg-emerald-100 px-3.5 py-1 text-xs font-bold text-emerald-800 border border-emerald-200/60 mb-3">
            القطاعات المشمولة
          </span>
          <h2 className="text-2xl font-black sm:text-3xl md:text-4xl text-slate-900 tracking-tight">
            مجالات الشكاوى التجارية
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            نغطي مختلف القطاعات التجارية الخاصة لضمان توثيق صوتك وحماية حقوقك الشاملة.
          </p>
        </div>

        {/* شبكة البطاقات */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, idx) => (
            <article
              key={idx}
              className="group relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-md"
            >
              {/* أيقونة العنصر */}
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-emerald-50 text-emerald-700 transition-colors duration-200 group-hover:bg-emerald-600 group-hover:text-white">
                <c.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
              </div>

              {/* عنوان الشكوى */}
              <h3 className="mt-4 text-base font-bold text-slate-900 transition-colors duration-200 group-hover:text-emerald-700">
                {c.title}
              </h3>

              {/* الشرح */}
              <p className="mt-2 text-xs leading-relaxed text-slate-600 font-normal">
                {c.desc}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}