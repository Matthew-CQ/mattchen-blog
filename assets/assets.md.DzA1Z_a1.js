import{_ as i,c as n,I as e,j as s,a as l,a8 as t,D as p,o as h}from"./chunks/framework.BVyVpCZC.js";const F=JSON.parse('{"title":"静态部署","description":"","frontmatter":{},"headers":[],"relativePath":"assets.md","filePath":"assets.md","lastUpdated":1725430905000}'),r={name:"assets.md"},k=s("h1",{id:"静态部署",tabindex:"-1"},[l("静态部署 "),s("a",{class:"header-anchor",href:"#静态部署","aria-label":'Permalink to "静态部署"'},"​")],-1),d=t(`<h2 id="方式" tabindex="-1">方式 <a class="header-anchor" href="#方式" aria-label="Permalink to &quot;方式&quot;">​</a></h2><p>主要讲一下GitHub，其他的方式都大同小异，<a href="https://vitepress.dev/zh/guide/deploy" target="_blank" rel="noreferrer">更多部署方式可以参考官方文档</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>常见的静态部署方式，无论你采用哪种，都会先上传到GitHub</p></div><table tabindex="0"><thead><tr><th style="text-align:center;">名称</th><th style="text-align:center;">自定义域名</th><th style="text-align:center;">限制</th><th style="text-align:center;">缺点</th></tr></thead><tbody><tr><td style="text-align:center;"><a href="https://pages.github.com/" target="_blank" rel="noreferrer">Github page</a></td><td style="text-align:center;">支持</td><td style="text-align:center;">空间1G，100G/月</td><td style="text-align:center;">国内访问慢，百度不收录</td></tr><tr><td style="text-align:center;"><a href="https://gitee.com/help/articles/4136#article-header0" target="_blank" rel="noreferrer">Gitee Pages</a></td><td style="text-align:center;">收费</td><td style="text-align:center;">空间1G，100G/月</td><td style="text-align:center;">需实名，仓库审查</td></tr><tr><td style="text-align:center;"><a href="https://docs.gitlab.cn/jh/user/project/pages/index.html" target="_blank" rel="noreferrer">GitLab Pages</a></td><td style="text-align:center;">支持</td><td style="text-align:center;">-</td><td style="text-align:center;">国内访问慢</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><a href="https://docs.netlify.com/get-started/" target="_blank" rel="noreferrer">Netlify</a></td><td style="text-align:center;">支持</td><td style="text-align:center;">100G/月</td><td style="text-align:center;">从GitHub、GitLab、BitBucket拉取</td></tr><tr><td style="text-align:center;"><a href="https://vercel.com/docs/concepts/get-started" target="_blank" rel="noreferrer">Vercel</a></td><td style="text-align:center;">支持</td><td style="text-align:center;">100G/月</td><td style="text-align:center;">从GitHub、GitLab、BitBucket拉取</td></tr><tr><td style="text-align:center;"><a href="https://developers.cloudflare.com/pages/get-started/" target="_blank" rel="noreferrer">Cloudflare Pages</a></td><td style="text-align:center;">支持</td><td style="text-align:center;">-</td><td style="text-align:center;">从GitHub、GitLab拉取</td></tr></tbody></table><h2 id="base" tabindex="-1">Base <a class="header-anchor" href="#base" aria-label="Permalink to &quot;Base&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>base必须配置，否则打包会丢失css样式！！</p><p>根目录配置 <code>/</code>，那么对应 <code>https://yiov.github.io/</code></p><p>仓库 <code>vitepress</code> 配置 <code>/vitepress/</code> ，那么对应 <code>https://yiov.github.io/vitepress</code></p></div><p>我们根据自己的需求，选择相应的的配置</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//网站部署的路径，默认根目录</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // base: &#39;/vitepress/&#39;, //网站部署到github的vitepress这个仓库里</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>另一个要注意的点，部署到非根目录，你的 <a href="./page.html#fav图标">Fav图标路径</a> 也要变动一下</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //fav图标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head: [</span></span>
<span class="line highlighted diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;link&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{ rel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, href: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/logo.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//部署到根目录</span></span>
<span class="line highlighted diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;link&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{ rel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;icon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, href: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/vitepress/logo.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}], </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//部署到vitepress仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h2><h3 id="手动部署" tabindex="-1">手动部署 <a class="header-anchor" href="#手动部署" aria-label="Permalink to &quot;手动部署&quot;">​</a></h3><p>构建完成后，在dist文件夹上传到Github即可</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-M38_G" id="tab-XmLrWKp" checked><label data-title="pnpm" for="tab-XmLrWKp">pnpm</label><input type="radio" name="group-M38_G" id="tab-Ov98qp3"><label data-title="yarn" for="tab-Ov98qp3">yarn</label><input type="radio" name="group-M38_G" id="tab-fmPlHqP"><label data-title="npm" for="tab-fmPlHqP">npm</label><input type="radio" name="group-M38_G" id="tab-IJKTaDD"><label data-title="bun" for="tab-IJKTaDD">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div><details class="details custom-block"><summary>如果你需要本地预览，可以执行</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5n0t2" id="tab-oKhyqwm" checked><label data-title="pnpm" for="tab-oKhyqwm">pnpm</label><input type="radio" name="group-5n0t2" id="tab-WkYT6N_"><label data-title="yarn" for="tab-WkYT6N_">yarn</label><input type="radio" name="group-5n0t2" id="tab-mcBD_hB"><label data-title="npm" for="tab-mcBD_hB">npm</label><input type="radio" name="group-5n0t2" id="tab-2ur0k3b"><label data-title="bun" for="tab-2ur0k3b">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div></div></details><p>默认的构建输出目录 <code>.vitepress/dist</code> ，将生成的所有文件上传到 Github 即可</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>如果你还不会使用，请参考教程：<a href="https://yiov.top/website/pages/github.html" target="_blank" rel="noreferrer">Github的注册使用到上传</a></p></div><p>上传成功后，在GitHub仓库 - 设置 - page里把分支改成main，默认root，保存</p><p>等创建成功后即可获得访问链接</p><h3 id="自动部署-推荐" tabindex="-1">自动部署（推荐） <a class="header-anchor" href="#自动部署-推荐" aria-label="Permalink to &quot;自动部署（推荐）&quot;">​</a></h3><ul><li><p><a href="https://vercel.com/docs/concepts/get-started" target="_blank" rel="noreferrer">Vercel</a> ：非常推荐，可以参考 <a href="https://yiov.top/website/pages/vercel.html" target="_blank" rel="noreferrer">Vercel注册到部署</a></p></li><li><p>Github Actions 工作流</p></li></ul><details class="details custom-block"><summary>点我查看 Github Actions 工作流步骤</summary><p>在仓库 <code>Actions</code> 里新建一个工作流 中创建一个 <code>deploy.yml</code> 脚本文件</p><p>每次你更新代码后，系统会自动给你打包上传并部署</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>名字可以自定义，不用非得用 <code>deploy</code> ，只要下面配置名和这个一致就行</p><p>分支默认是 <code>main</code></p></div><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 构建 VitePress 站点并将其部署到 GitHub Pages 的示例工作流程</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 在针对 \`main\` 分支的推送上运行。如果你</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 使用 \`master\` 分支作为默认分支，请将其更改为 \`master\`</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line highlighted"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 允许你从 Actions 选项卡手动运行此工作流程</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置 GITHUB_TOKEN 的权限，以允许部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只允许同时进行一次部署，跳过正在运行和最新队列之间的运行队列</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 但是，不要取消正在进行的运行，因为我们希望允许这些生产部署完成</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 构建工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 如果未启用 lastUpdated，则不需要</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: pnpm/action-setup@v2 # 如果使用 pnpm，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: oven-sh/setup-bun@v1 # 如果使用 Bun，请取消注释</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm ci</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 或 pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          npm run docs:build # 或 pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 部署工作</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div></details>`,22);function c(b,E,g,o,u,y){const a=p("ArticleMetadata");return h(),n("div",null,[k,e(a),d])}const v=i(r,[["render",c]]);export{F as __pageData,v as default};
