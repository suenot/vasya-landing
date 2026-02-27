"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./terms.module.css";
import { useEffect, useState } from "react";

type Language = 'en' | 'ru';

const content = {
    en: {
        title: "Terms of Use",
        lastUpdated: "Last updated: February 27, 2026",
        backToHome: "← Back to Home",
        sections: [
            {
                heading: "1. Acceptance of Terms",
                text: "By downloading, installing, or using Vasya.app (\"the Application\"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the Application."
            },
            {
                heading: "2. Description of Service",
                text: "Vasya.app is an open-source Telegram client that provides:\n\n• Automatic voice message transcription (via Local Whisper or Deepgram)\n• Multi-account management\n• Enhanced privacy features\n• Native desktop performance via Rust and Tauri"
            },
            {
                heading: "3. Open Source License",
                text: "Vasya.app is distributed under an open-source license. The source code is available at github.com/suenot/vasya. You are free to use, modify, and distribute the software in accordance with the license terms."
            },
            {
                heading: "4. User Responsibilities",
                text: "You agree to:\n\n• Use the Application in compliance with all applicable laws and Telegram's Terms of Service\n• Not use the Application for any illegal or unauthorized purpose\n• Not attempt to reverse-engineer, exploit, or compromise the security of the Application or Telegram's infrastructure\n• Take responsibility for all activity that occurs under your account(s)"
            },
            {
                heading: "5. Third-Party Services",
                text: "The Application integrates with third-party services:\n\n• **Telegram**: Your use of Telegram through Vasya.app is subject to Telegram's Terms of Service.\n• **Deepgram** (optional): If you enable cloud transcription, your use of Deepgram is subject to their Terms of Service.\n\nWe are not responsible for the practices or policies of third-party services."
            },
            {
                heading: "6. Disclaimer of Warranties",
                text: "The Application is provided \"as is\" and \"as available\" without warranty of any kind, express or implied. We do not guarantee that the Application will be uninterrupted, error-free, or secure.\n\nAs an open-source project, the Application is maintained by community contributors on a voluntary basis."
            },
            {
                heading: "7. Limitation of Liability",
                text: "In no event shall Vasya.app, its contributors, or maintainers be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Application."
            },
            {
                heading: "8. Modifications",
                text: "We reserve the right to modify these Terms of Use at any time. Changes will be reflected in the \"Last updated\" date at the top of this page. Continued use of the Application after changes constitutes acceptance of the new terms."
            },
            {
                heading: "9. Contact",
                text: "For questions about these Terms of Use, please open an issue on our GitHub repository at github.com/suenot/vasya."
            }
        ],
        footerText: "© 2026 Vasya.app. Open source Telegram client.",
        appName: "Vasyapp",
    },
    ru: {
        title: "Условия использования",
        lastUpdated: "Последнее обновление: 27 февраля 2026",
        backToHome: "← На главную",
        sections: [
            {
                heading: "1. Принятие условий",
                text: "Загружая, устанавливая или используя Васяяп (\"Приложение\"), вы соглашаетесь с настоящими Условиями использования. Если вы не согласны с этими условиями, не используйте Приложение."
            },
            {
                heading: "2. Описание сервиса",
                text: "Васяяп — это Telegram-клиент с открытым исходным кодом, который предоставляет:\n\n• Автоматическую расшифровку голосовых сообщений (через Local Whisper или Deepgram)\n• Управление несколькими аккаунтами\n• Расширенные функции конфиденциальности\n• Нативную производительность на десктопе через Rust и Tauri"
            },
            {
                heading: "3. Лицензия открытого кода",
                text: "Васяяп распространяется под лицензией открытого исходного кода. Исходный код доступен на github.com/suenot/vasya. Вы можете свободно использовать, изменять и распространять программное обеспечение в соответствии с условиями лицензии."
            },
            {
                heading: "4. Обязанности пользователя",
                text: "Вы соглашаетесь:\n\n• Использовать Приложение в соответствии со всеми применимыми законами и Условиями использования Telegram\n• Не использовать Приложение в незаконных или несанкционированных целях\n• Не пытаться выполнить обратную разработку, эксплуатировать или скомпрометировать безопасность Приложения или инфраструктуры Telegram\n• Нести ответственность за все действия, совершённые под вашей учётной записью (учётными записями)"
            },
            {
                heading: "5. Сторонние сервисы",
                text: "Приложение интегрируется со сторонними сервисами:\n\n• **Telegram**: Использование Telegram через Васяяп подчиняется Условиям использования Telegram.\n• **Deepgram** (опционально): При включении облачной расшифровки использование Deepgram регулируется их Условиями использования.\n\nМы не несём ответственности за практики и политики сторонних сервисов."
            },
            {
                heading: "6. Отказ от гарантий",
                text: "Приложение предоставляется «как есть» и «по мере доступности» без каких-либо гарантий, явных или подразумеваемых. Мы не гарантируем, что Приложение будет работать бесперебойно, без ошибок или безопасно.\n\nКак проект с открытым исходным кодом, Приложение поддерживается участниками сообщества на добровольной основе."
            },
            {
                heading: "7. Ограничение ответственности",
                text: "Ни при каких обстоятельствах Васяяп, его участники или разработчики не несут ответственности за любые косвенные, случайные, особые, штрафные убытки, возникшие в связи с использованием вами Приложения."
            },
            {
                heading: "8. Изменения",
                text: "Мы оставляем за собой право изменять настоящие Условия использования в любое время. Изменения будут отражены в дате «Последнее обновление» в верхней части этой страницы. Продолжение использования Приложения после изменений означает принятие новых условий."
            },
            {
                heading: "9. Контакты",
                text: "По вопросам, связанным с настоящими Условиями использования, пожалуйста, создайте issue в нашем GitHub-репозитории github.com/suenot/vasya."
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

export default function TermsPage() {
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
