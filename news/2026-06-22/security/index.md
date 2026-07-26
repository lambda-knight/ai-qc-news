---
title: "サイバーセキュリティニュース 2026年6月22日｜上場企業がボットネット関与・Apple修正不能脆弱性・AIエージェント乗っ取り攻撃"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# サイバーセキュリティニュース 2026年6月22日｜上場企業がボットネット関与・Apple修正不能脆弱性・AIエージェント乗っ取り攻撃

**2026-06-22 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-22-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-22-security)

---

## 概要

今週のサイバーセキュリティニュースをずんだもん＆四国めたんがわかりやすく解説！

📌 今日のトピック
・「Popaボットネット」：ナスダック上場企業が4年間ボットネットに関与
・「The Gentlemen」ランサムウェア：被害数世界2位に急浮上、EDR無効化ツール「GentleKiller」
・Kimwolfボットマスター逮捕：IoTボットネット運営の23歳、米加で刑事訴追
・修正不能な脆弱性「usbliter8」：Apple A12・A13チップのSecureROMに欠陥
・「AutoJack」攻撃：AIブラウジングエージェントを乗っ取りリモートコード実行
・Klue OAuthインシデント：Salesforce連携トークン窃取、新興グループIcarusが関与
・6月24日締め切り：WindowsとLinuxのセキュアブート署名の暗号鍵が期限切れ
・トレンドマイクロ製品（TrendAI Apex One等）に複数の脆弱性：JPCERT/CC注意喚起

📚 参考ソース
・Krebs on Security: https://krebsonsecurity.com/
・The Hacker News: https://thehackernews.com/
・Bleeping Computer: https://www.bleepingcomputer.com/
・Wired Security: https://www.wired.com/category/security/
・JPCERT/CC: https://www.jpcert.or.jp/

#サイバーセキュリティ #セキュリティ #脆弱性 #ゆっくり解説 #ずんだもん #ランサムウェア #ボットネット #iPhone #Windows #情報セキュリティ

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>サイバーセキュリティニュース 2026年6月22日</h1>
<p>上場企業がボットネットに関与、修正不能なAppleチップの脆弱性、AIエージェント乗っ取り攻撃など、今週も衝撃のセキュリティニュースが相次ぎました。</p>
<h2>「Popaボットネット」：上場企業の住宅プロキシサービスが4年間にわたり悪用</h2>
<ul>
<li>Androidベースのボットネット「Popa」が4年間にわたって数百万台の家庭用テレビボックスを乗っ取り、広告詐欺・アカウント乗っ取り・大規模データスクレイピングに悪用</li>
<li>複数のセキュリティ会社の調査で、このボットネットがナスダック上場のイスラエル企業 <strong>Alarum Technologies（ALAR）</strong> 傘下の「NetNut」という住宅プロキシサービスに繋がると判明</li>
<li>住宅プロキシとは：家庭のIPアドレスを「中継地点」として利用する仕組み。ウェブサービスからは一般家庭の利用者に見えるため、詐欺や不正アクセスの隠れ蓑になりやすい</li>
<li>上場企業がこうした悪用可能なインフラを運営していたことに批判が集中</li>
<li>一般への影響：自宅のルーターやAndroidデバイスが知らない間に犯罪インフラに組み込まれていた可能性</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/">Krebs on Security</a> (2026/06/21)</p>
<h2>「The Gentlemen」ランサムウェア：被害数世界2位に急浮上、EDR無効化ツール「GentleKiller」を配布</h2>
<ul>
<li>「The Gentlemen」と名乗るランサムウェアグループが被害者数ベースで世界2位の最活発グループに急浮上</li>
<li>身代金の90%をアフィリエイト（実行犯）に還元する高報酬戦略で優秀なハッカーを積極募集</li>
<li><strong>GentleKiller</strong>と呼ばれるEDR（エンドポイント検知・対応）無効化フレームワークをアフィリエイトに配布。400以上のセキュリティ関連プロセスを強制終了できる</li>
<li>ランサムウェアを展開する前に、まずセキュリティソフトを無力化する高度な手口</li>
<li>Krebs on Security の調査により、グループ管理者の実在の身元に繋がる手がかりが判明しつつある</li>
<li>日本企業も標的になりうるため、多層防御・定期バックアップが重要</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/06/who-runs-the-ransomware-group-the-gentlemen/">Krebs on Security</a> / <a href="https://thehackernews.com/2026/06/the-gentlemen-raas-uses-gentlekiller.html">The Hacker News</a> (2026/06/21)</p>
<h2>Kimwolfボットマスター「Dort」逮捕：IoTボットネットで大規模DDoSを実行</h2>
<ul>
<li>カナダのオタワ在住の23歳男性が、IoT（スマート家電等）ボットネット「Kimwolf」の構築・運営容疑で逮捕</li>
<li>Kimwolfは過去6ヶ月で数百万台のデバイスを乗っ取り、複数の大規模DDoS攻撃（サービス妨害攻撃）を実行</li>
<li>容疑者は2026年2月にKrebs on Securityがその名前を公表した後、同サイトの記者と研究者に対してDDoS攻撃・個人情報晒し（doxxing）・警察偽装通報（swatting）を仕掛けていた</li>
<li>現在、カナダと米国の両国でハッキング罪の刑事訴追に直面</li>
<li>IoTデバイス（ルーター、監視カメラ等）のファームウェアを最新状態に保つことが感染防止の基本</li>
</ul>
<p>出典: <a href="https://krebsonsecurity.com/2026/05/alleged-kimwolf-botmaster-dort-arrested-charged-in-u-s-and-canada/">Krebs on Security</a> (2026/06/19)</p>
<h2>修正不能な脆弱性「usbliter8」：Apple A12・A13チップのSecureROMに欠陥</h2>
<ul>
<li>セキュリティ研究グループ「Paradigm Shift」が、AppleのA12・A13チップに焼き込まれた <strong>SecureROM</strong>（起動時の信頼の基点）で任意コードを実行できる脆弱性「usbliter8」を公開</li>
<li><strong>SecureROMはシリコンに直接書き込まれているため、ソフトウェアアップデートでは修正不可能</strong>。対象デバイスは廃棄されるまでこの脆弱性を抱え続ける</li>
<li>対象デバイス：A12チップ搭載のiPhone XS/XR（2018年）、A13チップ搭載のiPhone 11シリーズ（2019年）など</li>
<li>重要な注意点：リモート攻撃ではなく、デバイスへの物理的接続が必要。そのため一般ユーザーへの即時リスクは限定的</li>
<li>ただし紛失・盗難時のリスクが高まるため、iPhoneを人に貸したり放置しないよう注意が必要</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/unpatchable-usbliter8-exploit-breaks.html">The Hacker News</a> (2026/06/20)</p>
<h2>「AutoJack」攻撃：AIブラウジングエージェントを乗っ取りリモートコード実行</h2>
<ul>
<li>Microsoftの研究者が「AutoJack」と名付けたエクスプロイトチェーンを詳細に公開</li>
<li>AIブラウジングエージェント（ウェブ閲覧を自動化するAI）が攻撃者のウェブページを読み込んだだけで、そのページのJavaScriptがホストPC上でプロセスを起動できてしまう</li>
<li>認証情報や追加のユーザー操作は不要。エージェントがページを開いた瞬間に乗っ取りが始まる</li>
<li>AI自動化ツールを業務で使っている企業・開発者は特に注意が必要</li>
<li>AIエージェントに最小権限（必要最低限のアクセス権）を与えることがリスク低減の鍵</li>
</ul>
<p>出典: <a href="https://thehackernews.com/2026/06/autojack-attack-lets-one-web-page.html">The Hacker News</a> (2026/06/20)</p>
<h2>KlueのOAuth侵害拡大：新興グループ「Icarus」がSalesforce連携トークンを窃取</h2>
<ul>
<li>マーケットインテリジェンス企業「Klue」が、顧客の<strong>Salesforce環境</strong>に接続するためのOAuthトークン（認証の鍵）が盗まれたと正式発表</li>
<li>新興の恐喝グループ「Icarus」がこの攻撃を主張。被害を受けた顧客企業の数は拡大中</li>
<li>OAuthトークンとはパスワードの代わりに使われる「認証チケット」。これが盗まれると攻撃者はパスワードなしに企業データベースにアクセスできる</li>
<li>SaaSサービス間連携のセキュリティ管理（発行済みトークンの定期棚卸し・失効）の重要性を改めて示す事例</li>
</ul>
<p>出典: <a href="https://www.bleepingcomputer.com/news/security/klue-oauth-breach-victim-list-grows-as-icarus-hackers-claim-attack/">Bleeping Computer</a> (2026/06/21)</p>
<h2>6月24日締め切り：WindowsとLinuxのセキュアブート署名の暗号鍵が期限切れ</h2>
<ul>
<li>PCを安全に起動するための仕組み「セキュアブート」で使われる暗号化鍵（証明書）の一部が <strong>2026年6月24日</strong>に期限切れを迎える</li>
<li>対象：特定のWindowsおよびLinuxシステム。期限切れ後も即座に起動できなくなるわけではないが、セキュリティ上のリスクが生じる</li>
<li>Microsoftはアップデートを提供済み。<strong>Windows Updateを適用済みであれば対応完了</strong></li>
<li>Linux使用者は利用ディストリビューションの最新情報を確認する必要がある</li>
<li>一般Windows利用者への対策：「設定→更新とセキュリティ→Windows Update」で最新状態に保つ</li>
</ul>
<p>出典: <a href="https://www.wired.com/story/a-critical-deadline-is-approaching-for-windows-and-linux-security/">Wired</a> (2026/06/21)</p>
<h2>トレンドマイクロ製品（TrendAI Apex One等）に複数の脆弱性：JPCERT/CC注意喚起</h2>
<ul>
<li>JPCERT/CCが <strong>TrendAI Apex One</strong>など複数のトレンドマイクロ製品に存在する脆弱性について緊急注意喚起を発出</li>
<li>権限昇格・任意コード実行・情報漏洩などの深刻な脆弱性を含む</li>
<li>対象製品を業務で使用している企業・組織は、トレンドマイクロが公開した修正パッチを直ちに適用する必要がある</li>
<li>セキュリティ製品自体が攻撃の入口になりうる点に注意。パッチ適用の優先度は最高</li>
</ul>
<p>出典: <a href="https://www.jpcert.or.jp/">JPCERT/CC</a> (2026/06/18)</p>
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

[← 2026-06-22 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
