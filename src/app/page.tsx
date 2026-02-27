"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

type Language = 'en' | 'ru';

const translations = {
  en: {
    navFeatures: "Features",
    navStt: "Transcription",
    download: "Download",
    heroTitle: "The Telegram Client for ",
    heroTitleAccent: "Power Users",
    heroSubtitle: "Experience a faster, more productive Telegram. Automatic voice transcription, multi-account management, and maximum privacy with local STT processing.",
    getStarted: "Get Started Now",
    learnMore: "Learn More",
    featuresTitle: "Built for Productivity",
    featureVoiceTitle: "Voice AI",
    featureVoiceDesc: "Never listen to a 5-minute voice message again. Instant conversion to text ensures you're always in the loop.",
    featureMultiTitle: "Multi-Account",
    featureMultiDesc: "Switch between personal and work accounts seamlessly. Stay organized without multiple apps.",
    featurePrivacyTitle: "Privacy First",
    featurePrivacyDesc: "Use Local Whisper models to transcribe messages directly on your machine. Your data never leaves your device.",
    featureNativeTitle: "Native Performance",
    featureNativeDesc: "Built with Rust and Tauri for maximum speed and minimal resource usage on macOS, Windows, and Linux.",
    sttTitle: "Speech-to-Text ",
    sttTitleAccent: "Redefined",
    sttSubtitle: "Choose the engine that fits your needs. Use Deepgram for lightning-fast cloud processing or Local Whisper for industry-standard accuracy and total privacy.",
    sttCheck1: "Deepgram Nova-2: Sub-second transcription with high accuracy.",
    sttCheck2: "Local Whisper: Runs offline, supports 90+ languages.",
    sttCheck3: "Auto-transcribe: Get text as soon as the message arrives.",
    sttEngineLabel: "TRANSCRIPTION ENGINE",
    sttTranscribing: "Transcribing...",
    footerText: "© 2026 Vasya.app. Open source Telegram client.",
    github: "GitHub",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    comingSoon: "Coming Soon",
    featureSummariesTitle: "Smart Summaries",
    featureSummariesDesc: "Get instant AI summaries of long group chats and channels. Stay informed without reading thousands of messages.",
    featureAISearchTitle: "Semantic Search",
    featureAISearchDesc: "Search by meaning, not just keywords. Find specific info using natural language queries powered by local AI.",
    mockupStatus: "online",
    mockupVoiceMsg: "Voice message",
    mockupYesterday: "Yesterday",
    mockupGreeting: "Hey! How's it going?",
    mockupReply: "All good, working on Vasyapp.",
    mockupVoiceTranscription: "Hey, are we still on for the meeting at 3 PM?",
    mockupFinalReply: "Sure, let's do it! Thanks for the invite ❤️",
    mockupInputPlaceholder: "Write a message...",
    filterContacts: "Contacts",
    filterChats: "Chats",
    filterFavorites: "Favorites",
    searchPlaceholder: "Search chats...",
    vLogo: "V",
    accS: "S",
    accE: "E",
    accN: "N",
    appName: "Vasyapp"
  },
  ru: {
    navFeatures: "Возможности",
    navStt: "Расшифровка",
    download: "Скачать",
    heroTitle: "Telegram клиент для ",
    heroTitleAccent: "профи",
    heroSubtitle: "Сделайте Telegram быстрее и продуктивнее. Автоматическая расшифровка голоса, управление несколькими аккаунтами и полная приватность с локальной обработкой STT.",
    getStarted: "Начать сейчас",
    learnMore: "Узнать больше",
    featuresTitle: "Создано для продуктивности",
    featureVoiceTitle: "Голосовой ИИ",
    featureVoiceDesc: "Больше не нужно слушать 5-минутные голосовые. Мгновенная расшифровка в текст позволит всегда быть в курсе.",
    featureMultiTitle: "Мультиаккаунт",
    featureMultiDesc: "Легко переключайтесь между личными и рабочими аккаунтами. Порядок без лишних приложений.",
    featurePrivacyTitle: "Приватность",
    featurePrivacyDesc: "Используйте локальные модели Whisper для расшифровки прямо на вашем устройстве. Ваши данные никуда не уходят.",
    featureNativeTitle: "Нативная скорость",
    featureNativeDesc: "Собрано на Rust и Tauri для максимальной скорости и минимального потребления ресурсов на macOS, Windows и Linux.",
    sttTitle: "Новый уровень ",
    sttTitleAccent: "расшифровки",
    sttSubtitle: "Выберите движок под свои задачи. Используйте Deepgram для молниеносной облачной обработки или Local Whisper для максимальной точности и приватности.",
    sttCheck1: "Deepgram Nova-2: Молниеносная расшифровка с высокой точностью.",
    sttCheck2: "Local Whisper: Работает офлайн, поддерживает 90+ языков.",
    sttCheck3: "Авто-расшифровка: Получайте текст сразу после получения сообщения.",
    sttEngineLabel: "ДВИЖОК РАСШИФРОВКИ",
    sttTranscribing: "Расшифровка...",
    footerText: "© 2026 Vasya.app. Open source Telegram клиент.",
    github: "GitHub",
    privacy: "Приватность",
    terms: "Условия",
    comingSoon: "Скоро",
    featureSummariesTitle: "Умные итоги",
    featureSummariesDesc: "Получайте мгновенные ИИ-сводки длинных переписок в группах и каналах. Будьте в курсе без чтения тысяч сообщений.",
    featureAISearchTitle: "Семантический поиск",
    featureAISearchDesc: "Ищите по смыслу, а не только по ключевым словам. Находите нужную информацию с помощью простых запросов.",
    mockupStatus: "в сети",
    mockupVoiceMsg: "Голосовое сообщение",
    mockupYesterday: "Вчера",
    mockupGreeting: "Привет! Как дела?",
    mockupReply: "Все хорошо, работаю над Васяяп.",
    mockupVoiceTranscription: "Приезжай на выходных, я испекла твой любимый пирог. Папа тоже ждет.",
    mockupFinalReply: "Обязательно буду! Спасибо за приглашение ❤️",
    mockupInputPlaceholder: "Напишите сообщение...",
    filterContacts: "Контакты",
    filterChats: "Чаты",
    filterFavorites: "Избранное",
    searchPlaceholder: "Поиск чатов...",
    vLogo: "В",
    accS: "С",
    accE: "Е",
    accN: "Н",
    appName: "Васяяп"
  }
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ru') {
        setLang('ru');
      }
    }
  }, []);

  const t = translations[lang];

  return (
    <div className={styles.page}>
      <header className={`${styles.header} glass`}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/vasyapp.svg" alt="Vasyapp Logo" width={32} height={32} />
          <span className={styles.logoTitle}>{t.appName}</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <div className={styles.langSwitcher}>
            <button
              onClick={() => setLang('en')}
              className={styles.langBtn}
              data-active={lang === 'en'}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ru')}
              className={styles.langBtn}
              data-active={lang === 'ru'}
            >
              RU
            </button>
          </div>
          <a href="#" className="btn-primary" style={{ padding: '0.6rem 1.2rem' }}>{t.download}</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>
              {t.heroTitle}
              <span className={styles.heroAccent}>{t.heroTitleAccent}</span>
            </h1>
            <p className={styles.heroSubtitle}>{t.heroSubtitle}</p>
            <div className={styles.heroActions}>
              <a href="#" className="btn-primary">{t.getStarted}</a>
              <a href="#features" className={styles.btnSecondary}>{t.learnMore}</a>
            </div>

            <div className={styles.mockupWrapper}>
              <div className={styles.appMockup}>
                <aside className={styles.sidebar}>
                  <div className={styles.sidebarHeader}>
                    <div className={styles.accSwitcher}>
                      <div className={styles.circlesGroup}>
                        <div className={`${styles.accCircle} ${styles.accActive}`} style={{ '--index': 0 } as any}>{t.accS}</div>
                        <div className={styles.accCircle} style={{ '--index': 1 } as any}>{t.accE}</div>
                        <div className={styles.accCircle} style={{ '--index': 2 } as any}>{t.accN}</div>
                        <div className={`${styles.accCircle} ${styles.accAdd}`} style={{ '--index': 3 } as any}>+</div>
                      </div>
                    </div>
                    <div className={styles.sidebarActions}>
                      <div className={styles.searchToggle}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <span className={styles.searchText}>{t.searchPlaceholder}</span>
                      </div>
                      <button className={styles.iconBtn}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                      </button>
                    </div>
                  </div>

                  <div className={styles.chatFilters}>
                    <div className={styles.filterBtn}>{t.filterContacts}</div>
                    <div className={`${styles.filterBtn} ${styles.filterActive}`}>{t.filterChats}</div>
                    <div className={styles.filterBtn}>{t.filterFavorites}</div>
                  </div>

                  <div className={styles.chatList}>
                    {[
                      { name: 'Pavel Durov', msg: 'The feature looks great!', time: '12:04' },
                      { name: 'Work Group', msg: 'Meeting in 5 mins', time: '11:58' },
                      { name: 'Mom', msg: t.mockupVoiceMsg, time: '10:30', active: true, unread: 2 },
                      { name: 'News Channel', msg: 'Breaking news...', time: t.mockupYesterday }
                    ].map((chat, i) => (
                      <div key={i} className={`${styles.chatItem} ${chat.active ? styles.chatSelected : ''}`}>
                        <div className={styles.chatAvatar}>
                          {chat.name[0]}
                        </div>
                        <div className={styles.chatInfo}>
                          <div className={styles.chatInfoTop}>
                            <span className={styles.chatTitle}>{chat.name}</span>
                            <span className={styles.chatTime}>{chat.time}</span>
                          </div>
                          <div className={styles.chatInfoBottom}>
                            <div className={styles.chatPreview}>{chat.msg}</div>
                            {chat.unread && <div className={styles.unreadCount}>{chat.unread}</div>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>

                <section className={styles.chatArea}>
                  <div className={styles.chatHeader}>
                    <div className={styles.chatHeaderLeft}>
                      <div className={styles.chatHeaderInfo}>
                        <div className={styles.chatHeaderTitle}>Mom</div>
                        <div className={styles.chatHeaderStatus}>{t.mockupStatus}</div>
                      </div>
                    </div>
                    <div className={styles.chatHeaderActions}>
                      <div className={styles.iconBtn}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg></div>
                      <div className={styles.iconBtn}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="6" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" /></svg></div>
                    </div>
                  </div>

                  <div className={styles.messageList}>
                    <div className={styles.messageListInner}>
                      <div className={`${styles.message} ${styles.incoming}`}>
                        <div className={styles.messageBubble}>
                          <div className={styles.messageText}>{t.mockupGreeting}</div>
                          <div className={styles.messageMeta}>10:28</div>
                        </div>
                      </div>
                      <div className={`${styles.message} ${styles.outgoing}`}>
                        <div className={styles.messageBubble}>
                          <div className={styles.messageText}>{t.mockupReply}</div>
                          <div className={styles.messageMeta}>10:29 <span className={styles.ticks}>✓✓</span></div>
                        </div>
                      </div>
                      <div className={`${styles.message} ${styles.incoming}`}>
                        <div className={styles.messageBubble}>
                          <div className={styles.voiceMessage}>
                            <div className={styles.voicePlayBtn}>▶</div>
                            <div className={styles.waveform}>
                              {[12, 18, 14, 20, 16, 12, 18, 14, 10, 16, 14, 12, 16, 14, 10, 12].map((h, i) => (
                                <div key={i} className={styles.waveformBar} style={{ height: `${h}px` }}></div>
                              ))}
                            </div>
                            <div className={styles.voiceMetaInfo}>0:12</div>
                          </div>
                          <div className={styles.transcription}>
                            "{t.mockupVoiceTranscription}"
                          </div>
                          <div className={styles.messageMeta}>10:30</div>
                        </div>
                      </div>
                      <div className={`${styles.message} ${styles.outgoing}`}>
                        <div className={styles.messageBubble}>
                          <div className={styles.messageText}>{t.mockupFinalReply}</div>
                          <div className={styles.messageMeta}>10:31 <span className={styles.ticks}>✓✓</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={styles.messageInputArea}>
                    <div className={styles.messageInputContainer}>
                      <div className={styles.messageInputInner}>
                        <div className={styles.messagePlaceholder}>{t.mockupInputPlaceholder}</div>
                      </div>
                      <div className={styles.inputAction}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="22" /></svg>
                      </div>
                    </div>
                  </div>
                </section>

                <div className={styles.contentBg} />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>{t.featuresTitle}</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image src="/feature_voice_ai.png" alt="Voice AI" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featureVoiceTitle}</h3>
                <p>{t.featureVoiceDesc}</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image src="/feature_multi_account.png" alt="Multi-Account" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featureMultiTitle}</h3>
                <p>{t.featureMultiDesc}</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image src="/feature_privacy_first.png" alt="Privacy First" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featurePrivacyTitle}</h3>
                <p>{t.featurePrivacyDesc}</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureImage}>
                  <Image src="/feature_native_speed.png" alt="Native Speed" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featureNativeTitle}</h3>
                <p>{t.featureNativeDesc}</p>
              </div>
              <div className={`${styles.featureCard} ${styles.featureFuture}`}>
                <div className={styles.badge}>{t.comingSoon}</div>
                <div className={styles.featureImage}>
                  <Image src="/feature_summaries.png" alt="Summaries" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featureSummariesTitle}</h3>
                <p>{t.featureSummariesDesc}</p>
              </div>
              <div className={`${styles.featureCard} ${styles.featureFuture}`}>
                <div className={styles.badge}>{t.comingSoon}</div>
                <div className={styles.featureImage}>
                  <Image src="/feature_semantic_search.png" alt="Semantic Search" fill style={{ objectFit: 'cover' }} />
                </div>
                <h3>{t.featureAISearchTitle}</h3>
                <p>{t.featureAISearchDesc}</p>
              </div>
            </div>
          </div>
        </section>


      </main>

      <footer className={styles.footer}>
        <div className="container">
          <Image src="/vasyapp.svg" alt="Vasyapp Logo" width={48} height={48} style={{ marginBottom: '1rem' }} />
          <p>{t.footerText}</p>
          <div className={styles.footerLinks}>
            <a href="https://github.com/suenot/vasya" target="_blank" rel="noopener noreferrer">{t.github}</a>
            <a href="/privacy">{t.privacy}</a>
            <a href="/terms">{t.terms}</a>
          </div>
          <div className={styles.footerReforms}>
            ⚡ <a href="https://reforms.ai" target="_blank" rel="noopener noreferrer">Built with Reforms.AI</a> • AI-powered projects for companies
          </div>
        </div>
      </footer>
    </div>
  );
}
