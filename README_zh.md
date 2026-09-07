# 赛事志愿者物资与选手名单核验工具 (Event Roster Tool)

[English](README.md) | [在线演示 / GitHub Pages](https://zhengjack88.github.io/event-roster-tool/)

一个开箱即用、轻量且支持离线运行的单文件 HTML 工具，专为马拉松、越野赛、骑行等各类体育赛事的现场志愿者物资发放、身份核对而设计。

## 核心特性

- 🚀 **单文件开箱即用**：纯前端 HTML/JS/CSS，无需部署后端或数据库，双击即可本地使用。
- 🌐 **中英双语无缝切换**：右上角一键切换中文/英文界面与表头，适应国际赛事场景。
- 🔍 **多维度即时检索**：支持按 **参赛号 (Bib)**、**姓名 (Name)**、**手机号 (Phone)**、**身份证号 (ID)** 进行模糊与精确匹配。
- 📦 **物资尺码快速统计**：支持按服装尺码（S/M/L/XL/2XL 等）快速筛选并实时统计当前展示人数。
- 🖨️ **一键打印 / 导出**：内置打印专用样式，支持一键清空重置与快捷呼出系统打印。
- 🔒 **纯本地离线隐私安全**：所有数据均在浏览器本地内存运行，绝不上传任何外部服务器。

## 快速使用

### 方式 1：在线访问
直接访问 GitHub Pages 演示站点：
👉 **[https://zhengjack88.github.io/event-roster-tool/](https://zhengjack88.github.io/event-roster-tool/)**

### 方式 2：本地离线运行
1. 下载仓库中的 `index.html`。
2. 直接双击用任意浏览器打开即可。

## 如何替换为你赛事的真实名单

用文本编辑器打开 `index.html`，定位到 `<script>` 标签中的 `const roster = [...]`，替换为您赛事的真实数据即可：

```javascript
const roster = [
  { no: "1", bib: "1001", name: "张三", phone: "13800138001", id: "110101199001011234", size: "L" },
  { no: "2", bib: "1002", name: "李四", phone: "13800138002", id: "310101199202022345", size: "M" }
];
```

## 开源协议

MIT License
