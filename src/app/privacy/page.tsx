"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./privacy.module.css";
import { useEffect, useState } from "react";

type Language = 'en' | 'ru';

const content = {
    en: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: February 27, 2026",
        backToHome: "← Back to Home",
        sections: [
            {
                heading: "1. Introduction",
                text: "Vasya.app (\"we\", \"our\", \"us\") is an open-source Telegram client focused on privacy, productivity, and voice transcription. This Privacy Policy explains how we handle your data when you use our application."
            },
            {
                heading: "2. Data We Collect",
                text: "Vasya.app is designed with a privacy-first approach. We collect minimal data necessary for the application to function:\n\n• **Account Information**: Your Telegram account credentials are handled directly by the Telegram API. We do not store your passwords or authentication tokens on our servers.\n• **Local Processing Data**: Voice messages transcribed using Local Whisper are processed entirely on your device. No audio data is sent to external servers.\n• **Cloud Transcription**: If you choose to use Deepgram for transcription, audio data is sent to Deepgram's servers according to their privacy policy.\n• **Usage Analytics**: We do not collect any usage analytics or telemetry data."
            },
            {
                heading: "3. How We Use Your Data",
                text: "• To provide voice message transcription services\n• To enable multi-account management\n• To deliver the core messaging functionality through the Telegram API\n\nWe do not sell, trade, or rent your personal data to third parties."
            },
            {
                heading: "4. Data Storage",
                text: "All application data is stored locally on your device. Vasya.app does not maintain external servers for storing user data. Your messages, transcriptions, and settings remain on your machine."
            },
            {
                heading: "5. Third-Party Services",
                text: "• **Telegram API**: Used for core messaging functionality. Subject to Telegram's Privacy Policy.\n• **Deepgram** (optional): Used for cloud-based voice transcription. Subject to Deepgram's Privacy Policy.\n• **Local Whisper** (default): Runs entirely on your device with no external data transmission."
            },
            {
                heading: "6. Open Source",
                text: "Vasya.app is open source. You can review our codebase on GitHub to verify our privacy practices. Transparency is a core principle of our project."
            },
            {
                heading: "7. Changes to This Policy",
                text: "We may update this Privacy Policy from time to time. Any changes will be reflected in the \"Last updated\" date at the top of this page."
            },
            {
                heading: "8. Contact",
                text: "If you have questions about this Privacy Policy, please open an issue on our GitHub repository at github.com/suenot/vasya."
            }
        ],
        footerText: "© 2026 Vasya.app. Open source Telegram client.",
        appName: "Vasyapp",
    },
    ru: {
        title: "Политика конфиденциальности",
        lastUpdated: "Последнее обновление: 27 февраля 2026",
        backToHome: "← На главную",
        sections: [
            {
                heading: "1. Введение",
                text: "Васяяп (\"мы\", \"наш\") — это Telegram-клиент с открытым исходным кодом, ориентированный на конфиденциальность, продуктивность и расшифровку голосовых сообщений. Настоящая Политика конфиденциальности объясняет, как мы обрабатываем ваши данные при использовании нашего приложения."
            },
            {
                heading: "2. Данные, которые мы собираем",
                text: "Васяяп разработан с приоритетом конфиденциальности. Мы собираем минимально необходимые данные для работы приложения:\n\n• **Данные аккаунта**: Учётные данные вашего Telegram-аккаунта обрабатываются напрямую через Telegram API. Мы не храним ваши пароли или токены аутентификации на наших серверах.\n• **Локальная обработка**: Голосовые сообщения, расшифрованные с помощью Local Whisper, обрабатываются полностью на вашем устройстве. Аудиоданные не отправляются на внешние серверы.\n• **Облачная расшифровка**: Если вы выбираете Deepgram для расшифровки, аудиоданные отправляются на серверы Deepgram согласно их политике конфиденциальности.\n• **Аналитика**: Мы не собираем никакой аналитики использования или телеметрии."
            },
            {
                heading: "3. Как мы используем ваши данные",
                text: "• Для предоставления услуг расшифровки голосовых сообщений\n• Для управления несколькими аккаунтами\n• Для обеспечения основного функционала обмена сообщениями через Telegram API\n\nМы не продаём, не обмениваем и не сдаём в аренду ваши персональные данные третьим лицам."
            },
            {
                heading: "4. Хранение данных",
                text: "Все данные приложения хранятся локально на вашем устройстве. Васяяп не использует внешние серверы для хранения пользовательских данных. Ваши сообщения, расшифровки и настройки остаются на вашем устройстве."
            },
            {
                heading: "5. Сторонние сервисы",
                text: "• **Telegram API**: Используется для основного функционала обмена сообщениями. Регулируется Политикой конфиденциальности Telegram.\n• **Deepgram** (опционально): Используется для облачной расшифровки голоса. Регулируется Политикой конфиденциальности Deepgram.\n• **Local Whisper** (по умолчанию): Работает полностью на вашем устройстве без передачи данных вовне."
            },
            {
                heading: "6. Открытый исходный код",
                text: "Васяяп — проект с открытым исходным кодом. Вы можете ознакомиться с нашей кодовой базой на GitHub, чтобы проверить наши практики конфиденциальности. Прозрачность — это основной принцип нашего проекта."
            },
            {
                heading: "7. Изменения в политике",
                text: "Мы можем время от времени обновлять эту Политику конфиденциальности. Любые изменения будут отражены в дате «Последнее обновление» в верхней части этой страницы."
            },
            {
                heading: "8. Контакты",
                text: "Если у вас есть вопросы по данной Политике конфиденциальности, пожалуйста, создайте issue в нашем GitHub-репозитории github.com/suenot/vasya."
            }
        ],
        footerText: "© 2026 Васяяп. Open source Telegram клиент.",
        appName: "Васяяп",
    }
};

function renderText(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

export default function PrivacyPage() {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'ru') setLang('ru');
        }
    }, []);

    const t = content[lang];

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Image src="/vasyapp.svg" alt="Vasyapp Logo" width={32} height={32} />
                    <Link href="/" className={styles.logoTitle}>{t.appName}</Link>
                </div>
                <div className={styles.langSwitcher}>
                    <button onClick={() => setLang('en')} className={styles.langBtn} data-active={lang === 'en'}>EN</button>
                    <button onClick={() => setLang('ru')} className={styles.langBtn} data-active={lang === 'ru'}>RU</button>
                </div>
            </header>

            <main className={styles.content}>
                <Link href="/" className={styles.backLink}>{t.backToHome}</Link>
                <h1 className={styles.title}>{t.title}</h1>
                <p className={styles.lastUpdated}>{t.lastUpdated}</p>

                {t.sections.map((section, i) => (
                    <div key={i} className={styles.section}>
                        <h2>{section.heading}</h2>
                        <div className={styles.text}>
                            {section.text.split('\n').map((line, j) => (
                                <p key={j}>{renderText(line)}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </main>

            <footer className={styles.footer}>
                <p>{t.footerText}</p>
            </footer>
        </div>
    );
}
