import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "06 27 73 01 70";
const WHATSAPP_URL = "https://wa.me/212627730170";
const CONTACT_EMAIL = "contact@opsynk.ma";
const LOCATION = "Casablanca, Maroc";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Recrutement", href: "#recrutement" },
  { label: "Formation", href: "#formation" },
  { label: "Accompagnement RH", href: "#accompagnement" },
  { label: "Contact", href: "#contact" },
];

const proofCards = [
  {
    icon: SearchCheck,
    title: "Profils IT & cadres",
    text: "Recrutement ciblé pour les postes sensibles, experts et décisifs.",
  },
  {
    icon: Target,
    title: "Approche sur mesure",
    text: "Une lecture précise de votre contexte avant toute recommandation.",
  },
  {
    icon: Handshake,
    title: "Accompagnement RH complet",
    text: "Conseil, structuration, formation et suivi opérationnel.",
  },
  {
    icon: Building2,
    title: "Expertise marché marocain",
    text: "Basé à Casablanca, intervention partout au Maroc.",
  },
];

const services = [
  {
    id: "recrutement",
    icon: BriefcaseBusiness,
    title: "Recrutement",
    text: "Nous identifions, évaluons et sélectionnons les meilleurs talents pour vos besoins stratégiques.",
    points: [
      "Profils IT : développeurs, data, cybersécurité, cloud, product, infrastructure",
      "Cadres et profils experts : finance, commerce, marketing, industrie, support, management",
    ],
  },
  {
    id: "formation",
    icon: GraduationCap,
    title: "Formation professionnelle",
    text: "Des formations adaptées à vos équipes pour renforcer les compétences, la performance et l'engagement.",
    points: [
      "Programmes adaptés aux besoins de l'entreprise",
      "Management, communication, leadership, performance commerciale et soft skills",
    ],
  },
  {
    id: "accompagnement",
    icon: Settings2,
    title: "Accompagnement RH",
    text: "Diagnostic RH, structuration des processus, marque employeur, intégration, performance et organisation.",
    points: [
      "Processus RH, fiches de poste et parcours d'intégration",
      "Conseil RH pour dirigeants, managers et équipes internes",
    ],
  },
];

const recruitmentSteps = [
  "Compréhension du besoin",
  "Sourcing ciblé",
  "Préqualification",
  "Évaluation technique et comportementale",
  "Shortlist qualifiée",
  "Suivi jusqu'à l'intégration",
];

const trainingPoints = [
  "Programmes adaptés aux besoins de l'entreprise",
  "Formations orientées résultats",
  "Montée en compétences des équipes",
  "Développement managérial",
  "Communication, leadership, performance commerciale et soft skills",
  "Suivi post-formation",
];

const consultingPoints = [
  "Diagnostic RH",
  "Mise en place de processus RH",
  "Fiches de poste",
  "Parcours d'intégration",
  "Organisation interne",
  "Marque employeur",
  "Évaluation de la performance",
  "Conseil RH pour dirigeants et managers",
];

const whyItems = [
  "Expertise du marché marocain",
  "Approche conseil, pas seulement sourcing",
  "Processus clair et transparent",
  "Sélection orientée qualité",
  "Accompagnement de bout en bout",
  "Réactivité et proximité",
  "Basé à Casablanca avec capacité d'intervention partout au Maroc",
];

const processSteps = [
  {
    icon: ClipboardCheck,
    title: "Analyse du besoin",
    text: "Nous cadrons le contexte, les enjeux, les priorités et les critères de réussite.",
  },
  {
    icon: Layers3,
    title: "Stratégie RH ou recrutement",
    text: "Nous construisons une approche claire, adaptée à votre culture et à vos objectifs.",
  },
  {
    icon: UsersRound,
    title: "Sélection ou déploiement",
    text: "Nous activons les bons leviers : sourcing, évaluation, formation ou structuration.",
  },
  {
    icon: BarChart3,
    title: "Suivi et optimisation",
    text: "Nous restons présents pour ajuster, sécuriser et mesurer l'impact.",
  },
];

const needs = [
  "Recrutement IT",
  "Recrutement cadres",
  "Formation",
  "Accompagnement RH",
];

function MotionBlock({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, text, align = "center" }) {
  return (
    <MotionBlock
      className={`mx-auto max-w-3xl ${
        align === "left" ? "text-left" : "text-center"
      }`}
    >
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
        {eyebrow}
      </p>
      <h2 className="font-display text-2xl font-extrabold leading-tight text-night sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {text}
        </p>
      ) : null}
    </MotionBlock>
  );
}

function IconBadge({ icon: Icon, dark = false }) {
  return (
    <span
      className={`inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl border ${
        dark
          ? "border-white/15 bg-white/10 text-cyan"
          : "border-cyan/20 bg-cyan/10 text-night"
      }`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function PrimaryButton({ children, href = WHATSAPP_URL, className = "" }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full bg-night px-6 py-3 text-center text-sm font-bold text-white shadow-premium transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-cyan/25 sm:w-auto ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition group-hover:translate-x-1"
        aria-hidden="true"
      />
    </motion.a>
  );
}

function SecondaryButton({ children, href, className = "" }) {
  return (
    <motion.a
      href={href}
      className={`inline-flex min-h-12 w-full max-w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/85 px-6 py-3 text-center text-sm font-bold text-night shadow-sm transition hover:border-cyan/50 hover:bg-white focus:outline-none focus:ring-4 focus:ring-cyan/20 sm:w-auto ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/75 backdrop-blur-2xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <a href="#accueil" className="group flex items-center gap-3">
          <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-night shadow-premium">
            <span className="diamond-frame h-6 w-6 bg-gradient-to-br from-cyan via-white to-gold" />
          </span>
          <span className="font-display text-xl font-extrabold text-night sm:text-2xl">
            HRDIAMOND
          </span>
        </a>

        <div className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-night"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden xl:block">
          <PrimaryButton href={WHATSAPP_URL}>Parler à un expert RH</PrimaryButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-night shadow-sm xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <motion.div
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white/95 px-5 py-5 shadow-premium xl:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-3 py-3 text-sm font-bold text-slate-700 transition hover:bg-mist hover:text-night"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <PrimaryButton href={WHATSAPP_URL} className="mt-3 w-full">
              Parler à un expert RH
            </PrimaryButton>
          </div>
        </motion.div>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="accueil"
      className="section-anchor relative isolate overflow-hidden bg-white pt-24 sm:pt-28"
    >
      <div className="premium-grid absolute inset-0 -z-10 opacity-80" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[68%] bg-[radial-gradient(ellipse_at_top,#DFFBFF_0%,rgba(255,255,255,0)_58%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-[420px] w-[min(760px,92vw)] -translate-x-1/2 rotate-[-7deg] rounded-[48px] bg-gradient-to-br from-night via-[#103A6E] to-[#E7F9FB] opacity-10 blur-2xl sm:h-[520px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 sm:min-h-[86svh] sm:px-6 sm:pb-16 lg:grid-cols-[1.03fr_0.97fr] lg:gap-12 lg:px-8">
        <MotionBlock>
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan/25 bg-white/80 px-4 py-2 text-left text-sm font-bold leading-5 text-night shadow-sm backdrop-blur sm:mb-6">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Cabinet RH premium basé à Casablanca
          </div>
          <h1 className="max-w-5xl font-display text-3xl font-extrabold leading-[1.08] text-night sm:text-5xl lg:text-6xl">
            Votre partenaire RH pour recruter, former et structurer vos équipes
            au Maroc
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-xl sm:leading-9">
            HRDIAMOND accompagne les entreprises à Casablanca et partout au
            Maroc dans leurs enjeux de recrutement IT, recrutement de cadres,
            formation professionnelle et accompagnement RH.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <PrimaryButton
              href={WHATSAPP_URL}
              className="bg-gradient-to-r from-night via-[#0D2B57] to-night"
            >
              Discuter sur WhatsApp
            </PrimaryButton>
            <SecondaryButton href="#contact">
              Demander un accompagnement
            </SecondaryButton>
          </div>

          <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-3">
            {["Recrutement ciblé", "Processus structuré", "Approche conseil"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-bold text-night shadow-sm backdrop-blur"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </MotionBlock>

        <MotionBlock
          delay={0.12}
          className="relative grid gap-4 sm:min-h-[560px] lg:min-h-[620px]"
        >
          <div className="absolute left-8 top-6 hidden h-64 w-64 rotate-45 rounded-[42px] border border-cyan/20 bg-gradient-to-br from-cyan/30 to-transparent blur-sm sm:block" />
          <div className="absolute right-2 top-20 hidden h-80 w-80 rotate-45 rounded-[50px] border border-gold/25 bg-gradient-to-br from-gold/20 to-white/30 sm:block" />
          <motion.div
            className="relative right-auto top-auto w-full rounded-[1.5rem] border border-white/70 bg-white/80 p-5 shadow-premium backdrop-blur-2xl sm:absolute sm:right-0 sm:top-10 sm:w-[86%] sm:rounded-[2rem] sm:p-7"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                  HRDIAMOND
                </p>
                <h2 className="mt-2 font-display text-xl font-extrabold text-night sm:text-2xl">
                  Talents, équipes, performance.
                </h2>
              </div>
              <ShieldCheck className="h-8 w-8 text-cyan" aria-hidden="true" />
            </div>
            <img
              src="/hrdiamond-logo.png"
              alt="Logo HRDIAMOND"
              className="mx-auto mt-5 h-36 w-full rounded-3xl object-contain sm:h-44"
              loading="eager"
            />
          </motion.div>

          <motion.div
            className="relative bottom-auto left-auto w-full rounded-[1.5rem] border border-white/70 bg-night/92 p-5 text-white shadow-glow backdrop-blur-2xl sm:absolute sm:bottom-24 sm:left-0 sm:w-[78%] sm:rounded-[1.75rem] sm:p-6"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-cyan">Mission active</p>
                <p className="mt-1 font-display text-xl font-extrabold sm:text-2xl">
                  Shortlist qualifiée
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/10 p-3">
                <UsersRound className="h-6 w-6 text-gold" aria-hidden="true" />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {["Cadrage du poste", "Évaluation RH", "Intégration"].map(
                (label, index) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                    <div className="h-2 flex-1 rounded-full bg-white/12">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan to-gold"
                        style={{ width: `${88 - index * 14}%` }}
                      />
                    </div>
                    <span className="w-20 text-right text-[11px] font-semibold text-white/70 sm:w-24 sm:text-xs">
                      {label}
                    </span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="relative bottom-auto right-auto rounded-3xl border border-slate-200 bg-white p-5 shadow-premium sm:absolute sm:bottom-4 sm:right-8"
            whileHover={{ y: -4 }}
          >
            <p className="text-sm font-bold text-slate-500">Portée</p>
            <p className="mt-1 font-display text-xl font-extrabold text-night sm:text-2xl">
              Maroc
            </p>
            <p className="mt-1 text-sm text-slate-500">Casablanca et national</p>
          </motion.div>
        </MotionBlock>
      </div>
    </section>
  );
}

function Proofs() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofCards.map((card, index) => (
          <MotionBlock key={card.title} delay={index * 0.05}>
            <motion.article
              className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan/30 hover:shadow-premium"
              whileHover={{ y: -6 }}
            >
              <IconBadge icon={card.icon} />
              <h3 className="mt-5 font-display text-xl font-extrabold text-night">
                {card.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            </motion.article>
          </MotionBlock>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="section-anchor bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Trois leviers RH pour renforcer durablement vos équipes"
          text="HRDIAMOND intervient là où vos décisions humaines ont le plus d'impact : attirer les bons talents, développer les compétences et structurer vos pratiques RH."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionBlock key={service.title} delay={index * 0.07}>
              <motion.article
                className="flex h-full flex-col rounded-[1.75rem] border border-white bg-white p-5 shadow-sm transition hover:shadow-premium sm:p-7"
                whileHover={{ y: -8 }}
              >
                <IconBadge icon={service.icon} />
                <h3 className="mt-6 font-display text-xl font-extrabold text-night sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{service.text}</p>
                <ul className="mt-6 space-y-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-slate-700"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 flex-none text-cyan"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${service.id}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-night transition hover:text-cyan"
                >
                  Explorer ce service
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </motion.article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecruitmentSection() {
  return (
    <section
      id="recrutement"
      className="section-anchor relative overflow-hidden bg-night px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="absolute inset-0 opacity-20 premium-grid" />
      <div className="absolute right-[-10%] top-20 h-[420px] w-[420px] rotate-45 rounded-[80px] border border-cyan/30" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <MotionBlock>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">
            Recrutement
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Un recrutement plus précis, plus rapide et plus humain
          </h2>
          <p className="mt-5 text-base leading-8 text-white/75 sm:mt-6 sm:text-lg">
            Chaque mission est conduite avec une logique conseil : comprendre le
            poste, la culture, le niveau d'exigence et les signaux qui font un
            recrutement durable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton
              href={WHATSAPP_URL}
              className="bg-white text-night hover:bg-cyan"
            >
              Lancer une mission
            </PrimaryButton>
            <SecondaryButton
              href="#contact"
              className="border-white/20 bg-white/10 text-white hover:bg-white/15"
            >
              Recevoir un avis RH
            </SecondaryButton>
          </div>
        </MotionBlock>

        <div className="grid gap-6">
          <MotionBlock>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl">
                <IconBadge icon={BadgeCheck} dark />
                <h3 className="mt-5 font-display text-xl font-extrabold sm:text-2xl">
                  Recrutement IT
                </h3>
                <p className="mt-3 leading-7 text-white/70">
                  Développeurs, data, cybersécurité, cloud, product,
                  infrastructure et profils tech rares.
                </p>
              </article>
              <article className="rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl">
                <IconBadge icon={BriefcaseBusiness} dark />
                <h3 className="mt-5 font-display text-xl font-extrabold sm:text-2xl">
                  Cadres tous domaines
                </h3>
                <p className="mt-3 leading-7 text-white/70">
                  Finance, commerce, marketing, industrie, support, management
                  et fonctions expertes.
                </p>
              </article>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.08}>
            <div className="rounded-[2rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl">
              <div className="grid gap-3 sm:grid-cols-2">
                {recruitmentSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3"
                  >
                    <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-cyan/15 text-sm font-extrabold text-cyan">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold text-white/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}

function TrainingSection() {
  return (
    <section
      id="formation"
      className="section-anchor bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <MotionBlock>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-mist p-6 shadow-sm sm:rounded-[2rem] sm:p-8">
            <div className="absolute right-[-70px] top-[-70px] h-56 w-56 rotate-45 rounded-[44px] bg-gradient-to-br from-cyan/25 to-gold/20" />
            <div className="relative">
              <IconBadge icon={GraduationCap} />
              <h2 className="mt-6 font-display text-2xl font-extrabold leading-tight text-night sm:text-4xl">
                Développez les compétences qui font avancer votre organisation
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Des formats utiles, concrets et alignés avec vos priorités :
                performance commerciale, management, communication, leadership
                et soft skills.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Orientée résultats",
                  "Adaptée au terrain",
                  "Suivie dans le temps",
                  "Claire pour les managers",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white bg-white px-4 py-3 text-sm font-extrabold text-night shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {trainingPoints.map((point) => (
              <div
                key={point}
                className="flex min-h-24 items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-1 h-5 w-5 flex-none text-cyan"
                  aria-hidden="true"
                />
                <p className="font-semibold leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function ConsultingSection() {
  return (
    <section
      id="accompagnement"
      className="section-anchor bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Accompagnement RH"
          title="Structurez vos pratiques RH avec une approche conseil"
          text="Nous aidons les dirigeants, DRH et managers à clarifier les rôles, fluidifier les processus et installer des pratiques RH solides, lisibles et applicables."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {consultingPoints.map((point, index) => (
            <MotionBlock key={point} delay={index * 0.035}>
              <div className="group flex min-h-32 flex-col justify-between rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan/25 hover:shadow-premium">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-night text-sm font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 font-display text-lg font-extrabold text-night">
                  {point}
                </p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeader
          align="left"
          eyebrow="Pourquoi HRDIAMOND"
          title="Un cabinet RH pensé pour les décisions importantes"
          text="La valeur d'un partenaire RH ne se limite pas à trouver des CV. Elle se mesure à la qualité du cadrage, à la clarté du processus et à la fiabilité du suivi."
        />

        <MotionBlock delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-gold/30 hover:shadow-premium"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gold/15 text-gold">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="font-bold leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-night px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 opacity-15 premium-grid" />
      <div className="relative mx-auto max-w-7xl">
        <MotionBlock className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">
            Process
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Une méthode lisible, de la première discussion au suivi
          </h2>
        </MotionBlock>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <MotionBlock key={step.title} delay={index * 0.07}>
              <motion.article
                className="relative h-full rounded-[1.75rem] border border-white/12 bg-white/8 p-6 backdrop-blur-xl"
                whileHover={{ y: -8 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <IconBadge icon={step.icon} dark />
                  <span className="font-display text-4xl font-extrabold text-white/12">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-extrabold">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-white/70">{step.text}</p>
              </motion.article>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <MotionBlock>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-night p-6 text-white shadow-premium sm:rounded-[2rem] sm:p-12 lg:p-14">
          <div className="absolute right-[-90px] top-[-140px] h-80 w-80 rotate-45 rounded-[70px] border border-cyan/30 bg-cyan/10" />
          <div className="absolute bottom-[-120px] left-[18%] h-72 w-72 rotate-45 rounded-[64px] border border-gold/30 bg-gold/10" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Decision RH
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Vous avez un besoin RH urgent ou stratégique ?
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
                Parlez-nous de votre besoin. HRDIAMOND vous oriente vers la
                solution la plus adaptée : recrutement, formation ou
                accompagnement RH.
              </p>
            </div>
            <PrimaryButton
              href={WHATSAPP_URL}
              className="bg-white text-night hover:bg-cyan"
            >
              Contacter HRDIAMOND sur WhatsApp
            </PrimaryButton>
          </div>
        </div>
      </MotionBlock>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    console.info("Demande HRDIAMOND prête pour intégration backend", payload);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="section-anchor bg-mist px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <MotionBlock>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
            Contact
          </p>
          <h2 className="font-display text-2xl font-extrabold leading-tight text-night sm:text-4xl lg:text-5xl">
            Parlons de votre prochain enjeu RH
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Une prise de contact claire suffit pour cadrer la suite :
            recrutement, formation, structuration ou conseil RH.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-4 rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:shadow-premium sm:items-center"
            >
              <IconBadge icon={MessageCircle} />
              <span className="min-w-0">
                <span className="block text-sm font-bold text-slate-500">
                  WhatsApp
                </span>
                <span className="block break-words font-display text-lg font-extrabold text-night sm:text-xl">
                  {WHATSAPP_NUMBER}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-start gap-4 rounded-3xl border border-white bg-white p-5 shadow-sm transition hover:shadow-premium sm:items-center"
            >
              <IconBadge icon={Mail} />
              <span className="min-w-0">
                <span className="block text-sm font-bold text-slate-500">
                  Email
                </span>
                <span className="block break-all font-display text-lg font-extrabold text-night sm:text-xl">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>
            <div className="flex items-start gap-4 rounded-3xl border border-white bg-white p-5 shadow-sm sm:items-center">
              <IconBadge icon={MapPin} />
              <span className="min-w-0">
                <span className="block text-sm font-bold text-slate-500">
                  Localisation
                </span>
                <span className="block break-words font-display text-lg font-extrabold text-night sm:text-xl">
                  {LOCATION}
                </span>
              </span>
            </div>
          </div>
        </MotionBlock>

        <MotionBlock delay={0.08}>
          <form
            onSubmit={handleSubmit}
            className="rounded-[1.5rem] border border-white bg-white p-5 shadow-premium sm:rounded-[2rem] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nom" name="nom" required />
              <Field label="Entreprise" name="entreprise" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Téléphone" name="telephone" type="tel" required />
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-extrabold text-night">
                Besoin
              </span>
              <select
                name="besoin"
                required
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/15"
              >
                {needs.map((need) => (
                  <option key={need}>{need}</option>
                ))}
              </select>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-extrabold text-night">
                Message
              </span>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/15"
                placeholder="Décrivez votre besoin en quelques lignes"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-night px-6 py-3 text-sm font-extrabold text-white shadow-premium transition hover:bg-ink focus:outline-none focus:ring-4 focus:ring-cyan/25 sm:w-auto"
            >
              Envoyer ma demande
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            {submitted ? (
              <p className="mt-4 rounded-2xl bg-cyan/10 px-4 py-3 text-sm font-bold text-night">
                Votre demande est prête. L'intégration backend pourra l'envoyer
                automatiquement.
              </p>
            ) : null}
          </form>
        </MotionBlock>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-extrabold text-night">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/15"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-night px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
              <span className="diamond-frame h-6 w-6 bg-gradient-to-br from-night via-cyan to-gold" />
            </span>
            <span className="font-display text-2xl font-extrabold">
              HRDIAMOND
            </span>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-white/70">
            Cabinet RH à Casablanca pour le recrutement, la formation
            professionnelle et l'accompagnement RH.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold">Services</h3>
          <div className="mt-4 grid gap-3 text-white/70">
            <a href="#recrutement" className="transition hover:text-cyan">
              Recrutement
            </a>
            <a href="#formation" className="transition hover:text-cyan">
              Formation professionnelle
            </a>
            <a href="#accompagnement" className="transition hover:text-cyan">
              Accompagnement RH
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-extrabold">Contact</h3>
          <div className="mt-4 grid gap-3 text-white/70">
            <a href={WHATSAPP_URL} className="transition hover:text-cyan">
              WhatsApp : {WHATSAPP_NUMBER}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all transition hover:text-cyan">
              Email : {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/50">
        © 2026 HRDIAMOND. Tous droits réservés.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter HRDIAMOND sur WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Proofs />
        <Services />
        <RecruitmentSection />
        <TrainingSection />
        <ConsultingSection />
        <WhySection />
        <ProcessSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
