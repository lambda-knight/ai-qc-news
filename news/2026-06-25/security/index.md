---
title: "セキュリティニュース 2026-06-25"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-25

**2026-06-25 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-25-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-25-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-25</h1>
<h2>Operation Endgame拡大：AmedeyとStealCのインフラ壊滅・2700万件の認証情報を回収</h2>
<ul>
<li>Europol・Microsoft・ESET・Bitdefenderなどが共同で「Operation Endgame」の追加作戦を実施し、マルウェア「Amadey」と「StealC」の配布インフラを完全停止させた</li>
<li>今回の作戦ではランサムウェア・金融詐欺・重要インフラ攻撃の「製造ライン」となっていた2700万件以上の盗難認証情報を押収・回収することに成功した</li>
<li>Amadeyはローダー型マルウェア、StealCは情報窃取ツールとして世界中のサイバー犯罪者が愛用しており、これらのサービスが停止することで連鎖的な攻撃が大幅に抑制される見込み</li>
</ul>
<h2>Cordyceps：CI/CDワークフローの欠陥でGitHubリポジトリ300件以上がサプライチェーン攻撃に晒される</h2>
<ul>
<li>セキュリティ研究企業Novee Securityが「Cordyceps」と命名した新たなCI/CDワークフローの脆弱性クラスを発見し、攻撃者がワークフローを乗っ取ってオープンソースのサプライチェーンを侵害できることを実証した</li>
<li>Microsoft・Google・Apache など世界最大規模の組織を含む数十社の300以上のGitHubリポジトリが、このパターンによる完全な攻撃者コントロールにさらされていることが確認された</li>
<li>CI/CDパイプラインでプルリクエスト時に権限の高いトークンを適切に保護しないワークフロー設定が根本原因で、依存するすべてのプロジェクト利用者にも影響が波及するリスクがある</li>
</ul>
<h2>フェイクAIエージェントスキルがスキャン全通過・2.6万エージェントに感染拡大</h2>
<ul>
<li>セキュリティ企業AIRが実験として悪意あるフェイクAIエージェントスキルを作成し、スキルマーケットプレイスとInstagram広告で配布したところ、テストした全てのスキルセキュリティスキャナーが「安全」と判定した</li>
<li>このフェイクスキルは企業アカウントを含む約2万6000件のAIエージェントに到達し、スキルエコシステムのセキュリティ検証の穴を実証した（今回はメールアドレス収集のみで実害なし）</li>
<li>AIエージェントが外部スキルを自動的にインストール・実行する仕組みが普及する中、悪意あるスキルを見分ける有効な手段が現時点では存在しないことが明らかになった</li>
</ul>
<h2>Cisco Unified CM CVE-2026-20230：PoC公開直後から実攻撃が多発</h2>
<ul>
<li>Cisco Unified Communications Manager（Unified CM）に存在するCVSSスコア8.6の高危険度脆弱性CVE-2026-20230が、概念実証コード（PoC）の公開を受けてただちに実攻撃に悪用され始めた</li>
<li>脆弱性の内容は特定のHTTPリクエストに対する不適切な入力検証（SSRF＝サーバーサイドリクエストフォージェリ）で、認証なしのリモート攻撃者がファイル書き込み操作を経由してroot権限を取得できる</li>
<li>企業の音声・ビデオ通信の中枢を担うUnified CMは世界中で広く使用されており、未パッチシステムはただちにアップデートを適用するよう警告されている</li>
</ul>
<h2>MisticバックドアとKongTuke：保険・教育・ITを狙うランサムウェアの新たな侵入経路</h2>
<ul>
<li>金銭目的の攻撃グループが使用する新種バックドア「Mistic」が発見され、保険・教育・IT・専門サービス分野の組織を標的にした攻撃で観測されている</li>
<li>MisticはランサムウェアのInitial Access Broker（初期侵入仲介業者）「KongTuke」と連携して動作し、ステルス性が高く長期間検出を回避しながら内部偵察を行う設計となっている</li>
<li>KongTukeは侵害したネットワークへのアクセス権を他のランサムウェアグループに販売するビジネスモデルで動いており、Misticによる足がかり確保から身代金要求までの「攻撃の工業化」が進んでいる</li>
</ul>
<h2>「Edgecution」：Microsoft Edge拡張機能を悪用してブラウザサンドボックスを脱出・ランサムウェアを投下</h2>
<ul>
<li>悪意あるMicrosoft Edge拡張機能「Edgecution」がランサムウェア攻撃で使用され、ブラウザの「Native Messaging」機能を橋渡しにしてサンドボックスを脱出し、Pythonベースのバックドアを端末に展開することが確認された</li>
<li>Native Messagingはブラウザ拡張機能がローカルアプリケーションと通信するための正規機能だが、これを悪用することでブラウザ内の制限をすり抜けてOSレベルへの攻撃が可能になる</li>
<li>企業環境では従業員が業務でEdgeを使用するケースが多く、拡張機能のインストールポリシー管理と許可リストの整備が急務とされている</li>
</ul>
<h2>司法省がHuiOneグループのクラウドアカウントを押収・詐欺マネーロンダリング9個人・26団体に制裁</h2>
<ul>
<li>米司法省（DoJ）はカンボジアを拠点とする大手複合企業HuiOneグループの子会社が使用するクラウドコンピューティングアカウントを押収し、同時に財務省がPrince Groupに関連する9個人・26団体への新たな制裁を発動した</li>
<li>HuiOneの子会社はサイバー詐欺（豚の屠殺詐欺・ロマンス詐欺など）の被害収益を移転・洗浄する資金移動サービスを提供していたとされ、詐欺師たちの資金洗浄インフラとして機能していた</li>
<li>東南アジアを拠点とするサイバー詐欺グループの資金インフラへの国際的な法執行の手が及んだことで、世界規模での詐欺被害抑制につながることが期待されている</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://thehackernews.com/2026/06/amadey-and-stealc-malware-network.html">Amadey and StealC Malware Network Disrupted, 27M Stolen Credentials Recovered</a> - The Hacker News</li>
<li><a href="https://www.bleepingcomputer.com/news/security/amadey-stealc-malware-operations-disrupted-in-operation-endgame-action/">Amadey, StealC malware operations disrupted in Operation Endgame action</a> - Bleeping Computer</li>
<li><a href="https://thehackernews.com/2026/06/cordyceps-cicd-flaws-expose-300-github.html">Cordyceps CI/CD Flaws Expose 300+ GitHub Repositories to Supply-Chain Attacks</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/fake-ai-agent-skill-passed-security.html">Fake AI Agent Skill Passed Security Scans and Reportedly Reached 26,000 Agents</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/cisco-unified-cm-flaw-exploited-after.html">Cisco Unified CM Flaw Exploited After PoC Reveals File-Write Path to Root</a> - The Hacker News</li>
<li><a href="https://www.bleepingcomputer.com/news/security/cisco-unified-cm-flaw-cve-2026-20230-now-exploited-in-attacks/">Cisco Unified CM flaw CVE-2026-20230 now exploited in attacks</a> - Bleeping Computer</li>
<li><a href="https://www.bleepingcomputer.com/news/security/stealthy-mistic-backdoor-linked-to-ransomware-access-broker-kongtuke/">Stealthy Mistic backdoor linked to ransomware access broker KongTuke</a> - Bleeping Computer</li>
<li><a href="https://www.bleepingcomputer.com/news/security/malicious-edge-extension-abuses-native-messaging-as-bridge-to-malware/">Malicious Edge extension abuses Native Messaging as bridge to malware</a> - Bleeping Computer</li>
<li><a href="https://thehackernews.com/2026/06/doj-seizes-huione-cloud-account-tied-to.html">DoJ Seizes Huione Cloud Account Tied to Cyber Scam Money Laundering</a> - The Hacker News</li>
</ul>

</details>

---

[← 2026-06-25 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
