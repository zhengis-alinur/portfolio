// Rich strings are functions: `b` wraps a fact in bold, `hl` highlights a phrase in the accent colour.
const en = {
	code: 'en',
	label: 'EN',
	name: 'English',
	meta: {
		title: 'Alinur Zhengis — Fullstack Software Engineer',
		description: 'Alinur Zhengis — fullstack software engineer in Astana building AI-powered web products with TypeScript, Node.js, React and Vue.',
	},
	title: 'Fullstack Software Engineer',
	months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
	longDate: (day, month, year) =>
		`${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month]} ${day}, ${year}`,
	now: 'now',
	places: { astana: 'Astana, Kazakhstan', remote: 'Remote', hybrid: 'Hybrid' },
	ui: {
		skip: 'Skip to content',
		sections: 'Sections',
		openMenu: 'Open menu',
		closeMenu: 'Close menu',
		language: 'Language',
		downloadCv: 'Download CV',
		backToTop: 'Back to top',
		logo: 'Alinur Zhengis, back to top',
		quote: 'Quote',
		stack: 'Stack',
	},
	sections: {
		experience: 'experience',
		skills: 'skills',
		'about-me': 'about-me',
		recommendations: 'recommendations',
		contacts: 'contacts',
	},
	hero: {
		lines: ['Alinur is a', 'fullstack', 'software engineer'],
		lead: 'I build AI-powered web products with TypeScript and Node.js: OpenAI integrations, RAG pipelines and tool-calling workflows, plus the React and Vue interfaces people actually use.',
		contact: 'Contact me',
		streaming: 'streaming…',
		ready: 'ready',
		currently: (b) => <>Currently working at {b}</>,
		portraitAlt: 'Alinur Zhengis',
	},
	quote: {
		text: 'The best way to predict the future is to invent it.',
		author: 'Alan Kay',
	},
	experience: {
		project: 'project',
		points: {
			weglobal: [
				'Integrated the OpenAI API into an education platform: chat completions, streamed responses, and tool/function calling through Node.js services and a Vue 3 interface.',
				'Built a RAG pipeline for educational content — document ingestion, chunking, embeddings, and vector-similarity search — generating answers with source citations.',
				'Developed system prompts and reusable skills for educational workflows; evaluated retrieval relevance, answer grounding, and tool selection on a regression question set.',
				'Implemented agent tool loops and routing between specialized workflows, with validated arguments, bounded execution, and error handling; connected tools through MCP.',
				'Applied role-based and regional access controls to retrieved content and tool execution; used SQL for application data and tracked API latency and token usage.',
			],
			freedom: [
				'Built telecom platform features with the Next.js App Router and MapLibre interfaces for layered map data; contributed to the migration from Ant Design to shadcn/ui.',
				'Standardized forms and validation with shared components and Zod; used TanStack Query caching and Zustand for server and client state on data-heavy screens.',
				'Prototyped an OpenAI-powered assistant for searching internal telecom documentation, with retrieval-grounded answers, source citations, and a streamed chat interface.',
			],
			epam: [
				'Developed frontend features and backend APIs for a business-workflow platform with AI functionality.',
				'Built GraphQL APIs with NestJS and MongoDB, implementing pagination to support large datasets.',
				'Developed reusable React components and integrated lazy loading for data-heavy interfaces.',
			],
			itransition: [
				'Developed full-stack application features with React and Node.js; implemented data access with Mongoose and Sequelize.',
			],
			yandex: [
				'Extracted B2B delivery logic into a microfrontend and removed duplicated code; developed delivery-system UI features.',
				'Migrated frontend data fetching from gRPC to GraphQL, resolved production defects, and tested asynchronous RxJS flows with marble tests.',
			],
		},
	},
	skills: {
		ai: 'AI engineering',
		languages: 'Languages',
		backend: 'Backend & data',
		frontend: 'Frontend',
		engineering: 'Engineering',
	},
	about: {
		hello: 'Hello, I’m Alinur!',
		paragraphs: [
			(b) => (
				<>
					I’m a fullstack software engineer based in Astana with 3+ years across education, telecom, and business
					platforms, including {b('Yandex')}, {b('Itransition')}, and {b('EPAM Systems')}.
				</>
			),
			(b) => (
				<>
					Today I’m a Senior Full Stack Developer at {b('WeGlobal.ai')}, building AI into an education platform: OpenAI
					integrations, RAG with source citations, and agent tool loops connected through MCP. I like owning a feature end
					to end, from Node.js services and access control to the React or Vue interface, and checking that the AI parts
					hold up with real evaluations.
				</>
			),
			() => (
				<>
					I’m always open to offers and to joining a strong team, building interesting products, and making a real
					contribution to their development.
				</>
			),
		],
		photoAlt: 'Alinur working at a laptop',
		language: 'Language',
		english: (level) => `English — ${level}`,
		education: {
			mti: { school: 'Moscow Technological Institute', degree: 'Bachelor’s degree, Applied Informatics' },
			spbu: { school: 'Saint Petersburg State University', degree: 'Computational Physics' },
		},
	},
	recommendations: {
		readMore: 'Read the full recommendation',
		readLess: 'Show less',
		note: (first, date) => `${date} · ${first} was Alinur’s mentor`,
		original: null,
	},
	contacts: {
		heading: (hl) => <>Got a product that needs {hl('frontend, backend, and AI')} in one pair of hands?</>,
		body: 'I’m interested in a strong, a bit crazy, and interesting team. If you have a role, a request, or a question, don’t hesitate to contact me.',
		email: 'Write an email',
		labels: { email: 'Email', whatsapp: 'Phone / WhatsApp', telegram: 'Telegram', linkedin: 'LinkedIn', github: 'GitHub' },
		copy: (label) => `Copy ${label.toLowerCase()}`,
		copied: (label) => `${label} copied`,
		copyFailed: 'Couldn’t copy. Select the text instead.',
	},
};

export default en;
