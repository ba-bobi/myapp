// src/App.jsx
import React from "react";
import "./App.css";

// ⬇️ 여기에 본인 정보와 노션/링크드인 주소만 먼저 채워도 바로 보기 좋아요.
const profile = {
  name: "Shin, Bobi",
  title: "Marketing Data Analyst",
  summary: [
    "글로벌 경영 + AI 데이터 분석 전공",
    "Python·SQL·GA4 기반 분석/자동화 프로젝트 경험",
    "올리브영 크롤러/데이터 파이프라인 구축, RFM/세그멘테이션",
    "데이터로 브랜드와 고객을 연결하는 마케터 지향",
    "문제정의 → 데이터수집 → 분석 → 인사이트 → 실행에 강점",
  ],
  links: {
    notion: "https://www.notion.so/Who-am-I-47bc7492cbc44c97a16026bf549b2358",     // ← 노션 공개 URL 붙여주세요
    linkedin: "https://www.linkedin.com/in/%EB%B3%B4%EB%B9%84-%EC%8B%A0-951847212/",
    email: "bobi915@naver.com",
  },
  skills: ["Python", "MySQL", "GA4", "Excel/PowerQuery", "A/B Testing", "Dashboards"],
  projects: [
    { name: "Olive Young Crawler", desc: "Selenium + MySQL 파이프라인, 5,000+ 상품 수집 및 정제" },
    { name: "Marketing Analytics", desc: "RFM 분석·세그멘테이션 및 캠페인 인사이트 도출" },
  ],
  education: [
    { school: "Korea Univ. (Sejong)", degree: "Global Business + AI Data Analysis (Minor)" },
  ],
};

export default function App() {
  const { name, title, summary, links, skills, projects, education } = profile;

  return (
    <div style={{ maxWidth: 880, margin: "40px auto", padding: "0 20px", lineHeight: 1.7 }}>
      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>{name}</h1>
        <p style={{ margin: "6px 0 0", opacity: 0.85 }}>{title}</p>
        <div style={{ marginTop: 10, fontSize: 14 }}>
          {links.email && <a href={`mailto:${links.email}`} style={{ marginRight: 12 }}>Email</a>}
          {links.linkedin && <a href={links.linkedin} target="_blank">LinkedIn</a>}
          {links.notion && <> · <a href={links.notion} target="_blank">Notion</a></>}
        </div>
      </header>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>About</h2>
        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {summary.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Skills</h2>
        <p style={{ margin: 0 }}>{skills.join(" · ")}</p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Projects</h2>
        {projects.map((p, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <strong>{p.name}</strong> — <span style={{ opacity: 0.9 }}>{p.desc}</span>
          </div>
        ))}
      </section>

      <section>
        <h2 style={{ fontSize: 18, marginBottom: 8 }}>Education</h2>
        {education.map((e, i) => (
          <div key={i} style={{ marginBottom: 6 }}>
            <strong>{e.school}</strong> — {e.degree}
          </div>
        ))}
      </section>

      <footer style={{ marginTop: 28, textAlign: "center", fontSize: 12, opacity: 0.7 }}>
        © {new Date().getFullYear()} {name}
      </footer>
    </div>
  );
}
