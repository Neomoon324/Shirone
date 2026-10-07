import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "krkr_Sora",
	bio: "星星真美，因为有一朵看不见的花",
	links: [
		{
			name: "Bilibili",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/617333392",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/Neomoon324",
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:1507887693@qq.com",
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss.xml",
		},
	],
});
