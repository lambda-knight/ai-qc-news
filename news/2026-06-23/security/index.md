---
title: "セキュリティニュース 2026-06-23"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-23

**2026-06-23 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-23-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-23-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>サイバーセキュリティニュース 2026年6月23日</h1>
<p>オランダ当局によるロシア支援サーバー800台摘発、WordPress大規模サプライチェーン攻撃、AI基盤「Dify」の脆弱性、FFmpegの新欠陥「PixelSmash」など、今週も注目のセキュリティニュースをお届けします。</p>
<h2>オランダ当局がサーバー800台を押収・2名逮捕：ロシアのサイバー攻撃・偽情報工作に加担</h2>
<ul>
<li>オランダ当局が、ロシアのサイバー攻撃・影響工作・マネーロンダリングに使われていたホスティング会社2社の共同経営者2名を逮捕し、サーバー800台以上を押収</li>
<li>この2社は「防弾ホスティング」と呼ばれる手口で、犯罪者が使う不正サーバーを当局の要請にも応じずに運営し続けていた</li>
<li>ロシア国家が関与するAPTグループ（高度なサイバー攻撃集団）もこのインフラを活用していたとみられる</li>
<li>防弾ホスティングとは：サービス停止要請を無視して犯罪者に貸し続けるサーバー業者のこと。犯罪インフラの温床になっている</li>
<li>国際協調による摘発で、サイバー犯罪インフラへの圧力が高まっている</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/netherlands-seizes-800-servers-arrests-2-for-aiding-cyberattacks/">Krebs on Security</a> (2026/06/22)</p>
<h2>WordPressプラグイン「ShapedPlugin」にバックドア：サプライチェーン攻撃で数万サイトに影響</h2>
<ul>
<li>WordPressの人気プラグインを複数開発する「ShapedPlugin」社の製品が、サプライチェーン攻撃（供給経路への不正介入）によりバックドア（不正な裏口）を埋め込まれた</li>
<li>攻撃者は公式の配布経路（WordPress.orgのプラグインリポジトリ）を改ざんし、悪意あるコードを混入</li>
<li>バックドアが有効化されると、攻撃者がWordPressサイトを遠隔操作できる状態になる</li>
<li>対象プラグインを使用しているサイト管理者はただちに最新版への更新と不審なファイルの確認が必要</li>
<li>WordPressサイトは世界中のウェブの約43%を占めるため、サプライチェーン攻撃の影響が極めて広範になりうる</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/shapedplugin-wordpress-pro-plugins-backdoored.html">The Hacker News</a> (2026/06/22)</p>
<h2>AI基盤「Dify」に4つの脆弱性「DifyTap」：他テナントのAIチャット内容が見えてしまう欠陥</h2>
<ul>
<li>GitHubスター数14.6万以上のオープンソースAIエージェント基盤「Dify」に、4つの脆弱性（DifyTap）が発見された</li>
<li>悪意あるユーザーが別のテナント（他の企業・チーム）のAIチャット履歴や機密設定に密かにアクセスできてしまう欠陥</li>
<li>テナント分離（テナントとは：サービスを利用する各組織のこと）の不備が根本原因</li>
<li>AIツールをチームや組織で共有運用している場合、競合他社や外部攻撃者に会話内容が漏れるリスクがある</li>
<li>Dify利用者はすぐにバージョンアップを確認し、最新版へ移行することが推奨される</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/researchers-detail-diftap-flaws-in-dify.html">The Hacker News</a> (2026/06/22)</p>
<h2>FFmpegに「PixelSmash」脆弱性：Jellfinサーバーでリモートコード実行の恐れ</h2>
<ul>
<li>世界中で使われている動画処理ライブラリ「FFmpeg」に「PixelSmash」と名付けられた脆弱性が発覚</li>
<li>ホームメディアサーバー「Jellyfin」など、FFmpegを組み込んだアプリでリモートコード実行（攻撃者が外部からコマンドを実行できる状態）が可能になるケースがある</li>
<li>悪意ある動画ファイルを処理させるだけで、サーバーが乗っ取られる可能性がある</li>
<li>Jellyfin・Plex等のセルフホスト型メディアサーバーを使っているユーザーは、FFmpegおよびサーバーアプリの更新を早急に適用する必要がある</li>
<li>FFmpegの修正版はすでに公開済み</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/ffmpeg-fixes-pixelsmash-flaw-in-widely-used-video-decoder/">Bleeping Computer</a> (2026/06/22)</p>
<h2>「FortiBleed」詳細判明：カスタム盗聴ツールで認証情報を大量窃取</h2>
<ul>
<li>FortinetのFortiGate（企業向けファイアウォール）を狙う「FortiBleed」キャンペーンの詳細が明らかになった</li>
<li>攻撃者はカスタム製の「スニファ（通信盗聴ツール）」を侵入済みのFirewallに仕込み、認証情報（IDやパスワード等の秘密情報）を継続的に抜き取っていた</li>
<li>攻撃は世界規模で展開されており、日本企業が使う FortiGate も対象</li>
<li>6月21日に取り上げた脆弱性そのものに加え、実際の攻撃手法の詳細が新たに判明した点が重要</li>
<li>FortiGate利用中の企業はログを詳細に確認し、不審な通信がないか調査することが急務</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/fortibleed-campaign-used-custom-fortigate-sniffer-to-steal-credentials/">Bleeping Computer</a> (2026/06/22)</p>
<h2>新手ランサムウェア「Prinz Eugen」：身代金メモなし・最近のファイルを優先暗号化</h2>
<ul>
<li>「Prinz Eugen」と名付けられた新しいランサムウェア（身代金要求型ウイルス）が登場</li>
<li>従来のランサムウェアと異なり、<strong>身代金要求メモ（ransom note）をシステムに残さない</strong>という特異な挙動を持つ</li>
<li>最近更新されたファイルを優先的に暗号化する設計で、日常業務のデータを標的にする</li>
<li>身代金メモがないため感染に気づきにくく、被害拡大後に発覚するリスクがある</li>
<li>バックアップ（複数世代・オフライン保存）の重要性が改めて浮き彫りに</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/new-prinz-eugen-ransomware-prioritizes-recent-files-for-encryption/">Bleeping Computer</a> (2026/06/22)</p>
<h2>カナダ諜報機関が「前例なき令状」でボットネット感染デバイスを遠隔除染</h2>
<ul>
<li>カナダ安全保障情報局（CSIS）が、裁判所の許可を得て感染したサーバー・家庭用ルーター・IoT機器に直接リモートアクセスし、外国が運営する2つのボットネットを無力化した</li>
<li>ボットネット（乗っ取られたデバイスの集合体）をインフラごと無効化する「前例のない令状」を使用</li>
<li>プライバシーと安全保障のバランスをとりながら、民間のデバイスを当局が遠隔操作した初のケースとして注目される</li>
<li>感染デバイスの所有者（一般家庭を含む）への通知は行われた</li>
<li>各国政府によるボットネット対策が積極化しており、日本でもサイバー防衛法整備の議論が進んでいる</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/canadas-spy-agency-used-first-of-its-kind-warrant.html">The Hacker News</a> (2026/06/22)</p>
<h2>参考ソース</h2>
<ul>
<li>Krebs on Security https://krebsonsecurity.com/</li>
<li>The Hacker News https://thehackernews.com/</li>
<li>Bleeping Computer https://www.bleepingcomputer.com/</li>
<li>Wired Security https://www.wired.com/category/security/</li>
<li>JPCERT/CC https://www.jpcert.or.jp/</li>
</ul>

</details>

---

[← 2026-06-23 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
