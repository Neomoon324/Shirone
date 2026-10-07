/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
	},
	{
		id: 2,
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
	},
	{
		id: 3,
		title: "大学生活质量指北",
		imgurl: "https://cn.colleges.chat/assets/images/favicon.webp",
		desc: "关于大学生活质量的一切",
		siteurl: "https://cn.colleges.chat",
		tags: ["Docs"],
	},
	{
		id: 4,
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
	},
	{
		id: 5,
		title: "Mizuki",
		imgurl: "https://avatars.githubusercontent.com/u/225602409?v=4&s=640",
		desc: "Another Fuwari-based blog theme with docs",
		siteurl: "https://mizuki.mysqil.com",
		tags: ["Blog", "Theme"],
	},
	{
		id: 6,
		title: "Material 3",
		imgurl: "https://avatars.githubusercontent.com/u/19478152?v=4&s=640",
		desc: "Material Design 3 — the next generation of Material Design",
		siteurl: "https://m3.material.io",
		tags: ["Design"],
	},
];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
