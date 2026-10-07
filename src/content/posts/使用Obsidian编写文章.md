---
title: 使用Obsidian更简单地编写博客文章
published: 2026-08-19
description: 如何使用Obsidian，更方便地插入模板图片，使用表格代码块等功能
image: ./1.avif
category: 博客指南
lang: ""
---

# Obsidian介绍

博客部署完毕，下一步便是开始写文章。

然而，对于我，**一个用惯了手机笔记软件的博客小白**来说，使用VScode编写博客似乎不够方便——图片的插入，代码块的编写都有些麻烦，毕竟VScode不是专用来写博客的，我需要一个方便的笔记软件。

于是，我想到了电脑角落里的一款软件——**Obsidian**！



Obsidian 是一款基于本地 Markdown 文件的双链笔记软件，官方将其定位为你的**第二大脑（A second brain, for you, forever）**，它能帮你把零散的知识点编织成一张可生长的知识网络。

Obsidian的核心文件格式是**纯文本 Markdown**，所有笔记都以 **.md** 文件的形式存储在电脑本地文件夹中。

与 Notion、语雀这类在线笔记工具不同，Obsidian **不需要联网**，你的数据完全掌握在自己手里。

（以上文本来自菜鸟教程）

Obsidian可以更方便地设置段落，文本格式，插入表格等，只需右键
![](./images/Pasted%20image%2020260819111304.avif)



# 如何使用Obsidian

## 下载安装


在Obsidian官网下载：[下载 - Obsidian](https://obsidian.md/zh/download)
（由于官网的链接指向github，可能需要加速器）


## 创建或指定一个仓库


如果你只用Obsidian撰写博客，你可以直接选择 **打开本地仓库** ，指向你博客本地文件的**posts**文件夹（之后仍可创建新的仓库）


## 创建一个博客模板


为了不在每次撰写新文章时都要输入或复制一遍笔记属性，我们可以创建一个 **博客模板** 。

**首先**，在posts目录（你的Obsidian仓库目录）下创建一个文件夹，名称随便起。

**接着**，在这个文件夹内新建一个 **.md** 文件（新建笔记）。
![](./images/Pasted%20image%2020260819113844.avif)


在新建的笔记中输入这段代码
```
---
title: {{title}}
published: {{date}}
pinned: false
description:
image:
tags:
category:
draft: false
---
```



**最后**，打开Obsidian界面左下角的 **设置** 键，单击”核心插件“的子菜单 **模板** ，单击设置图标，选择刚才创建的文件夹

这样模板就创建好了。

想要使用模板，只需在创建空白文章后，单击左菜单栏中的 **插入模板** ，选择创建的模板即可。
![](./images/Pasted%20image%2020260819115025.avif)


# 开始撰写博客


到此为止，Obsidian对我来说已经是一个不错的博客撰写工具，但Obsidian的功能远不止如此，我也是刚刚开始使用它。


本文便是我用它撰写的第一篇文章，只用于记录我的使用体验。