---
title: "セキュリティニュース 2026-06-26"
layout: default
---

<script>
MathJax = { tex: { inlineMath: [['$','$'],['\\(','\\)']], displayMath: [['$$','$$'],['\\[','\\]']], processEscapes: true } };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js" async></script>

# セキュリティニュース 2026-06-26

**2026-06-26 / セキュリティニュース**

<audio controls src="https://archive.org/download/news-pickup-2026-06-26-security/security_yukkuri.m4a" style="width:100%;margin-top:4px"></audio>

- [Internet Archive](https://archive.org/details/news-pickup-2026-06-26-security)

---

<details>
<summary>スライド（クリックで展開）</summary>

<h1>セキュリティニュース 2026-06-26</h1>
<h2>Scattered Spider、ロンドン交通局攻撃で裁判初日に有罪認否</h2>
<ul>
<li>ロンドン交通局（TfL）を2024年8月に麻痺させたサイバー攻撃に関わったとして英国で起訴された2名が、6週間の審理を予定していた裁判の初日に有罪を認めた</li>
<li>2人はハッカー集団「Scattered Spider（スキャッタード・スパイダー）」の主要メンバーで、TfL攻撃により数万人の乗客データが漏洩し、交通機関のシステムが長期間混乱した</li>
<li>Scattered Spiderは10代〜20代前半の英語話者で構成される犯罪グループで、ソーシャルエンジニアリング（人を騙す心理的手口）と多要素認証回避を得意とし、過去にMGMリゾーツやCesars Entertainmentへの攻撃でも知られている</li>
</ul>
<h2>Popa ボットネット：上場企業が運営か・テレビボックス数百万台を乗っ取り</h2>
<ul>
<li>Androidベースのボットネット（多数のデバイスを乗っ取って遠隠的に操るネットワーク）「Popa」が4年間にわたりコンシューマー向けテレビボックス数百万台を支配し、広告詐欺・アカウント乗っ取り・大規模データスクレイピングに悪用されていたことが判明した</li>
<li>複数のセキュリティ企業の調査により、Popaボットネットはナスダック上場のイスラエル企業Alarum Technologies（ALAR）が運営する「住宅プロキシ」サービスNetNutと関連していることが明らかになった</li>
<li>住宅プロキシとは一般家庭のデバイスをサーバーの中継点として使うサービスで、これにより攻撃者の通信が一般ユーザーのIPアドレスに偽装される仕組みだ</li>
</ul>
<h2>「The Gentlemen」ランサムウェア：被害者数で世界2位の新興犯罪集団</h2>
<ul>
<li>ランサムウェア（身代金要求型ウイルス）集団「The Gentlemen（ジェントルメン）」が被害者数で世界2位に急浮上し、KrebsOnSecurityが管理者の実際の身元に迫る手がかりを公開した</li>
<li>アフィリエイト（下請け攻撃者）に身代金の90%という異例の高率取り分を提供する戦略で優秀なハッカーを積極的に引き寄せ、短期間で組織規模を拡大した</li>
<li>身代金要求時にはダークウェブ（通常の検索エンジンに現れない秘密ネットワーク）上に被害企業のデータを公開すると脅す「二重恐喝」手口を採用している</li>
</ul>
<h2>MetaのAIサポートボットを騙してInstagramアカウントを乗っ取り</h2>
<ul>
<li>TelegramでMetaの「AIサポートアシスタント」ボットを騙してアカウントのパスワードをリセットさせる手順が出回り、オバマ政権ホワイトハウスや米宇宙軍最上位下士官のInstagramアカウントが一時的にイラン支持勢力によって改ざんされた</li>
<li>攻撃者はMetaのAIアシスタントにソーシャルエンジニアリングを仕掛け、本来は保護されているアカウントリカバリー機能を悪用してパスワードリセットを誘導する手口を使用した</li>
<li>AIカスタマーサポートの普及に伴い、AIを騙してセキュリティを回避する「プロンプトインジェクション（AIへの不正命令注入）」攻撃が実害を伴う脅威として現実化していることを示す事例となった</li>
</ul>
<h2>Gaslight：AIマルウェア解析ツールを欺く新種macOSマルウェア</h2>
<ul>
<li>Rustで書かれた新種のmacOS向けマルウェア「Gaslight（ガスライト）」が発見され、マルウェア解析者が使うAIツールに対してプロンプトインジェクションを仕掛け、解析を中止させたり誤った判断を引き起こしたりする異例の機能を持つ</li>
<li>Gaslightは情報窃取機能（認証情報・ファイル等を盗む）と合わせて、実行ファイル内に偽のデバッグデータやAIへの不正命令文字列を埋め込み、セキュリティ研究者の解析を意図的に妨害する</li>
<li>マルウェアがAI解析ツールを逆用する「AIに対する攻撃」という新たな攻撃カテゴリが出現しており、セキュリティツール側のAI実装にも耐プロンプトインジェクション対策が求められる</li>
</ul>
<h2>Cisco Catalyst SD-WAN ゼロデイ：公表2ヶ月前から悪用されていた</h2>
<ul>
<li>Cisco Catalyst SD-WAN（ソフトウェア定義型広域ネットワーク）に存在するCVSSスコア7.8の高危険度脆弱性CVE-2026-20245が、Mandiantの調査により公式パッチの少なくとも2ヶ月前からゼロデイ（未修正の脆弱性）として実際の攻撃に使われていたことが判明した</li>
<li>認証済みのローカル攻撃者が任意のコマンドをroot（最高権限）で実行できる脆弱性で、企業ネットワークを統括するSD-WAN機器が対象となることから影響範囲は極めて広い</li>
<li>ゼロデイとして2ヶ月間悪用されていた事実は、パッチ公開を待つ従来の対応では不十分であり、行動ベースの異常検知やゼロトラスト（常に認証・検証する）アーキテクチャの重要性を再確認させる</li>
</ul>
<h2>6月パッチチューズデー：Microsoftが約200件の脆弱性を修正・記録更新</h2>
<ul>
<li>Microsoftが月例セキュリティ更新（パッチチューズデー）として約200件の脆弱性を修正するパッチをリリースし、これは同社の月例修正件数として過去最大記録を更新した</li>
<li>修正対象のうち約30件以上が「クリティカル（緊急）」評価を受けており、少なくとも3件については悪意ある攻撃者が利用可能な概念実証コード（PoC）がすでに公開されている</li>
<li>WindowsのすべてのサポートバージョンとOffice・Edgeなど主要ソフトウェアが対象で、未適用のシステムは即時更新が推奨されている</li>
</ul>
<h2>参考ソース</h2>
<ul>
<li><a href="https://krebsonsecurity.com/2026/06/scattered-spider-hackers-plead-guilty-on-day-1-of-trial/">Scattered Spider Hackers Plead Guilty on Day 1 of Trial</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/popa-botnet-linked-to-publicly-traded-israeli-firm/">'Popa' Botnet Linked to Publicly-Traded Israeli Firm</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/who-runs-the-ransomware-group-the-gentlemen/">Who Runs the Ransomware Group 'The Gentlemen?'</a> - Krebs on Security</li>
<li><a href="https://krebsonsecurity.com/2026/06/hackers-used-metas-ai-support-bot-to-seize-instagram-accounts/">Hackers Used Meta's AI Support Bot to Seize Instagram Accounts</a> - Krebs on Security</li>
<li><a href="https://thehackernews.com/2026/06/new-gaslight-macos-malware-uses-prompt.html">New Gaslight macOS Malware Uses Prompt Injection to Disrupt AI-Assisted Analysis</a> - The Hacker News</li>
<li><a href="https://thehackernews.com/2026/06/cisco-catalyst-sd-wan-zero-day-cve-2026.html">Cisco Catalyst SD-WAN Zero-Day CVE-2026-20245 Exploited to Gain Root Access</a> - The Hacker News</li>
<li><a href="https://krebsonsecurity.com/2026/06/a-record-breaking-patch-tuesday-for-june-2026/">A Record-Breaking Patch Tuesday for June 2026</a> - Krebs on Security</li>
</ul>

</details>

---

[← 2026-06-26 の一覧に戻る](../)

---

*音声合成: [VOICEVOX](https://voicevox.hiroshiba.jp/) / キャラクター: [ずんだもん](https://zunko.jp/) ・ [四国めたん](https://zunko.jp/)*
