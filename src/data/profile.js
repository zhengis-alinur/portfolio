// Language-neutral facts. Everything a visitor reads lives in src/i18n/locales.

export const profile = {
	name: 'Alinur Zhengis',
	english: 'B2',
	currently: 'WeGlobal.ai',
	cv: '/Alinur_Zhengis_CV.pdf',
};

export const contacts = [
	{ id: 'email', value: 'zhengis.alinur.erzhan@gmail.com', href: 'mailto:zhengis.alinur.erzhan@gmail.com' },
	{ id: 'whatsapp', value: '+7 702 108 19 59', copy: '+77021081959', href: 'https://wa.me/77021081959' },
	{ id: 'telegram', value: '@zh_alinur', href: 'https://t.me/zh_alinur' },
	{
		id: 'linkedin',
		value: 'in/zhengis-alinur',
		copy: 'https://www.linkedin.com/in/zhengis-alinur/',
		href: 'https://www.linkedin.com/in/zhengis-alinur/',
	},
	{ id: 'github', value: 'zhengis-alinur', copy: 'https://github.com/zhengis-alinur', href: 'https://github.com/zhengis-alinur' },
];

export const jobs = [
	{
		id: 'weglobal',
		company: 'WeGlobal.ai',
		role: 'Senior Full Stack Developer',
		start: '2025-08',
		place: 'astana',
		current: true,
		stack: ['Vue 3', 'TypeScript', 'Node.js', 'OpenAI API', 'RAG'],
	},
	{
		id: 'freedom',
		company: 'Freedom Telecom Kazakhstan',
		role: 'Full Stack Developer',
		start: '2025-08',
		end: '2026-06',
		place: 'remote',
		project: true,
		stack: ['Next.js', 'React', 'TypeScript', 'MapLibre'],
	},
	{
		id: 'epam',
		company: 'EPAM Systems',
		role: 'Full Stack Engineer',
		start: '2023-11',
		end: '2025-08',
		place: 'hybrid',
		stack: ['React', 'TypeScript', 'NestJS', 'GraphQL', 'MongoDB'],
	},
	{
		id: 'itransition',
		company: 'Itransition Group',
		role: 'Software Engineer',
		start: '2023-07',
		end: '2023-09',
		place: 'remote',
		stack: ['React', 'Node.js', 'MongoDB', 'MySQL'],
	},
	{
		id: 'yandex',
		company: 'Yandex',
		role: 'Frontend Developer',
		start: '2023-03',
		end: '2023-05',
		stack: ['React', 'TypeScript', 'Redux', 'GraphQL', 'RxJS', 'Jest'],
	},
];

export const skills = [
	{
		id: 'ai',
		wide: true,
		items: ['OpenAI API', 'Streaming', 'Tool / function calling', 'Prompt engineering', 'Embeddings', 'Semantic search', 'RAG', 'Agent routing', 'MCP', 'Skills', 'Evaluations'],
	},
	{ id: 'languages', items: ['TypeScript', 'JavaScript', 'SQL'] },
	{ id: 'backend', items: ['Node.js', 'NestJS', 'Express.js', 'GraphQL', 'REST APIs', 'MongoDB', 'PostgreSQL', 'MySQL'] },
	{ id: 'frontend', items: ['React', 'Next.js', 'Vue 3', 'Redux', 'Pinia', 'Zustand', 'TanStack Query', 'MapLibre', 'shadcn/ui'] },
	{ id: 'engineering', items: ['Jest', 'RxJS', 'Git', 'CI/CD', 'Role-based access control', 'Caching', 'Feature-Sliced Design'] },
];

export const education = [
	{ id: 'mti', period: '2023 — 2026' },
	{ id: 'spbu', period: '2018 — 2023' },
];

// The letters are quoted as written, in English, in every locale.
export const recommendations = [
	{
		id: 'kristina',
		author: 'Kristina Volosiuk',
		href: 'https://www.linkedin.com/in/kristina-volosiuk-815354ab/',
		role: 'Frontend Developer — Yandex Market',
		date: '2023-06-05',
		text: [
			'I was Alinur’s mentor for 5 weeks and I can give very positive feedback without any doubt. Alinur showed himself as a very responsible, motivated developer, who is not afraid to dive deep into new tools and products and get into them on his own in a short time. During the internship Alinur helped our team a lot with various tasks, both simple and complex, and the team and I were very happy with Alinur’s work. I would be happy to work together in the future.',
		],
	},
	{
		id: 'ivan',
		author: 'Ivan Stanevich',
		href: 'https://www.linkedin.com/in/ivan-stanevich-678708149/',
		role: 'Software Engineer | Team lead — Itransition Group',
		date: '2023-09-27',
		text: [
			'I have had the privilege of mentoring Alinur during their web development course, and I am consistently impressed by their skills and dedication.',
			'Alinur is an exceptional web developer with a strong focus on front-end development. They excel in using React, TypeScript, Hooks, form validation, ESLint, and PostCSS to create dynamic and responsive user interfaces. Their commitment to maintaining an atomic commit structure in their work ensures clear version control and collaboration.',
			'Moreover, Alinur possesses a remarkable ability to decompose complex tasks into manageable steps. This skill has been pivotal in their project management, allowing them to tackle large projects with precision and efficiency.',
			'On the back end, their proficiency with MySQL, Express, and Sequelize is equally impressive. What sets Alinur apart is their readiness to embrace emerging technologies like WebSockets, demonstrating a commitment to staying at the forefront of web development trends.',
			'I highly recommend Alinur to any team or project looking for a talented web developer who not only delivers high-quality work with precision and passion but also excels in maintaining best practices in version control and project management.',
		],
	},
];
