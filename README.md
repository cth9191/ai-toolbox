# The AI Builder's Toolbox

**What to reach for, by the thing you're actually trying to do.**

148 curated skills, repos and tools across 19 domains.

> Every link here was checked against the GitHub API or a live HTTP request. Curated from what I actually use and talk about, not scraped from an awesome-list.

## Contents

- [My Skills](#chase-originals) — The ones I built that are worth your time.
- [Skill & Plugin Collections](#skills-collections) — Don't write a skill before checking whether someone already did.
- [Frontend & Design](#frontend-design) — Stopping your agent from producing generic purple-gradient slop.
- [CLI & Terminal](#cli) — Agents are best at things that have a command line. This is how you give them one.
- [Browser & Web Automation](#browser-automation) — Letting the agent drive a real browser.
- [Context & Token Management](#context-tokens) — The single biggest lever on cost and on whether long sessions stay coherent.
- [RAG & Knowledge Graphs](#rag-graphs) — Getting your own material into the model reliably.
- [Second Brain & Notes](#second-brain) — Where the knowledge lives when it isn't code.
- [Diagrams & Visual Explainers](#diagrams) — For when the answer is a picture, not a paragraph.
- [Research & Intelligence](#research) — Finding out what's actually true and actually current.
- [Agents & Orchestration](#agents-orchestration) — Running more than one agent without losing the plot.
- [Video, Audio & Content](#media) — Turning work into something people can watch.
- [Voice & Dictation](#voice) — Talking to your machine is roughly 3x faster than typing at it.
- [Deployment & Infrastructure](#deployment) — Getting it off your laptop.
- [Security & Code Review](#security-review) — The part people skip right up until they can't.
- [Work, Career & Ops](#work-ops) — Agents pointed at things that aren't code.
- [Learning & Guides](#learning) — Send these to someone who just installed Claude Code and is staring at a blinking cursor.
- [Editors & Harnesses](#editors) — Where you sit while the agent works.
- [Models, Routing & Cost](#models-cost) — Picking the right model and not overpaying for it.

<a id="chase-originals"></a>

## My Skills

*The ones I built that are worth your time.*

| Tool | What it’s for |
|---|---|
| [cloneify](https://github.com/cth9191/cloneify) | Turns "I want to clone X" into a paste-ready build prompt via a gated scope → research → reviewed-plan pipeline. |
| [scroll-world](https://github.com/cth9191/scroll-world) | Immersive scroll-scrubbed "fly through the world" landing pages, generated with Higgsfield. My fork of oso95/scroll-world. |
| [grill-me-codex](https://github.com/chaseai-yt/grill-me-codex) | Interviews you until the plan is airtight, then has Codex adversarially attack it before you write code. |

<a id="skills-collections"></a>

## Skill & Plugin Collections

*Don't write a skill before checking whether someone already did.*

| Tool | What it’s for |
|---|---|
| [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) | The big hand-picked community list. Go here when this page doesn't have it. |
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | Anthropic-curated plugin directory. Safest place to install from first. |
| [anthropics/skills](https://github.com/anthropics/skills) | Official Agent Skills repo. Read one SKILL.md and you'll understand the whole format. |
| [obra/superpowers](https://github.com/obra/superpowers) | The biggest agentic-skills framework going, plus an opinionated methodology. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Straight out of Matt Pocock's .agents directory. Heavy TypeScript bias, high quality. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | Production-grade engineering skills from Addy Osmani. |
| [garrytan/gstack](https://github.com/garrytan/gstack) | Garry Tan's literal Claude Code setup — 23 opinionated tools wired as a team. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | Harness performance system: skills, instincts, memory, security in one bundle. |
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | A management layer once you have too many skills to keep straight. |
| [rohitg00/awesome-claude-code-toolkit](https://github.com/rohitg00/awesome-claude-code-toolkit) | 135 agents, 35 skills, 42 commands in one place. |
| [phuryn/pm-skills](https://github.com/phuryn/pm-skills) | Product-management skills — discovery through strategy. Not everything is code. |
| [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | CRO, copywriting, SEO and growth skills. |
| [slavingia/skills](https://github.com/slavingia/skills) | Sahil Lavingia's skills, built around The Minimalist Entrepreneur. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | 100+ agent and RAG apps you can read as worked examples. |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | Official notebooks. The fastest way to learn a technique properly. |

<a id="frontend-design"></a>

## Frontend & Design

*Stopping your agent from producing generic purple-gradient slop.*

| Tool | What it’s for |
|---|---|
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | A design language you drop in so the agent stops defaulting to bootstrap-brain. |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | Gives the model actual taste. The anti-slop skill people mean when they say anti-slop. |
| [Nutlope/hallmark](https://github.com/Nutlope/hallmark) | Same job as the two above, different opinion. Works in Claude Code, Cursor and Codex. |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | DESIGN.md files reverse-engineered from real brand systems. Drop one in your repo. |
| [google-labs-code/design.md](https://github.com/google-labs-code/design.md) | The actual spec for describing a visual identity to a coding agent. |
| [21st.dev](https://21st.dev) | Component marketplace + MCP so the agent can pull real UI instead of inventing it. |
| [shadcn/ui](https://ui.shadcn.com) | The component library most agent-generated React lands on. Know it. |
| [shadcn/improve](https://github.com/shadcn/improve) | Use your best model to audit the codebase, then let a cheap model execute the plan. |
| [nexu-io/open-design](https://github.com/nexu-io/open-design) | Local-first desktop app; open-source take on Claude Design. |
| [facebook/astryx](https://github.com/facebook/astryx) | Open-source design system built to be driven by an agent. |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | HTML-native design skill — good when you want markup, not a framework. |
| [nexu-io/html-anything](https://github.com/nexu-io/html-anything) | Agentic HTML editor. Agent writes the markup, you ship it. |
| [Tailwind CSS](https://tailwindcss.com) | Assume every agent already knows it. Fight this and you'll lose. |
| [oil-oil/oil-motion](https://github.com/oil-oil/oil-motion) | Smooth, responsive web animations without hand-rolling easing curves. |
| [Jakubantalik/thinking-orbs](https://github.com/Jakubantalik/thinking-orbs) | Loading indicators built specifically for AI/agent UIs. Small but you'll want it. |
| [Figma](https://figma.com) | Still where the design actually gets decided before code touches it. |

<a id="cli"></a>

## CLI & Terminal

*Agents are best at things that have a command line. This is how you give them one.*

| Tool | What it’s for |
|---|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Makes any software agent-native by giving it a CLI. The big idea on this whole page. |
| [jackwener/OpenCLI](https://github.com/jackwener/OpenCLI) | Turns any website into a CLI, using your already-logged-in browser. |
| [googleworkspace/cli](https://github.com/googleworkspace/cli) | One command for Drive, Gmail, Calendar, Sheets and Docs. Official. |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | Office suite built so agents can read and edit documents directly. |
| [herdrdev/herdr](https://github.com/herdrdev/herdr) | A runtime for your coding agents to actually live on. |
| [cli/cli](https://github.com/cli/cli) | GitHub's own CLI. PRs, issues, releases, Actions — all scriptable by an agent. |
| [anthropics/anthropic-cli](https://github.com/anthropics/anthropic-cli) | Official CLI for the Claude API. Handy for quick scripted calls. |
| [junegunn/fzf](https://github.com/junegunn/fzf) | Fuzzy finder. Rewires how you use a terminal within a day. |
| [BurntSushi/ripgrep](https://github.com/BurntSushi/ripgrep) | The fast grep. Already what your agent reaches for under the hood. |
| [jesseduffield/lazygit](https://github.com/jesseduffield/lazygit) | Git you can actually see. Best way to review what an agent just committed. |
| [sharkdp/bat](https://github.com/sharkdp/bat) | cat with syntax highlighting and line numbers. |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) | Downloads audio and video from nearly anywhere. Backbone of most video pipelines. |

<a id="browser-automation"></a>

## Browser & Web Automation

*Letting the agent drive a real browser.*

| Tool | What it’s for |
|---|---|
| [Playwright](https://playwright.dev) | The automation library to standardise on. Screenshots, forms, scraping, tests. |
| [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) | Record actions and get generated Playwright code back. |
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | Self-healing harness so LLM web tasks survive a changed selector. |
| [alibaba/page-agent](https://github.com/alibaba/page-agent) | In-page GUI agent — drive a web interface in natural language. |
| [JCodesMore/ai-website-cloner-template](https://github.com/JCodesMore/ai-website-cloner-template) | Clone any site with one command. Great for studying a layout you like. |
| [ShawnPana/phone-harness](https://github.com/ShawnPana/phone-harness) | Lets an agent control your actual phone. |

<a id="context-tokens"></a>

## Context & Token Management

*The single biggest lever on cost and on whether long sessions stay coherent.*

| Tool | What it’s for |
|---|---|
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | "Why use many token when few token do trick." Cuts roughly 65% of tokens. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes the agent think like the laziest senior dev alive. Best code is the code you don't write. |
| [Mibayy/token-savior](https://github.com/Mibayy/token-savior) | MCP server that held 97.9% on a real coding benchmark at 80% fewer active tokens. |
| [thomaschill/unclog](https://github.com/thomaschill/unclog) | Audits which MCP servers, skills and CLAUDE.md bloat are eating your context window. |
| [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Indexes a codebase into a persistent knowledge graph so the agent stops re-reading everything. |
| [MemPalace/mempalace](https://github.com/MemPalace/mempalace) | Best-benchmarked open-source memory system, and free. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | Team-level shared memory hub rather than per-developer memory. |

<a id="rag-graphs"></a>

## RAG & Knowledge Graphs

*Getting your own material into the model reliably.*

| Tool | What it’s for |
|---|---|
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | Simple, fast, graph-flavoured RAG. The default I'd start from. |
| [HKUDS/RAG-Anything](https://github.com/HKUDS/RAG-Anything) | All-in-one RAG framework from the same lab when LightRAG isn't enough. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Turns a codebase plus its docs, schemas and PDFs into a queryable knowledge graph. |
| [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) | RAG aimed squarely at multi-language monorepos. |
| [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph) | Local-first persistent map of your codebase, exposed over MCP and CLI. |
| [langchain-ai/openwiki](https://github.com/langchain-ai/openwiki) | Writes and then maintains agent-facing docs for your repo. |
| [pgvector/pgvector](https://github.com/pgvector/pgvector) | Vectors inside Postgres. Usually the right answer before you buy a vector DB. |
| [Chroma](https://trychroma.com) | Easiest local vector store to get running in an afternoon. |

<a id="second-brain"></a>

## Second Brain & Notes

*Where the knowledge lives when it isn't code.*

| Tool | What it’s for |
|---|---|
| [Obsidian](https://obsidian.md) | Plain markdown on your disk. That's exactly why agents work well against it. |
| [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills) | Teaches your agent the Obsidian CLI and open formats. From Obsidian's own CEO. |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Self-organising second brain — drop any source in and it files itself. |
| [NotebookLM](https://notebooklm.google.com) | Best free tool for interrogating a pile of sources you didn't write. |
| [teng-lin/notebooklm-py](https://github.com/teng-lin/notebooklm-py) | Unofficial Python API + skill. Gets you features the web UI doesn't expose. |
| [pjeby/hot-reload](https://github.com/pjeby/hot-reload) | Auto-reloads Obsidian plugins while you build them. Tiny, essential. |

<a id="diagrams"></a>

## Diagrams & Visual Explainers

*For when the answer is a picture, not a paragraph.*

| Tool | What it’s for |
|---|---|
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 29 editorial diagram types as clean HTML+SVG. No Mermaid look, no drop shadows. |
| [tt-a1i/archify](https://github.com/tt-a1i/archify) | Architecture, sequence, data-flow and lifecycle diagrams that are actually verifiable. |
| [coleam00/excalidraw-diagram-skill](https://github.com/coleam00/excalidraw-diagram-skill) | Makes any coding agent produce real Excalidraw files. |
| [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | Natural language in, production-quality SVG/PNG technical diagrams out. |
| [Excalidraw](https://excalidraw.com) | The hand-drawn whiteboard. Fastest path from head to shareable picture. |
| [Mermaid](https://mermaid.js.org) | Diagrams as text. Renders natively in GitHub and most docs tools. |

<a id="research"></a>

## Research & Intelligence

*Finding out what's actually true and actually current.*

| Tool | What it’s for |
|---|---|
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Researches a topic across Reddit, X, YouTube, HN and Polymarket. My most-used research skill. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Gives the agent eyes on Twitter, Reddit and YouTube instead of guessing. |
| [Firecrawl](https://firecrawl.dev) | Search and scrape the live web at scale, in a format models can read. |
| [firecrawl/anydoc](https://github.com/firecrawl/anydoc) | Word, PowerPoint, Excel, EPUB, PDF → clean Markdown. |
| [baidu/Unlimited-OCR](https://github.com/baidu/Unlimited-OCR) | One-shot parsing of very long documents. Good where normal OCR falls over. |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Agents running their own research loop. Worth reading even if you never run it. |
| [koala73/worldmonitor](https://github.com/koala73/worldmonitor) | Real-time news and geopolitical dashboard, AI-aggregated. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Personalised tutoring that persists across sessions. |
| [every-app/open-seo](https://github.com/every-app/open-seo) | Open-source answer to Semrush and Ahrefs. |

<a id="agents-orchestration"></a>

## Agents & Orchestration

*Running more than one agent without losing the plot.*

| Tool | What it’s for |
|---|---|
| [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) | A whole agency of role-specialised agents, frontend through community. |
| [stablyai/orca](https://github.com/stablyai/orca) | An IDE for driving a fleet of parallel agents, whichever harness you use. |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | Call Codex from inside Claude Code for reviews and delegated tasks. Two models beat one. |
| [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Terminal built for running several coding agents at once. |
| [yc-software/qm](https://github.com/yc-software/qm) | Multiplayer agent harness — built for teams, not solo runs. |
| [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | Agent swarm behind a single command. |
| [louislva/claude-peers-mcp](https://github.com/louislva/claude-peers-mcp) | Lets your separate Claude Code instances talk to each other. |
| [vercel/eve](https://github.com/vercel/eve) | Vercel's open framework for building agents. |
| [chaseai-yt/grill-me-codex](https://github.com/chaseai-yt/grill-me-codex) | Mine. Interviews you until the plan is airtight, then makes Codex attack it before you build. |

<a id="media"></a>

## Video, Audio & Content

*Turning work into something people can watch.*

| Tool | What it’s for |
|---|---|
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Agentic video production — 12 pipelines, 100+ operations. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | /watch downloads a video, pulls frames and transcribes it. Claude can finally see video. |
| [Higgsfield](https://higgsfield.ai) | Image and video generation I use for covers and B-roll. |
| [Remotion](https://remotion.dev) | Video as React components. Programmatic, diffable, repeatable. |
| [diffusionstudio/lottie](https://github.com/diffusionstudio/lottie) | Production-ready Lottie animations straight out of Claude Code or Codex. |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | Genuinely good-looking HTML slide decks — editorial and Swiss layouts. |
| [ElevenLabs](https://elevenlabs.io) | Voiceover that doesn't sound like 2023. |
| [Zackriya-Solutions/meetily](https://github.com/Zackriya-Solutions/meetily) | Privacy-first meeting notes. Live transcription, runs locally. |
| [img2threejs/img2threejs](https://github.com/img2threejs/img2threejs) | Reference image → animation-ready procedural Three.js. Genuinely surprising. |
| [beshuaxian/higgsfield-seedance2-jineng](https://github.com/beshuaxian/higgsfield-seedance2-jineng) | 15 Seedance 2.0 × Higgsfield video skills — hook framework, camera encyclopedia, production prompts. |

<a id="voice"></a>

## Voice & Dictation

*Talking to your machine is roughly 3x faster than typing at it.*

| Tool | What it’s for |
|---|---|
| [PinW/whisper-key-local](https://github.com/PinW/whisper-key-local) | Global hotkey to record speech and transcribe straight to your cursor. Runs locally. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Build a local voice agent from open models. |

<a id="deployment"></a>

## Deployment & Infrastructure

*Getting it off your laptop.*

| Tool | What it’s for |
|---|---|
| [Vercel](https://vercel.com) | Fastest path to a live frontend. The CLI is fully agent-drivable. |
| [Railway](https://railway.com) | Where I put things that need a real backend and a database. |
| [Supabase](https://supabase.com) | Postgres, auth, storage and vectors. Usually the whole backend. |
| [supabase/supabase](https://github.com/supabase/supabase) | Self-host it if you'd rather not rent it. |
| [Netlify](https://netlify.com) | The other obvious static/edge host. |
| [Fly.io](https://fly.io) | Containers close to your users, without a Kubernetes hobby. |
| [Docker](https://docker.com) | Still the unit of "works on my machine" being false. |
| [apple/container](https://github.com/apple/container) | Linux containers on Apple silicon via lightweight VMs. Fast. |
| [anthropic-experimental/sandbox-runtime](https://github.com/anthropic-experimental/sandbox-runtime) | Filesystem and network limits on agent-run code. Read this before you go autonomous. |
| [anthropics/claude-code-action](https://github.com/anthropics/claude-code-action) | Runs Claude Code inside GitHub Actions. |

<a id="security-review"></a>

## Security & Code Review

*The part people skip right up until they can't.*

| Tool | What it’s for |
|---|---|
| [usestrix/strix](https://github.com/usestrix/strix) | Open-source AI pentesting against your own app. Finds and helps fix. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Battle-tested at Alibaba scale. Hybrid static + model review. |
| [anthropics/defending-code-reference-harness](https://github.com/anthropics/defending-code-reference-harness) | Threat modelling, scanning, triage and patching skills from Anthropic. |

<a id="work-ops"></a>

## Work, Career & Ops

*Agents pointed at things that aren't code.*

| Tool | What it’s for |
|---|---|
| [paperclipai/paperclip](https://github.com/paperclipai/paperclip) | Managing agents as actual coworkers. Open source. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | Scans job boards and grades listings against a structured A-F rubric. |
| [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search) | The same idea, running entirely on your machine. |
| [interviewstreet/hiring-agent](https://github.com/interviewstreet/hiring-agent) | Scores resumes. Useful from either side of the table. |
| [n8n](https://n8n.io) | Self-hostable automation. The glue when a skill isn't the right shape. |
| [Composio](https://composio.dev) | Pre-built tool integrations so you don't write another OAuth flow. |

<a id="learning"></a>

## Learning & Guides

*Send these to someone who just installed Claude Code and is staring at a blinking cursor.*

| Tool | What it’s for |
|---|---|
| [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto) | Visual, example-driven, basics to advanced agents. Best first stop. |
| [FlorianBruniaux/claude-code-ultimate-guide](https://github.com/FlorianBruniaux/claude-code-ultimate-guide) | The most complete single guide: workflows, hooks, skills, MCP. |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | 12 weeks, 24 lessons. Actual fundamentals, not prompt tricks. |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | Extracted system prompts. Read them to see how the pros really write instructions. |
| [Model Context Protocol](https://modelcontextprotocol.io) | The spec behind MCP servers. Worth 20 minutes before you install your first one. |

<a id="editors"></a>

## Editors & Harnesses

*Where you sit while the agent works.*

| Tool | What it’s for |
|---|---|
| [Cursor](https://cursor.com) | The IDE most people arrive from. Still excellent at inline edits. |
| [Zed](https://zed.dev) | Very fast, collaborative, increasingly agent-native. |
| [openai/codex](https://github.com/openai/codex) | OpenAI's terminal agent. Best used as a second opinion on Claude's work. |
| [xai-org/grok-build](https://github.com/xai-org/grok-build) | xAI's harness and TUI. Fullscreen, mouse-interactive, extensible. |
| [Warp](https://warp.dev) | Terminal with agent features baked in rather than bolted on. |

<a id="models-cost"></a>

## Models, Routing & Cost

*Picking the right model and not overpaying for it.*

| Tool | What it’s for |
|---|---|
| [OpenRouter](https://openrouter.ai) | One API key, most models. Easiest way to A/B a model without a new account. |
| [Artificial Analysis](https://artificialanalysis.ai) | Independent speed, cost and quality benchmarks. Check before believing a launch post. |
| [LLM-Stats](https://llm-stats.com) | Fast side-by-side of price and context window. |
| [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) | MIT-licensed gateway: 330+ providers, 1200+ models, many free. |
| [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) | One local control plane to route Claude Code across different models. |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | The proxy layer most production stacks end up using. |
| [AlexsJones/llmfit](https://github.com/AlexsJones/llmfit) | One command tells you which models your actual hardware can run. |
| [Ollama](https://ollama.com) | Local models with the least ceremony. |
| [LM Studio](https://lmstudio.ai) | Ollama with a GUI. Better for people who don't live in a terminal. |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | Runs frontier MoE models on hardware you already own. Pure C, zero deps. |

---

## How this is built

`data/tools.json` is the single source of truth. Everything else is generated:

```bash
node scripts/build.mjs        # regenerate README.md + dist/
node scripts/check-links.mjs  # re-verify every link still resolves
```

Star counts were captured on 2026-08-13 and will drift. Re-run `check-links.mjs` to refresh them.

## Contributing

Add an entry to `data/tools.json` and run the build. Two rules:

1. **The link must resolve.** `check-links.mjs` runs against every entry — a dead link fails the check.
2. **The one-liner says what it’s *for*,** not what its README claims. If you can’t say why someone would open it, leave it out.
