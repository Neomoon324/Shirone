/**
 * 站点罗盘数据（本地数据源）。
 * 用途：src/pages/compass.astro → organisms/CompassSection → molecules/CompassTile。
 * 添加站点：往对应 Shelf.entries 追加一项；数组顺序即展示顺序。
 * - icon：Iconify 名（material-symbols:xxx）或图片 URL（http(s)/绝对路径）；
 *   省略时瓷砖显示 label 首字母 tonal 块（不自动抓取 favicon）。
 * - image：用户自定义图片 URL（http(s)/绝对路径），优先于 icon 渲染；
 *   加载失败自动降级为首字母块。
 */

/** 单条站点记录 */
export interface CompassEntry {
	/** 站点名（瓷砖标题） */
	label: string;
	/** 外链地址 */
	href: string;
	/** 一句话说明（瓷砖副行；省略则显示域名） */
	note?: string;
	/** 图标：Iconify 名或图片 URL；省略 = 首字母兜底 */
	icon?: string;
	/** 用户自定义图片（http(s)/绝对路径）：优先于 icon 渲染；省略则走 icon/首字母 */
	image?: string;
}

/** 分组（Shelf = 罗盘上的收纳格） */
export interface CompassShelf {
	/** 锚点 id（字母数字，作分组定位与跳转） */
	key: string;
	/** 分组名 */
	name: string;
	/** 分组图标（Iconify 名，SectionTitle 行首） */
	icon?: string;
	/** 分组副文案（标题下弱文本，可选） */
	blurb?: string;
	entries: CompassEntry[];
}

export const compassData: CompassShelf[] = [
	{
		key: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		blurb: "实用工具与在线服务",
		entries: [
			{
				label: "Squoosh",
				href: "https://squoosh.app",
				note: "谷歌出品的图片压缩与格式转换工具",
			},
			{
				label: "TinyPNG",
				href: "https://tinypng.com",
				note: "在线压缩PNG/JPEG图片",
				icon: "material-symbols:file-png",
			},
			{
				label: "Crx搜搜",
				href: "https://www.crxsoso.com",
				note: "Chrome 扩展商店搜索",
				icon: "fa7-brands:chrome",
			},
			{
				label: "OpenYYY",
				href: "https://www.openyyy.com",
				note: "多种云音乐格式转MP3",
				icon: "material-symbols:music-note",
			},
		],
	},
	{
		key: "reads",
		name: "资源",
		icon: "material-symbols:auto-stories-outline-rounded",
		blurb: "文档，教程与阅读",
		entries: [
			{
				label: "Z-library",
				href: "https://zh.101f.by",
				note: "全球最大的图书共享平台",
				icon: "material-symbols:book-2",
			},
			{
				label: "Solidot",
				href: "https://www.solidot.org",
				note: "科技与文化新闻",
				icon: "material-symbols:public-rounded",
			},
		],
	},
	{
		key: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		blurb: "好用的开发网站和项目",
		entries: [
			{
				label: "GitHub",
				href: "https://github.com",
				note: "全球最大的代码托管平台",
				icon: "fa7-brands:github",
			},
			{
				label: "MDN",
				href: "https://developer.mozilla.org",
				note: "最权威的 Web 技术文档",
				icon: "material-symbols:menu-book-rounded",
			},
			{
				label: "Stack Overflow",
				href: "https://stackoverflow.com",
				note: "Q&A and debugging",
				icon: "fa7-brands:stack-overflow",
			},
		],
	},
	{
		key: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		blurb: "配色，图标与灵感来源",
		entries: [
			{
				label: "Iconify",
				href: "https://icon-sets.iconify.design",
				note: "Searchable open-source icon sets",
			},
			{
				label: "Material Symbols",
				href: "https://fonts.google.com/icons",
				note: "Official M3 icon set",
				icon: "material-symbols:star-rounded",
			},
			{
				label: "Excalidraw",
				href: "https://excalidraw.com",
				note: "Hand-drawn whiteboard collaboration",
				icon: "material-symbols:draw-outline",
			},
		],
	},
];
