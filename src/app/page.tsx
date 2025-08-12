import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Category from "./components/category/category";
import Seperator from "./components/seperator/seperator";
import BookCarousel from "./components/bookCarousel/bookCarousel";
import EventCarousel from "./components/eventCarousel/eventCarousel";
import CategoryCarousel from "./components/categoryCarousel/categoryCarousel";
import CategoryCarousel2 from "./components/categoryCarousel2/categoryCarousel2";
import MaratonCarousel from "./components/maratonCarousel/maratonCarousel";
import BlogCarousel from "./components/blogCarousel/blogCarousel";
import CategoryCarousel3 from "./components/categoryCarousel3/categoryCarousel3";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Category />
      <Seperator title="خواندنی کمتر دیده شده" />
      <BookCarousel  spv="6"/>
      <Seperator title="ناشر روز: نشر هرمس" offPercant="با 40% تخفیف" />
      <BookCarousel  spv="6"/>
      <Seperator title="با این کتاب‌ها فال بگیر!" />
      <BookCarousel  spv="6"/>
      <Seperator
        title="ارزان ولی خواندنی"
        offPercant="کتاب‌های کمتر از ۲۰هزار تومان"
      />
      <BookCarousel  spv="6"/>
      <Seperator title="پرفروش‌های صوتی هفته" />
      <BookCarousel  spv="6"/>
      <Seperator title="پرفروش‌های متنی هفته" />
      <BookCarousel  spv="6"/>
      <Seperator title="ورق بزنید" moreBtn="hidden" />
      <EventCarousel />
      <Seperator title="نشر نوین کتاب" />
      <BookCarousel  spv="6"/>
      <Seperator title="نشر هورمزد" />
      <BookCarousel  spv="6"/>
      <Seperator title="ورق بزنید" moreBtn="hidden" />
      <EventCarousel />
      <Seperator title="نشر میلکان" />
      <BookCarousel  spv="6"/>
      <Seperator title="نشر نسل نواندیش" />
      <BookCarousel  spv="6"/>
      <Seperator title="نشر مرکز" />
      <BookCarousel  spv="6"/>
      <Seperator title="نشر چشمه" />
      <BookCarousel  spv="6"/>
      <Seperator
        title="از قافله جا نمونی!"
        offPercant="تازه‌های دنیای کتاب در سال ۱۴۰۲"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="برای تغییر امسالت"
        offPercant="کتاب های بلندی که آرزو میکنی تموم نشن"
        moreBtn="hidden"
      />
      <CategoryCarousel />
      <Seperator
        title="رکوردشکن باش"
        offPercant="کتاب های بلندی که آرزو میکنی تموم نشن"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="کتاب‌های کم‌حجم"
        offPercant="کتاب‌هایی که در زمان کم تمومشون می‌کنی"
      />
      <BookCarousel  spv="6"/>
      <Seperator title="سالتو بساز" moreBtn="hidden" />
      <CategoryCarousel2 />
      <Seperator title="بهترین فرصت برای برنامه‌ریزی" />
      <BookCarousel  spv="6"/>
      <Seperator title="پرفروش‌های توسعه‌فردی" />
      <BookCarousel  spv="6"/>
      <Seperator
        title="رهایی از زنجیر کمال‌گرایی"
        offPercant="«مهم نیست که چقدر آرام می‌روی، باز هم از افرادی که روی مبل لم داده‌اند، جلوتری.»"
      />
      <BookCarousel  spv="6"/>
      <Seperator title="سبزخوانی" offPercant="ورق بزنید" moreBtn="hidden" />
      <EventCarousel />
      <Seperator title="تازه‌های صوتی هفته" />
      <BookCarousel  spv="6"/>
      <Seperator title="تازه‌های متنی هفته" />
      <BookCarousel  spv="6"/>
      <Seperator title="یادگیری زبان جدید" offPercant="محبوب‌ترین‌ها" />
      <BookCarousel  spv="6"/>
      <Seperator
        title="پیشنهاد هفته"
        offPercant="این هفته به پیشنهاد سردبیر فیدیبو بخوان"
      />
      <BookCarousel  spv="6"/>
      <Seperator title="الهام‌بخش سینما" offPercant="کتاب‌هایی که فیلم شدند" />
      <BookCarousel  spv="6"/>
      <Seperator
        title="هوش مصنوعی به فیدیبو آمد"
        offPercant="راوی چیست و چگونه از آن استفاده کنیم؟"
        moreBtn="hidden"
      />
      <EventCarousel />
      <Seperator
        title="قصه از کجا شروع شد؟"
        offPercant="پیشنهادهایی برای شنیدن اولین کتاب"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="شروع سفر به دنیای فلسفه"
        offPercant="با چه کتاب‌هایی مطالعه فلسفه را آغاز کنیم؟"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="پُربارترین کتاب‌ها"
        offPercant="به انتخاب کاربران فیدیبو"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="آرامش‌بخش‌ترین کتاب‌ها"
        offPercant="به انتخاب کاربران فیدیبو"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="سرگرم‌کننده‌ترین کتاب‌ها"
        offPercant="به انتخاب کاربران فیدیبو"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="شاهکارهای خواندنی جهان"
        offPercant="که تا پایان سال می‌تونی تمومشون کنی"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="چنین کنند بزرگان"
        offPercant="گزیده‌ای از زندگی‌نامه شخصیت‌های سرشناس"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="بهترین داستان‌های عاشقانه"
        offPercant="که فراموش نخواهید کرد"
      />
      <BookCarousel  spv="6"/>
      <Seperator
        title="از شعار تا پیروزی"
        offPercant="مهم‌ترین انقلاب‌های جهان"
      />
      <BookCarousel  spv="6"/>
      <Seperator title="ماراتن کتاب" offPercant="کتاب‌ها را به چه ترتیبی بخوانیم؟" moreBtn="hidden"/>
      <MaratonCarousel/>
      <Seperator title="راوی برای شما کتاب می‌خواند!" />
      <BookCarousel spv="6"/>
      <Seperator title="در بلاگ فیدیبو بخوانید" moreBtn="hidden"/>
      <BlogCarousel/>
      <Seperator title="محبوب‌ترین دسته‌بندی‌های کتاب متنی" moreBtn="hidden"/>
      <CategoryCarousel3/>
      <Footer/>
    </>
  );
}
