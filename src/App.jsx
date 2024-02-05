import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 main">
            <h1 className="text-center title">বাংলা ওয়েব ফন্ট</h1>
            <p className="intro">
              আস্&zwnj;সালামু আলাইকুম। আমরা যারা ওয়েব ডেভেলপমেন্টের সাথে জড়িত
              তাদের প্রায় সকলেই কমবেশি ওয়েব ফন্ট সম্পর্কে জানি। আর এক্ষেত্রে যে
              সাইটটি আমাদের সবচেয়ে জনপ্রিয় তা হলো গুগল ফন্ট। এতে রয়েছে দারুণ
              দারুণ সব ইংরেজি ফন্ট যা ব্যবহৃত হচ্ছে বিশ্বের হাজারো ওয়েবসাইটে।
              কিন্তু বাংলার জন্য এমন কোনো ফন্ট সোর্স না থাকায় বাংলায় ওয়েবসাইট
              ডেভেলপমেন্ট করতে আমরা তেমন একটা স্বস্তি বোধ করি না। কারণ,
              ব্যবহারকারীর কম্পিউটারে যদি আমাদের ব্যবহৃত বাংলা ফন্টটি না থাকে
              তাহলে সাইটটি তার ব্রাউজারে খুব একটা ভালো দেখায় না। তাই এ ধরনের
              সমস্যা থেকে মুক্তি পাওয়ার লক্ষ্যে কিছু উন্মুক্ত বাংলা ফন্টকে ওয়েবে
              ব্যবহারোপযোগী করে তোলার জন্যই আমার এই ছোট্ট উদ্যোগ। আশা করি
              বাংলাদেশি ডেভেলপারগণ এই ছোট্ট উদ্যোগ থেকে সামান্য হলেও উপকৃত হবেন।
              ধন্যবাদ।
            </p>
            <div className="single">
              <div className="solaimanlipi">
                <h2 className="text-left">সোলাইমানলিপি</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/solaimanlipi/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'SolaimanLipi'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="bangla">
                <h2
                  className="text-left"
                  //  style="font-size: 2.6rem"
                >
                  বাংলা
                </h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/bangla/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Bangla'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="ekushey-lohit">
                <h2 className="text-left">একুশে লোহিত</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/ekushey-lohit/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Ekushey Lohit'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="sornaly">
                <h2
                  className="text-left"
                  // style="font-size: 2.4rem; font-weight: 500"
                >
                  স্বর্ণালী
                </h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/sornaly/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Sornaly'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="lal-sabuj">
                <h2 className="text-left">লাল সবুজ</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/lal-sabuj-normal/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'LalSabujNormal'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="noto-sans-bengali">
                <h2 className="text-left">নোটো স্যান্স বেঙ্গলি</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url(//fonts.googleapis.com/earlyaccess/notosansbengali.css)
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Noto Sans Bengali'</span>,
                  sans-serif<span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="hind-siliguri">
                <h2 className="text-left">হিন্দ শিলিগুড়ি</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://fonts.googleapis.com/css?family=Hind+Siliguri')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Hind Siliguri'</span>,
                  sans-serif
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="boshonto">
                <h2 className="text-left">বসন্ত</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.staticaly.com/gh/sh4hids/bangla-web-fonts/9baee0fc23e77fe957c0b70fe49d81d2cbbe87d6/boshonto/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Boshonto'</span>, sans-serif
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="ab-shapla">
                <h2 className="text-left">আমার বাংলা শাপলা</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/ab-shapla/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'ABShaplaBeta'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="atma">
                <h2 className="text-left">আত্মা</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://fonts.googleapis.com/css?family=Atma')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Atma'</span>, cursive
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="benSen-handwriting">
                <h2 className="text-left">বেনসেন হ্যান্ডরাইটিং</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/bensen-handwriting/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'BenSenHandwriting'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="galada">
                <h2 className="text-left">গলাদা</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://fonts.googleapis.com/css?family=Galada')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Galada'</span>, cursive
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="durbar">
                <h2 className="text-left">দুর্বার</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/durbar/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Durbar'</span>, sans-serif
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="baloo-da">
                <h2 className="text-left">বালু দা</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://fonts.googleapis.com/css?family=Baloo+Da')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Baloo Da'</span>, cursive
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="charu-chandan">
                <h2 className="text-left">চারু চন্দন ইউনিকোড</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/charu-chandan-unicode/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Charu Chandan Unicode'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
            <div className="single">
              <div className="charukola">
                <h2 className="text-left">চারুকলা রেগুলার ইউনিকোড</h2>
                <p>
                  মহারাজ ঊষাকালে বৃহৎ ঐরাবতে রাজপথের অর্ধেক প্রদক্ষিণ করতঃ
                  হঠাত্&zwj; উক্তি করিলেন, “এই ঢোল&zwnj; পাখোয়াজ, শাস্ত্রীয়
                  সঙ্গীতের ঝংকার ও সৌরভ মন্দ্রিত আড়ম্বরপূর্ন রঙিন জীবনের
                  ছত্রতলে যে বিষণ্ণ দারিদ্র তাহা কি ঈষৎ ঔদাসীন্য, অপ্রচলিত
                  বৈদেশিক নীতি নাকি বারভুঁইঞার সহিত পুরাণো এবং আত্মঘাতী
                  ডামাডোলের ফসল?”
                </p>
              </div>
              <p>
                এই ফন্টটি আপনার ওয়েবসাইটে যোগ করতে নিচের কোডটি আপনার CSS ফাইলের
                শুরুতে যোগ করুন।
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token atrule">
                    <span className="token rule">@import</span>{" "}
                    <span className="token url">
                      url('https://cdn.rawgit.com/sh4hids/bangla-web-fonts/charukola-reguler-unicode/stylesheet.css')
                    </span>
                    <span className="token punctuation">;</span>
                  </span>
                </code>
              </pre>
              <p>
                যে এলিম্যান্টের জন্য এই ফন্টটি ব্যবহার করতে চান তার স্টাইলে
                নিচের কোডটি যুক্ত করুনঃ
              </p>
              <pre className="language-css">
                <code className=" language-css">
                  <span className="token property">font-family</span>
                  <span className="token punctuation">:</span>{" "}
                  <span className="token string">'Charukola Unicode'</span>
                  <span className="token punctuation">;</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="container text-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
